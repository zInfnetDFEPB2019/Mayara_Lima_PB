<template>
  <div class="task-page">
    <md-card
      class="md-layout-item md-size-50 md-xsmall-size-100 md-small-size-75"
    >
      <AddTask />
    </md-card>
    <md-card
      class="md-layout-item md-size-50 md-xsmall-size-100 md-small-size-75"
    >
      <md-card-header>
        <div class="md-title">Minhas tarefas</div>
      </md-card-header>
      <md-card-content>
        <ul class="tasks">
          <li
            class="task"
            v-for="task in allTasks"
            :key="task.id"
            :class="{ completed: task.completed }"
          >
            <md-checkbox
              v-model="task.completed"
              class="md-accent"
              v-on:change="sortAllTasks()"
            >
              {{ task.title }}
            </md-checkbox>
            <router-link
              tag="button"
              class="md-button"
              :to="{ name: 'task-details', params: { id: task.id } }"
            >
              <md-icon>
                <md-icon>description</md-icon>
              </md-icon>
            </router-link>
            <md-button v-on:click="deleteTask(task.id)">
              <md-icon>delete</md-icon>
            </md-button>
          </li>
        </ul>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddTask from '../AddTask.vue';

export default {
  name: 'TasksPage',
  components: { AddTask },
  methods: {
    ...mapActions(['deleteTask', 'sortAllTasks']),
    viewDetails() {},
  },
  computed: mapGetters(['allTasks']),
};
</script>

<style lang="scss" scoped>
.task-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tasks {
  list-style: none;
  padding-left: 12px;
}

.task {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
  margin-bottom: 12px;

  &:last-child {
    border: none;
    margin: 0;
  }

  .md-button {
    width: 50px;
    min-width: 50px;
  }

  .md-checkbox {
    width: calc(100% - 124px);
    overflow: hidden;
  }
}

.task.completed .md-checkbox {
  text-decoration: line-through;
}
</style>

<style>
.md-checkbox .md-checkbox-label {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
