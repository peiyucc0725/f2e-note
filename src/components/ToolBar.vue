<template>
  <div class="tool-bar">
    <v-tooltip location="bottom" text="字型">
      <template v-slot:activator="{ props }">
        <text-select
          v-bind="props"
          :items="fontItems"
          value="arial"
          width="110px"
        ></text-select>
      </template>
    </v-tooltip>
    <v-tooltip location="bottom" text="字型大小">
      <template v-slot:activator="{ props }">
        <text-select
          v-bind="props"
          :items="fontSizeItems"
          :value="12"
          width="70px"
        ></text-select>
      </template>
    </v-tooltip>
    <div v-for="(tool, index) in tools" :key="index">
      <v-tooltip location="bottom" :text="tool.title">
        <template v-slot:activator="{ props }">
          <v-icon
            v-if="tool.type === 'icon'"
            v-bind="props"
            size="24"
            color="title"
          >
            {{ `mdi-${tool.icon}` }}
          </v-icon>
        </template>
      </v-tooltip>
      <v-tooltip location="bottom" :text="tool.title">
        <template v-slot:activator="{ props }">
          <icon-select
            v-if="tool.type === 'select'"
            v-bind="props"
            :items="tool.list"
            :value="tool.selected"
            :changeIcon="!tool.icon"
            :defaultIcon="tool.icon"
            :showArrow="true"
          ></icon-select>
        </template>
      </v-tooltip>
    </div>
  </div>
</template>
    
<script setup>
import { ref } from "vue";

const fontItems = ref([
  { title: "Arial", value: "arial" },
  { title: "Helvetica", value: "helvetica" },
  { title: "Noto Sans TC", value: "notoSansTc" },
]);

const fontSizeItems = ref([
  8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96,
]);

const tools = ref([
  { type: "icon", icon: "format-bold", title: "粗體", value: "bold" },
  { type: "icon", icon: "format-italic", title: "斜體", value: "italic" },
  { type: "icon", icon: "format-underline", title: "底線", value: "underline" },
  {
    type: "icon",
    icon: "format-indent-increase",
    title: "增加縮排",
    value: "increase",
  },
  {
    type: "icon",
    icon: "format-indent-decrease",
    title: "減少縮排",
    value: "decrease",
  },
  {
    type: "select",
    list: [
      { title: "靠左對齊", value: "left", icon: "mdi-format-align-left" },
      { title: "靠右對齊", value: "right", icon: "mdi-format-align-right" },
      { title: "置中對齊", value: "center", icon: "mdi-format-align-center" },
      { title: "左右對齊", value: "justify", icon: "mdi-format-align-justify" },
    ],
    selected: "left",
    title: "對齊",
    value: "align",
  },
  {
    type: "select",
    icon: "mdi-format-line-spacing",
    list: [
      { title: "單行", value: 1 },
      { title: "1.15", value: 1.15 },
      { title: "1.5", value: 1.5 },
      { title: "雙行", value: 2 },
    ],
    selected: "default",
    title: "行距",
    value: "spacing",
  },
  {
    type: "icon",
    icon: "format-list-bulleted",
    title: "項目符號",
    value: "bulleted",
  },
  { type: "icon", icon: "link", title: "連結", value: "link" },
  { type: "icon", icon: "image-outline", title: "圖片", value: "image" },
  { type: "icon", icon: "paperclip", title: "附件", value: "file" },
]);
</script>
    
<style lang="sass">
.tool-bar
  display: flex
  align-items: center
  padding-bottom: 6px
  & > *
    margin-right: 12px
    cursor: pointer
    padding: 2px
    border-radius: 2px
    &:hover
      background-color: rgb(var(--v-theme-tagBg))
</style>