<template>
  <div class="h-screen bg-[url('/images/tr_movies_bg.jpg')] bg-center bg-cover flex justify-center items-center">
    <form class="w-screen z-[99999] max-w-sm" @submit.prevent="handleLogin()">
      <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="email" id="email" v-model="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com" required />
      </div>
      <div class="mb-5">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input type="password" id="password" v-model="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required />
      </div>
      <div class="flex items-start mb-5">
        <div class="flex items-center h-5">
          <input id="remember" type="checkbox" value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
        </div>
        <label for="remember" class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">Remember me</label>
      </div>
      <div class="flex justify-center">
        <ButtonComponent :button="'Submit'" />
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import ButtonComponent from '@/components/ButtonComponent.vue';

async function login(email, password) {
  try {
    const response = await axios.post('http://movie-admin.local/api/login', {
      email,
      password,
    });
    const token = response.data.access_token;

    // Lưu token vào localStorage hoặc sessionStorage
    localStorage.setItem('authToken', token);

    // Cấu hình axios để sử dụng token này cho các lần gọi API sau
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } catch (error) {
    console.log('Login failed:', error);
  }
}

const email = ref('');
const password = ref('');

const handleLogin = async () => {
  await login(email.value, password.value);
};

</script>
