const pkg = require('./package')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
import axios from 'axios'

module.exports = {
  // mode: 'universal',
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '~/plugins/fontawesome.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'https://serene-hamlet-60919.herokuapp.com/'
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  // workbox: {
  //   importScripts: ['cloudinaryPlugin.min.js'],
  //   runtimeCaching: [{
  //     urlPattern: 'https://fonts.googleapis.com/.*',
  //     handler: 'staleWhileRevalidate',
  //     method: 'GET',
  //     strategyOptions: { cacheableResponse: { statuses: [0, 200] }}
  //   }, {
  //     urlPattern: 'https://fonts.gstatic.com/.*',
  //     handler: 'cacheFirst',
  //     method: 'GET',
  //     strategyOptions: {cacheableResponse: { statuses: [0, 200] }}
  //   },{
  //     urlPattern: 'https://serene-hamlet-60919.herokuapp.com/.*',
  //     handler: 'networkFirst',
  //     method: 'GET',
  //     strategyOptions: { cacheableResponse: { statuses: [0, 200] }}
  //   }, {
  //     urlPattern: 'https://res.cloudinary.com/.*',
  //     handler: 'staleWhileRevalidate',
  //     strategyOptions: { cacheableResponse: { statuses: [0, 200] }},
  //     options: {
  //       cacheName: 'cloudinary-images',
  //       plugins: [{
  //         requestWillFetch: async ({ request }) => cloudinaryPlugin.requestWillFetch(request)
  //       }]
  //     }
  //   }]
  // },
  generate: {
    routes: async () => {
      const { data } = await axios.get('https://serene-hamlet-60919.herokuapp.com/characters');
      return data.map(character => `/characters/${character.id}`);
    }
  }
}
