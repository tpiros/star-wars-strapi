<template>
  <v-bottom-nav :value="true" router dark app>
    <v-btn color="blue" flat value="characters" to="/">
      <span>Characters</span>
      <v-icon>list</v-icon>
    </v-btn>
    <!-- <v-btn color="blue" flat value="alliance" to="/alliance">
      <span>Alliance</span>
      <v-icon>group</v-icon>
    </v-btn> -->
  </v-bottom-nav>
</template>