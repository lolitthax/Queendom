<template>
    <div>
        <main id="modal-promocao" class="modal-container">
            <div class="modal">

                <div class="lines">
                    <h3 class="subtitle-form">Login</h3>
                    <form>
                        <input type="text" class="input" placeholder="E-mail:"  v-model="usuario">
                        <input type="password" name="password" class="input" placeholder="Senha:" v-model="senha" >
                   
                           <div class="q-gutter-md q-pb-md">
                <q-btn color="primary" label="Login" @click="efetuarLogin()" />
              </div> 
              <div class="q-gutter-md q-pb-md" v-if="token">
                <q-btn color="primary" label="Logout" @click="efetuarLogout()" />
              </div> 
                        
                    
                    </form>
                </div>
                <div class="holes hole-middle "></div>
                <div class="holes hole-bottom "></div>
            </div>
        </main>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      usuario: '',
      senha: ''
    }
  },
  methods: {
    ...mapActions('mainstore', ['login','logout','carregarToken']),    
    async efetuarLogin () {
      await this.login({ username: this.usuario, password: this.senha })
      await this.carregarToken()
      if (this.token) {
        this.$router.push('/dashboard')
      }

    },
    efetuarLogout () {
      this.logout()
    },
  },
  computed: {
    ...mapGetters('mainstore', ['token'])
  },
  created (){
      this.$q.loading.show({
          message:'Carregando...',
       
      })
      this.timer = setTimeout(() =>{ 
          this.$q.loading.hide()
          this.timer = void 0
      }, 1000)
  }

}
</script>
<style scoped>
.modal-container {
    /* width: 100vw;
    height: 100vh; */
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 2000;
    /* display: none; */
    justify-content: center;
    align-items: center;
}

.modal,
.modal-r::before {
    content: '';
    position: absolute;
    left: 45px;
    top: -2px;
    height: 100%;
    width: 2px;
    background: rgba(255, 0, 0, 0.4);
}

.modal-container.mostrar {
    display: flex;
}

.modal {
    background: white;
    width: 30%;
    height: 250px;
    min-width: 400px;
    padding: 40px;
    border: 10px solid #a8d8ea;
    box-shadow: 0 0 0 10px white;
    position: relative;
    margin: auto;
    margin-top: 300px;
}

.modal-r {
    background: white;
    width: 30%;
    height: 300px;
    min-width: 400px;
    padding: 40px;
    border: 10px solid #a8d8ea;
    box-shadow: 0 0 0 10px white;
    position: relative;
    margin: auto;
    margin-top: 300px;
}

.lines {
    margin-top: 40px;
    height: 100%;
    width: 100%;
    background-image: repeating-linear-gradient(white 0px, white 24px, steelblue 25px);
}

.subtitle-form {
    /* position: absolute; */
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    color: #eb3b5a;
    top: 65px;
    left: 55px;
    bottom: 10px;
    right: 10px;
    line-height: 25px;
    font-family: 'Indie Flower';
    overflow: hidden;
    outline: none;
}

.holes {
    position: absolute;
    left: 10px;
    height: 25px;
    width: 25px;
    background: lightgoldenrodyellow;
    border-radius: 50%;
    box-shadow: inset 0px 0px 2px 0px #888;
}

.hole-top {
    top: 10%;
}

.hole-middle {
    top: 50%;
}

.hole-bottom {
    bottom: 10%;
}

.input,
.button,
.input-select {
    font-family: 'Comfortaa', cursive;
    font-size: large;
    margin-left: 15px;
    border: 0 none;
    width: 90%;
    background-color: transparent;
}

.button {
    cursor: pointer;
}

.button:hover {
    color: #8854d0;
}

.check {
    margin-left: 15px;
    margin-top: 10px;
    font-family: 'Comfortaa', cursive;
}

.input {
    color: black;
    line-height: 20px;
}

.button {
    color: darkgreen;
    font-weight: bold;
    width: 90%;
}

.input-select {
    color: rgb(112, 112, 112);
}

.label {
    color: rgb(112, 112, 112);
    font-size: large;
    font-family: 'Comfortaa', cursive;
}

.input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}

</style>