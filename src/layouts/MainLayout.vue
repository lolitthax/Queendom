<template>
<div>
  <app-header/>
  <banner/>
 
  <servico/>
  <paqueras/>
  <departamento/>
  <contato/>
  <app-footer/>

</div>

</template>
<style lang="scss">
@import '../css/app.scss';
</style>

<script>

import Servico from 'src/components/servico.vue'
import AppFooter from '../components/AppFooter.vue'
import AppHeader from '../components/AppHeader.vue'
import banner from '../components/banner.vue'
import Paqueras from 'src/components/paqueras.vue'
import Departamento from 'src/components/departamento.vue'
import contato from 'src/components/contato.vue'
export default {
  components:{
    AppHeader,AppFooter,banner,
    Servico,
    Paqueras,
    Departamento,
    contato
  }
 
}
</script>
