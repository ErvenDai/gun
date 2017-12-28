<template>
  <div>
    <div class="news-container">
      <div class="news-box">
        <h1 class="news-title">新闻题目</h1>
        <p class="news-detail">新闻描述</p>
        <img src="" class="news-img">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from '../../plugins/axios.js';
export default {
  validate({ params, query }) {
    // console.log(params);
    return true;
  },
  async fetch({ isServer, store, params, req }) {
    const serverRenderCookie = isServer ? req.headers.cookie : null;

    if (!store.state.userData) {
      const res = await axios.$get('/', null, serverRenderCookie);
      if (res.data) store.commit('setUserData', res.data);
    }
  },
  layout: 'page',
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
    ...mapState(['userData'])
  }
};
</script>
<style>
.news-container {
  width: 40%;
  background-color: #fff;
  margin: 0 auto;
}
</style>