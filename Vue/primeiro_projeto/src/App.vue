<script setup>
import { reactive } from 'vue';

const dizOi = (name) => {
  return `${name} disse Oi.`
}

const imgBatman = `https://files.tecnoblog.net/wp-content/uploads/2021/04/Qual-a-ordem-cronologica-dos-filmes-do-Batman-Deny-Freeman-Flickr.jpg`;
const imgSuperman = `https://i.uai.com.br/aKsk887c97iDdJ-ENvpwnNBmwd4=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2023/03/30/320846/henry-cavill-como-superman_1_51842.jpg`

const btnDisabled = false;
const gostaDoBatman = false;
const gostaDoSuperman = true;

const estaAutorizado = true

const state = reactive({
  count: 0,
  email: '',
  balance: 5000,
  transferring: 0,
});

const increment = () => {
  state.count++
}

const decrement = () => {
  if (state.count > 0)
    state.count--
}

const insertEmail = event => state.email = event.target.value;

const insertTransferValue = event => state.transferring = event.target.value

const showBackBalance = () => {
  const { balance, transferring } = state;
  const backBalance = balance - transferring;

  return backBalance >= 0 ? backBalance : `Saldo insuficiente para concluir transacao`;

};

</script>

<template>
  <h1>{{ dizOi('Junior') }}</h1>

  <img v-if="gostaDoBatman" v-bind:src="imgBatman" alt="Batman">
  <img v-else-if="gostaDoSuperman" v-bind:src="imgSuperman" alt="Batman">
  <h2 v-else>Nao curte herois da DC</h2>

  <h1 v-if="estaAutorizado">Bem vindo</h1>
  <h1 v-else>Nao tem acesso</h1>

  <button :disabled="!btnDisabled">Enviar</button>


  <hr>
  <div>
    {{ state.count }}
    <button @click="increment" type="button">+</button>
    <button @click="decrement" type="button">-</button>
  </div>


  <hr>
  <div>
    {{ state.email }}
    <input type="email" @keyup="insertEmail">
  </div>


  <hr>

  <div>
    <p>Saldo: {{ state.balance }}</p>
    <p>Trasferindo: {{ state.transferring }}</p>
    <p v-bind:class="{ invalid: state.transferring > state.balance }"> Saldo depois da transferencia: {{ showBackBalance() }}</p>
    <input v-bind:class="{ invalid: state.transferring > state.balance }" type="number" @keyup="insertTransferValue" placeholder="Quatia a tranferir">
  </div>
</template>

<style scoped>
    img {
      max-width: 400px;
    }

    div {
      width: 500px;
      display: flex;
      flex-direction: column;
      padding: 25px 0;
      margin: 0 auto;
      text-align: center;
    }

    .invalid {
      outline-color: red;
      border-color: red;
      color: red;
    }
</style>
