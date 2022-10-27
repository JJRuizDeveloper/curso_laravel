<template>
    <div class="sidebar" :style="{width: sidebarWidth}">
        <!-- CABECERA -->
        <h1>
            <span v-if="collapsed">
                <div>Mi</div>
            </span>
            <span v-else>
                Mi Aplicación
            </span>
        </h1>

        <!-- LINKS -->
        <SideBarLink to="/" icon="fas fa-home">Ejemplo</SideBarLink>
         <SideBarLink to="/about" icon="fas fa-home">Ejemplo</SideBarLink>
          <SideBarLink to="/about" icon="fas fa-home">Ejemplo</SideBarLink>
           <SideBarLink to="/about" icon="fas fa-home">Ejemplo</SideBarLink>
            <SideBarLink to="/about" icon="fas fa-home">Ejemplo</SideBarLink>



        <!-- COLLAPSE -->
        <span class="collapse-icon" @click="toggleSidebar" :class="{'rotate-180': collapsed}">
            <i class="fas fa-angle-double-left" />
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import {useStore} from 'vuex';
import SideBarLink from './SideBarLink.vue';

export default defineComponent({
  name: 'SideBar',
  components: {SideBarLink},
  setup() {
    const store = useStore();
    const collapsed = computed( () => store.state.collapsed )
    const sidebarWidth = computed( () => store.getters.sidebarWidth )
    const toggleSidebar = () => store.commit('toggleSidebar');
    return {collapsed, sidebarWidth, toggleSidebar}
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sidebar {
    color: white;
    background-color: $sidebar-bg-color;
    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}

.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    color: rgba($color: #fff, $alpha: 0.7);
    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>
