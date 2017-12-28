<style type="text/css" scoped>
  .news-container {
    position: relative;
    width: 1200px;
    min-height: 800px;
    background-color: #fff; 
    margin: 90px auto 0;
    border-radius: 20px;
  }
  .add-news {
    position: absolute;
    right: 100px;
    top: 80px;
  }
</style>
<template>
  <div>
    <div class="news-container">
      <button class="add-news" @click="showAddNews = true;">添加新闻</button>
      <NewsList></NewsList>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from '../../plugins/axios.js';
import NewsList from './NewsList.vue';


export default {
  async asyncData({ isServer, store, params, req }) {
    const serverRenderCookie = isServer ? req.headers.cookie : null;
    if (!store.state.userData) {
      const res = await axios.$get('/', null, serverRenderCookie);
      if (res.data) store.commit('setUserData', res.data);
    }
  },
  layout: 'page',
  validate({ params, query }) {
    return !isNaN(+params.page);
  },
  conponents: { NewsList },
  data() {
    return {
      showAddNews: false
    }
  },
  methods: {
  },
  computed: {
    ...mapState(['userData'])
  }
};
</script>