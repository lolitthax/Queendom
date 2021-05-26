<template>
  <div>
    <div class="q-gutter-y-md" style="max-width: 100%">
  

      <q-tabs
        inline-label
        mobile-arrows
        class="bg-pink-5 text-white shadow-2"
      >
        <q-tab name="mails" icon="library_books" label="Sobre" />
        <q-tab name="alarms" icon="favorite" label="Personagens" />
        <q-tab name="movies" icon="school" label="Departamentos" />
          <q-tab name="movies" icon="home" label="Voltar a Dashboard" />

      </q-tabs>

  <center><h1>Editar - Departamentos</h1></center>
    </div>
      <div class="q-pa-md" style="max-width: 100%; margin-top:10px;">  
         <q-input outlined label="Id" v-model="departamentoSelecionado.id_dep" style="margin-bottom: 10px"
         :disable="true" /> 
          <q-input outlined label="Título" v-model="departamentoSelecionado.titulo_dep" style="margin-bottom: 10px"/>  
    <q-input
    v-model="departamentoSelecionado.descricao_dep" 
      filled
      type="textarea"
      label="Texto"
      style="margin-bottom: 15px"
    />
        <q-btn color="secondary" class="full-width" label="Salvar alterações" @click="alterar()"  />

  </div>

  </div>
  
</template>
<script>
import {mapActions, mapGetters } from 'vuex'

export default{
    name: 'EditarDepartamento',
    data(){
      return{
        titulo_dep: '',
        descricao_dep: '',

      }
    },
    methods: {
      ...mapActions('mainstore',['alterarDepartamento']),
      async alterar (){
       await this.alterarDepartamento(this.departamentoSelecionado)
       this.$router.push('/departamento')
      }
    },
    computed: {
      ...mapGetters('mainstore', ['departamentoSelecionado'])
    }
}
</script>

