<template>
  <div class="add-task">
    <md-field>
      <label>Nova Tarefa</label>
      <md-input v-model="newTaskTitle"></md-input>
    </md-field>
    <md-button class="md-primary md-raised" v-on:click="createTask()">Criar</md-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTask",
  data: () => ({
    newTaskTitle: ""
  }),
  methods: {
    ...mapActions(["addTask"]),
    createTask() {
      this.addTask(this.newTaskTitle);
      this.newTaskTitle = "";
    }
  }
};
</script>

<style scoped>
.add-task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
}

.add-task .md-field {
  width: 240px;
}
</style>
