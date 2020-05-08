<template>
    <div>
        <uploader @uploaded="onFileUploaded"></uploader>
        <uploaded-file-list :files="uploadedFiles"></uploaded-file-list>
    </div>
</template>

<script>
import Uploader from '@/components/Uploader.vue';
import UploadedFileList from '@/components/UploadedFiles.vue';

export default {
  data: () => ({
    uploadedFiles: [],
  }),
  components: {
    uploader: Uploader,
    'uploaded-file-list': UploadedFileList,
  },

  methods: {
    onFileUploaded(file) {
      this.uploadedFiles.unshift(file);
    },
  },
};
</script>
