<template>
  <div>
   <header class="navbar">
  <q-btn  size="16px" flat  icon="home" color="white" to="/dashboard" label="Dashboard" />
  <q-btn  size="16px" flat  icon="school" color="white" to="/departamento" label="Departamento" />
  <q-btn  size="16px" flat  icon="favorite" color="white" to="/paquera" label="Paqueras" />
  <q-btn  size="16px" flat icon="book" color="white" to="/sobre" label="Sobre" />
  <q-btn  size="16px" flat  icon="logout" color="white" to="/login" label="Sair" />
   
  </header>

  <h1>Sobre</h1>
  
      <div class="q-pa-md" style="max-width: 100%; margin-top:10px;">  
         <q-input outlined label="Título" v-model="titulo" style="margin-bottom: 10px"/>  
    <q-input
    v-model="descricao" 
      filled
      type="textarea"
      label="Texto"
      style="margin-bottom: 15px"
    />
        <q-btn color="secondary" class="full-width" label="Salvar" @click="cadastrarSobre()"  />

  </div>

  </div>
  
</template>
<script>
import {mapActions} from 'vuex'

export default{
    name: 'AdicionarSobre',
    data(){
      return{
        titulo: '',
        descricao: '',

      }
    },
    methods: {
      ...mapActions('mainstore',['adicionarSobre']),
      async cadastrarSobre (){
       await this.adicionarSobre({ titulo: this.titulo, descricao: this.descricao})
       this.$router.push('/sobre')
      }
    }
}
</script>
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

