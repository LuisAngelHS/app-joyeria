<script setup lang="ts">
const products = [
  {
    id: 1,
    name: 'Anillo Luna Creciente',
    price: '$1,250',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
    category: 'Anillos'
  },
  {
    id: 2,
    name: 'Collar Cascada',
    price: '$2,890',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
    category: 'Collares'
  },
  {
    id: 3,
    name: 'Pulsera Infinito',
    price: '$980',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
    category: 'Pulseras'
  },
  {
    id: 4,
    name: 'Aretes Gotas de Rocío',
    price: '$1,450',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
    category: 'Aretes'
  }
]

const categories = [
  {
    name: 'Anillos',
    slug: 'anillos',
    count: '24 piezas',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=800&fit=crop'
  },
  {
    name: 'Collares',
    slug: 'collares',
    count: '18 piezas',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=800&fit=crop'
  },
  {
    name: 'Pulseras',
    slug: 'pulseras',
    count: '15 piezas',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=800&fit=crop'
  }
]

const testimonials = [
  {
    name: 'María González',
    role: 'Diseñadora de Interiores',
    content: 'La calidad de las piezas de Joyeria es incomparable. Cada detalle refleja el cuidado artesanal que ponen en su trabajo.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    name: 'Ana Martínez',
    role: 'Arquitecta',
    content: 'Encontré el anillo de compromiso perfecto aquí. El servicio fue excepcional y la pieza superó todas mis expectativas.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    name: 'Carolina Ruiz',
    role: 'Empresaria',
    content: 'Las joyas de Joyeria taxco se han convertido en mis favoritas. Son piezas atemporales que complementan cualquier estilo.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop" 
          alt="Joyería de plata"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/40 to-transparent"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="max-w-2xl">
          <span class="text-[#c0c0c0] text-sm tracking-[0.3em] uppercase mb-6 block">
            Colección Primavera 2026
          </span>
          <h1 class="font-serif text-5xl md:text-7xl text-white font-medium leading-tight mb-6">
            Elegancia que<br />trasciende el tiempo
          </h1>
          <p class="text-[#d0d0d0] text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            Descubre nuestra colección exclusiva de joyería de plata artesanal, donde cada pieza cuenta una historia única.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <UButton 
              label="Explorar Colección" 
              size="lg"
              class="bg-white text-[#1a1a1a] hover:bg-[#f0f0f0] px-8"
              trailing-icon="i-lucide-arrow-right"
            />
            <UButton 
              label="Nuestra Historia" 
              size="lg"
              variant="outline"
              class="border-white text-white hover:bg-white/10"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Features Strip -->
    <section class="bg-[#1a1a1a] py-6">
      <UContainer>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="flex items-center justify-center gap-3">
            <UIcon name="i-lucide-gem" class="w-5 h-5 text-[#c0c0c0]" />
            <span class="text-white text-sm">Plata 925</span>
          </div>
          <div class="flex items-center justify-center gap-3">
            <UIcon name="i-lucide-truck" class="w-5 h-5 text-[#c0c0c0]" />
            <span class="text-white text-sm">Envío Gratis</span>
          </div>
          <div class="flex items-center justify-center gap-3">
            <UIcon name="i-lucide-shield-check" class="w-5 h-5 text-[#c0c0c0]" />
            <span class="text-white text-sm">Garantía de por Vida</span>
          </div>
          <div class="flex items-center justify-center gap-3">
            <UIcon name="i-lucide-gift" class="w-5 h-5 text-[#c0c0c0]" />
            <span class="text-white text-sm">Empaque Premium</span>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Featured Collection -->
    <section id="collection" class="py-24">
      <UContainer>
        <div class="text-center mb-16">
          <span class="text-[#8a8a8a] text-sm tracking-[0.3em] uppercase mb-4 block">
            Destacados
          </span>
          <h2 class="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            Piezas Seleccionadas
          </h2>
          <p class="text-[#666] max-w-2xl mx-auto">
            Cada joya es cuidadosamente elaborada a mano por nuestros artesanos, 
            combinando técnicas tradicionales con diseño contemporáneo.
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="product in products" 
            :key="product.id"
            class="group cursor-pointer"
          >
            <div class="relative aspect-square overflow-hidden bg-[#f0eeea] mb-4">
              <img 
                :src="product.image" 
                :alt="product.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <UButton 
                  icon="i-lucide-shopping-bag" 
                  label="Agregar"
                  class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#1a1a1a]"
                />
              </div>
              <button class="absolute top-4 right-4 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
                <UIcon name="i-lucide-heart" class="w-4 h-4 text-[#1a1a1a]" />
              </button>
            </div>
            <span class="text-[#8a8a8a] text-xs tracking-wide uppercase">{{ product.category }}</span>
            <h3 class="font-serif text-lg text-[#1a1a1a] mt-1">{{ product.name }}</h3>
            <p class="text-[#1a1a1a] font-medium mt-1">{{ product.price }}</p>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <UButton 
            label="Ver Toda la Colección" 
            variant="outline"
            size="lg"
            class="border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white px-8"
            trailing-icon="i-lucide-arrow-right"
          />
        </div>
      </UContainer>
    </section>

    <!-- Categories -->
    <section id="categories" class="py-24 bg-[#f0eeea]">
      <UContainer>
        <div class="text-center mb-16">
          <span class="text-[#8a8a8a] text-sm tracking-[0.3em] uppercase mb-4 block">
            Explora
          </span>
          <h2 class="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6">
            Nuestras Categorías
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NuxtLink 
            v-for="category in categories" 
            :key="category.name"
            :to="`/categorias/${category.slug}`"
            class="relative group overflow-hidden cursor-pointer block"
          >
            <div class="aspect-[3/4] overflow-hidden">
              <img 
                :src="category.image" 
                :alt="category.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8">
              <h3 class="font-serif text-3xl text-white mb-2">{{ category.name }}</h3>
              <div class="flex items-center justify-between">
                <span class="text-[#d0d0d0] text-sm">{{ category.count }}</span>
                <UButton 
                  icon="i-lucide-arrow-right"
                  variant="ghost"
                  class="text-white hover:bg-white/20"
                />
              </div>
            </div>
          </NuxtLink>
        </div>
      </UContainer>
    </section>

    <!-- About Section -->
    <section id="about" class="py-24">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=800&h=1000&fit=crop" 
              alt="Artesano trabajando"
              class="w-full"
            />
            <div class="absolute -bottom-8 -right-8 bg-[#1a1a1a] text-white p-8 hidden md:block">
              <span class="font-serif text-5xl block">15+</span>
              <span class="text-[#a0a0a0] text-sm">Años de experiencia</span>
            </div>
          </div>
          
          <div>
            <span class="text-[#8a8a8a] text-sm tracking-[0.3em] uppercase mb-4 block">
              Nuestra Historia
            </span>
            <h2 class="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-8 leading-tight">
              Artesanía que<br />cuenta historias
            </h2>
            <div class="space-y-6 text-[#666] leading-relaxed">
              <p>
                Desde 2010, Joyeria taxco ha sido sinónimo de excelencia en joyería artesanal. 
                Cada pieza que creamos es el resultado de la pasión, la dedicación y el dominio 
                de técnicas tradicionales de orfebrería.
              </p>
              <p>
                Nuestros artesanos trabajan con plata de ley 925 de la más alta calidad, 
                transformándola en obras de arte que perduran generaciones. Creemos que 
                la verdadera belleza reside en los detalles y en la historia que cada joya cuenta.
              </p>
            </div>
            
            <div class="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#e8e6e1]">
              <div>
                <span class="font-serif text-3xl text-[#1a1a1a] block">500+</span>
                <span class="text-[#8a8a8a] text-sm">Diseños únicos</span>
              </div>
              <div>
                <span class="font-serif text-3xl text-[#1a1a1a] block">10k+</span>
                <span class="text-[#8a8a8a] text-sm">Clientes felices</span>
              </div>
              <div>
                <span class="font-serif text-3xl text-[#1a1a1a] block">100%</span>
                <span class="text-[#8a8a8a] text-sm">Hecho a mano</span>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="py-24 bg-[#1a1a1a]">
      <UContainer>
        <div class="text-center mb-16">
          <span class="text-[#8a8a8a] text-sm tracking-[0.3em] uppercase mb-4 block">
            Testimonios
          </span>
          <h2 class="font-serif text-4xl md:text-5xl text-white mb-6">
            Lo que dicen nuestros clientes
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.name"
            class="bg-[#252525] p-8"
          >
            <div class="flex gap-1 mb-6">
              <UIcon 
                v-for="i in 5" 
                :key="i"
                name="i-lucide-star" 
                class="w-4 h-4 text-[#c0c0c0] fill-current"
              />
            </div>
            <p class="text-[#d0d0d0] leading-relaxed mb-8">
              "{{ testimonial.content }}"
            </p>
            <div class="flex items-center gap-4">
              <UAvatar 
                :src="testimonial.avatar" 
                :alt="testimonial.name"
                size="lg"
              />
              <div>
                <h4 class="text-white font-medium">{{ testimonial.name }}</h4>
                <span class="text-[#8a8a8a] text-sm">{{ testimonial.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Newsletter CTA -->
    <section class="py-24">
      <UContainer>
        <div class="bg-[#f0eeea] p-12 md:p-16 text-center max-w-4xl mx-auto">
          <span class="text-[#8a8a8a] text-sm tracking-[0.3em] uppercase mb-4 block">
            Mantente Conectado
          </span>
          <h2 class="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6">
            Suscríbete a nuestro newsletter
          </h2>
          <p class="text-[#666] mb-8 max-w-xl mx-auto">
            Recibe las últimas novedades, acceso exclusivo a nuevas colecciones 
            y ofertas especiales directamente en tu correo.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <UInput 
              placeholder="Tu correo electrónico"
              size="lg"
              class="flex-1"
            />
            <UButton 
              label="Suscribir" 
              size="lg"
              class="bg-[#1a1a1a] text-white hover:bg-[#333]"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 bg-[#f0eeea]">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span class="text-[#8a8a8a] text-sm tracking-[0.3em] uppercase mb-4 block">
              Contacto
            </span>
            <h2 class="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-8">
              ¿Tienes alguna pregunta?
            </h2>
            <p class="text-[#666] leading-relaxed mb-8">
              Estamos aquí para ayudarte. Ya sea que tengas preguntas sobre 
              nuestros productos, necesites asesoría personalizada o quieras 
              crear una pieza a medida, nos encantaría escucharte.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center">
                  <UIcon name="i-lucide-map-pin" class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 class="text-[#1a1a1a] font-medium">Visítanos</h4>
                  <p class="text-[#666] text-sm">Av. Presidente Masaryk 123, Polanco, CDMX</p>
                </div>
              </div>
              
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center">
                  <UIcon name="i-lucide-mail" class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 class="text-[#1a1a1a] font-medium">Escríbenos</h4>
                  <p class="text-[#666] text-sm">hola@Joyeria-taxco.com</p>
                </div>
              </div>
              
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-[#1a1a1a] flex items-center justify-center">
                  <UIcon name="i-lucide-phone" class="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 class="text-[#1a1a1a] font-medium">Llámanos</h4>
                  <p class="text-[#666] text-sm">+52 55 1234 5678</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-8 md:p-12">
            <h3 class="font-serif text-2xl text-[#1a1a1a] mb-6">Envíanos un mensaje</h3>
            <form class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <UInput placeholder="Nombre" size="lg" />
                <UInput placeholder="Apellido" size="lg" />
              </div>
              <UInput placeholder="Correo electrónico" type="email" size="lg" />
              <UInput placeholder="Asunto" size="lg" />
              <UTextarea placeholder="Tu mensaje" :rows="4" />
              <UButton 
                label="Enviar Mensaje" 
                size="lg"
                class="w-full bg-[#1a1a1a] text-white hover:bg-[#333]"
              />
            </form>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
