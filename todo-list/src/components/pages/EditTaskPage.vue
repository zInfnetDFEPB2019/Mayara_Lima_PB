<template>
  <div class="edit-page">
    <md-card
      class="md-layout-item md-size-50 md-xsmall-size-100 md-small-size-75"
    >
      <md-card-header>
        <div class="md-title">Editar tarefa</div>
      </md-card-header>
      <md-divider></md-divider>
      <md-card-content>
        <form novalidate @submit.prevent="saveTask">
          <md-field>
            <label for="edit-task-title">Nome</label>
            <md-input
              type="text"
              name="edit-task-title"
              id="edit-task-title"
              v-model="title"
            />
          </md-field>
          <div class="completed">
            <label for="edit-task-completed">Completa</label>
            <md-checkbox v-model="completed" class="md-accent"></md-checkbox>
          </div>
          <md-field>
            <label for="edit-task-description">Descrição</label>
            <md-input
              type="text"
              name="edit-task-description"
              id="edit-task-description"
              v-model="description"
            />
          </md-field>
          <div class="buttons">
            <md-button type="submit" class="md-raised md-accent"
              >Salvar tarefa</md-button
            >
            <router-link
              tag="button"
              class="md-button md-raised md-accent"
              :to="{ name: 'task-details', params: { id: id } }"
              >Cancelar</router-link
            >
          </div>
        </form>
        <img class="illustration" src="../../assets/edit-task.jpg" />
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'EditTaskPage',
  data: function() {
    return {
      id: this.$route.params.id,
      title: '',
      completed: false,
      description: '',
    };
  },
  computed: mapGetters(['taskById']),
  methods: {
    ...mapActions(['updateTask']),
    saveTask() {
      this.updateTask({
        userId: 1,
        id: this.id,
        title: this.title,
        completed: this.completed,
        description: this.description,
      });
      this.$router.push({
        name: 'task-details',
        params: { id: this.id, edited: true },
      });
    },
  },
  created() {
    this.title = this.taskById(this.id).title;
    this.completed = this.taskById(this.id).completed;
    this.description = this.taskById(this.id).description;
  },
};
</script>

<style scoped>
.completed {
  display: flex;
  align-items: center;
}

.completed label {
  font-size: 16px;
  color: #777;
  margin-right: 12px;
}

.edit-page {
  display: flex;
  justify-content: center;
}

.illustration {
  margin: 32px 12.5%;
  width: 75%;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
