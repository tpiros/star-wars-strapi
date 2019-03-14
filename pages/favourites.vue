<template>
  <v-list two-line>
    <template v-for="(character, index) in characters">
      <v-divider v-if="index > 0" :key="`d-${index}`"></v-divider>
      <v-list-tile
        :key="index"
        avatar
        :to="`/characters/${character.id}`"
      >
        <v-list-tile-avatar>
          <img :src="transformImage(`jam/${character.image}`)">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="character.name"></v-list-tile-title>
          <v-list-tile-sub-title v-html="character.alliance"></v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon v-if="character.favourite" color="blue">star</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
import axios from 'axios';
import cl from '~/plugins/cloudinary';

export default {
  data: () => ({ characters: [] }),
  async asyncData() {
    let { data } = await axios.get('http://localhost:1337/characters?favourite=1');
    data = data.map(d => ({
      id: d.id,
      name: d.name,
      alliance: d.alliance,
      image: d.image,
      favourite: d.favourite
    }));
    return { characters: data };
  },
  methods: {
    transformImage(publicId) {
      return cl.url(publicId, {
        secure: true,
        transformation: [{
          width: 40,
          height: 40,
          crop: 'thumb',
          gravity: 'face'
        }]
      })
    },
  },
}
</script>
