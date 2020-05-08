<template>
  <div>
    <p class="menu-label">{{ $t('languages') }}</p>
    <ul class="menu-list">
      <li @click="switchLang('zh-cn')">
        <a>中文</a>
      </li>
      <li @click="switchLang('en')">
        <a>English</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    const userLocale = localStorage.getItem('locale');
    if (userLocale) {
      this.switchLang(userLocale);
    }
  },
  methods: {
    switchLang(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('locale', lang);
    },
  },
};
</script>
