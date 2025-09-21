<template>
  <header>
    <h1>Job Fair - Computer Science</h1>

    <nav v-if="user">
      <router-link to="/">Open Jobs</router-link> |
      <span>Welcome, {{ user.name }}!</span>
      <a href="#" @click.prevent="logout" class="logout-link">Logout</a>
    </nav>

    <nav v-else>
      <router-link to="/login">Login</router-link>
    </nav>

  </header>
  <main>
    <router-view />
  </main>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const user = ref(null);

// ฟังก์ชันสำหรับอัปเดตสถานะผู้ใช้จาก localStorage
const updateUserStatus = () => {
  const userData = localStorage.getItem('user');
  user.value = userData ? JSON.parse(userData) : null;
};

// ฟังก์ชันสำหรับ Logout
const logout = () => {
  localStorage.removeItem('user');
  user.value = null;
  router.push('/login');
};

// เมื่อมีการเปลี่ยนหน้า (route) ให้ตรวจสอบสถานะล็อกอินเสมอ
watch(() => route.path, () => {
  updateUserStatus();
}, { immediate: true });
</script>

<style scoped>
header {
  margin-bottom: 2rem;
  border-bottom: 1px solid #555;
  padding-bottom: 1rem;
}
nav {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
nav a {
  font-weight: bold;
  color: #a8a8ff;
  text-decoration: none;
}
.logout-link {
  color: #ff8a80; /* สีแดงอ่อนสำหรับปุ่ม logout */
}
nav span {
    color: #ccc;
}
</style>