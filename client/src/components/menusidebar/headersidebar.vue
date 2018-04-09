<template>
  <div class="headersidebar">
    <div class="bt_close" @click="closeSideBar()"><span>&times;</span></div>
    <div class="menu">
      <span>menu</span>
    </div>
    <div class="logo"></div>
  </div>
</template>
<script>
export default {
  methods: {
    closeSideBar() {
      this.$store.commit("setisopenMenuSideBar", false);
    }
  }
};
</script>
<style scoped>
.headersidebar {
  background-color: #444;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 320px;
  width: 100%;
  max-width: 1280px;
  font-size: 16px;
  height: 64px;
  display: flex;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  min-height: 64px;
}
.bt_close {
  margin-left: 24px;
  margin-right: 24px;
  font-size: 35px;
  font-weight:normal !important;
  cursor: pointer;
}
.menu {
  flex: 1;
}
.logo {
  height: 48px;
  width: 48px;
  border-radius: 8px;
  background: #000;
  /* background: linear-gradient(180deg, #e8e8e8 0%, #ffffff 100%);
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
    0 2px 3px 0 rgba(0, 0, 0, 0.34); */
  margin-right: 8px;
}
</style>


