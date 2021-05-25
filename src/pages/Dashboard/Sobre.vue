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

 <center> <h1>Lista - Sobre</h1></center>
 <q-list bordered class="rounded-borders">
  
      <q-item v-for="sobre in sobres" :key="sobre.id">
        <q-item-section avatar top>
          <q-icon name="library_books" color="black" size="34px" />
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium">{{ sobre.id }}</span>
            <span class="text-grey-8">   {{ sobre.titulo }} </span>
          </q-item-label>
          <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-positive">
            <span class="cursor-pointer"></span>
              {{ sobre.descricao }}
          </q-item-label>
        </q-item-section>
        
        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn  size="12px" flat dense round icon="delete" color="red-14" />
            <q-btn  size="12px" flat dense round icon="edit" color="indigo" />
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
  name: 'PageListaSobre',
  methods: {
    ...mapActions('mainstore', ['obterSobres']),
    abrirCadastroSobre () {
      this.$router.push('/adsobre')
    }
  },
  computed: {
    ...mapGetters('mainstore', ['sobres'])
  },
  created () {
    this.obterSobres()
  }
}
</script>

