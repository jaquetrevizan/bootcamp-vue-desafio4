<template>
  <h1>Álbuns</h1>
  <div v-for="(album, index) in list" :key="index" @click="selectAlbum(album.id)" class="div-list">
    {{ album.title }}
  </div>
</template>

<script>
import { onMounted, ref } from "vue"
import { getAlbumsList } from "../service/photos-service.js"
import { useRouter } from "vue-router"

export default {
  setup() {
    const list = ref([])
    const router = useRouter()

    onMounted(() => {
      getAlbumsList().then(resp => {
        list.value = resp
      })
    })

    const selectAlbum = (id) => {
      router.push({ name: "photos", params: {id} })
    }

    return { list, selectAlbum }
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .div-list {
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 0.2rem;
    margin: 0.5rem;
    cursor: pointer;
  }
</style>