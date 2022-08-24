<template>
  <div class="note-summary" :class="{ active }">
    <div class="note-summary__header">
      <v-icon
        size="22"
        color="tagText"
        @click.stop="$emit('onClickFav', data.id)"
        >{{ data.fav ? "mdi-star" : "mdi-star-outline" }}</v-icon
      >
      <div class="header-title" :title="data.title">{{ data.title }}</div>
    </div>
    <div class="note-summary__content">
      {{ data.content }}
    </div>
    <div class="note-summary__footer">
      <div class="footer-tags">
        <div class="tag-item" v-for="tag in data.tags">{{ tag }}</div>
      </div>
      <div class="footer-right">
        <div class="footer-file" v-if="data.file">
          <v-icon size="18">mdi-paperclip</v-icon>
        </div>
        <div class="footer-time">{{ data.time }}</div>
      </div>
    </div>
  </div>
</template>
    
<script setup>
defineProps({
  data: Object,
  active: Boolean,
});
</script>
    
<style lang="sass">
.note-summary
    width: 100%
    height: 170px
    border-bottom: 1px solid #D8D8D8
    padding: 27px 34px
    cursor: pointer
    transition: .2s ease-in-out
    &:hover, &.active
        background-color: rgb(var(--v-theme-listHover))
    &__header
        display: flex
        align-items: center
        font-size: 18px
        font-weight: 600
        color: rgb(var(--v-theme-title))
    .header-title
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
    i
        margin-right: 8px
    &__content
        height: 48px
        overflow: hidden
        text-align: justify
        display: -webkit-box
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
        color: rgb(var(--v-theme-contentText))
        margin: 10px 0 5px 0
        font-size: 15px
    &__footer
        display: flex
        justify-content: space-between
        align-items: center
    .footer-tags
        display: flex
        .tag-item
            height: 25px
            padding: 3px 16px
            color: rgb(var(--v-theme-primary))
            background-color: #ffffff
            font-size: 14px
            border-radius: 3px
            margin-right: 3px
    .footer-right
        display: flex
        align-items: center
    .footer-file
        margin-bottom: 2px
        margin-right: 8px
    .footer-time
        color: rgb(var(--v-theme-text)) !important
        font-weight: 600
        font-size: 15px
</style>