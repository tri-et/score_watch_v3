<template>
  <div class="livescore">
    <div class="colleft">
      <div class="calendar">
        <calendarlivescore></calendarlivescore>
      </div>
      <div class="container">
        <div class="content">
          <div class="inplay">
            <template v-for="(item,index) in leagueLiveScoreLeft">
              <div class="header" :key="index+'inplay'">
                <league :key="index+'inplay'" :leaguename="item"></league>
              </div>
              <matchlivescore :bordercolor="item.leagueColorCode" :items="items" v-for="(items,index) in livescore" v-if="items[5]==item.league" :key="index+items[0]"></matchlivescore>
            </template>
          </div>
          <div class="pregame">
            <template v-for="(item,index) in leagueLiveScoreRight">
              <div class="header" :key="index+'pregame'">
                <league :key="index+'inplay'" :leaguename="item"></league>
              </div>
              <matchlivescore :bordercolor="item.leagueColorCode" :items="items" v-for="(items,index) in livescore" v-if="items[5]==item.league" :key="index+items[0]"></matchlivescore>
            </template>
          </div>
        </div>
        <div class="footer">
          <span>All Right Reserved. &copy; 2018. Powered by In-Play </span>
        </div>
      </div>
      <div class="loading" :class="{'loading-visible':loadingLivescore}">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="colright" onclick="event.cancelBubble=true;" :class="{'container-detail-visible':isOpenDetailPrediction,'container-detail-hidden':hideDetail}">
      <div class="detail">
        <containerdetail></containerdetail>
      </div>
    </div>
  </div>
</template>
<script>
import league from "@/components/livescore/league";
import matchlivescore from "@/components/livescore/matchlivescore";
import calendarlivescore from "@/components/livescore/calenderlivescore";
import containerdetail from "@/components/detaillivescore/containerdetaillivescore";
import GetData from "../modules/get_data";
import { mapGetters } from "vuex";
let getdata = new GetData();
export default {
  name: "livescore",
  data() {
    return {
      leagueLiveScoreLeft: [],
      leagueLiveScoreRight: [],
      livescore: [],
      livescoreStats: [],
      livescoreTimeLine: [],
      getData: getdata
    };
  },
  computed: {
    ...mapGetters(["isOpenDetailPrediction", "hideDetail", "loadingLivescore"])
  },
  components: {
    calendarlivescore,
    league,
    matchlivescore,
    containerdetail
  },
  mounted() {
    let today = new Date();
    getdata.getDataLiveScore(
      this,
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    );
    this.$nextTick(() => {
      if (this.$el.clientWidth < 672) {
        this.$store.commit("sethideDetail", true);
        this.$store.commit("setisOpenDetailPrediction", true);
      } else {
        this.$store.commit("sethideDetail", false);
      }
    });
  }
};
</script>
<style scoped>
@media (min-width: 320px) {
  .colright {
    width: 100%;
    /* position: absolute; */
    top: 0;
    position: fixed;
    z-index: 3;
  }
  .colleft {
    width: 100%;
  }
  .content {
    display: grid !important;
    justify-items: center;
  }
  .inplay {
    margin-right: 0px !important;
  }
}
@media (min-width: 480px) {
  .detail {
    max-width: 456px;
  }
  .inplay {
    margin-right: 8px !important;
  }
}
@media (min-width: 672px) {
  .colright {
    position: unset !important;
    flex: 1 !important;
    z-index: 2 !important;
  }
  .colleft {
    width: 352px !important;
  }
  .container {
    margin-right: 8px;
    margin-left: 8px;
  }
  .detail {
    max-width: 512px;
    min-width: 320px;
  }
}

@media (min-width: 865px) {
  .colright {
    width: 512px !important;
    flex: none !important;
  }
  .colleft {
    flex: 1 !important;
  }
}

@media (min-width: 1248px) {
  .content {
    display: flex !important;
    justify-content: center;
  }
}

.livescore {
  background-color: #444;
  height: 100%;
  display: flex;
  position: absolute;
  width: 100%;
  top: 64px;
}
.nomatch {
  background-color: #f0f0f0;
  height: 100px;
  color: #b7b7b7;
  display: flex;
  align-items: center;
  justify-content: center;
}
.colleft {
  background-color: #444;
  z-index: 1;
  position: relative;
}
.colright {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  transform: translateX(0);
  transition: transform 1s linear;
}
.calendar {
  background-color: #333;
  height: 62px;
}

.container {
  overflow-x: hidden;
  position: relative;
  height: 100%;
  max-height: calc(100% - 143px);
  min-height: calc(100% - 143px);
  padding-top: 16px;
  -webkit-overflow-scrolling: touch;
}
.inplay {
  max-width: 360px;
  min-width: 320px;
  width: 100%;
  margin-right: 8px;
  background-color: #fff;
}
.pregame {
  max-width: 360px;
  min-width: 320px;
  width: 100%;
  background-color: #fff;
  /* margin-right: 8px; */
}
.footer {
  height: 64px;
  background-color: #444;
  box-shadow: 0 -1px 0 0 rgba(255, 255, 255, 0.1);
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
  opacity: 0.34;
}

.header {
  width: 100%;
  min-width: 320px;
  max-width: 360px;
  height: 48px;
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  text-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
  background-color: #f0f0f0;
  position: relative;
  margin-bottom: 9px;
}
.container-detail-visible {
  transform: translateX(200%);
}
.container-detail-hidden {
  visibility: hidden;
}
.detail {
  height: 100%;
  float: right;
  width: 100%;
}
.loading {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 62px;
  display: none;
}
.content {
  min-height: calc(100% - 88px);
}
.loading-visible {
  display: block !important;
}
.lds-ring {
  display: inline-block;
  position: absolute;
  width: 64px;
  height: 64px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 40px;
  height: 40px;
  margin: 6px;
  border: 6px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>



