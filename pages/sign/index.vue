<template>
  <h5>跳转中</h5>
</template>

<script>
export default {
  layout: 'sign',
  fetch ({redirect}) {
    redirect('/sign/in');
  }
};
</script>
