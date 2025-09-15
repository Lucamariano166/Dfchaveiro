<template>
  <section class="py-12 px-6 bg-gray-100">
    <h2 class="text-2xl font-bold text-center mb-8">Nossos Serviços</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <div 
        v-for="(service, i) in services" 
        :key="i" 
        class="bg-white p-6 rounded-xl shadow transition-transform transform hover:-translate-y-2 hover:shadow-xl"
      >
        <h3 class="font-semibold text-lg mb-2">{{ service.title }}</h3>
        <p>{{ service.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { title: "🔑 Chaveiro 24hrs", desc: "Abertura de portas, cópias de chaves e muito mais." },
  { title: "🖋️ Carimbos Personalizados", desc: "Produção rápida e com qualidade garantida." },
  { title: "🔒 Chaves Codificadas", desc: "Chaves canivete e codificadas para seu veículo." },
  { title: "⌚ Relojoeiro Especializado", desc: "Conserto e manutenção de relógios." },
  { title: "🚪 Controles de Portão", desc: "Venda e manutenção de controles de portão eletrônico." },
  { title: "📱 Assistência Técnica Celular", desc: "Acessórios, troca de tela e manutenção geral." }
]
</script>
