<template>
  <div class="league">
    <div class="icon_league" :style="{'background-color':leaguename.leagueColorCode}"></div>
    <div>
      <span :style="{'color':leaguename.leagueColorCode}">{{leaguename.leagueShortName}}</span>
    </div>
    <div>
      <span class="leaguename">{{leaguename.league}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    leaguename: {
      type: Object
    }
  }
};
</script>
<style scoped>
.leaguename {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.league {
  height: 48px;
  align-items: center;
  display: flex;
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
  text-transform: uppercase;
  /* box-shadow: 0 2px 3px 0 rgba(0,0,0,0.34); */
  background-color: #f0f0f0;
  white-space: nowrap;
  position: absolute;flex-wrap: wrap;
    width: 100%;
}

.league div:last-of-type {
    overflow: hidden;
    flex: 1;
    margin-left: 7px;
    text-overflow: ellipsis;
}
.icon_league {
  height: 24px;
  width: 8px;
  border-radius: 4px;
  /* background-color: #5700af; */
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.34);
  margin: 0 8px;
}
</style>



