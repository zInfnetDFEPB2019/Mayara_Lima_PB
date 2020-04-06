<template>
  <div class="about-page">
    <md-card
      class="md-layout-item md-size-50 md-xsmall-size-100 md-small-size-75"
    >
      <md-card-header>
        <span class="md-display-1">Projeto de Bloco: ToDo List</span>
      </md-card-header>
      <md-divider class="no-margin" />
      <md-card-content>
        <div class="site-map">
          <span class="md-title">Mapa do site</span>
          <p class="md-body-2">
            No ínicio do projeto, ele foi pensado com uma parte de autenticação,
            o que ocasionava no seguinte fluxo:
            <img src="../../assets/about/site-map.png" />
            <br />Como pode-se perceber, eu não havia pensado muito bem quais
            seriam os tipos de ações do usuário dentro do dashboard, por conta
            disso, não específiquei os detalhes da jornada do usuário.
            <br />
            <br />Conforme o projeto foi se desenvolvendo, percebeu-se que a
            autenticação seria um passo a mais e para o propósito do projeto
            seria desnecessário, logo próximo da "reta final" decidiu-se cortar
            esta parte de login e cadastro e deixar apenas o essencial.
            <br />Então, atualmente temos o seguinte fluxo:
            <br />
            <img src="../../assets/about/site-map2.png" />
          </p>
        </div>
        <md-divider />
        <div class="wireframe">
          <span class="md-title">Wireframe</span>
          <p class="md-body-2">
            Segue abaixo as telas das respectivas páginas home, login,
            cadastre-se e sobre:
            <img src="../../assets/about/wireframe-home.png" />
            <img src="../../assets/about/wireframe-login.png" />
            <img src="../../assets/about/wireframe-singup.png" />
            <img src="../../assets/about/wireframe-about.png" />
          </p>
        </div>
        <md-divider />
        <div class="prototype">
          <span class="md-title">Protótipo</span>
          <p class="md-body-2">
            Segue abaixo a tela de home como foi desenhada no início do projeto:
            <img src="../../assets/about/prototype-home.png" />
          </p>
        </div>
        <md-divider />
        <div class="visual-guideline">
          <span class="md-title">Visual Guideline</span>
          <p class="md-body-2">
            A fonte escolhida foi a Montserrat:
            <img src="../../assets/about/font-montserrat.jpg" />
            <img src="../../assets/about/font-montserrat2.jpg" />
            <br />
            As cores escolhidas foram:
            <br />
            <span class="color color-purple">Primária</span>
            <span class="color color-red">Secundária</span>
          </p>
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style lang="scss" scoped>
div > * {
  margin: 0.5em 0;
  display: block;
}

.about-page {
  display: flex;
  justify-content: center;
}

.md-card-content {
  padding: 12px 32px 24px;
}

.md-divider {
  margin: 24px 0;
}

.md-divider.no-margin {
  margin: 0;
}

img {
  margin: 20px 12.5%;
  width: 75%;
}

.color {
  width: 100px;
  height: 50px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
  color: #fff;

  &-purple {
    background-color: #8061e0;
  }
  &-red {
    background-color: #f14c63;
  }
}

.md-theme-purple .md-display-1 {
  color: #000;
}
</style>
