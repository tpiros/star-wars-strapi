import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faRebel } from '@fortawesome/free-brands-svg-icons/faRebel'
import { faEmpire } from '@fortawesome/free-brands-svg-icons/faEmpire'
import { faFirstOrderAlt } from '@fortawesome/free-brands-svg-icons/faFirstOrderAlt'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faRebel, faEmpire, faFirstOrderAlt)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)