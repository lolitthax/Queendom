<template>
  <div>
    <q-toolbar class="bg-pink-5 text-white shadow-2">
      <q-btn flat round dense icon="logout" class="q-mr-sm" />

      <q-space />

      <q-btn-toggle
        v-model="model"
        flat stretch
        toggle-color="yellow"
        :options="[
          {label: 'Início', value: 'one'},
          {label: 'Sobre', value: 'two'},
          {label: 'Personagens', value: 'three'},
           {label: 'Departamento', value: 'four'}
        ]"
      />
    </q-toolbar>
  </div>
</template>