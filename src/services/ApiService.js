import { getOpenJobs, getJobById, getCandidateById, createApplication } from '../data/store';

class ApiService {
  async getOpenJobs() {
    try {
      const jobs = getOpenJobs();
      return {
        data: jobs.value,
        status: 200
      };
    } catch (error) {
      throw new Error('Failed to fetch jobs');
    }
  }

  async getJobById(jobId) {
    try {
      const job = getJobById(jobId);
      if (!job) {
        throw new Error('Job not found');
      }
      return {
        data: job,
        status: 200
      };
    } catch (error) {
      throw new Error('Failed to fetch job details');
    }
  }

  async getCandidateById(candidateId) {
    try {
      const candidate = getCandidateById(candidateId);
      if (!candidate) {
        throw new Error('Candidate not found');
      }
      return {
        data: candidate,
        status: 200
      };
    } catch (error) {
      throw new Error('Failed to fetch candidate details');
    }
  }

  async submitApplication(applicationData) {
    try {
      createApplication(applicationData);
      return {
        data: { message: 'Application submitted successfully' },
        status: 201
      };
    } catch (error) {
      throw new Error('Failed to submit application');
    }
  }
}

// Create a singleton instance
export default new ApiService();