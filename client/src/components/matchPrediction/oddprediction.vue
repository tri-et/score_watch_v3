<template>
  <div>
    <span>{{odd}}</span>
    <span class="arrow" :class="arrow"></span>
  </div>
</template>
<script>
export default {
  props: {
    odd: {
      type: String
    }
  },
  data() {
    return {
      arrow: ""
    };
  },
  watch: {
    odd: function(newdata, oldvalue) {
      let self = this;
      if (oldvalue != undefined) {
          if (parseFloat(newdata) > parseFloat(oldvalue)) {
            this.arrow = "up";
            setTimeout(() => {
              self.arrow = "";
            }, 3000);
          } else if (parseFloat(newdata) < parseFloat(oldvalue)) {
            this.arrow = "down";
            setTimeout(() => {
              self.arrow = "";
            }, 3000);
          } else {
            this.arrow = "";
          }
      }
    },
    deep: true
  }
};
</script>
<style scoped>
.arrow {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  cursor: pointer;
  vertical-align: middle;
  display: inline-block;
  opacity: 0;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.down {
  border-top: 4px solid #ff7754;
  opacity: 1;
}

.up {
  border-bottom: 4px solid #2ace5f;
  opacity: 1;
}
</style>


