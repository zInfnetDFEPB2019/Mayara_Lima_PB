<template>
  <section class="home">
    <div>
      <img src="../../assets/home2.jpg" />
    </div>
    <div class="center-column">
      <img src="../../assets/ToDo.png" class="logo" />
      <p>
        Isto é para os loucos. Os rebeldes. Os criadores de caso. Os que vêem as
        coisas de forma diferente. Enquanto alguns os vêem como loucos, nós
        vemos gênios. Porque as pessoas que são loucas o suficiente para achar
        que podem mudar o mundo, são as que de fato, mudam.
      </p>
      <p>Vamos começar?</p>
      <router-link tag="a" :to="{ name: 'tasks' }">
        <md-button class="md-accent md-raised">Começar</md-button>
      </router-link>
    </div>
    <div>
      <img src="../../assets/home1.jpg" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.home div:nth-child(odd) {
  width: 36%;
}

.home div:nth-child(even) {
  width: 28%;
}

.center-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
}

.center-column p {
  color: #8061e0;
  font-weight: bold;
  text-align: center;
}

.center-column button {
  width: 100px;
}

.logo {
  max-width: 180px;
  margin-bottom: 12px;
}
</style>
