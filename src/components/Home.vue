<template>
  <div class="page-drawer">
    <div class="page-drawer__header">
      <search-bar></search-bar>
      <div class="mt-3 d-flex">
        <text-select :items="typeItems" value="all" ></text-select>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="page-drawer__body">
      <note-card></note-card>
    </div>
  </div>
  <div class="page-content"></div>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from './SearchBar.vue'
import TextSelect from './TextSelect.vue'
import NoteCard from './NoteCard.vue'

const typeItems = ref([{
  title: '所有筆記',
  value: 'all'
},{
  title: '捷徑',
  value: 'fav'
}])
</script>

<style lang="sass">
.page-drawer
  .text-select
    .v-input__control
      width: 110px !important
</style>
