<template>
  <div class="topNav">
    <div>
      <svg class="icon choice" aria-hidden="true">
        <use xlink:href="#icon-liebiao2"></use>
      </svg>
    </div>
    <ul class="nav">
      <li>我的</li>
      <li class="active">发现</li>
      <li>云村</li>
      <li>视频</li>
    </ul>
    <div>
      <svg class="icon search" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style lang="less">
.topNav {
  box-sizing: border-box;
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav {
    display: flex;
    width: 65%;
    justify-content: space-around;
    padding: 0;
    font-size: .32rem;

    .active{
      font-weight: 900;
    }
  }

  .choice {
    height: 100%;
    margin-top: 0.1rem;
    width: 0.4rem;
  }

  .search {
    height: 100%;
    width: 0.4rem;
    margin-top: 0.1rem;
  }
}
</style>