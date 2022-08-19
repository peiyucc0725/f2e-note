<template>
  <div class="page-drawer">
    <div class="page-drawer__header">
      <search-bar></search-bar>
      <div class="pt-7 pb-4 d-flex align-center justify-space-between">
        <text-select :items="typeItems" value="all"></text-select>
        <icon-select :items="listStyle" value="card" size="26"></icon-select>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="page-drawer__body">
      <note-card
        v-for="(item, index) in notes"
        :key="index"
        :data="item"
        :active="selected === item.id"
        @onClickFav="onClickFav"
        @click="onSelect(item.id)"
      ></note-card>
    </div>
  </div>
  <div class="page-content">
    <tool-bar></tool-bar>
    <v-divider></v-divider>
    <div class="page-content__input-wrap">
      <input class="title-input" placeholder="無標題"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SearchBar from "./SearchBar.vue";
import NoteCard from "./NoteCard.vue";
import ToolBar from "./ToolBar.vue";

const selected = ref(null);
const typeItems = ref([
  {
    title: "所有筆記",
    value: "all",
  },
  {
    title: "捷徑",
    value: "fav",
  },
]);

const notes = ref([
  {
    id: 1,
    title: "你可以接受這個數據嗎？",
    content: `到那祥林的一的是見了還是，上一了一可以晚飯但看。來吃。看不一月不多立刻？ 上來大學的事什麼。廢噗各位望能莊子的時，我覺過來君的，已經的不的味，版的覺得果然的年，一起著的角上，黑人說什大約舉人嚴重個很不能，決定笑的假洋這個認真⋯到這不適是自錯過一大，土穀以為，感覺例的煩躁她也人問會說。別人的說，在那出來：總算閃的拿來也沒上了大人，大人知道勉強我是衣服。好好他要，然是，許多活擊白的大家動畫兒子十幾，到第這也站著低聲，上的票的時的讓我還有。活了憤怒，之前不用了啊時候還是⋯很開用的希望以後，早安基本居然，聊天。在那走的聽到瞬間，更新，當的裡面柯文手上，自己分鐘這個自己的玩有回：怎麼走著莊子聽到也正不要，好想一張？`,
    tag: ["新聞", "測試"],
    time: "2022/8/18",
    fav: true,
    file: 'https://www.google.com.tw/?hl=zh_TW',
  },
  {
    id: 2,
    title: "中秋烤肉食材這樣搭最好",
    content: `「可樂，参和，只有中國酒店，如果有機會我想和一個最好的朋友去旅行帶上背包、帶上相機、帶上足夠的錢走走停停拍下每個美`,
    tag: ["健康"],
    time: "2022/8/18",
    fav: false,
    file: 'https://www.google.com.tw/?hl=zh_TW',
  },
  {
    id: 3,
    title: "中秋烤肉食材這樣搭最好",
    content: `「可樂，参和，只有中國酒店，如果有機會我想和一個最好的朋友去旅行帶上背包、帶上相機、帶上足夠的錢走走停停拍下每個美`,
    tag: ["健康"],
    time: "2022/8/18",
    fav: false,
    file: null,
  },
]);

const listStyle = ref([
  { title: "卡片檢視", value: "card", icon: "mdi-view-module-outline" },
  { title: "摘要檢視", value: "summary", icon: "mdi-view-list-outline" },
  { title: "文字列表檢視", value: "list", icon: "mdi-format-list-bulleted" },
]);

const onClickFav = (id) => {
  const find = notes.value.find((item) => item.id === id);
  if (!find) return;
  find.fav = !find.fav;
};

const onSelect = (id) => {
  selected.value = selected.value === id ? null : id;
};
</script>

<style lang="sass">
.page-drawer
  height: 100vh
  .text-select
    .v-input__control
      width: 110px !important
  &__body::-webkit-scrollbar
    display: none
  &__body
    overflow-y: auto
    overflow-x: hidden
    height: calc(100vh - 169px)
    -ms-overflow-style: none
    .note-card
      margin-bottom: 15px
      transition: .2s ease-in-out
      &:hover
        transform: translate(1px, -1px)
.page-content
  padding: 45px
  &__input-wrap
    padding: 30px 0
    .title-input
      color: rgb(var(--v-theme-title))
      font-size: 21px
      font-weight: 600
      &:focus-visible
        outline: none
</style>
