<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-black text-white p-4 text-center font-bold">
      Chaveiro 24h
    </header>

    <main class="flex-1">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ContactSection />
      <FooterSection />
    </main>

    <!-- Botão flutuante do WhatsApp -->
    <a
      href="https://wa.me/5561998784188?text=Olá%20DfChaveiro%2C%20preciso%20de%20ajuda%20urgente"
      target="_blank"
      class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <!-- Ícone WhatsApp -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.931 11.931 0 0012 .5C6.21.5 1.5 5.21 1.5 11c0 1.95.53 3.77 1.45 5.33L.5 23.5l7.39-2.39A11.944 11.944 0 0012 22.5c5.79 0 10.5-4.71 10.5-10.5 0-2.81-1.09-5.44-3-7.52zm-8.52 15c-1.9 0-3.75-.51-5.32-1.46l-.38-.23-4.38 1.42 1.42-4.38-.24-.38A8.994 8.994 0 013 11c0-5 4-9 9-9s9 4 9 9-4 9-9 9zm5.2-6.54c-.28-.14-1.64-.81-1.9-.9-.26-.09-.45-.14-.64.14-.18.28-.7.9-.86 1.09-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.34-.02-.48-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.16-.01-.35-.01-.53-.01s-.48.07-.73.34c-.26.27-1 1-1 2.44s1.03 2.84 1.18 3.04c.14.18 2.03 3.1 4.91 4.34.69.3 1.23.48 1.65.61.69.21 1.32.18 1.82.11.56-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.18-.53-.32z"/>
      </svg>
    </a>
  </div>
</template>
