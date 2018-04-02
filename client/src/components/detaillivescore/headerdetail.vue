<template>
  <div class="headerdetail">
    <headleague :leaguename="dataSelectedLivescore[5]" :leagueshort="dataSelectedLivescore[6]" :leaguecolor="dataSelectedLivescore[7]"></headleague>
    <headerscore :items="dataSelectedLivescore"></headerscore>
    <headerteamname :teamaway="dataSelectedLivescore[9]" :teamhome="dataSelectedLivescore[8]"></headerteamname>
  </div>

</template>
<script>
import headleague from "./headleague";
import headerscore from "./headerscorelive";
import headerteamname from "./headerteamname";
import { mapGetters } from "vuex";
export default {
   computed: {
    ...mapGetters(["dataSelectedLivescore"])
  },
  components: {
    headleague,
    headerscore,
    headerteamname
  }
};
</script>
<style scoped>
.headerdetail {
  width: 100%;
  height: 180px;
  background-color: #fff;
}
</style>


