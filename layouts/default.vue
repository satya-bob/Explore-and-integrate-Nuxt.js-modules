<template>
<div class="container">

    <nav class="navbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <nuxt-link to="/" class="nav-link">Home</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link to="/blog" class="nav-link">Blog</nuxt-link>
            </li>
            <li v-if="$auth.loggedIn" class="nav-item">
                <nuxt-link to="/dashboard" class="nav-link">Dashboard</nuxt-link>
            </li>
            <li v-if="!$auth.loggedIn" class="nav-item">
                <nuxt-link to="/login" class="nav-link" >Login</nuxt-link>
            </li>
            <li v-if="$auth.loggedIn" class="nav-item"><button @click="logout" class="logout-button">Logout</button></li>
        </ul>
    </nav>

    <!-- Page content -->
    <nuxt />
</div>
</template>

<script>
export default {
  
    async logout() {
      try {
        await this.$auth.logout();
        this.$nuxt.$router.push('/login');
      } catch (error) {
        console.error('Logout failed', error);
      }
    }
  };
</script>

<style scoped>
/* Global styles */
body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
}

.container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}

/* Navbar styles */
.navbar {
    background-color: #333;
    padding: 15px;
    transition: background-color 0.3s ease-in-out;
}

.navbar-nav {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
}

.nav-item {
    margin-left: 10px;
}

.nav-link {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
}

.nav-link:hover {
    color: #ffd700;
    /* Change to desired hover color */
}

.logout-button {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
}

.logout-button:hover {
    color: #ffd700;
    /* Change to desired hover color */
}
</style>
