<template>
  <div class="headerscore">
    <div class="homescore">{{items[12]}}</div>
    <div class="match-time">
      <div class="hour" :style="{'background-color':typeLivescore.bgheader,'color':typeLivescore.colorheader}">{{items[4]|setTime(matchDate(items[10]))}}</div>
      <div class="minute" v-show="items[4]!='HT'" :style="{'background-color':typeLivescore.bglivescore,'color':typeLivescore.colorlivescore}">{{items[3]|setStatus(matchDate(items[10]))}}</div>
      <div class="minute" v-show="items[4]=='HT'" :style="{'background-color':typeLivescore.bglivescore,'color':typeLivescore.colorlivescore}">45'</div>
    </div>
    <div class="awayscore">{{items[13]}}</div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  filters: {
    period(val) {
      let period = "";
      switch (val) {
        case "Part1":
          period = "1H";
          break;
        case "Part2":
          period = "2H";
          break;
        case "":
          period = "Kickoff";
          break;
        default:
          period = val;
      }
      return period;
    },
    setTime(val, match_dt) {
      if (val == "") {
        return match_dt;
      } else {
        return val;
      }
    },
    setStatus(val, match_dt) {
      var st = "";
      switch (val) {
        case "-1":
          st = match_dt;
          break;
        case "1":
        case "3":
          st = "Live";
          break;
        case "0":
          st = "Kickoff";
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
      if (typeof value === 'string') {
        value = value.replace(/-/g, '/')
      }
      var date = new Date(value);
      return (
        date.getHours() +
        ":" +
        (date.getMinutes() == 0 ? "00" : date.getMinutes())
      );
    }
  },
  computed: {
    ...mapGetters(["typeLivescore"])
  },
  props: {
    items: {
      type: Array
    }
  }
};
</script>
<style scoped>
.headerscore {
  background-color: #fff;
  height: 64px;
  display: flex;
  align-items: center;
}
.homescore {
  height: 100%;
  align-items: center;
  display: flex;
  flex: 1;
  font-size: 28px;
  color: rgba(0, 0, 0, 0.87);
  padding-left: 24px;
}
.match-time {
  height: 100%;
  width: 64px;
  display: grid;
}
.hour {
  border-top-left-radius: 130px;
  border-top-right-radius: 130px;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.minute {
  border-bottom-left-radius: 130px;
  border-bottom-right-radius: 130px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.awayscore {
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  font-size: 28px;
  color: rgba(0, 0, 0, 0.87);
  padding-right: 24px;
}
</style>


