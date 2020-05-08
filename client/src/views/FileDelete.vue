<template>
  <div v-if="file">
    <h1 class="title is-3">{{ file.name }}</h1>
    <div>
      <p>{{ $t('files-remove.desc') }}</p>
      <p>
        <button
          ref="removeBtn"
          class="button"
          :disabled="isDeleted"
          @click="deleteFile"
        >{{ isDeleted ? $t('files-remove.removed') : $t('files-remove.confirm')}}</button>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import EventBus from '@/eventBus';

export default {
  data: () => ({
    file: null,
    isDeleted: false,
  }),
  mounted() {
    axios
      .get(`/api/files/${this.$route.params.id}`)
      .then(({ data: file }) => {
        this.file = file;
      })
      .catch((err) => {
        if (err.response.status === 404) {
          this.$router.push({ name: 'home' });
        } else {
          EventBus.$emit(
            'error',
            'Server Error: Unable to handle the request now. Please try again later.',
          );
        }
        console.log(err.response);
      });
  },
  methods: {
    deleteFile() {
      axios
        .delete(
          `/api/files/${this.$route.params.id}/delete/${this.file.removeCode}`,
        )
        .then(() => {
          this.isDeleted = true;
        });
    },
  },
};
</script>
