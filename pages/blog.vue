<template>
    <div class="container">
        <h1>Blog Posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
        </ul>
    </div>
    </template>
    
    <script>
    
    export default {
        async asyncData({
            $axios
        }) {
            const {
                data
            } = await $axios.get('/posts');
            return {
                posts: data
            };
        }
    }
    </script>
    <style>

    
    .blog-posts {
      padding: 20px;
    }
    
    .post-item {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #177b8d;
      transition: background-color 0.3s;
    }
    
    .post-item:hover {
      background-color: #59b3ce;
    }
    </style>