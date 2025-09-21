import { ref, computed } from 'vue';
import initialCompanies from './companies.json';
import initialJobs from './jobs.json';
import initialCandidates from './candidates.json';
import initialAdmins from './admin.json'; 


const companies = ref(initialCompanies);
const jobs = ref(initialJobs);
const candidates = ref(initialCandidates);
const admins = ref(initialAdmins); 
const applications = ref([]);


export function authenticateUser(username, password) {

  const admin = admins.value.find(a => a.username === username && a.password === password);
  if (admin) {
    return { id: admin.id, role: admin.role, name: admin.username, isAdmin: true };
  }


  const candidate = candidates.value.find(c => c.candidate_id === username && c.last_name === password);
  if (candidate) {
    return { id: candidate.candidate_id, role: 'candidate', name: candidate.first_name, isAdmin: false };
  }

  return null; 
}


export function getOpenJobs() {
  return computed(() => jobs.value
    .filter(job => job.status === 'open')
    .map(job => ({ ...job, company: companies.value.find(c => c.company_id === job.company_id) }))
    .sort((a, b) => a.title.localeCompare(b.title))
  );
}

export function getJobById(jobId) {
  const job = jobs.value.find(j => j.job_id === jobId);
  if (job) {
    return { ...job, company: companies.value.find(c => c.company_id === job.company_id) };
  }
  return null;
}

export function getCandidateById(candidateId) {
  return candidates.value.find(c => c.candidate_id === candidateId);
}

export function createApplication(applicationData) {
  applications.value.push(applicationData);
  console.log("Current Applications:", applications.value);
}