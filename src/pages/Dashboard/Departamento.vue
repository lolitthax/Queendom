<template>
  <div>
    <div class="q-gutter-y-md" style="max-width: 100%">
  
  <header class="navbar">
  <q-btn  size="16px" flat  icon="home" color="white" to="/dashboard" label="Dashboard" />
  <q-btn  size="16px" flat  icon="school" color="white" to="/departamento" label="Departamento" />
    <q-btn  size="16px" flat  icon="favorite" color="white" to="/paquera" label="Paqueras" />
     <q-btn  size="16px" flat icon="book" color="white" to="/sobre" label="Sobre" />
        <q-btn  size="16px" flat  icon="logout" color="white" to="/login" label="Sair" />
   
  </header>

 <center> <h1>Lista - Departamentos</h1></center>
 <center><q-btn to="/addepartamento" label="Novo" icon="add" outline color="green" /></center>
 <q-list bordered class="rounded-borders">
  
      <q-item v-for="departamento in departamentos" :key="departamento.id_dep">
        <q-item-section avatar top>
          <q-icon name="school" color="black" size="34px" />
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">{{ departamento.id_dep }}</span>
            <span class="text-grey-8">   {{ departamento.titulo_dep }} </span>
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-positive">
            <span class="cursor-pointer"></span>
              {{ departamento.descricao_dep }}
          </q-item-label>
        </q-item-section>
        
        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn  size="12px" flat dense round icon="edit" color="indigo"  @click="alterar(departamento.id_dep)" />
            <q-btn  size="12px" flat dense round icon="delete" color="red-14" @click="remover(departamento.id_dep)" />
            
          </div>  
        </q-item-section>
      </q-item>


      <q-separator spaced />

    </q-list>
    </div>
  </div>
  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PageListaDepartamento',
  methods: {
    ...mapActions('mainstore', ['obterDepartamentos', 'selecionarDepartamento', 'removerDepartamento']),
    abrirCadastroDepartamento () {
      this.$router.push('/addepartamento')
    },
    alterar (departamentoId){  
      this.selecionarDepartamento(departamentoId)
      this.$router.push('/eddepartamento')
    },
      remover (departamentoId){
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
        this.removerDepartamento(departamentoId)
            Notify.create({ color: 'positive', position: 'top',
            message: 'Item deletado com sucesso',
            icon: 'verify'
    })  
      }).onCancel(() => {

      })
    },
  },
  computed: {
    ...mapGetters('mainstore', ['departamentos'])
  },
  created () {
    this.obterDepartamentos()
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

