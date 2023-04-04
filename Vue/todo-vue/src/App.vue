<!-- eslint-disable vue/require-v-for-key -->
<script setup>

  import { reactive } from 'vue';
  import CabecalhoInicial from './components/CabecalhoInicial.vue';
  import FormPrinc  from './components/FormPrinc.vue';
  import ListaDeTarefas from './components/ListaDeTarefas.vue'

  const states = reactive({
    filter: 'todas',
    tempTask: '',

    tasks: [
      {
        title: 'Estudar Java',
        finished: false
      },
      {
        title: 'Estudar React',
        finished: false,
      },

    ]
  });

  const getPendingTasks = () => {
    return states.tasks.filter(task => !task.finished);
  }

  const getFinishedTasks = () => {
    return states.tasks.filter(task => task.finished);
  }

  const getFilterTasks = () => {
    const { filter } = states;

    switch (filter) {
      case 'pendentes':
         return getPendingTasks();
      case 'finalizadas':
        return getFinishedTasks();
      default: 
        return states.tasks
    }
  }

  const registerTask = () => {
    const register = {
      title: states.tempTask,
      finished: false
    }

    states.tasks.push(register);
    states.tempTask = '';
  }

</script>

<template>
  <div class="container">
   <CabecalhoInicial :get-pending-tasks="getPendingTasks().length"/>
   <FormPrinc :handle-filter="event => states.filter = event.target.value" :temp-task="states.tempTask" :edit-task="event => states.tempTask = event.target.value" :register-task="registerTask"/>
   <ListaDeTarefas :tasks="getFilterTasks()"/>
  </div>
</template>



