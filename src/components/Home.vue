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
        :active="selected && selected.id === item.id"
        @onClickFav="onClickFav"
        @click="onSelect(item)"
      ></note-card>
    </div>
  </div>
  <div class="page-content">
    <div class="page-content__header">
      <tool-bar></tool-bar>
    </div>
    <div class="page-content__body">
      <input
        class="page-content__input-wrap"
        placeholder="無標題"
        :value="selected ? selected.title : ''"
      />
      <div class="page-content__tag-wrap">
        <div v-if="selected && selected.tags">
          <div v-for="(tag, index) in selected.tags" class="tag" :key="index">
            {{ tag }}
            <v-icon size="12">mdi-close</v-icon>
          </div>
        </div>
        <div class="add-tag">新增 <v-icon size="12">mdi-plus</v-icon></div>
      </div>
      <div class="page-content__content-wrap">
        <v-textarea
          rows="15"
          row-height="20"
          variant="outlined"
          placeholder="請寫下內容"
          :model-value="selected ? selected.content : ''"
          auto-grow
          single-line
          hide-details
          @update:modelValue="onUpdateContent"
        ></v-textarea>
      </div>
      <div class="page-content__file-wrap">
        <div v-if="selected && selected.file">
          <div class="file" v-for="(file, index) in selected.file" :key="index">
            <div>
              <v-icon size="22" class="mr-1">mdi-paperclip</v-icon>
              {{ file }}
            </div>
            <v-icon size="30">mdi-close</v-icon>
          </div>
        </div>
        <div class="add-file">
          <div>
            <v-icon size="22" class="mr-1">mdi-file-outline</v-icon>
            上傳檔案、圖片、音檔
            <span class="ml-3 upload-file">點擊上傳檔案</span>
          </div>
          <v-icon size="30">mdi-plus</v-icon>
        </div>
      </div>
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
    tags: ["新聞", "測試"],
    time: "2022/8/18",
    fav: true,
    file: [
      "12628 - 09月07日 午前０時のNHKニュース.pdf",
      "12628 - 09月07日 午前０時のNHKニュース.pdf",
    ],
  },
  {
    id: 2,
    title: "中秋烤肉食材這樣搭最好",
    content: `「可樂，参和，只有中國酒店，如果有機會我想和一個最好的朋友去旅行帶上背包、帶上相機、帶上足夠的錢走走停停拍下每個美`,
    tags: ["健康"],
    time: "2022/8/18",
    fav: false,
    file: ["12628 - 09月07日 午前０時のNHKニュース.pdf"],
  },
  {
    id: 3,
    title: "中秋烤肉食材這樣搭最好",
    content: `「可樂，参和，只有中國酒店，如果有機會我想和一個最好的朋友去旅行帶上背包、帶上相機、帶上足夠的錢走走停停拍下每個美`,
    tags: ["健康"],
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

const onSelect = (item) => {
  selected.value =
    selected.value && selected.value.id === item.id ? null : item;
};

const onUpdateContent = (val) => {
  console.log(val);
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
  &__header
    border-bottom: 1px solid #E6E6E6
    padding-bottom: 6px
    height: 45px
  &__body::-webkit-scrollbar
    display: none
  &__body
    height: calc(100vh - 90px - 45px)
    overflow: auto
    overflow-x: hidden
    -ms-overflow-style: none
  &__input-wrap
    color: rgb(var(--v-theme-title))
    font-size: 21px
    font-weight: 600
    width: 100%
    padding: 30px 0 15px 0
    &:focus-visible
      outline: none
  &__tag-wrap
    display: flex
    & > div
      display: flex
    .tag, .add-tag
      font-size: 14px
      width: 75px
      height: 25px
      display: flex
      align-items: center
      justify-content: center
      border-radius: 3px
      margin-right: 8px
      i
        margin-top: 2px
        margin-left: 6px
        cursor: pointer
    .add-tag
      border: dashed 1px #C7C7C7
      color: #A3A3A3
      cursor: pointer
    .tag
      color: rgb(var(--v-theme-tagText))
      background-color: rgb(var(--v-theme-tagBg))
  &__content-wrap
    padding: 30px 0
    .v-input--density-default
      --v-input-padding-top: 0 !important
    .v-field__input
      padding: 0px
      border-radius: 0
      text-align: justify
      color: rgb(var(--v-theme-contentText))
      font-size: 16px
    .v-field__outline
      --v-field-border-width: 0px !important
      border-radius: 0
  &__file-wrap
    .file, .add-file
      padding: 18px 30px
      display: flex
      align-items: center
      justify-content: space-between
      font-weight: 600
      margin-top: 12px
    .file
      color: rgb(var(--v-theme-tagText))
      background-color: rgb(var(--v-theme-tagBg))
      & > *
        cursor: pointer
    .add-file
      border: dashed 1px #C7C7C7
      color: #A3A3A3
      .upload-file
        text-decoration: underline
        font-weight: 600
        cursor: pointer
</style>
