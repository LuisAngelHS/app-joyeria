<script setup lang="ts">
const products = [
  {
    id: 1,
    name: 'Collar Cascada',
    price: '$2,890',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
    description: 'Diseño fluido y elegante'
  },
  {
    id: 2,
    name: 'Collar Perla Solitaria',
    price: '$1,650',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
    description: 'Perla cultivada con cadena de plata'
  },
  {
    id: 3,
    name: 'Collar Hojas de Otoño',
    price: '$2,100',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop',
    description: 'Inspiración natural'
  },
  {
    id: 4,
    name: 'Collar Choker Minimalista',
    price: '$980',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=600&fit=crop',
    description: 'Estilo contemporáneo'
  },
  {
    id: 5,
    name: 'Collar Cadena Gruesa',
    price: '$1,450',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop',
    description: 'Statement piece audaz'
  },
  {
    id: 6,
    name: 'Collar Corazón',
    price: '$1,200',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
    description: 'Símbolo de amor'
  }
]

const sortOptions = ['Más recientes', 'Precio: menor a mayor', 'Precio: mayor a menor', 'Nombre A-Z']
const selectedSort = ref('Más recientes')
</script>

<template>
  <div>
    <!-- Hero Banner -->
    <section class="relative h-[50vh] flex items-center">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1920&h=800&fit=crop" 
          alt="Collares de plata"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      
      <UContainer class="relative z-10">
        <div class="text-center">
          <UBreadcrumb 
            :items="[
              { label: 'Inicio', to: '/' },
              { label: 'Categorías' },
              { label: 'Collares' }
            ]"
            class="justify-center mb-6 text-white/70"
          />
          <h1 class="font-serif text-5xl md:text-6xl text-white mb-4">Collares</h1>
          <p class="text-white/80 text-lg max-w-2xl mx-auto">
            Collares que enmarcan tu belleza natural. Desde diseños delicados hasta 
            piezas statement que roban miradas.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Products Section -->
    <section class="py-16">
      <UContainer>
        <!-- Filters Bar -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12 pb-6 border-b border-[#e8e6e1]">
          <p class="text-[#666]">
            Mostrando <span class="text-[#1a1a1a] font-medium">{{ products.length }}</span> productos
          </p>
          <div class="flex items-center gap-4">
            <span class="text-[#666] text-sm">Ordenar por:</span>
            <USelectMenu 
              v-model="selectedSort" 
              :items="sortOptions"
              class="w-48"
            />
          </div>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h3 class="font-serif text-lg text-[#1a1a1a]">{{ product.name }}</h3>
            <p class="text-[#8a8a8a] text-sm mt-1">{{ product.description }}</p>
            <p class="text-[#1a1a1a] font-medium mt-2">{{ product.price }}</p>
          </div>
        </div>

        <!-- Load More -->
        <div class="text-center mt-16">
          <UButton 
            label="Cargar Más Productos" 
            variant="outline"
            size="lg"
            class="border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white px-8"
          />
        </div>
      </UContainer>
    </section>

    <!-- Related Categories -->
    <section class="py-16 bg-[#f0eeea]">
      <UContainer>
        <h2 class="font-serif text-3xl text-[#1a1a1a] text-center mb-12">Explora otras categorías</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <NuxtLink to="/categorias/anillos" class="relative group overflow-hidden">
            <div class="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=450&fit=crop" 
                alt="Anillos"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="font-serif text-2xl text-white">Anillos</h3>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/categorias/pulseras" class="relative group overflow-hidden">
            <div class="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=450&fit=crop" 
                alt="Pulseras"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="font-serif text-2xl text-white">Pulseras</h3>
            </div>
          </NuxtLink>
        </div>
      </UContainer>
    </section>
  </div>
</template>
