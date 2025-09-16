<template>
  <section class="py-12 px-6 bg-gray-100">
    <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">Nossos Serviços - Chaveiro 24 horas e Assistência Técnica em Brasília</h2>

    <div class="grid md:grid-cols-3 gap-6">
      <div 
        v-for="(service, i) in services" 
        :key="i" 
        class="bg-white p-6 rounded-xl shadow transition-transform transform hover:-translate-y-2 hover:shadow-xl"
      >
        <h3 class="font-semibold text-lg mb-2">{{ service.title }}</h3>
        <div class="text-gray-700 text-sm space-y-2">
          <p v-for="(paragraph, idx) in service.desc.split('\n\n')" :key="idx">{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { 
    title: "🔑 Chaveiro 24hrs", 
    desc: `Serviços de chaveiro 24h em Brasília, com abertura de portas residenciais, comerciais e automotivas.

Cópia de chaves comuns, especiais e codificadas.

Instalação e troca de fechaduras, confecção de chaves perdidas.

Atendimento emergencial 24 horas, rápido e seguro, com profissionais experientes e confiáveis.` 
  },
  { 
    title: "🖋️ Carimbos Personalizados", 
    desc: `Produção de carimbos personalizados para empresas, profissionais liberais e uso pessoal em Brasília.

Trabalhamos com diferentes modelos: automáticos, de bolso, madeira e datadores, sempre com gravação nítida e duradoura.

Nossos carimbos podem incluir:
• Logotipo da empresa
• Nome e cargo profissional
• CNPJ, endereço e contatos
• Mensagens personalizadas

Entrega rápida e precisão garantida, unindo praticidade e identidade visual.` 
  },
  { 
    title: "🔒 Chaves Codificadas", 
    desc: `Serviço de chaves codificadas para veículos em Brasília.

Programação e reprogramação de chaves automotivas.

Substituição em caso de perda da chave original, garantindo segurança e praticidade.` 
  },
  { 
    title: "⌚ Relojoeiro Especializado", 
    desc: `Conserto e manutenção de relógios de todos os tipos.

Troca de baterias, pinos e pulseiras.

Ajustes e revisões completas com precisão e cuidado.` 
  },
  { 
    title: "🚪 Controles de Portão", 
    desc: `Venda, manutenção e programação de controles de portão eletrônico em Brasília.

Troca de baterias, botões e limpeza.

Serviço técnico rápido, confiável e seguro.` 
  },
  { 
    title: "📱 Assistência Técnica Celular", 
    desc: `Serviços completos de assistência técnica para celulares e tablets em Brasília.

Troca de tela, bateria, manutenção geral e venda de acessórios.

Atendimento rápido, com garantia de qualidade e segurança.` 
  }
]
</script>
