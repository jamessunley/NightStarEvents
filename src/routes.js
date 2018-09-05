import Home from './Components/Home.vue'
import Gallery from './Components/Gallery.vue'
import Contact from './Components/Contact.vue'
import Pricing from './Components/Pricing.vue'
import Blog from './Components/Blog.vue'
import Packages from './Components/Packages.vue'
import Sweetcart from './Components/Sweetcart.vue'
import Photobooth from './Components/Photobooth.vue'

export const routes = [
    {path: '*', redirect: '/' },
    {path: '/', component: Home},
    {path: '/gallery', component: Gallery},
    {path: '/pricing', component: Pricing},
    {path: '/contact', component: Contact},
    {path: '/blog', component: Blog},
    {path: '/packages', component: Packages},
    {path: '/sweetcart', component: Sweetcart},
    {path: '/photobooth', component: Photobooth}
]