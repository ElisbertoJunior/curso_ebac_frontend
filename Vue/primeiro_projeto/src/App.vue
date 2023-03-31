<script setup>
  const nome = 'Junior';

  const dizOi = (name) => {
    return `${name} disse Oi.`
  }

  const imgBatman = `https://files.tecnoblog.net/wp-content/uploads/2021/04/Qual-a-ordem-cronologica-dos-filmes-do-Batman-Deny-Freeman-Flickr.jpg`;

  const btnDisabled = false;

</script>

<template>
  <h1>{{ dizOi('Junior') }}</h1>
  <img v-bind:src="imgBatman" alt="Batman">

  <button :disabled="!btnDisabled">Enviar</button>
</template>

<style scoped>

</style>
