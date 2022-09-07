import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno, presetIcons } from 'unocss'
// import presetWebFonts from '@unocss/preset-web-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      shortcuts: {
        'bg-dark': 'bg-[#0f172a]',
        'text-dark': 'text-[#0f172a]',
        'bg-brand-green': 'bg-[#44bd87]',
        'text-brand-green': 'text-[#44bd87]',
      },
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ]
    })
  ]
})
