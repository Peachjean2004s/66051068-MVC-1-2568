
import { getJobById, getCandidateById, createApplication } from '../data/store.js';
import { canApply as canApplyForCooperative } from '../model/cooperativeEducation.js';
import { canApply as canApplyForRegular } from '../model/regularPosition.js';

export function processApplication(jobId, candidateId) {
  try {
    const job = getJobById(jobId);
    const candidate = getCandidateById(candidateId);

    if (!job || !candidate) {
        return { success: false, message: 'Job or Candidate not found.' };
    }

    let isEligible = false;
    if (job.type === 'internship') {
      isEligible = canApplyForCooperative(candidate);
    } else if (job.type === 'full-time') {
      isEligible = canApplyForRegular(candidate);
    }

    if (isEligible) {
      const applicationData = {
        candidateId: candidate.candidate_id,
        jobId: job.job_id,
        applicationDate: new Date().toISOString(),
        status: 'submitted'
      };
      createApplication(applicationData);
      return { success: true, message: 'Application submitted successfully!' };
    } else {
      const message = `Application failed: Your status (${candidate.status}) does not match the job type (${job.type}).`;
      return { success: false, message };
    }
  } catch (error) {
    console.error('Error processing application:', error);
    return { success: false, message: 'An error occurred. Please try again.' };
  }
}