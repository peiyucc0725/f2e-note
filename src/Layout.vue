<template>
  <v-navigation-drawer class="a-drawer" permanent>
    <v-list>
      <v-list-item title="FreeNote." class="drawer-title"> </v-list-item>
      <v-list-item>
        <v-btn block class="mt-3 add-note">
          <v-icon class="mr-2" size="28">mdi-plus-circle</v-icon>
          新增筆記
        </v-btn>
      </v-list-item>
    </v-list>
    <v-list color="transparent" class="router-list">
      <v-list-item
        prepend-icon="mdi-file-document-outline"
        title="所有筆記"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-star" title="捷徑"></v-list-item>
      <v-list-item prepend-icon="mdi-tag" title="標籤"></v-list-item>
      <v-list-item
        prepend-icon="mdi-calendar-blank-outline"
        title="月曆"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="與我共用"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-delete-outline"
        title="垃圾桶"
      ></v-list-item>
    </v-list>
    <template v-slot:append>
      <v-list>
        <v-list-item>
          <div>
            <span class="mr-3">模式</span>
            <v-btn
              icon="mdi-weather-sunny"
              size="x-small"
              class="ml-3 mode-active"
              color="#ffffff"
            ></v-btn>
            <v-btn
              icon="mdi-weather-night"
              size="x-small"
              class="ml-3"
              variant="outlined"
            ></v-btn>
          </div>
        </v-list-item>
        <v-list-item class="append-user">
          <v-avatar class="mr-3">
            <v-icon icon="mdi-account-circle" size="35"></v-icon>
          </v-avatar>
          Sandy
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
  <v-main>
    <router-view></router-view>
  </v-main>
</template>
    
<script setup>
</script>
    
<style lang="sass">
#app
  font-family: Myriad Pro, Semibold, Inter, Avenir, Helvetica, Arial, sans-serif
.a-drawer
  .v-navigation-drawer__content, .v-navigation-drawer__append
    padding: 48px 0
  .v-list, .v-navigation-drawer__content, .v-navigation-drawer__append
    background-color: rgb(var(--v-theme-primary))
    .v-list-item, .v-list-item-title, i
      color: rgb(var(--v-theme-drawerText))
      i
        opacity: 1
      .add-note
        height: 48px
        color: rgb(var(--v-theme-primary))
        i
          color: rgb(var(--v-theme-primary))
      .v-btn
        font-size: 18px
  .drawer-title
    .v-list-item-title
      font-size: 22px
      font-weight: 600
      padding-left: 21px
  .v-list-item
    padding-inline-start: 33px !important
    padding-inline-end: 33px !important
  .router-list .v-list-item
    cursor: pointer
    padding-inline-start: 54px !important
    padding-inline-end: 54px !important
    &:hover
      background-color: #ffffff
      .v-list-item-title, i
        color: rgb(var(--v-theme-primary))
  .v-navigation-drawer__append 
    .v-list-item
      padding-inline-start: 54px !important
      padding-inline-end: 54px !important
    .append-user
      margin-top: 20px
      .v-list-item__content
        display: flex
        align-items: center
        opacity: 0.7
        font-size: 18px
        font-weight: 600
    .mode-active
      i
        color: rgb(var(--v-theme-primary))
.v-main__wrap
  display: flex
  overflow-y: hidden
  .page-drawer
    width: 355px
    min-height: 100vh
    background: rgb(var(--v-theme-pageDrawerBg)) 0% 0% no-repeat padding-box
    border-right: 1px solid rgb(var(--v-theme-pageDrawerBorder))
    &__header
      padding: 50px 32px 0px 32px
    &__body
      padding: 32px 32px 50px 32px
  .page-content
    width: calc(100% - 355px)
    min-height: 100vh
</style>