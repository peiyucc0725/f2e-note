<template>
    <v-text-field
        placeholder="搜尋你的筆記"
        prepend-inner-icon="mdi-magnify"
        class="search-input"
        variant="plain"
        bg-color="searchInputBg"
        hide-details
        single-line
    ></v-text-field>
</template>
    
<script setup>
    
</script>
    
<style lang="sass">
    .search-input
        .v-field
            border-radius: 6px
            &__input
                min-height: 45px
                padding-top: 4px
                padding-bottom: 0
            &__prepend-inner
                padding: 13px 12px 11px 20px !important
                i
                    color: rgb(var(--v-theme-text))
                    opacity: 1
        input
            font-size: 16px
            font-weight: 600

</style>