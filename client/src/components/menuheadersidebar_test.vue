<template>
  <div class="sidebar" :class="{'sidebar-visible':isopenMenuSideBar}">
    <div class="sidebar-content">
      <headersidebar></headersidebar>
      <div class="list_menu">
        <ul>
          <li>
            <router-link :to="{ path: '/'}" @click.native="selectMenu('predictions')">
              <div class="circle" :class="{'circle-isvisibel':menuActive=='predictions'}"></div>
              <div>predictions</div>
            </router-link>
          </li>
          <li>
            <router-link :to="{ path: '/livescore'}" @click.native="selectMenu('livescores')">
              <div class="circle" :class="{'circle-isvisibel':menuActive=='livescores'}"></div>
              <div>livescores</div>
            </router-link>
          </li>
          <li @click="openHelp()">
            <div class="circle"></div>
            <div>help</div>
          </li>
        </ul>
      </div>
      <div class="footer">
        <span>All Right Reserved. &copy; 2018. Powered by In-Play </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import headersidebar from "@/components/menusidebar/headersidebar";
export default {
  components: {
    headersidebar
  },
  computed: {
    ...mapGetters(["isopenMenuSideBar", "menuActive"])
  },
  methods: {
    openHelp() {
      this.$store.commit("setisopenMenuSideBar", false);
      this.$store.commit("setisopenHelp", true);
    },
    selectMenu(menuType) {
      switch (menuType) {
        case "predictions":
          this.$store.commit("settitleMenu", "predictions");
          break;
        default:
          this.$store.commit("settitleMenu", "live score");
          break;
      }
      this.$store.commit("setmenuActive", menuType);
      this.$store.commit("setisopenMenuSideBar", false);
    }
  }
};
</script>
<style scoped>
@media (min-width: 843px) {
  .sidebar {
    transform: translateX(-200%);
  }
}
.list_menu {
  flex: 1;
  position: relative;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  width: 100%;
  color: #fff;
}
ul li {
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  padding: 22px 0 22px 29px;
  display: flex;
  cursor: pointer;
}
ul li a {
  width: fit-content;
  color: #fff;
  text-decoration: none;
  display: flex;
}

ul li:nth-child(2) {
  flex: 1;
}
.footer {
  height: 70px;
  /* box-shadow: 0 -1px 0 0 hsla(0, 0%, 100%, 0.1); */
  font-size: 12px;
  opacity: 0.34;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sidebar {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  transform: translateX(-200%);
  transition: transform 0.8s linear;
  top: 0;
}
.circle {
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50px;
  visibility: hidden;
  margin-right: 29px;
  margin-top: 5px;
}
.sidebar-visible {
  transform: translateX(0) !important;
}

.sidebar-content {
  max-width: 360px;
  min-width: 320px;
  width: 100%;
  height: 100%;
  background-color: #333;
  display: flex;
  flex-direction: column;
}
.circle-isvisibel {
  visibility: visible !important;
}
</style>


