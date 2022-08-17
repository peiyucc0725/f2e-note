<template>
  <div class="note-card">
    <div class="note-card__active"></div>
    <div class="note-card__bg active">
      <div class="note-card__mask active"></div>
    </div>
  </div>
</template>
    
<script setup>
</script>
    
<style lang="sass">
.note-card
    width: 290px
    height: 255px
    position: relative
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
    background-color: rgb(var(--v-theme-primary))
    -webkit-clip-path: polygon(0 0, 88% 0%, 100% 14%, 100% 100%, 0 100%, 0 51%)
    clip-path: polygon(0 0, 88% 0%, 100% 14%, 100% 100%, 0 100%, 0 51%)
.note-card__mask
    position: absolute
    top: 0
    right: 0
    width: 36px
    height: 36px
    transform: matrix(-1, 0, 0, -1, 0, 0)
    background: #E9EBF4 0% 0% no-repeat padding-box
    box-shadow: 0px 0px 6px #A3A3A31A
    &.active
        width: 33px
        height: 33px
</style>