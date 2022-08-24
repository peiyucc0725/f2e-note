<template>
  <v-menu bottom>
    <template v-slot:activator="{ props }">
      <div v-bind="{ ...$attrs, ...props }">
        <v-icon v-if="value" :size="size" class="pointer">{{
          changeIcon ? mappingIcon(value) : defaultIcon
        }}</v-icon>
        <v-icon
          v-if="showArrow"
          class="icon-select-arrow"
          :class="{ expanded: props['aria-expanded'] === 'true' }"
          :size="size"
          >mdi-chevron-down</v-icon
        >
      </div>
    </template>
    <v-list class="icon-select__list">
      <v-list-item v-for="(item, i) in items" :key="i" @click="$emit('change', item)">
        <template v-slot:prepend v-if="item.icon">
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
    
<script setup>
const props = defineProps({
  items: Array,
  value: String,
  size: {
    type: [String, Number],
    default: 24,
  },
  showArrow: {
    type: Boolean,
    default: false,
  },
  changeIcon: {
    type: Boolean,
    default: true,
  },
  defaultIcon: String,
});

const mappingIcon = (val) => {
  const find = props.items.find((item) => item.value === val);
  if (!find) return "";
  return find.icon;
};
</script>
    
<style lang="sass">
.icon-select__list
  background-color: rgb(var(--v-theme-background)) !important
  .v-list-item
    cursor: pointer
    .v-list-item-title
      font-weight: 600
      color: rgb(var(--v-theme-contentText))
    &__prepend
      i
        margin-inline-end: 10px !important
        color: rgb(var(--v-theme-contentText))
        opacity: 1
    &:hover
      background-color: rgb(var(--v-theme-tagBg)) !important
    &--active
      background-color: rgb(var(--v-theme-tagText)) !important
      .v-list-item-title
        color: rgb(var(--v-theme-background)) !important
.icon-select-arrow
  transition: .3s ease-in-out
  transform: rotate(0)
  &.expanded
    transform: rotate(180deg)
</style>