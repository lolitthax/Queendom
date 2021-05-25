<template>
  <div>
    <q-toolbar class="bg-pink-5 text-white shadow-2">
      <q-btn flat round dense icon="logout" class="q-mr-sm" />

      <q-space />

      <q-btn-toggle
        flat stretch
        toggle-color="yellow"
        :options="[
          {label: 'Início'},
          {label: 'Sobre'},
          {label: 'Personagens'},
           {label: 'Departamento'}
        ]"
      />
    </q-toolbar>
  </div>
</template>