<template>
  <div class="containerdetail" :class="{'shrink':shrink}">
    <tabbar></tabbar>
    <predictiondetail live="inplay" :items="dataSelectedPrediction"></predictiondetail>
    <headerdetail></headerdetail>
    <div style="height: 100%;position: relative;">
      <div class="content-detail">
        <headerodd></headerodd>
        <div class="detail-odd">
          <div class="m8">
            <div>
              <span>M8</span>
            </div>
            <div>
              <span>{{dataSelectedPrediction.sys_hdp|setDash}}</span>
            </div>
            <oddou :items="{'odd':dataSelectedPrediction.sys_odds_home,'match_code':dataSelectedPrediction.idmatch}"></oddou>
            <oddou :items="{'odd':dataSelectedPrediction.sys_odds_away,'match_code':dataSelectedPrediction.idmatch}"></oddou>
          </div>
          <div class="m8">
            <div>
              <span>SBO</span>
            </div>
            <div>
              <span>{{dataSelectedPrediction.sbo_hdp|setDash}}</span>
            </div>
            <oddou :items="{'odd':dataSelectedPrediction.sbo_odds_home,'match_code':dataSelectedPrediction.idmatch}"></oddou>
            <oddou :items="{'odd':dataSelectedPrediction.sbo_odds_away,'match_code':dataSelectedPrediction.idmatch}"></oddou>
          </div>
          <div class="m8">
            <div>
              <span>IBC</span>
            </div>
            <div>
              <span>{{dataSelectedPrediction.ibc_hdp|setDash}}</span>
            </div>
            <oddou :items="{'odd':dataSelectedPrediction.ibc_odds_home,'match_code':dataSelectedPrediction.idmatch}"></oddou>
            <oddou :items="{'odd':dataSelectedPrediction.ibc_odds_away,'match_code':dataSelectedPrediction.idmatch}"></oddou>
          </div>
        </div>
        <headerou></headerou>
        <div class="detail-odd">
          <div class="m8">
            <div>
              <span>M8</span>
            </div>
            <div>
              <span>{{dataSelectedPrediction.sys_ou|setDash}}</span>
            </div>
            <oddou :items="{'odd':dataSelectedPrediction.sys_odds_over,'match_code':dataSelectedPrediction.idmatch}"></oddou>
            <oddou :items="{'odd':dataSelectedPrediction.sys_odds_under,'match_code':dataSelectedPrediction.idmatch}"></oddou>
          </div>
          <div class="m8">
            <div>
              <span>SBO</span>
            </div>
            <div>
              <span>{{dataSelectedPrediction.sbo_ou|setDash}}</span>
            </div>
            <oddou :items="{'odd':dataSelectedPrediction.sbo_odds_over,'match_code':dataSelectedPrediction.idmatch}"></oddou>
            <oddou :items="{'odd':dataSelectedPrediction.sbo_odds_under,'match_code':dataSelectedPrediction.idmatch}"></oddou>
          </div>
          <div class="m8">
            <div>
              <span>IBC</span>
            </div>
            <div>
              <span>{{dataSelectedPrediction.ibc_ou|setDash}}</span>
            </div>
            <oddou :items="{'odd':dataSelectedPrediction.ibc_odds_over,'match_code':dataSelectedPrediction.idmatch}"></oddou>
            <oddou :items="{'odd':dataSelectedPrediction.ibc_odds_under,'match_code':dataSelectedPrediction.idmatch}"></oddou>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headerdetail from "./headerdetail";
import headerodd from "./headerodd";
import headerou from "./headerou";
import predictiondetail from "./predictionDetail";
import oddou from "./oddou";
import tabbar from "./tabbar";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["dataSelectedPrediction", "shrink"])
  },
  components: {
    headerdetail,
    headerodd,
    predictiondetail,
    headerou,
    oddou,
    tabbar
  },
  filters: {
    setDash(val) {
      return val == "" ? "-" : val;
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
  max-height: calc(100% - 285px);
  min-height: calc(100% - 285px);    
  background-color: #fff;
}
.detail-odd {
  background-color: #fff;
}
.m8 {
  height: 48px;
  display: flex;
  align-items: center;
  width: 100%;
}
.m8 div {
  width: 25%;
  text-align: center;
}

.m8 div:first-child {
  text-align: left;
  padding-left: 20px;
  font-weight: 700;
  font-size: 16px;
}

.m8 div:nth-child(2) {
  color: #000;
  opacity: 0.54;
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


