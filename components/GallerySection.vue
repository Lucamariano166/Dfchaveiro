<template>
  <section class="py-12 px-4 bg-gray-100">
    <h2 class="text-2xl font-bold text-center mb-6">Galeria de Fotos</h2>

    <div class="grid grid-cols-3 md:grid-cols-4 gap-2">
      <div
        v-for="(img, i) in gallery"
        :key="i"
        class="overflow-hidden rounded-lg shadow-sm hover:scale-105 transition-transform duration-200 aspect-square cursor-pointer"
        @click="openLightbox(img)"
      >
        <img
          :src="img"
          class="w-full h-full object-cover"
          alt="Foto da galeria"
        />
      </div>
    </div>

    <!-- Lightbox -->
    <div
      v-if="lightboxImg"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      @click.self="closeLightbox"
    >
      <img :src="lightboxImg" class="max-w-full max-h-full rounded-lg shadow-lg" />
      <button
        @click="closeLightbox"
        class="absolute top-4 right-4 text-white text-2xl font-bold"
      >
        &times;
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const gallery = [
  "/a.jpeg","/b.jpeg","/c.jpeg","/d.jpeg","/e.jpeg","/f.jpeg",
  "/g.jpeg","/h.jpeg","/i.jpeg","/j.jpeg","/k.jpeg","/l.jpeg"
]

const lightboxImg = ref(null)

function openLightbox(img) {
  lightboxImg.value = img
}

function closeLightbox() {
  lightboxImg.value = null
}
</script>
