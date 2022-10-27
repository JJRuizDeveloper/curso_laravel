import { createStore } from 'vuex'

export default createStore({
  state: {
    collapsed: false,
    SIDEBAR_WIDTH: 180,
    SIDEBAR_WIDTH_COLLAPSED: 38,
  },
  getters: {
    sidebarWidth(state) {
      return state.collapsed ? `${state.SIDEBAR_WIDTH_COLLAPSED}px` : `${state.SIDEBAR_WIDTH}px`;
    }
  },
  mutations: {
    toggleSidebar(state) {
      state.collapsed = !state.collapsed;
    }
  }
})
