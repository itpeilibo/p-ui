<template>
  <section id="p_layout_page_item" class="p_layout_page_item">
    <slot />
  </section>
</template>
<script>
export default {
  name: 'PLayoutPageItem'
}
</script>
<style lang="scss" scoped>
.p_layout_page_item {
  margin: 8px;
  padding: 16px;
  background: #fff;
  border-radius: 4px;
}
</style>
