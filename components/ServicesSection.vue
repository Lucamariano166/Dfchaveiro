<template>
  <section class="py-12 px-6 bg-gray-100">
    <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">Nossos Serviços</h2>

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
    desc: `Abertura de portas residenciais, comerciais e automotivas.

Cópia de chaves comuns e especiais.
Serviços de
instalação e troca de fechadura, confecção de chaves perdidas.

Serviço emergencial 24 horas, rápido e seguro, com profissionais experientes e atendimento de qualidade.` 
  },
  { 
    title: "🖋️ Carimbos Personalizados", 
    desc: `Produzimos carimbos personalizados de alta qualidade, ideais para empresas, profissionais liberais e uso pessoal.

Trabalhamos com diferentes modelos (automáticos, de bolso, madeira e datadores), sempre com gravação nítida e duradoura.

👉 Nossos carimbos podem conter:
• Logotipo da sua empresa
• Nome e cargo profissional
• CNPJ, endereço e contatos
• Mensagens personalizadas

Com rapidez e precisão, garantimos que seu carimbo personalizado atenda perfeitamente às suas necessidades do dia a dia, unindo praticidade e identidade visual.` 
  },
  { 
    title: "🔒 Chaves Codificadas", 
    desc: `Chaves canivete e codificadas para veículos.

Programação e reprogramação de chaves automotivas.

Substituição em caso de perda da chave original.` 
  },
  { 
    title: "⌚ Relojoeiro Especializado", 
    desc: `Conserto e manutenção de relógios de todos os tipos.

troca de baterias, pinos e pulseiras.

ajustes e revisões completas.

Atendimento com precisão e cuidado.` 
  },
  { 
    title: "🚪 Controles de Portão", 
    desc: `Venda e manutenção de controles de portão eletrônico.
    
troca de baterias, botões e limpeza.

Programação e substituição rápida.

Serviço técnico confiável e seguro.` 
  },
  { 
    title: "📱 Assistência Técnica Celular", 
    desc: `Serviços completos para celulares e tablets.

Troca de tela, bateria, manutenção e acessórios.

Atendimento rápido e com garantia de qualidade.` 
  }
]
</script>
