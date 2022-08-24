<template>
  <div class="page-drawer">
    <div class="page-drawer__header">
      <search-bar></search-bar>
      <div class="pt-7 pb-4 d-flex align-center justify-space-between">
        <div class="page-drawer__title">所有筆記</div>
        <!-- <text-select :items="typeItems" value="all"></text-select> -->
        <icon-select
          :value="listStyle"
          :items="listStyleItems"
          size="26"
          @change="onChangeListStyle"
        ></icon-select>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="page-drawer__body" :class="{ 'pa-0': listStyle !== 'card' }">
      <template v-for="(item, index) in notes" :key="index">
        <note-card
          v-if="listStyle === 'card'"
          :data="item"
          :active="selected && selected.id === item.id"
          @onClickFav="onClickFav"
          @click="onSelect(item)"
        ></note-card>
        <note-summary
          v-if="listStyle === 'summary'"
          :data="item"
          :active="selected && selected.id === item.id"
          @onClickFav="onClickFav"
          @click="onSelect(item)"
        ></note-summary>
        <div
          v-if="listStyle === 'list'"
          class="list-item"
          :class="{ active: selected && selected.id === item.id }"
          @click="onSelect(item)"
        >
          <div class="list-item__time">{{ item.time }}</div>
          <div class="list-item__title" :title="item.title">
            {{ item.title }}
          </div>
        </div>
      </template>
    </div>
  </div>
  <div class="page-content" id="editor">
    <div class="page-content__header" id="editor-toolbar-container"></div>
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
      <div class="page-content__content-wrap" id="editor-content"></div>
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
import { ref, onMounted } from "vue";
import SearchBar from "./SearchBar.vue";
import NoteCard from "./NoteCard.vue";
import ToolBar from "./ToolBar.vue";
import NoteSummary from "./NoteSummary.vue";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh";

const editorData = ref("");
const selected = ref(null);
const listStyle = ref("card");
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
    title: "你可以接受這個數據嗎？？？？？",
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

const listStyleItems = ref([
  { title: "卡片檢視", value: "card", icon: "mdi-view-module-outline" },
  { title: "摘要檢視", value: "summary", icon: "mdi-view-list-outline" },
  { title: "文字列表檢視", value: "list", icon: "mdi-format-list-bulleted" },
]);

onMounted(() => {
  DecoupledEditor.create(document.querySelector("#editor-content"), {
    language: "zh",
    placeholder: "請輸入內容",
    fontFamily: {
      options: [
        "Arial",
        "Courier",
        "Courier New",
        "Georgia",
        "Helvetica Neue",
        "Lucida Sans Unicode",
        "Microsoft JhengHei",
        "Monospace",
        "Myriad Pro",
        "Sans-serif",
        "Tahoma",
        "Times New Roman",
        "Trebuchet MS",
        "Ubuntu",
        "Ubuntu Mono",
        "Verdana",
      ],
      supportAllValues: true,
    },
    fontSize: {
      options: [10, 12, 14, 16, 18, 24, 28],
    },
    toolbar: [
      "FontFamily",
      "FontSize",
      "Bold",
      "Italic",
      "Underline",
      "Outdent",
      "Indent",
      "Alignment",
      "NumberedList",
      "BulletedList",
      "ImageUpload",
      "Link",
      "|",
      "Undo",
      "Redo",
    ],
  })
    .then((editor) => {
      const toolbarContainer = document.querySelector(
        "#editor-toolbar-container"
      );
      toolbarContainer.appendChild(editor.ui.view.toolbar.element);
      window.editor = editor;
    })
    .catch((err) => {
      console.error(err.stack);
    });
});

const onClickFav = (id) => {
  const find = notes.value.find((item) => item.id === id);
  if (!find) return;
  find.fav = !find.fav;
};

const onSelect = (item) => {
  selected.value =
    selected.value && selected.value.id === item.id ? null : item;
  editorData.value = selected.value
    ? `<span>${selected.value.content}</span>`
    : "";
  window.editor.setData(editorData.value);
};

const onChangeListStyle = (val) => {
  listStyle.value = val.value;
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
  &__title
    font-weight: 600
    font-size: 18px
  &__body::-webkit-scrollbar
    display: none
  &__body
    overflow-y: auto
    overflow-x: hidden
    height: calc(100vh - 169px)
    -ms-overflow-style: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
  .list-item
    display: flex
    align-items: center
    font-size: 18px
    font-weight: 600
    padding: 20px 34px
    border-bottom: 1px solid #D8D8D8
    cursor: pointer
    &:hover, &.active
      background-color: rgb(var(--v-theme-listHover))
    &__time
      width: 95px
      color: rgb(var(--v-theme-contentText))
    &__title
      width: calc(100% - 95px)
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
      color: rgb(var(--v-theme-title))
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
    padding: 16px 0 !important
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
.ck.ck-toolbar
  background-color: transparent !important
  border: none !important
  &__items > *
    margin-right: 8px !important
  .ck-icon
    color: rgb(var(--v-theme-title)) !important
  .ck-button
    border: none !important
    &:focus
      box-shadow: none !important
.ck-content
  box-shadow: none !important
  border: none !important
  color: rgb(var(--v-theme-contentText))
  min-height: 360px
  &:focus-visible
    outline: none !important
  a
    background-color: transparent !important
    color: rgb(var(--v-theme-tagText)) !important
.ck.ck-content ul, .ck.ck-content ul li
  list-style-type: inherit
.ck.ck-content ul, .ck.ck-content ol
  padding-left: 40px
</style>
