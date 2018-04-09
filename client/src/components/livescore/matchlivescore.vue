<template>
  <div class="match" @click="selectMatch(items[0],items[3])" :style="{'border-color':clborederLivescore}" :class="{'activelivescore':items[0]==activelivescore}">
    <div class="match_time_ft" :style="bg">
      <span v-show="items[4]=='HT'">45</span>
      <span v-show="items[4]!='HT'">{{items[4]|setTime(matchDate(items[10]))}}</span>
      <span>{{items[3]|setStatus(matchDate(items[10]),bg)}}</span>
    </div>
    <div class="teamname">
      <span>{{items[8]}}</span>
      <span>{{items[9]}}</span>
    </div>
    <div class="score">
      <span>{{items[12]}}</span>
      <span>{{items[13]}}</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      bg: {
        color: ""
      }
    };
  },
  computed: {
    ...mapGetters(["activelivescore", "clborederLivescore"])
  },
  props: {
    items: {
      type: Array
    },
    bordercolor: {
      type: String
    }
  },
  filters: {
    setTime(val, match_dt) {
      if (val == "") {
        return match_dt;
      } else {
        return val + "'";
      }
    },
    setStatus(val, match_dt, bg) {
      var st = "";
      switch (val) {
        case "-1":
          st = match_dt;
          break;
        case "2":
          st = "HT";
          bg.color = "#ff9250";
          break;
        case "1":
        case "3":
          st = "Live";
          bg.color = "#50d278";
          break;
        case "0":
          st = "Kickoff";
          bg.color = "#767676";
          break;
        default:
          st = val;
          break;
      }
      return st;
    }
  },
  methods: {
    matchDate(value) {
      var date = new Date(value.replace(/-/g, "/"));
      return (
        date.getHours() +
        ":" +
        (date.getMinutes() == 0 ? "00" : date.getMinutes())
      );
    },
    selectMatch(match_id, st) {
      this.$store.commit("sethideDetail", false);
      this.$store.commit("setisOpenDetailPrediction", false);
      this.$store.commit("setdataSelectedLivescore", this.items);
      this.$store.commit("setactivelivescore", match_id);
      this.$store.commit("setclborederLivescore", this.bordercolor);
      var stats = this.$parent.livescoreStats.r.find(x => x[2] == match_id);
      var timeline = this.$parent.livescoreTimeLine.r.filter(
        x => x[2] == match_id
      );
      if (stats != undefined) {
        this.$store.commit("setdataStats", stats);
      } else {
        this.$store.commit("setdataStats", []);
      }

      if (timeline != undefined) {
        this.$store.commit("setdatatimeline", timeline);
      } else {
        this.$store.commit("setdatatimeline", {});
      }

      switch (st) {
        case "-1":
          this.$store.commit("settypeLivescore", {
            bgheader: "#767676",
            colorheader: "#fff",
            bglivescore: "#838383",
            colorlivescore: "#fff"
          });
          break;
        case "2":
          this.$store.commit("settypeLivescore", {
            bgheader: "#ff9250",
            colorheader: "#fff",
            bglivescore: "#ff9d61",
            colorlivescore: "#fff"
          });
          break;
        case "1":
        case "3":
          this.$store.commit("settypeLivescore", {
            bgheader: "#50d278",
            colorheader: "#fff",
            bglivescore: "#61d685",
            colorlivescore: "#fff"
          });
          break;
        case "0":
          this.$store.commit("settypeLivescore", {
            bgheader: "#f0f0f0",
            colorheader: "#000",
            bglivescore: "#e3e3e3",
            colorlivescore: "#888888"
          });
          break;
      }
    }
  }
};
</script>
<style scoped>
.activelivescore {
  border-style: solid;
  border-width: 1px;
}
.match {
  /* background-color: #fff; */
  display: flex;
  padding: 7px 0px;
  line-height: 1.5;
  font-size: 14px;
  box-shadow: 0 -1px 5px -1px rgba(0, 0, 0, 0.2);
  margin: 8px 8px;
  cursor: pointer;
}
.minutes {
  display: flex;
  align-items: center;
  width: 44px;
  justify-content: left;
}
.match_time {
  display: flex;
  align-items: center;
  width: 44px;
  justify-content: center;
  color: rgba(0, 0, 0, 0.34);
}
.match_time_ft {
  display: grid;
  width: 48px;
  text-align: center;
  color: rgba(0, 0, 0, 0.34);
  font-size: 12px;
  align-items: center;
}

.match_time_ft > span:first-child {
  font-weight: 700;
}
.teamname {
  display: grid;
  flex: 1;
}
.teamname span {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.score {
  display: grid;
  width: 30px;
}
.live {
  height: 10px;
  width: 6px;
  background-color: #8ce898;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  margin-right: 10px;
}

.time {
  /* color: #69ae72; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  /* text-transform: uppercase; */
  font-size: 12px;
  /* font-weight: 700; */
}
.timeremaining {
  color: #000;
  opacity: 0.34;
}
.timelive {
  font-weight: bold;
  color: #69ae72;
  text-transform: uppercase;
}
</style>


