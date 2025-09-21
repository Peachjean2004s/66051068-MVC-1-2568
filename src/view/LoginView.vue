<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <button type="submit">Login</button>
    </form>

    <div class="navigation-links">
      <router-link to="/">← Back to Job Listings</router-link>
    </div>
    <div class="login-info">
        <p><b>Admin:</b> admin / password123</p>
        <p><b>Candidate:</b> 66010001 / Jaidee</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { authenticateUser } from '../data/store.js';

const router = useRouter();
const username = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = () => {
  errorMessage.value = '';
  const user = authenticateUser(username.value, password.value);
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
    if (user.role === 'admin') {
      router.push('/admin');
    } else {
      router.push('/');
    }
  } else {
    errorMessage.value = 'Invalid username or password.';
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #444;
  border-radius: 8px;
  background-color: #222;
  color: #fff;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: #333;
  color: white;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: #ff5252;
  margin-bottom: 1rem;
}

.navigation-links {
  margin-top: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #444;
}
.navigation-links a {
    color: #a8a8ff;
    text-decoration: none;
}

.login-info {
    margin-top: 1rem;
    font-size: 0.9em;
    color: #aaa;
}
</style>