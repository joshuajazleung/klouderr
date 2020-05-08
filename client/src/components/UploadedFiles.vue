<template>
    <div class="mt-6">
      <ul class="fileList">
        <li class="mb-12" v-for="file in files" :key="file.name">
          <div class="title is-6 mb-2">{{ file.name }}</div>
          <div class="flex justify-between items-center mb-4">
            <span class="mr-4">{{ $t('upload.download-link') }}</span>
            <div class="relative w-3/4">
              <input
                @click="copyToClipboard"
                class="input cursor-pointer"
                type="text"
                :value="file.encodedName | fileDownloadPath"
              >
              <span
                class="flex items-center h-full px-2 text-white
                pointer-events-none bg-black absolute pin-t pin-r"
              >{{ $t('upload.copy') }}</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="mr-4">{{ $t('upload.remove-link') }}</span>
            <div class="relative w-3/4">
              <input
                @click="copyToClipboard"
                class="input cursor-pointer"
                type="text"
                :value="getFileRemoveUrl(file.encodedName, file.removeCode)"
              >
              <span
                class="flex items-center h-full px-2 text-white
                pointer-events-none bg-black absolute pin-t pin-r"
              >{{ $t('upload.copy') }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  props: ['files'],
  filters: {
    fileDownloadPath(val) {
      return `${window.location.origin}/files/${val}`;
    },
  },
  methods: {
    getFileRemoveUrl(id, removeCode) {
      return `${window.location.origin}/files/${id}/delete/${removeCode}`;
    },

    copyToClipboard(evt) {
      this.copyToClipboardHelper(evt.target.value);

      const node = evt.target.nextSibling;

      node.textContent = this.$t('upload.copied');

      setTimeout(() => {
        node.textContent = this.$t('upload.copy');
      }, 1000);
    },

    copyToClipboardHelper(str) {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      const selected = document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    },
  },
};
</script>
