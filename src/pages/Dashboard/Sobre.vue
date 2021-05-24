<template>
  <q-page class="flex flex-center">
    <h1>Sobre</h1>
    <q-btn
      round
      color="primary"
      class="fixed"
      style="right: 18px; bottom: 18px"
      @click="abrirCadastroSobre()"
    >
      <q-icon name="add" />
    </q-btn> 
  </q-page>
</template>

<script>
export default {
  name: 'PageSobre',
  methods: {
    abrirCadastroSobre () {
      this.$router.push('/adsobre')
    }
  }
}
</script>
