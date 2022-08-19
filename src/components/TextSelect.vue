<template>
  <div :style="{ width: `${width}` }">
    <v-select
      v-model="value"
      v-bind="$attrs"
      :items="items"
      :menu-props="{ 'content-class': 'text-select-menu' }"
      class="text-select"
      variant="plain"
      menu-icon="mdi-chevron-down"
      hide-details
      single-line
    ></v-select>
  </div>
</template>
    
<script setup>
defineProps({
  value: [String, Number],
  items: Array,
  width: String
});
</script>
    
<style lang="sass">
.text-select
  .v-select__selection-text
    font-weight: 600
    font-size: 18px
  .v-field
    align-items: center
    &__append-inner
      padding-top: 0
    &__input
      padding: 0 4px
      min-height: auto
.text-select-menu
  .v-list
    background-color: rgb(var(--v-theme-background)) !important
    .v-list-item__overlay
      opacity: 0 !important
    .v-list-item
      .v-list-item-title
        font-weight: 600
        color: rgb(var(--v-theme-contentText))
      &:hover
        background-color: rgb(var(--v-theme-tagBg))
      &--active
        background-color: rgb(var(--v-theme-tagText)) !important
        .v-list-item-title
          color: rgb(var(--v-theme-background)) !important
</style>