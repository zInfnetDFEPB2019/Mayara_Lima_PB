<template>
  <div class="add-task">
    <md-field>
      <label>Nova Tarefa</label>
      <md-input v-model="newTaskTitle"></md-input>
    </md-field>
    <md-button class="md-accent md-raised" v-on:click="createTask()"
      >Criar</md-button
    >
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'AddTask',
  data: () => ({
    newTaskTitle: '',
  }),
  methods: {
    ...mapActions(['addTask']),
    createTask() {
      if (this.newTaskTitle) {
        this.addTask(this.newTaskTitle);
        this.newTaskTitle = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.add-task {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;

  .md-field {
    width: calc(100% - 132px);
  }

  .md-button {
    width: 100px;
  }
}
</style>
