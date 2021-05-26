<template>
  <div>
    <div class="q-gutter-y-md" style="max-width: 100%">
  

      <q-tabs
        inline-label
        mobile-arrows
        class="bg-pink-5 text-white shadow-2"
      >
        <q-tab icon="library_books" label="Sobre" />
        <q-tab icon="favorite" label="Personagens" />
        <q-tab icon="school" label="Departamentos" />
        <q-tab icon="home" label="Voltar a Dashboard" />

      </q-tabs>

 <center> <h1>Lista - Paqueras</h1></center>
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
            <q-btn  size="12px" flat dense round icon="delete" color="red-14" />
            
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
  name: 'PageListaPaquera',
  methods: {
    ...mapActions('mainstore', ['obterPaqueras', 'selecionarPaquera']),
    abrirCadastroPaquera () {
      this.$router.push('/adpaquera')
    },
    alterar (paqueraId){  
      this.selecionarPaquera(paqueraId)
      this.$router.push('/edpaquera')
    }
  },
  computed: {
    ...mapGetters('mainstore', ['paqueras'])
  },
  created () {
    this.obterPaqueras()
  }
}
</script>

