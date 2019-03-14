<template>
  <v-app>
    <v-content>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <h1 class="text-md-center text-xs-center"><nuxt-link to="/">Star Wars</nuxt-link><v-icon medium color="red">favorite</v-icon></h1>
          <v-card>
            <nuxt />
          </v-card>
        </v-flex>
      </v-layout>
      <bottomNavigation />
    </v-content>
  </v-app>
</template>
<script>
  import bottomNavigation from '@/components/bottomNavigation';
  export default {
    components: {
      bottomNavigation
    }
  }
</script>