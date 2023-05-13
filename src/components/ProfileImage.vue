<template>
  <div class="overflow-hidden rounded-full border-2 border-black">
    <img :src="faceImage" class="h-8 w-8 rounded-3xl object-cover" />
  </div>
</template>

<script>
import faceImage from '@/assets/face.png'

export default {
  name: 'ProfileImage',
  data() {
    return {
      faceImage
    }
  }
}
</script>
