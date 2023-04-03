
<script setup>
  const props = defineProps(['getPendingTasks']);
</script>  

<template>
   <header class="p-5 mb-4 mt-4 bg-light rounded-3">
      <h1>Minhas tarefas</h1>
      <p>
        Voce possui {{ props.getPendingTasks }} tarefas pendentes
      </p>
    </header>
</template>

<style scoped>

</style>