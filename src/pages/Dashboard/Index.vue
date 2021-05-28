<template>
  <div>
     <header class="navbar">
  <q-btn  size="16px" flat  icon="home" color="white" to="/dashboard" label="Dashboard" />
  <q-btn  size="16px" flat  icon="school" color="white" to="/departamento" label="Departamento" />
  <q-btn  size="16px" flat  icon="favorite" color="white" to="/paquera" label="Paqueras" />
  <q-btn  size="16px" flat icon="book" color="white" to="/sobre" label="Sobre" />
  <q-btn  size="16px" flat  icon="logout" color="white" to="/login" label="Sair" />
   
  </header>
 
 
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
.navbar{
  background-color:#14213d;
  overflow: hidden;
}
.navbar a:hover{
  background-color: #FD7272;
  color: #14213d;
  font-weight: bold;
}
</style>
