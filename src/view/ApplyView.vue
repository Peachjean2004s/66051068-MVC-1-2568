<template>
  <div>
    <h2>Processing Your Application...</h2>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { processApplication } from '../controller/applicationController';

const route = useRoute();
const router = useRouter();
const message = ref('');

onMounted(async () => {
  const jobId = route.params.jobId;
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user || !user.id) {
    alert('Session expired. Please log in again.');
    router.push('/login');
    return;
  }

  const result = await processApplication(jobId, user.id);
  
  message.value = result.message;
  alert(result.message);
  router.push('/');
});
</script>