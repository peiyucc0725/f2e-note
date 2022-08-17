<template>
  <v-select
    v-model="value"
    :items="items"
    :menu-props="{'content-class': 'text-select-menu'}"
    class="text-select"
    variant="plain"
    menu-icon="mdi-chevron-down"
    hide-details
    single-line
  ></v-select>
</template>
    
<script setup>
defineProps({
  value: String,
  items: Array,
});
</script>
    
<style lang="sass">
.text-select
    .v-select__selection-text
        font-weight: 600
        font-size: 18px
.text-select-menu
    .v-list
        background-color: rgb(var(--v-theme-pageDrawerBg)) !important
        .v-list-item
            &:hover
                background-color: #E9EBF4
        .v-list-item--active
            background-color: rgb(var(--v-theme-primary)) !important
            color: rgb(var(--v-theme-drawerText)) !important
</style>