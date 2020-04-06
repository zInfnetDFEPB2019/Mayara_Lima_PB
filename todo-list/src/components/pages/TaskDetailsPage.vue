<template>
  <div class="details-page">
    <md-card
      class="md-layout-item md-size-50 md-xsmall-size-100 md-small-size-75"
    >
      <md-card-header>
        <router-link
          tag="button"
          class="md-button back-button"
          :to="{ name: 'tasks' }"
        >
          <md-icon>arrow_back</md-icon>
        </router-link>
      </md-card-header>
      <md-divider></md-divider>
      <md-card-content>
        <h2 class="title">
          <b>Tarefa: </b>{{ taskById(id).title }}
          <router-link
            tag="button"
            class="md-button"
            :to="{ name: 'edit-task', params: { id: id } }"
          >
            <md-icon>edit</md-icon>
          </router-link>
        </h2>
        <div>
          <b>Completa? </b>
          <span v-if="taskById(id).completed">
            <md-icon>done</md-icon>
          </span>
          <span v-else>
            <md-icon>clear</md-icon>
          </span>
        </div>
        <p><b>Descrição: </b>{{ taskById(id).description }}</p>
        <img class="illustration" src="../../assets/task-details.jpg" />
        <md-snackbar :md-active.sync="taskEdited">
          <span>A tarefa foi editada com sucesso!</span>
          <md-button class="md-primary" @click="taskEdited = false"
            >Fechar</md-button
          >
        </md-snackbar>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TaskDetailsPage',
  data: function() {
    return {
      id: this.$route.params.id,
      taskEdited: this.$route.params.edited == true,
    };
  },
  computed: mapGetters(['taskById']),
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;

  b {
    margin-right: 12px;
  }
}

.md-card-content {
  padding: 12px 32px 24px;
}

.details-page {
  display: flex;
  justify-content: center;
}

.back-button.md-button {
  width: 40px;
  min-width: 40px;
  border-radius: 50%;
}

.illustration {
  margin: 32px 12.5%;
  width: 75%;
}
</style>
