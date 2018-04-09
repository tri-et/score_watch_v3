<template>
  <div class="containerdetail" :class="{'shrink':shrink}">
    <tabbar></tabbar>
    <headerdetail></headerdetail>
    <div style="height: 100%;position: relative;background-color:#fff">
      <div class="content-detail">
        <headerstats></headerstats>
        <ul>
          <li>
            <div class="detail-stats">
              <div class="stats">
                <div>
                  <span>{{setStats(dataStats[6],'home')}}</span>
                </div>
                <div>
                  <hr class="home-percent-line" :style="{'width':setWidthStats(setStats(dataStats[6],'home'))}">
                </div>
                <div>
                  <span>Shots</span>
                </div>
                <div>
                  <hr class="away-percent-line" :style="{'width':setWidthStats(setStats(dataStats[6],'away'))}">
                </div>
                <div>
                  <span>{{setStats(dataStats[6],'away')}}</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="detail-stats">
              <div class="stats">
                <div>
                  <span>{{setStats(dataStats[37],'home')}}</span>
                </div>
                <div>
                  <hr class="home-percent-line" :style="{'width':setWidthStats(setStats(dataStats[37],'home'))}">
                </div>
                <div>
                  <span>Off Target</span>
                </div>
                <div>
                  <hr class="away-percent-line" :style="{'width':setWidthStats(setStats(dataStats[37],'away'))}">
                </div>
                <div>
                  <span>{{setStats(dataStats[37],'away')}}</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="detail-stats">
              <div class="stats">
                <div>
                  <span>{{setStats(dataStats[9],'home')}}</span>
                </div>
                <div>
                  <hr class="home-percent-line" :style="{'width':setWidthStats(setStats(dataStats[9],'home'))}">
                </div>
                <div>
                  <span>Corner Kicks</span>
                </div>
                <div>
                  <hr class="away-percent-line" :style="{'width':setWidthStats(setStats(dataStats[9],'away'))}">
                </div>
                <div>
                  <span>{{setStats(dataStats[9],'away')}}</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="detail-stats">
              <div class="stats">
                <div>
                  <span>{{setStats(dataStats[14],'home')}}</span>
                </div>
                <div>
                  <hr class="home-percent-line" :style="{'width':setWidthStats(setStats(dataStats[14],'home'))}">
                </div>
                <div>
                  <span>Yellow Cards</span>
                </div>
                <div>
                  <hr class="away-percent-line" :style="{'width':setWidthStats(setStats(dataStats[14],'away'))}">
                </div>
                <div>
                  <span>{{setStats(dataStats[14],'away')}}</span>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="detail-stats">
              <div class="stats">
                <div>
                  <span>{{setStats(dataStats[16],'home')}}</span>
                </div>
                <div>
                  <hr class="home-percent-line" :style="{'width':setWidthStats(setStats(dataStats[16],'home'))}">
                </div>
                <div>
                  <span>Red Cards</span>
                </div>
                <div>
                  <hr class="away-percent-line" :style="{'width':setWidthStats(setStats(dataStats[16],'away'))}">
                </div>
                <div>
                  <span>{{setStats(dataStats[16],'away')}}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <headertimelive></headertimelive>
        <ul>
          <li v-for="(item,index) in datatimeline" :key="index">
            <div class="detail-stats">
              <div class="stats">
                <div>
                  <img :src="setIconTimeLine(item[4],'home',item[3])">
                </div>
                <div>
                  <span>{{showHidePlayer(item[6],'home',item[3])}}</span>
                </div>
                <div>
                  <span>{{item[5]+"'"}}</span>
                </div>
                <div>
                  <span>{{showHidePlayer(item[6],'away',item[3])}}</span>
                </div>
                <div>
                   <img :src="setIconTimeLine(item[4],'away',item[3])">
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import headerdetail from "./headerdetail";
import headerstats from "./headerstats";
import headertimelive from "./headertimelive";
import oddou from "./oddou";
import tabbar from "./tabbar";
import _1 from "../../assets/images/iconl/1.gif";
import _2 from "../../assets/images/iconl/2.gif";
import _3 from "../../assets/images/iconl/3.gif";
import _4 from "../../assets/images/iconl/4.gif";
import _5 from "../../assets/images/iconl/5.gif";
import _6 from "../../assets/images/iconl/6.gif";
import _7 from "../../assets/images/iconl/7.gif";
import _8 from "../../assets/images/iconl/8.gif";
import _9 from "../../assets/images/iconl/9.gif";
import _10 from "../../assets/images/iconl/10.gif";
import _11 from "../../assets/images/iconl/11.gif";
import { mapGetters } from "vuex";
export default {
  data(){
    return{
      iconls:{
        "__1":_1,
        "__2":_2,
        "__3":_3,
        "__4":_4,
        "__5":_5,
        "__6":_6,
        "__7":_7,
        "__8":_8,
        "__9":_9,
        "__10":_10,
        "__11":_11
      }
    }
  },
  computed: {
    ...mapGetters(["dataSelectedPrediction", "shrink", "dataStats","datatimeline"])
  },
  components: {
    headerdetail,
    headerstats,
    headertimelive,
    oddou,
    tabbar
  },
  filters: {
    setDash(val) {
      return val == "" ? "-" : val;
    }
  },
  methods: {
    setStats(val, homeAway) {
      let stat = "";
      let homeoraway = [];
      if (val != undefined) {
        homeoraway = val == "" ? "0,0".split(",") : val.split(",");
        switch (homeAway) {
          case "home":
            stat = homeoraway[0] == "0" ? "-" : homeoraway[0];
            break;
          case "away":
            stat = homeoraway[1] == "0" ? "-" : homeoraway[1];
            break;
        }
      } else {
        stat = "-";
      }
      return stat;
    },
    setWidthStats(val) {
      return val == "-" ? "0%" : parseInt(val) * 100 / 30 + "%";
    },
    showHidePlayer(val, homeaway, number) {
      let player = ''
      switch (homeaway) {
        case 'home':
          player = number == 1 ? val : ''
          break
        case 'away':
          player = number == 0 ? val : ''
          break
      }
      return player
    },
    setIconTimeLine(val, homeaway, number){
      let iconl=""
      switch (homeaway) {
        case 'home':
          iconl =number == 1? this.iconls["__"+val]:''
          break;
        case 'away':
          iconl =number == 0? this.iconls["__"+val]:''
          break;
      }
      return iconl
    }
  }
};
</script>
<style scoped>
@media (min-width: 672px) {
  .content-detail {
    top: 240px !important;
  }
}
@media (min-width: 320px) {
  .content-detail {
    top: 289px;
  }
}
.containerdetail {
  position: relative;
  height: 100%;
}
.content-detail {
  overflow: auto;
  width: 100%;
  height: 100%;
  max-height: calc(100% - 244px);
  min-height: calc(100% - 244px);
  background-color: #fff;
}
.detail-stats {
  background-color: #fff;
  padding-left: 16px;
  padding-right: 16px;
}
.stats {
  height: 48px;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 15px;
}
.stats div:first-child {
  width: 10%;
}
.stats div:nth-child(2) {
  width: 26.5%;
  text-align: right;
  padding-right: 5px;
}
.stats div:nth-child(3) {
  width: 29%;
  text-align: center;
  color: #c5c5c5;
}
.stats div:nth-child(4) {
  width: 26.5%;
  text-align: left;
  padding-left: 5px;
}
.stats div:last-child {
  width: 10%;
  text-align: right;
}
.content-detail ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.home-percent-line {
  float: right;
  border: none;
  border-top: 6px solid #ff785a;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.away-percent-line {
  float: left;
  border: none;
  border-top: 6px solid #36cc64;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.shrink {
  animation: fadeInOutScale 1s;
}
@keyframes fadeInOutScale {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>


