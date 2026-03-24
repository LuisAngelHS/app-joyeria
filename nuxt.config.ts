export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light',
    fallback: 'light'
  },
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      title: 'Lumière Silver - Joyería de Plata Artesanal',
      meta: [
        { name: 'description', content: 'Descubre nuestra colección exclusiva de joyería de plata artesanal. Piezas únicas con diseño contemporáneo y acabados excepcionales.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap' }
      ]
    }
  }
})
