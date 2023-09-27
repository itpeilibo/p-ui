<template>
  <p-layout-page>
    <p-layout-page-item>
      <p-upload-file
        @changeFileList="changeFileList"
        :showFileList="showFileList"
        ref="upload-file"
      />
    </p-layout-page-item>
  </p-layout-page>
</template>

<script>
export default {
  data() {
    return {
      showFileList: []
    }
  },
  methods: {
    changeFileList(list) {
      console.log('图片上传', list)
    }
  }
}
</script>
