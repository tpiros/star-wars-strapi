<template>
  <div>
   <v-card>
    <!-- <v-img max-height="500" contain v-if="character.image"
      :src="transformImage(`jam/${character.image}`)"
    ></v-img> -->
    <img max-height="500" style="display: block; margin-left: auto; margin-right: auto;" v-if="character.image"
      :src="transformImage(`jam/${character.image}`)" />
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ character.name }} <font-awesome-icon :style="{ color: 'red' }" v-if="['rebel', 'resistance'].some(el => character.alliance.toLowerCase().includes(el))" :icon="['fab', 'rebel']" />
          <font-awesome-icon v-else :icon="['fab', 'empire']" /></h3>
        <span class="grey--text">{{ character.species }} | {{ character.weapon || 'no weapon' }} | {{ character.homeworld }}</span>
        <div> {{ character.bio }} </div>
      </div>
    </v-card-title>

  </v-card>
  </div>
</template>

<script>
import cl from '~/plugins/cloudinary';

export default {
  data: () => ({ character: {} }),
  async asyncData({ params, $axios }) {
    const data = await $axios.$get(`characters/${params.id}`);
    return { character: data };
  },
  methods: {
    transformImage(publicId) {
      return cl.url(publicId, {
        secure: true,
        transformation: [{
          width: 400,
          height: 500,
          crop: 'fit',
          fetchFormat: 'auto',
          quality: 'auto',
        }]
      })
    }, 
  }
}
</script>