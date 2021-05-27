<template>
  <div>
  
 <header class="navbar">
  <q-btn  size="16px" flat  icon="home" color="white" to="/dashboard" label="Dashboard" />
  <q-btn  size="16px" flat  icon="school" color="white" to="/departamento" label="Departamento" />
    <q-btn  size="16px" flat  icon="favorite" color="white" to="/paquera" label="Paqueras" />
     <q-btn  size="16px" flat icon="book" color="white" to="/sobre" label="Sobre" />
        <q-btn  size="16px" flat  icon="logout" color="white" to="/login" label="Sair" />
   
  </header>

 <center> <h1>Lista - Paqueras</h1></center>
 <center><q-btn to="/adpaquera" label="Novo" icon="add" outline color="green" /></center>

 <q-list bordered class="rounded-borders">
  
      <q-item v-for="paquera in paqueras" :key="paquera.id_paq">
        <q-item-section avatar top>
          <q-icon name="favorite" color="black" size="34px" />
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">{{ paquera.id_paq }}</span>
            <span class="text-grey-8">   {{ paquera.titulo_paq }} </span>
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-positive">
            <span class="cursor-pointer"></span>
              {{ paquera.descricao_paq }}
          </q-item-label>
        </q-item-section>
        
        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn  size="12px" flat dense round icon="edit" color="indigo"  @click="alterar(paquera.id_paq)" />
            <q-btn  size="12px" flat dense round icon="delete" color="red-14"  @click="remover(paquera.id_paq)"/>
            
          </div>  
        </q-item-section>
      </q-item>


      <q-separator spaced />

    </q-list>
    
  </div>
  
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PageListaPaquera',
  methods: {
    ...mapActions('mainstore', ['obterPaqueras', 'selecionarPaquera', 'removerPaquera']),
    abrirCadastroPaquera () {
      this.$router.push('/adpaquera')
    },
    alterar (paqueraId){  
      this.selecionarPaquera(paqueraId)
      this.$router.push('/edpaquera')
    },
      remover (paqueraId){
      this.$q.dialog({
        title: 'Confirmar',
        message: 'Você deseja excluir este campo?',
        cancel: {
          label: 'Cancelar'
        },
        ok:{
          label: 'Deletar'
        },
        persistent:true
      }).onOk(() => {
        this.removerPaquera(paqueraId)
            Notify.create({ color: 'positive', position: 'top',
            message: 'Item deletado com sucesso',
            icon: 'verify'
    })  
      }).onCancel(() => {

      })
    },
  },
  computed: {
    ...mapGetters('mainstore', ['paqueras'])
  },
  created () {
    this.obterPaqueras()
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

