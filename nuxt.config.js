export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

 
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
// nuxt.config.js

modules: [
  '@nuxtjs/axios',
  '@nuxtjs/auth-next'
],



// Axios module configuration
axios: {
  baseURL: 'https://jsonplaceholder.typicode.com' // Example API endpoint
},

// Auth module configuration
auth: {
  strategies: {
    local: {
      token: {
        property: 'token',
        global: true,
        required: true,
        type: 'Bearer'
      },
      user: {
        property: 'user',
        autoFetch: true
      },
      endpoints: {
        login: { url: '/api/auth/login', method: 'post' }, // Example login endpoint
        logout: { url: '/api/auth/logout', method: 'post' }, // Example logout endpoint
        user: { url: '/api/auth/user', method: 'get' } // Example user endpoint
      }
    }
  }
}
,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
