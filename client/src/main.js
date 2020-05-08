import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import Ads from 'vue-google-adsense';
import App from './App.vue';
import router from './router';
import i18n from './i18n';

import '@/assets/sass/main.scss';


Vue.use(require('vue-script2'));

Vue.use(Ads.Adsense);
Vue.use(Ads.InArticleAdsense);
Vue.use(Ads.InFeedAdsense);

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
  id: 'UA-129732371-2',
  router,
});

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app');
