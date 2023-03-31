<script setup>
  const nome = 'Junior';

  const dizOi = (name) => {
    return `${name} disse Oi.`
  }

  const imgBatman = `https://files.tecnoblog.net/wp-content/uploads/2021/04/Qual-a-ordem-cronologica-dos-filmes-do-Batman-Deny-Freeman-Flickr.jpg`;
  const imgSuperman = `https://i.uai.com.br/aKsk887c97iDdJ-ENvpwnNBmwd4=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2023/03/30/320846/henry-cavill-como-superman_1_51842.jpg`

  const btnDisabled = false;
  const gostaDoBatman = false;
  const gostaDoSuperman = true;

  const estaAutorizado = true
</script>

<template>
  <h1>{{ dizOi('Junior') }}</h1>

  <img v-if="gostaDoBatman" v-bind:src="imgBatman" alt="Batman">
  <img v-else-if="gostaDoSuperman" v-bind:src="imgSuperman" alt="Batman">
  <h2 v-else>Nao curte herois da DC</h2>

  <h1 v-if="estaAutorizado">Bem vindo</h1>
  <h1 v-else>Nao tem acesso</h1>

  <button :disabled="!btnDisabled">Enviar</button>
</template>

<style scoped>
  img {
    max-width: 400px;
  }
</style>
