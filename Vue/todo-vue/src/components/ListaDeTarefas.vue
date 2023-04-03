<script setup>
  const props = defineProps(['tasks']);
</script>

<template>
    <ul v-if="props.tasks.length > 0" class="list-group mt-4">
      <li v-for="task in props.tasks" class="list-group-item">
        <input @change="event => task.finished = event.target.checked" :checked="task.finished" :id="task.title" type="checkbox">
        <label :class="{ done: task.finished === true }" class="ms-3" :for="task.title">
          {{ task.title }}
        </label>
      </li>
    </ul>
    <p v-else class="fw-bold text-center mt-4">
      Nao existem tarefas para mostrar
    </p>
</template>