<template>
  <v-app>
    <Layout></Layout>
  </v-app>
</template>

<script setup>
import Layout from "./Layout.vue";
</script>

<style lang="sass">
html
  overflow-y: hidden !important
.v-tooltip .v-overlay__content
  transition-delay: 0s, .5s
  border-radius: 3px !important
  padding: 3px 10px !important
  background-color: #343338 !important
  color: #ffffff !important
  font-weight: 600
</style>