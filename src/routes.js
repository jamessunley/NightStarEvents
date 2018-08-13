import Home from './Components/Home.vue'
import Gallery from './Components/Gallery.vue'
import Contact from './Components/Contact.vue'
import Pricing from './Components/Pricing.vue'
import Blog from './Components/Blog.vue'

export const routes = [
    {path: '*', redirect: '/' },
    {path: '/', component: Home},
    {path: '/gallery', component: Gallery},
    {path: '/pricing', component: Pricing},
    {path: '/contact', component: Contact},
    {path: '/blog', component: Blog}
]