<template>
  <div class="note-card">
    <div class="note-card__active" v-if="active"></div>
    <div class="note-card__bg" :class="{ active }">
      <div class="note-card__mask" :class="{ active }"></div>
    </div>
    <div class="note-card__content">
      <div class="note-card__content-header">
        <div class="header-fav">
          <v-icon
            size="22"
            color="tagText"
            @click.stop="$emit('onClickFav', data.id)"
            >{{ data.fav ? "mdi-star" : "mdi-star-outline" }}</v-icon
          >
        </div>
        <div class="header-title">{{ data.title }}</div>
      </div>
      <div class="note-card__content-body">{{ data.content }}</div>
      <div class="note-card__content-footer">
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
  </div>
</template>
    
<script setup>
defineProps({
  data: Object,
  active: Boolean,
});
</script>
    
<style lang="sass">
.note-card
    width: 290px
    height: 255px
    position: relative
    cursor: pointer
.note-card__bg
    width: 290px
    height: 255px
    top: 0px
    left: 0px
    position: absolute
    box-shadow: 0px 0px 6px #A3A3A31A
    border-radius: 4px
    background-color: rgb(var(--v-theme-background))
    -webkit-clip-path: polygon(0 0, 88% 0%, 100% 14%, 100% 100%, 0 100%, 0 51%)
    clip-path: polygon(0 0, 88% 0%, 100% 14%, 100% 100%, 0 100%, 0 51%)
    &.active
        width: 284px
        height: 249px
        top: 3px
        left: 3px
.note-card__active
    width: 290px
    height: 255px
    top: 0
    left: 0
    position: absolute
    border-radius: 4px
    box-shadow: 0px 0px 6px #A3A3A31A
    background-color: rgb(var(--v-theme-tagText))
    -webkit-clip-path: polygon(0 0, 88% 0%, 100% 14%, 100% 100%, 0 100%, 0 51%)
    clip-path: polygon(0 0, 88% 0%, 100% 14%, 100% 100%, 0 100%, 0 51%)
.note-card__mask
    position: absolute
    top: 0
    right: 0
    width: 36px
    height: 36px
    transform: matrix(-1, 0, 0, -1, 0, 0)
    background: rgb(var(--v-theme-cardAngle)) 0% 0% no-repeat padding-box
    box-shadow: 0px 0px 6px #A3A3A31A
    &.active
        width: 33px
        height: 33px
.note-card__content
    padding: 25px
    position: absolute
    width: 290px
    height: 255px
    &-header
        border-bottom: 1px solid rgb(var(--v-theme-pageDrawerBorder))
        display: flex
        align-items: center
        padding: 12px 0
        .header-fav
            margin-right: 8px
        .header-title
            font-size: 18px
            font-weight: 600
            padding-top: 3px
            color: rgb(var(--v-theme-title))
    &-body
        margin: 16px 0 20px 0
        color: rgb(var(--v-theme-contentText))
        font-size: 15px
        height: 90px
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 4
        overflow: hidden
        text-align: justify
    &-footer
        display: flex
        justify-content: space-between
        align-items: center
        .footer-tags
            display: flex
            .tag-item
                height: 25px
                padding: 3px 16px
                color: rgb(var(--v-theme-tagText))
                background-color: rgb(var(--v-theme-tagBg))
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