<template>
  <v-card>
    <v-combobox
      :items="alliance"
      label="Alliance"
      outline
      @change="filter"
      hide-details
    >
      <template slot="item" slot-scope="data">
        <font-awesome-icon :style="{ color: 'red' }" v-if="['rebel', 'resistance'].some(el => data.item.toLowerCase().includes(el))" :icon="['fab', 'rebel']" size="lg" />
        <font-awesome-icon v-if="data.item.toLowerCase().includes('order')" :icon="['fab', 'first-order-alt']" size="lg" />
        <font-awesome-icon v-if="data.item.toLowerCase().includes('empire')" :icon="['fab', 'empire']" size="lg" />
        <span class="cb-item">{{ data.item }}</span>
      </template>
    </v-combobox>
    <div v-if="characters">
      <template v-for="(character, index) in characters">
        <v-divider v-if="index > 0" :key="`d-${index}`"></v-divider>
        <v-list-tile
          :key="`l-${index}`"
          avatar
          :to="`/characters/${character.id}`"
        >
          <v-list-tile-avatar>
            <cld-image :publicId="`jam/${character.image}`" width="40" height="40" crop="thumb" gravity="face" fetchFormat="auto" quality="auto" secure="true" :alt="`${character.name}`"/>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="character.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="character.alliance"></v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <font-awesome-icon :style="{ color: 'red' }" v-if="['rebel', 'resistance'].some(el => character.alliance.toLowerCase().includes(el))" :icon="['fab', 'rebel']" size="2x"/>
            <font-awesome-icon v-if="character.alliance.toLowerCase().includes('order')" :icon="['fab', 'first-order-alt']" size="2x"/>
            <font-awesome-icon v-if="character.alliance.toLowerCase().includes('empire')" :icon="['fab', 'empire']" size="2x"/>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </div>
  </v-card>
</template>
<script>
  export default {
    data: () => ({ characters: [] }),
    async asyncData({ $axios }) {
      let data = await $axios.$get('characters');
      data = data.map(d => d.alliance);
      const alliance = [...new Set(data)];
      return { 
        alliance
      };
    },
    methods: {
      async filter(value) {
        let data = await this.$axios.$get(`characters?alliance=${value}`);
        data = data.map(d => ({
          id: d.id,
          name: d.name,
          alliance: d.alliance,
          image: d.image,
          favourite: d.favourite
        }));
        this.$data.characters = data;
      },
    }
  }
</script>
<style scoped>
.cb-item { 
  margin-left: .5em
}
</style>