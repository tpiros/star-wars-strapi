<template>
  <v-app>
    <v-content>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <div class="text-md-center text-xs-center">
            <v-btn color="primary" raised large to="/" dark><v-icon left dark color="red">favorite</v-icon> Star Wars <v-icon right dark color="red">favorite</v-icon></v-btn>
          </div>
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