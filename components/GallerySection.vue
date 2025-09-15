<template>
  <section class="py-12 px-6 bg-gray-100">
    <h2 class="text-2xl font-bold text-center mb-8">Galeria de Fotos</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
      <img
        v-for="(img, i) in gallery"
        :key="i"
        :src="img"
        class="w-40 h-40 md:w-32 md:h-32 object-cover rounded-xl shadow"
        alt="Foto da galeria"
      />
    </div>
  </section>
</template>

<script setup>
const gallery = [
  "/foto1.png",
  "/foto2.png",
  "/foto3.png",
  "/foto4.png",
  "/foto5.png",
  "/foto1.png"
]
</script>
