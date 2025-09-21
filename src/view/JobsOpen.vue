<template>
  <div>
    <h2>Open Positions</h2>
    <div class="job-list" v-if="jobs.length"> 
      <div v-for="job in jobs" :key="job.job_id" class="job-card">
        <h3>{{ job.title }}</h3>
        <p><strong>Company:</strong> {{ job.company.name }}</p>
        <p><strong>Type:</strong> <span class="tag">{{ job.type }}</span></p>
        <p><strong>Description:</strong> {{ job.description }}</p>
        <p><strong>Deadline:</strong> {{ new Date(job.deadline).toLocaleDateString() }}</p>
        <button @click="applyForJob(job.job_id)">Apply Now</button>
      </div>
    </div>
    <div v-else>
      <p>No open positions at the moment.</p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getOpenJobs } from '../data/store.js';

const router = useRouter();

const jobs = getOpenJobs();

const applyForJob = (jobId) => {
  router.push(`/apply/${jobId}`);
};
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

button:active {
  background-color: #003f7f;
  transform: scale(0.95);
}
</style>
