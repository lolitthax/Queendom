<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-purple text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-img
                src="../assets/apollo-head.png" style="width: 100px; height: 100px;" contain></q-img>
            {{ lorem }}
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-img
                src="../assets/kae-head.png" style="width: 100px; height: 100px;" contain></q-img>
            {{ lorem2 }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-img
                src="../assets/naomi-head.png" style="width: 100px; height: 100px;" contain></q-img>
            {{ lorem3 }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 'style',
      lorem: 'Bad boy? Nerd de T.I? Se encaixar em rótulos estereótipos não é algo que ele goste, não quando há bugs para arrumar, jogos a ganhar e mais uma nota para decorar! Por trás de suas olheiras e mal humor há um coração puro e compreensível',
      lorem2:'Dona de uma personalidade energética, ela nunca está concentrada em apenas uma coisa. Alguns a chamam de cientista maluca, outros acreditam que sejam por conta de seu entusiasmo sempre evidente para mostrar o melhor de si! Mas para quem ela quer se provar?',
      lorem3: 'Nosso artista em ascensão é amado por todos os departamentos. Sua educação e auto controle lhe dá a impressão de estar sempre brilhando aonde quer que vá! Perfeccionista e amigável, elu expressa todo seu mistério e sentimentos em suas criações, ainda que isso fique subjetivo e de difícil compreensão.'
    }
  }
}
</script>
