<template>
  <h1>Fotos</h1>
  <div v-for="(photo, index) in list" :key="index">
    <img :src="photo.thumbnailUrl">
    {{ photo.title }}
    <hr>
  </div>
</template>

<script>
import { onMounted, ref } from "vue"
import { getPhotos } from "../service/photos-service.js"
import { useRoute } from "vue-router"

export default {
  setup() {
    const list = ref(null)
    const route = useRoute()

    onMounted(() => {
      getPhotos(route.params.id).then(resp => {
        list.value = resp
      })
    })

    return { list }
  }
}
</script>

<style scoped>

</style>