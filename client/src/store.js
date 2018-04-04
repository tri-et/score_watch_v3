import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    calendarPre: 14,//set active Today
    calendarLiveScore: 14,
    activePrediction: null,
    boderActive: 'inplay',
    dataSelectedPrediction: {},
    isOpenDetailPrediction: false,
    typePrediction: {
      colorheader: '#767676',
      colorprediction: '#f0f0f0'
    },
    typeLivescore: {
      bgheader: '#f0f0f0',
      colorheader: '#000',
      bglivescore: '#e3e3e3',
      colorlivescore: '#888888'
    },
    isopenHelp: false,
    isopenMenuSideBar: false,
    shrink: false,
    hideDetail: true,
    menuActive: 'predictions',
    dataSelectedLivescore: [],
    dataStats: [],
    datatimeline:[],
    activelivescore:null,
    clborederLivescore:"",
    titleMenu:"predictions",
    loadingLivescore:false,
    loadingPredictions:false
  },
  getters: {
    calendarLiveScore(state) {
      return state.calendarLiveScore
    },
    loadingPredictions(state) {
      return state.loadingPredictions
    },
    loadingLivescore(state) {
      return state.loadingLivescore
    },
    titleMenu(state) {
      return state.titleMenu
    },
    clborederLivescore(state) {
      return state.clborederLivescore
    },
    calendarPre(state) {
      return state.calendarPre
    },
    activePrediction(state) {
      return state.activePrediction
    },
    boderActive(state) {
      return state.boderActive
    },
    dataSelectedPrediction(state) {
      return state.dataSelectedPrediction
    },
    isOpenDetailPrediction(state) {
      return state.isOpenDetailPrediction
    },
    typePrediction(state) {
      return state.typePrediction
    },
    typeLivescore(state) {
      return state.typeLivescore
    },
    isopenHelp(state) {
      return state.isopenHelp
    },
    isopenMenuSideBar(state) {
      return state.isopenMenuSideBar
    },
    shrink(state) {
      return state.shrink
    },
    hideDetail(state) {
      return state.hideDetail
    },
    menuActive(state) {
      return state.menuActive
    },
    dataSelectedLivescore(state) {
      return state.dataSelectedLivescore
    },
    dataStats(state) {
      return state.dataStats
    },
    datatimeline(state) {
      return state.datatimeline
    },
    activelivescore(state) {
      return state.activelivescore
    }
  },
  mutations: {
    setcalendarLiveScore(state, val) {
      state.calendarLiveScore = val
    },
    setloadingPredictions(state, val) {
      state.loadingPredictions = val
    },
    setloadingLivescore(state, val) {
      state.loadingLivescore = val
    },
    settitleMenu(state, val) {
      state.titleMenu = val
    },
    setclborederLivescore(state, val) {
      state.clborederLivescore = val
    },
    setcalendarPre(state, val) {
      state.calendarPre = val
    },
    setactivePrediction(state, val) {
      state.activePrediction = val
    },
    setboderActive(state, val) {
      state.boderActive = val
    },
    setdataSelectedPrediction(state, val) {
      state.dataSelectedPrediction = val
    },
    setisOpenDetailPrediction(state, val) {
      state.isOpenDetailPrediction = val
    },
    settypePrediction(state, val) {
      state.typePrediction = val
    },
    setisopenHelp(state, val) {
      state.isopenHelp = val
    },
    setisopenMenuSideBar(state, val) {
      state.isopenMenuSideBar = val
    },
    setshrink(state, val) {
      state.shrink = val
    },
    sethideDetail(state, val) {
      state.hideDetail = val
    },
    setmenuActive(state, val) {
      state.menuActive = val
    },
    setdataSelectedLivescore(state, val) {
      state.dataSelectedLivescore = val
    },
    settypeLivescore(state, val) {
      state.typeLivescore = val
    },
    setdataStats(state, val) {
      state.dataStats = val
    },
    setdatatimeline(state, val) {
      state.datatimeline = val
    },
    setactivelivescore(state, val) {
      state.activelivescore = val
    }
  },
  actions: {}
})
