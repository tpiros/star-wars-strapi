<template>
  <div>
   <v-card>
    <v-img v-if="character.image"
      :src="transformImage(`jam/${character.image}`)"
    ></v-img>

    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ character.name }}</h3>
        <span class="grey--text">{{ character.alliance }} | {{ character.weapon }} | {{ character.homeworld }}</span>
        <div> {{ character.bio }} </div>
      </div>
    </v-card-title>

    <v-card-actions @click="toggleFavourite(character.favourite)">
      <v-btn flat v-if="!character.favourite" color="blue">Favourite</v-btn>
      <v-btn flat v-else color="red">Unfavourite</v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
import axios from 'axios';
import cl from '~/plugins/cloudinary';

export default {
  data: () => ({ character: {} }),
  async asyncData({ params }) {
    const { data } = await axios.get(`http://localhost:1337/characters/${params.id}`);
    return { character: data };
  },
  methods: {
    transformImage(publicId) {
      return cl.url(publicId, {
        secure: true,
        transformation: [{
          width: 300,
          crop: 'fit',
          fetchFormat: 'auto',
          quality: 'auto',
        }]
      })
    }, 
    async toggleFavourite(favourite) {
      const { data } = await axios.put(`http://localhost:1337/characters/${this.$route.params.id}`, {
        favourite: !favourite
      });
      this.$data.character = data;
    }
  }
}
</script>
