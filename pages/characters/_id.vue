<template>
  <div>
   <v-card>
    <cld-image style="display: block; margin-left: auto; margin-right: auto;" :publicId="`jam/${character.image}`" width="400" height="500" crop="fit" fetchFormat="auto" quality="auto" secure="true" :alt="`${character.name}`" />
      
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

export default {
  data: () => ({ character: {} }),
  async asyncData({ params, $axios }) {
    const data = await $axios.$get(`characters/${params.id}`);
    return { character: data };
  },
}
</script>