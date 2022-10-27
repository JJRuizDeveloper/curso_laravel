<template>
    <router-link :to="to" class="link" :class="{active: isActive}">
        <i class="icon" :class="icon" />
        <transition name="fade">
          <span v-if="!collapsed">
            <slot />
        </span>
        </transition>
    </router-link>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'SideBarLink',
  props: {
    to: {type:String, required: true},
    icon: {type:String, required: true}
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    const collapsed = computed( () => store.state.collapsed);
    return {collapsed, isActive}
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.link {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    font-weight: 400;
    user-select: none;

    margin: 0.1em 0;
    padding: 0.4em;
    border-radius: 0.25em;
    height: 1.5em;

    color: white;
    text-decoration: none;
}

.link:hover {
    background-color: $sidebar-item-hover;
}

.link.active {
    background-color: $sidebar-item-active;
}

.link .icon {
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

</style>
