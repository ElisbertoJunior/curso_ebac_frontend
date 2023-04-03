<!-- eslint-disable vue/require-v-for-key -->
<script setup>

  import { reactive } from 'vue';

  const states = reactive({
    filter: 'todas',

    tasks: [
      {
        title: 'Estudar Java',
        finished: false
      },
      {
        title: 'Estudar React',
        finished: true,
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

</script>

<template>
  <div class="container">
    <header class="p-5 mb-4 mt-4 bg-light rounded-3">
      <h1>Minhas tarefas</h1>
      <p>
        Voce possui {{ getPendingTasks().length }} tarefas pendentes
      </p>
    </header>
    <form>
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="Digite aqui a descricao da tarefa">
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary">Cadastrar</button>
        </div>
        <div class="col-md-2">
          <select class="form-control" @change="event => states.filter = event.target.value">
            <option class="form-control" value="todas">Todas tarefas</option>
            <option class="form-control" value="pendentes">Pendentes</option>
            <option class="form-control" value="finalizadas">Finalizadas</option>
          </select>
        </div>
      </div>
    </form>
    <ul class="list-group mt-4">
      <li v-for="task in getFilterTasks()" class="list-group-item">
        <input @change="event => task.finished = event.target.checked" :checked="task.finished" :id="task.title" type="checkbox">
        <label :class="{ done: task.finished === true }" class="ms-3" :for="task.title">
          {{ task.title }}
        </label>
      </li>
    </ul>
  </div>
</template>


<style scoped>
  .done {
    text-decoration: line-through;
  }
</style>
