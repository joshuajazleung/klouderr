<template>
  <header class="pr-2 pl-2">
    <router-link :to="{ name: 'home' }">
      <div class="logo">
        <svg
          class="logo__img"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 586 584"
          enable-background="new 0 0 586 584"
          xml:space="preserve"
        >
          <g id="Layer_2">
            <polygon
              points="155.167,99.833 155.167,225.358 425.014,527.422
              425.014,371.02 312.912,249.523 449.85,99.833
              322.98,99.833 256.527,174.342 256.527,99.833"
            ></polygon>
            <polygon points="155.167,247.173 155.167,287.113
            256.526,399.885 256.526,358.938"></polygon>
            <polygon points="155.167,309.936 155.167,384.111
            256.526,493.861 256.526,421.699"></polygon>
          </g>
          <g id="Layer_3">
            <path
              d="M295.998,26.667c-148.73,0-269.302,120.063-269.302,
              268.165C26.696,442.938,147.268,563,295.998,563 c148.736,
              0,269.307-120.064,269.307-268.168C565.305,146.729,444.734,
              26.667,295.998,26.667z M296.969,537.387 c-134.741,
              0-243.973-108.77-243.973-242.943c0-134.171,109.232-242.941,
              243.973-242.941c134.744,0,243.973,108.77,243.973,
              242.941 S431.713,537.387,296.969,537.387z"
            ></path>
          </g>
        </svg>

        <h1 class="title is-4 logo_text pl-4 md:pl-0 md:mt-6">{{ $t('site.name') }}</h1>
      </div>
    </router-link>
    <p class="mt-4">{{ $t('site.desc') }}</p>

    <aside class="k-menu menu mt-8">
      <ul class="menu-list lg:mt-6 lg:mb-6">
        <li>
          <router-link :to="{ name: 'upload' }">{{ $t('upload-files') }}</router-link>
        </li>
      </ul>

      <locale-switcher></locale-switcher>
    </aside>
  </header>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

export default {
  components: {
    localeSwitcher: LanguageSwitcher,
  },
};
</script>
