import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import MenuDropdown from './components/MenuDropdown.vue'

createApp(App).mount('#app')

export function BootVueComponents() {
    createApp({})
        .component('menu-dropdown', MenuDropdown)
        .mount('#menu')
}