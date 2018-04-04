<template>
  <header>
    <nav>
      <ul>
        <li  @click="openSideBar()">
          <i class="material-icons">menu</i>
        </li>
        <li @click="test()">
          <a class="logo"></a>
        </li>
        <li>
          <router-link :to="{ path: '/'}" @click.native="selectMenu('predictions')">
            <div>{{titleMenu}}</div>
            <div class="circle-content">
              <div class="circle" :class="{'circle-isvisibel':menuActive=='predictions'}"></div>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="{ path: '/livescore'}" @click.native="selectMenu('pregame')">
            <div>live score</div>
            <div class="circle-content">
              <div class="circle" :class="{'circle-isvisibel':menuActive=='pregame'}"></div>
            </div>
          </router-link>
        </li>
        <li>
          <a class="logo"></a>
        </li>
        <li @click="openHelp()">
          <a><img src="../assets/images/Help Icon@1x.svg" alt="" width="24" height="24"></a>
        </li>
      </ul>
    </nav><resize-observer @notify="setTitleMenu" />
  </header>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "menuheader",
  computed: {
    ...mapGetters(["menuActive","titleMenu"])
  },
  methods: {
    openHelp() {
      this.$store.commit("setisopenHelp", true);
    },
    test(){
alert('test');
    },
    openSideBar() {
      this.$store.commit("setisopenMenuSideBar", true);
    },
    selectMenu(menuType) {
      this.$store.commit("setmenuActive", menuType);
    },
    setTitleMenu(){
      var widthHeader=this.$el.querySelector("nav").offsetWidth
      if(widthHeader>=843){
        this.$store.commit("settitleMenu", "predictions");
      }
      if(widthHeader>=672){
        this.$store.commit("sethideDetail", false);
        this.$store.commit("setisOpenDetailPrediction", false);
      }
    }
  }
};
</script>
<style scoped>
@media (min-width: 320px) {
  li:not(:first-child):not(:nth-child(3)):not(:nth-child(5)) {
    display: none;
  }
  li:nth-child(3) {
    flex: 1;
  }

  li {
    padding: 0 15px;
  }
  .circle-content {
    display: none;
  }
}
@media (min-width: 843px) {
  li:first-child,
  :nth-child(5) {
    display: none;
  }
  li:nth-child(3) {
    flex: none;
    box-shadow: -1px 0 0 0 rgba(255, 255, 255, 0.1);
  }
  li:not(:first-child):not(:nth-child(3)):not(:nth-child(5)) {
    display: grid;
  }
  li:nth-child(4) {
    flex: 1;
  }

  li:nth-child(2) {
    padding: 8px;
  }

  li:nth-child(6):hover{
    background-color: #737373 !important;
  }

  .circle-content {
    display: flex;
  }

  li {
    padding: 4px 15px 0px 15px;
  }
}

header {
  background-color: #444;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  z-index: 3;
  min-width: 320px;
  width: 100%;
  max-width: 1280px;
  font-size: 18px;
  position: absolute;
    top: 0;
}
ul {
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  height: 64px;
  display: flex;
  align-items: center;
}
li {
  float: left;
  display: grid;
  align-items: center;
  height: 62px;

  text-transform: uppercase;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

li a {
  width: fit-content;
  color: #fff;
  text-decoration: none;
}

li a:hover .circle {
  visibility: visible !important;
}

li:nth-child(4) {
  flex: 1;
}

li:last-child {
  padding: 2px 20px 0px 20px;
  box-shadow: -1px 0 0 0 rgba(0, 0, 0, 0.1);
}

.logo {
  height: 48px;
  width: 48px;
  border-radius: 8px;
  background: #000;
  /* background: linear-gradient(180deg, #e8e8e8 0%, #ffffff 100%);
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
    0 2px 3px 0 rgba(0, 0, 0, 0.34); */
}

.circle-content {
  justify-content: center;
}
.circle {
  width: 72px;
  height: 4px;
  background: #fff;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50px;
  visibility: hidden;
}

.circle-isvisibel {
  visibility: visible !important;
}
</style>


