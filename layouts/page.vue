<style type="text/css">
  body {
    background-color: #ddd;
  }
</style>
<template>
	<div>
		<HeaderBar></HeaderBar>
    <div>
      <nuxt/>
    </div>
		<a class="to-top-btn" href="#">
			<i class="iconfont icon-jiantoushang"></i>
    </a>
	</div>
</template>

<script>
import HeaderBar from '../components/HeaderBar.vue';

export default {
  components: { HeaderBar }
}
</script>