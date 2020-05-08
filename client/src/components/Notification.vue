<template>
  <div class="notification is-danger" :class="{ 'hide': !show }">
    <button class="delete" @click="close"></button>
    {{ message }}
  </div>
</template>

<script>
import EventBus from '@/eventBus';

export default {
  data: () => ({
    show: false,
    message: '',
  }),
  mounted() {
    EventBus.$on('error', (message) => {
      this.message = message;
      this.show = true;
    });
  },
  methods: {
    close() {
      this.show = false;
    },
  },
};
</script>
