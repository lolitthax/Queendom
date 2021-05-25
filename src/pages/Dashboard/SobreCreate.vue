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

  <h1>Sobre</h1>
    </div>
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
    <div class="q-pa-md" style="max-width: 100%">
    <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="indigo" name="info" />
        </q-item-section>
        <q-item-section> </q-item-section>
        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="visibility" color="blue" @click="alterar(sobre.id)" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" color="red-14" />
          </div>
        </q-item-section>
      </q-item>
      </q-list>
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

