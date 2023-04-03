<script setup>
  const props = defineProps(['registerTask', 'tempTask', 'handleFilter', 'editTask'])
</script>

<template>
   <form @submit.prevent="props.registerTask">
      <div class="row">
        <div class="col">
          <input :value="props.tempTask" @change="props.editTask" required type="text" class="form-control" placeholder="Digite aqui a descricao da tarefa">
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary">Cadastrar</button>
        </div>
        <div class="col-md-2">
          <select class="form-control" @change="props.handleFilter">
            <option class="form-control" value="todas">Todas tarefas</option>
            <option class="form-control" value="pendentes">Pendentes</option>
            <option class="form-control" value="finalizadas">Finalizadas</option>
          </select>
        </div>
      </div>
    </form>
</template>