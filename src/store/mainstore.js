import { LocalStorage, Notify } from 'quasar'
import { api } from 'boot/axios'

const state = {
  token: '',
  sobres: [],
  sobreSelecionado: ''

}

const mutations = {
  SET_TOKEN (state, token) {      
    state.token = token
  },
  //SOBRE
  SET_SOBRES (state, sobres){
    state.sobres = sobres
  },
  ADICIONAR_SOBRE(state, sobre){
    state.sobres.push(sobre)
  },
  SELECIONAR_SOBRE (state,sobreId) {
    index = state.sobres.findIndex((s) => s.id === sobreId)
    state.sobreSelecionado = state.sobres[index]
  }

}

const actions = { 
  async login ({ commit }, usuario) {    
    let response = await api.post('/login', usuario, { headers: { 'Content-Type' : 'application/json' } })
    if (response) {
      await LocalStorage.set('token', response.data.token)
      await commit('SET_TOKEN', response.data.token)
      api.interceptors.request.use((config) => {
    if(response.data.token) {
          config.headers['Authorization'] = `Bearer ${ response.data.token }`
          config.headers['Content-Type'] = 'application/json'
        }
        return config
      })
      api.interceptors.response.use((response) => {
        return response
      })
      Notify.create({ color: 'positive', message: response.data.token })
    }
  },
  async logout ({ commit }) {    
    await LocalStorage.remove('token')
    await commit('SET_TOKEN', null)
  },
  async carregarToken ({ commit }) {
    let token = await LocalStorage.getItem('token')
    await commit('SET_TOKEN', token)
    api.interceptors.request.use((config) => {
      if (token) {
        config.headers['Authorization'] = `Bearer ${ token }`
        config.headers['Content-Type'] = 'application/json'
      }
      return config
    })
    api.interceptors.response.use((response) => {
      return response
    })    
  },
  adicionarSobre ({commit}, sobre){
    api.post('/sobre', sobre)
    .then((response) => {
      commit('ADICIONAR_SOBRE', response.data)
      Notify.create({ color: 'positive', position: 'top',
      message: 'Cadastro concluído com sucesso!',
      icon: 'verify'
    })  
    })
  },
  obterSobres ({ commit }){
    api.get('/sobre')
    .then((response) => {
      commit('SET_SOBRES', response.data)
    })
  },
  selecionarSobre ({ commit }, sobreId) {
    commit('SELECIONAR_SOBRE', sobreId)
  }

}

const getters = {
  token: (state) => state.token,
  sobres: (state) => state.sobres,
  sobreSelecionado: (state) => state.sobreSelecionado
  
  

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}