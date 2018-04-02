<template>
  <div class="headerleague" :style="{'color':leaguecolor}">
    <div>
      <div class="icon_league" :style="{'background-color':leaguecolor}"></div>
      <span>{{leagueshort}}</span>
    </div>
    <div>
      <span class="leaguename">{{leaguename}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    leaguename:{
      type:String
    },
    leagueshort:{
      type:String
    },
    leaguecolor:{
      type:String
    }
  }
};
</script>
<style scoped>
.headerleague {
  height: 64px;
  background-color: #fff;
  display: flex;
  align-items: center;
  font-size: 16px;
  padding-right: 24px;
}
.headerleague > div:first-child{
  display: flex;
  align-items: center;
  margin-left: 24px;
  flex: 1;
}
.icon_league {
  height: 24px;
  width: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.34);
  margin: 0 8px 0 0;
}

.leaguename{
  color: #CBCBCB !important;
}
</style>


