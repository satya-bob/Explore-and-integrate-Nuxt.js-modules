<template>
    <div>
      <h1>Dashboard</h1>
      <p>Welcome,admin</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      async logout() {
        try {
          await this.$auth.logout();
          // Redirect to login page upon successful logout
          this.$router.push('/login');
        } catch (error) {
          console.error('Logout failed', error);
        }
      }
    }
  }
  </script>
  