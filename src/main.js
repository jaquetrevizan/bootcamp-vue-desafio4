import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AlbumsList from './components/AlbumsList'
import PhotosList from './components/PhotosList'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AlbumsList },
    { path: '/albums/:id', name: 'photos', component: PhotosList }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
