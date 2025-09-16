<template>
  <section class="py-12 px-4 bg-gray-100">
    <h2 class="text-2xl font-bold text-center mb-6 text-gold">Galeria de Fotos</h2>

    <div class="grid grid-cols-3 md:grid-cols-4 gap-2">
      <div
        v-for="(img, i) in gallery"
        :key="i"
        class="overflow-hidden rounded-lg shadow-sm hover:scale-105 transition-transform duration-200 aspect-square cursor-pointer"
        @click="openLightbox(i)"
      >
        <img
          :src="img"
          class="w-full h-full object-cover"
          :alt="`Foto ${i + 1} da galeria`"
        />
      </div>
    </div>

    <!-- Lightbox -->
    <div
      v-if="lightboxIndex !== null"
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      @click.self="closeLightbox"
    >
      <button
        @click.stop="prevImage"
        class="absolute left-4 text-white text-3xl font-bold px-2 py-1 bg-black bg-opacity-50 rounded"
      >
        &#10094;
      </button>

      <img
        :src="gallery[lightboxIndex]"
        class="max-w-full max-h-full rounded-lg shadow-lg"
        :alt="`Foto ${lightboxIndex + 1} da galeria`"
      />

      <button
        @click.stop="nextImage"
        class="absolute right-4 text-white text-3xl font-bold px-2 py-1 bg-black bg-opacity-50 rounded"
      >
        &#10095;
      </button>

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

const lightboxIndex = ref(null)

function openLightbox(index) {
  lightboxIndex.value = index
}

function closeLightbox() {
  lightboxIndex.value = null
}

function nextImage() {
  if (lightboxIndex.value !== null) {
    lightboxIndex.value = (lightboxIndex.value + 1) % gallery.length
  }
}

function prevImage() {
  if (lightboxIndex.value !== null) {
    lightboxIndex.value = (lightboxIndex.value - 1 + gallery.length) % gallery.length
  }
}
</script>
