<style type="text/css">
  body {
    background-color: #ddd;
  }
</style>
<template>
	<div>
		<TopBar></TopBar>
    <div>
      <nuxt/>
    </div>
		<a class="to-top-btn" href="#">
			<i class="iconfont icon-jiantoushang"></i>
    </a>
	</div>
</template>

<script>
import TopBar from '../components/TopBar.vue';

export default {
  components: { TopBar }
}
</script>