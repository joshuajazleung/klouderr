<template>
  <div>
    <section class="hero is-primary is-medium gradient-bg">
      <div class="hero-body">
        <h1 class="title">{{ $t('site.name') }}</h1>
        <h2 class="subtitle">{{ $t('site.desc') }}</h2>
      </div>
    </section>
  </div>
</template>>


<script>
// @ is an alias to /src

export default {
  name: 'home',
  metaInfo: {
    title: 'Home - ',
  },
};
</script>
