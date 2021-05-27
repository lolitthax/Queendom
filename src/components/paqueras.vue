<template>
  <section class="services " title="Paqueras" id="paqueras">
  <p><strong class="title "> Paqueras</strong></p>
  <hr class="border ">
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
        height="400px"
        class="text-white shadow-1 rounded-borders" style="background:#7d4cf0;"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-img
                src="../assets/apollo-head.png" style="width: 300px; height: 300px; margin-bottom:-90px; margin-top:-85px" contain></q-img>
          </div>
          <div class="service depar">{{ lorem }}</div>
        </q-carousel-slide>

        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-img
                src="../assets/naomi-head.png" style="width: 300px; height: 300px; margin-bottom:-90px; margin-top:-85px" contain></q-img>
          </div>
          <div class="service depar">{{ lorem2 }}</div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <div class="q-mt-md text-center">
            <q-img
                src="../assets/kae-head.png" style="width: 300px; height: 300px; margin-bottom:-90px; margin-top:-85px" contain></q-img>
          </div>
          <div class="service depar">{{ lorem3 }}</div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
  <br>
  </section>
</template>

<script>
export default {
  data () {
    return {
      slide: 'style',
      lorem: 'Bad boy? Nerd de T.I? Se encaixar em rótulos ou esteriótipos não é algo que ele goste, não quando há bugs para arrumar, jogos a ganhar e mais uma nota para decorar! Por trás de suas olheiras e mau humor há um coração puro e compreensível',
      lorem2:'Dona de uma personalidade enérgica, ela nunca está concentrada em apenas uma coisa. Alguns a chamam de cientista maluca, outros acreditam que ela deveria moderar seu entusiasmo sempre evidente para mostrar o melhor de si, mas para quem ela quer se provar?',
      lorem3:'Muito popular entre os estudantes por sua gentileza e talento, Kae é amade por todos os departamentos. Sua educação e autocontrole faz com que esteja sempre tomando todos os olhares para si.'
    }
  }
}
</script>


