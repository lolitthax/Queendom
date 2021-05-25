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

  <h1>Editar - Sobre</h1>
    </div>
      <div class="q-pa-md" style="max-width: 100%; margin-top:10px;">  
         <q-input outlined label="Id" v-model="sobreSelecionado.id" style="margin-bottom: 10px"
         :disable="true" /> 
          <q-input outlined label="Título" v-model="sobreSelecionado.titulo" style="margin-bottom: 10px"/>  
    <q-input
    v-model="sobreSelecionado.descricao" 
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
    name: 'EditarSobre',
    data(){
      return{
        titulo: '',
        descricao: '',

      }
    },
    methods: {
      ...mapActions('mainstore',['alterarSobre']),
      async alterar (){
       await this.alterarSobre(this.sobreSelecionado)
       this.$router.push('/sobre')
      }
    },
    computed: {
      ...mapGetters('mainstore', ['sobreSelecionado'])
    }
}
</script>

