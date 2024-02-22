<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit" @click="login()">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
        login() {
      if (this.username === 'admin' && this.password === 'password') {
        this.$nuxt.$router.push('/dashboard');
      
        alert('Login successful!');
      } else {
        alert('Invalid username or password ! try admin and password');
      }
    }
}
}

  </script>
  