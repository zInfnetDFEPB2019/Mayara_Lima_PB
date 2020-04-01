<template>
  <div>
    <AddTask />
    <ul class="tasks">
      <li
        class="task"
        v-for="task in allTasks"
        :key="task.id"
        :class="{'completed':task.completed}"
      >
        <md-checkbox v-model="task.completed" class="md-primary">{{ task.title }}</md-checkbox>
        <router-link tag="a" :to="{ name: 'task-details', params: { id: task.id } }">
          <md-button>
            <md-icon>description</md-icon>
          </md-button>
        </router-link>
        <md-button v-on:click="deleteTask(task.id)">
          <md-icon>delete</md-icon>
        </md-button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddTask from "./AddTask.vue";
export default {
  name: "TasksPage",
  components: { AddTask },
  methods: {
    ...mapActions(["getTasks", "deleteTask"]),
    viewDetails() {}
  },
  computed: mapGetters(["allTasks"]),
  created() {
    this.getTasks();
  }
};
</script>

<style scoped>
.tasks {
  list-style: none;
}

.task.completed .md-checkbox {
  text-decoration: line-through;
}
</style>
