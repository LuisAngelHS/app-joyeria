<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const colorMode = useColorMode()
colorMode.preference = 'light'

const items = computed<NavigationMenuItem[]>(() => [
  { label: 'Colección', to: '#collection' },
  { label: 'Categorías', to: '#categories' },
  { label: 'Nosotros', to: '#about' },
  { label: 'Testimonios', to: '#testimonials' },
  { label: 'Contacto', to: '#contact' }
])
</script>

<template>
  <UApp>
    <UHeader class="bg-[#faf9f7]/95 backdrop-blur-md border-b border-[#e8e6e1]">
      <template #title>
        <NuxtLink to="/" class="flex items-center gap-2">
          <span class="font-serif text-2xl font-semibold tracking-tight text-[#1a1a1a]">Joyeria</span>
          <span class="text-xs tracking-[0.3em] uppercase text-[#8a8a8a] font-light">Taxco</span>
        </NuxtLink>
      </template>

      <UNavigationMenu :items="items" class="hidden lg:flex" />

      <template #right>
        <UButton 
          icon="i-lucide-search" 
          color="neutral" 
          variant="ghost"
          class="text-[#1a1a1a]"
        />
        <UButton 
          icon="i-lucide-heart" 
          color="neutral" 
          variant="ghost"
          class="text-[#1a1a1a]"
        />
        <UButton 
          icon="i-lucide-shopping-bag" 
          color="neutral" 
          variant="ghost"
          class="text-[#1a1a1a]"
        />
        <UButton 
          label="Comprar Ahora" 
          class="bg-[#1a1a1a] text-white hover:bg-[#333] hidden md:flex"
        />
      </template>

      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      </template>
    </UHeader>

    <UMain class="bg-[#faf9f7]">
      <NuxtPage />
    </UMain>

    <footer class="bg-[#1a1a1a] text-white py-16">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="md:col-span-1">
            <div class="flex items-center gap-2 mb-6">
              <span class="font-serif text-2xl font-semibold tracking-tight">joyería</span>
              <span class="text-xs tracking-[0.3em] uppercase text-[#8a8a8a] font-light">Taxco</span>
            </div>
            <p class="text-[#a0a0a0] text-sm leading-relaxed">
              Creando piezas únicas de joyería de plata artesanal desde 2010. Cada diseño cuenta una historia.
            </p>
          </div>
          
          <div>
            <h4 class="font-medium mb-4 text-sm tracking-wide uppercase">Colección</h4>
            <ul class="space-y-3 text-[#a0a0a0] text-sm">
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Anillos</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Collares</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Pulseras</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Aretes</NuxtLink></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-medium mb-4 text-sm tracking-wide uppercase">Información</h4>
            <ul class="space-y-3 text-[#a0a0a0] text-sm">
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Sobre Nosotros</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Envíos</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Devoluciones</NuxtLink></li>
              <li><NuxtLink to="#" class="hover:text-white transition-colors">Cuidado de Joyas</NuxtLink></li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-medium mb-4 text-sm tracking-wide uppercase">Contacto</h4>
            <ul class="space-y-3 text-[#a0a0a0] text-sm">
              <li>hola@Joyeria-taxco.com</li>
              <li>+52 55 1234 5678</li>
              <li>Ciudad de México, MX</li>
            </ul>
            <div class="flex gap-4 mt-6">
              <UButton 
                icon="i-simple-icons-instagram" 
                color="neutral" 
                variant="ghost"
                class="text-[#a0a0a0] hover:text-white"
              />
              <UButton 
                icon="i-simple-icons-pinterest" 
                color="neutral" 
                variant="ghost"
                class="text-[#a0a0a0] hover:text-white"
              />
              <UButton 
                icon="i-simple-icons-facebook" 
                color="neutral" 
                variant="ghost"
                class="text-[#a0a0a0] hover:text-white"
              />
            </div>
          </div>
        </div>
        
        <div class="border-t border-[#333] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-[#666] text-sm">
            © {{ new Date().getFullYear() }} Joyeria Taxco. Todos los derechos reservados.
          </p>
          <div class="flex gap-6 text-[#666] text-sm">
            <NuxtLink to="#" class="hover:text-white transition-colors">Privacidad</NuxtLink>
            <NuxtLink to="#" class="hover:text-white transition-colors">Términos</NuxtLink>
          </div>
        </div>
      </UContainer>
    </footer>
  </UApp>
</template>
