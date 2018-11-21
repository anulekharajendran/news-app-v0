<template>
    <transition name="fade" mode="out-in">
      <div class="home">
        <h1>All</h1>
      </div>
    </transition>
</template>

<script>

export default {
  name: 'Home',
};
</script>

<style lang="scss">
@import '../styles/main.scss';

.home{
  h1{
    color: $purple;
  }
}
</style>
