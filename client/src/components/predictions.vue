<template>
  <div class="predictions">
    <div class="colleft">
      <div class="calendar">
        <calendar></calendar>
      </div>
      <div class="container">
        <div class="content">
          <div class="inplay">
            <div class="header header--inplay">in-play</div>
            <div class="nomatch" v-show="leagueInplay.length==0">No matches to show</div>
            <template v-for="(item,index) in leagueInplay">
              <league :key="index+'inplay'" :leaguename="item.league"></league>
              <matchprediction v-for="(items,index) in inplayprediction" :key="index+items.idmatch" :items="items" v-if="item.league==items.league" typeprediction="inplay">
              </matchprediction>
            </template>
            <div class="header header--expired">Expired in-play</div>
            <div class="nomatch" style="margin-bottom:16px" v-show="leagueExpInplay.length==0">No matches to show</div>
            <template v-for="(item,index) in leagueExpInplay">
              <league :key="index+'expinplay'" :leaguename="item.league"></league>
              <matchprediction v-for="(items,index) in inplayExpired" :key="index+items.idmatch" :items="items" v-if="item.league==items.league" typeprediction="expiredinplay">
              </matchprediction>
            </template>
          </div>
          <div class="pregame">
            <div class="header header--pregame">Pregame</div>
            <div class="nomatch" v-show="leaguePregame.length==0">No matches to show</div>
            <template v-for="(item,index) in leaguePregame">
              <league :key="index+'pregame'" :leaguename="item.league"></league>
              <matchprediction v-for="(items,index) in pregame" :key="index+items.idmatch" :items="items" v-if="item.league==items.league" typeprediction="pregame">
              </matchprediction>
            </template>
            <div class="header header--expired">Expired Pre-Game</div>
            <div class="nomatch" v-show="leagueExpPregame.length==0">No matches to show</div>
            <template v-for="(item,index) in leagueExpPregame">
              <league :key="index+'exppregame'" :leaguename="item.league"></league>
              <matchprediction v-for="(items,index) in expiredPregame" :key="index+items.idmatch" :items="items" v-if="item.league==items.league" typeprediction="expiredpregame">
              </matchprediction>
            </template>
          </div>
        </div>
        <div class="footer">
          <span>All Right Reserved. &copy; 2018. Powered by In-Play </span>
        </div>
        <div class="loading" :class="{'loading-active':loadingPredictions}">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
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
import league from "@/components/league";
import matchprediction from "@/components/matchPrediction/matchPrediction";
import calendar from "@/components/matchPrediction/calendar";
import containerdetail from "@/components/detailprediction/containerdetail";
import GetData from "../modules/get_data";
import { mapGetters } from "vuex";
let getdata = new GetData();
export default {
  name: "predictions",
  data() {
    return {
      inplayprediction: [],
      inplayExpired: [],
      pregame: [],
      expiredPregame: [],
      leagueExpInplay: [],
      leagueExpPregame: [],
      leagueInplay: [],
      leaguePregame: [],
      getData: getdata
    };
  },
  computed: {
    ...mapGetters([
      "isOpenDetailPrediction",
      "hideDetail",
      "loadingPredictions"
    ])
  },
  components: {
    calendar,
    league,
    matchprediction,
    containerdetail
  },
  mounted() {
    var today = new Date();
    var dateselect =
      today.getFullYear() +
      "-" +
      (parseInt(today.getMonth()) + 1) +
      "-" +
      today.getDate();
    getdata.getDataPreInplay(this, dateselect);
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

  .inplay {
    margin-right: 8px !important;
  }

  .pregame {
    margin-right: 8px !important;
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
.loading {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  display: none;
}

.loading-active {
  display: block !important;
}
.predictions {
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
  background-color: #333;
}
.colright {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  transform: translateX(0);
  transition: transform 1s linear;
}
.calendar {
  background-color: #212121;
  height: 62px;
}

.container {
  overflow-x: hidden;
  position: relative;
  height: 100%;
  max-height: calc(100% - 79px);
  min-height: calc(100% - 79px);
  padding-top: 16px;
  -webkit-overflow-scrolling: touch;
}
.inplay {
  max-width: 360px;
  min-width: 320px;
  width: 100%;
  /* margin-right: 8px; */
}
.pregame {
  max-width: 360px;
  min-width: 320px;
  width: 100%;
  /* margin-right: 8px; */
}
.footer {
  height: 64px;
  background-color: #333;
  box-shadow: 0 -1px 0 0 rgba(255, 255, 255, 0.1);
  margin-top: 10px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  text-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
}
.header--inplay {
  background-color: #ff7c7c;
}
.header--pregame {
  background-color: #5bb6e7;
}
.header--expired {
  background-color: #767676;
  margin-top: 15px;
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
  background-color: #fff;
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



