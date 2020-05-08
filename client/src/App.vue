<template>
  <div id="app">
    <notification></notification>

    <div class="container pt-4 lg:pt-12">
      <div class="columns">
        <div class="column is-one-fifth">
          <app-header></app-header>
        </div>
        <main class="column">
          <div class="bg-white rounded-sm shadow-lg">
            <div class="card-content">
              <router-view/>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Notification from '@/components/Notification.vue';
import AppHeader from '@/components/AppHeader.vue';

export default {
  data: () => ({
    locale: '',
  }),
  mounted() {
    this.locale = this.$i18n.locale;
  },
  metaInfo() {
    return {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: '',
      // all titles will be injected into this template
      titleTemplate: titleChunk => (this.locale === 'zh-cn'
        ? `${titleChunk} 雾盘 Klouderr`
        : `${titleChunk} Klouderr`),
    };
  },
  components: {
    notification: Notification,
    'app-header': AppHeader,
  },

};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Baloo+Thambi");
</style>
