<script setup>
useHead({
  title: 'Chaveiro 24h - Serviços em Geral',
  meta: [
    { name: 'description', content: 'Chaveiro 24 horas, carimbos, chaves codificadas, relojoeiro, controles de portão e assistência técnica para celular.' },
    { property: 'og:title', content: 'Chaveiro 24h - Serviços em Geral' },
    { property: 'og:description', content: 'Atendimento rápido e de confiança. Ligue já ou fale no WhatsApp!' },
    { property: 'og:image', content: '/og-image.jpg' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>

<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <GallerySection />
    <ContactSection />
    <FooterSection />
  </div>
</template>
