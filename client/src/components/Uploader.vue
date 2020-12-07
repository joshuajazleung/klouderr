<template>
  <div>
    <file-upload
      ref="upload"
      :maximum="maximum"
      :drop="true"
      :multiple="true"
      v-model="files"
      @input="updatetValue"
      @input-filter="inputFilter"
      :post-action="postAction"
      :accept="allowedExtentions"
      :size="size || 0"
    >
      <div class="upload-area">
        <p class="block">{{ $t('upload.drop-here') }}</p>
        <button class="button is-primary is-rounded is-large">
          {{ $t("upload.selectFiles") }}</button>
      </div>
    </file-upload>
    <p class="text-red mt-2">{{ this.error }}</p>
    <div class="mt-6" v-if="files.length > 0">
      <p class="mb-2">{{ $t('upload.files-chosen', { num: files.length }) }}</p>
      <ul class="file-list">
        <li v-for="file in files" :key="file.id">
          <div class="flex items-center justify-between">
            <span>{{ file.name }}</span>
            <button class="delete" type="button" @click.prevent="remove(file)"></button>
          </div>
          <div>
            <progress v-if="file.active || file.progress !== '0.00'"
            class="progress is-small is-primary"
            :value="Math.round(file.progress)"
            max="100">{{ file.progress }}%</progress>
          </div>
        </li>
      </ul>
      <a
        class="button is-rounded mt-5"
        v-if="!$refs.upload || !$refs.upload.active"
        @click.prevent="$refs.upload.active = true"
      >{{ $t('upload.start-uploading') }}</a>
    </div>
  </div>
</template>

<script>
import VueUploadComponent from 'vue-upload-component';
import EventBus from '@/eventBus';

export default {
  data: () => ({
    files: [],
    postAction: '/api/upload',
    putAction: '/api/upload',
    error: '',
    maximum: 5,
    size: 1024 * 1024 * 200,
    allowedExtentions:
      'image/*,video/*,application/pdf,application/zip,application/x-rar-compressed,application/x-bittorrent',
  }),
  components: {
    'file-upload': VueUploadComponent,
  },
  methods: {
    remove(file) {
      this.$refs.upload.remove(file);
    },

    updatetValue(files) {
      files.forEach((file) => {
        // when a file is successfully uploaded to the server,
        // remove it from the file list
        if (file.success) {
          this.remove(file);
          this.$emit('uploaded', file.response);
        }

        if (file.error) {
          EventBus.$emit('error', 'Unexpected server error, please try again later.');
        }
      });
    },

    inputFilter(newFile, oldFile, prevent) {
      this.error = '';

      // show error msg when maximum files exceeded.
      if (
        this.maximum !== 0
        && this.files.length >= this.maximum
        && newFile
        && !oldFile
      ) {
        this.error = `You can only upload ${this.maximum} at a time。`;
        return prevent();
      }

      if (newFile && !oldFile) {
        // Add file

        if (
          !/\.(jpeg|jpg|gif|png|webp|pdf|torrent|zip|rar|mp4)$/i.test(
            newFile.name,
          )
        ) {
          this.error = `You can't upload ${newFile.name}。`;
          return prevent();
        }

        if (newFile.size > this.size) {
          this.error = 'File exceeds the maximum size of 200MB';
          return prevent();
        }
      }
      return null;
    },
  },
};
</script>
