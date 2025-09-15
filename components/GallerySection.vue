<template>
  <section class="py-12 px-4 bg-gray-100">
    <h2 class="text-2xl font-bold text-center mb-6">Galeria de Fotos</h2>

    <div class="grid grid-cols-3 md:grid-cols-4 gap-2">
      <div
        v-for="(img, i) in gallery"
        :key="i"
        class="overflow-hidden rounded-lg shadow-sm hover:scale-105 transition-transform duration-200 aspect-square"
      >
        <img
          :src="img"
          class="w-full h-full object-cover"
          alt="Foto da galeria"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const gallery = [
  "/a.jpeg",
  "/b.jpeg",
  "/c.jpeg",
  "/d.jpeg",
  "/e.jpeg",
  "/f.jpeg",
  "/g.jpeg",
  "/h.jpeg",
  "/i.jpeg",
  "/j.jpeg",
  "/k.jpeg",
  "/l.jpeg",
]
</script>
