<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">ToDo List</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <img src="../assets/logo.png" class="logo" />Menu
        </md-toolbar>

        <md-list>
          <router-link tag="a" :to="{ name: 'home' }">
            <md-list-item @click="menuVisible = false">
              <md-icon>home</md-icon>
              <span class="md-list-item-text">Home</span>
            </md-list-item>
          </router-link>

          <router-link tag="a" :to="{ name: 'tasks' }">
            <md-list-item @click="menuVisible = false">
              <md-icon>check_box</md-icon>
              <span class="md-list-item-text">Tarefas</span>
            </md-list-item>
          </router-link>

          <router-link tag="a" :to="{ name: 'about' }">
            <md-list-item @click="menuVisible = false">
              <md-icon>favorite</md-icon>
              <span class="md-list-item-text">Sobre</span>
            </md-list-item>
          </router-link>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'PageContainer',
  data: () => ({
    menuVisible: false,
  }),
  methods: {
    ...mapActions(['getTasks']),
  },
  computed: mapGetters(['alreadyMadeFirstFetch']),
  created() {
    if (!this.alreadyMadeFirstFetch) {
      this.getTasks();
    }
  },
  mounted() {
    this.$material.theming.theme = 'purple';
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.page-container,
.md-app {
  min-height: 100vh;
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.logo {
  width: 32px;
  margin-right: 24px;
}
</style>
