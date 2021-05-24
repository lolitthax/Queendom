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


    </div>
      <div class="q-pa-md" style="max-width: 100%; margin-top:10px;">
        <q-input outlined v-model="codigop" label="Código" style="margin-bottom: 10px"/>   
         <q-input outlined v-model="titulop" label="Título" style="margin-bottom: 10px"/>  
    <q-input
      v-model="descricaop"
      filled
      type="textarea"
      label="Texto"
      style="margin-bottom: 15px"
    />
        <q-btn color="secondary" class="full-width" label="Salvar" @click="adicionarPaquera()" />

  </div>
    <div class="q-pa-md" style="max-width: 100%">
    <q-list bordered>
      <q-item clickable v-ripple v-for="(paquera, index) in listaPaquera" :key="index">
        <q-item-section avatar>
          <q-icon color="indigo" name="info" />
        </q-item-section>
        <q-item-section> {{ paquera.codigop }} - {{ paquera.titulop }} - {{ paquera.descricaop }} </q-item-section>
        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" color="red-14" @click="removerPaquera(index)" />
            <q-btn class="gt-xs" size="12px" flat dense round icon="visibility" color="blue"/>
    
          </div>
        </q-item-section>
      </q-item>
      </q-list>
      </div>
  </div>
  
</template>
<script>
export default{
    data(){
        return{
            codigop: '',
            titulop: '',
            descricaop: '',
            listaPaquera: [
                {codigop:1, titulop: 'Texto', descricaop: 'Texto'},
                {codigop:2, titulop: 'Texto', descricaop: 'Texto'}
            ]
        }
    },
    methods: {
        adicionarPaquera(){
            this.listaPaquera.push( {codigop: this.codigop, titulop:
            this.titulop, descricaop: this.descricaop} )
        this.codigop = ''
        this.titulop = ''
        this.descricaop = ''
        },
        removerPaquera(index){
            this.$q.dialog({
                title: 'Excluir',
                message: 'Deseja excluir este item?',
                cancel: {
                    label: 'Cancelar'
                },
                ok: {
                    label: 'Excluir'
                },
                persistent: true
            }).onOk(() => {
                this.listaPaquera.splice(index,1)
                    this.$q.notify({
                        message: 'Item removido!',
                        icon: 'done',
                        color: 'positive'
                    })
            }).onCancel(() => {

            })
            
        }
    }
}
</script>

