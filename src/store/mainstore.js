import { LocalStorage, Notify } from 'quasar'
import { api } from 'boot/axios'

const state = {
  token: '',
  sobres: [],
  sobreSelecionado: '',
  paqueras: [],
  paqueraSelecionado: '',
  departamentos: [],
  departamentoSelecionado: ''

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
    const index = state.sobres.findIndex((s) => s.id === sobreId)
    state.sobreSelecionado = state.sobres[index]
  },
  ALTERAR_SOBRE (state, sobre){
    const index = state.sobre.findIndex((s) => s.id === sobre.id)
    state.sobres.set(index, sobre)
  },
  //PAQUERAS
  SET_PAQUERAS(state, paqueras){
    state.paqueras = paqueras
  },
  ADICIONAR_PAQUERA(state,paquera){
    state.paqueras.push(paquera)
  },
  SELECIONAR_PAQUERA(state,paqueraId){
    const index = state.paqueras.findIndex((p) => p.id_paq === paqueraId)
    state.paqueraSelecionado = state.paqueras[index]
  },
  ALTERAR_PAQUERA(state,paquera){
    const index = state.paqueras.findIndex((p) => p.id_paq === paqueraId)
    state.paqueras.set(index,paquera)
  },

  //DEPARTAMENTOS
 SET_DEPARTAMENTOS(state, departamentos){
   state.departamentos = departamentos
 },
 ADICIONAR_DEPARTAMENTO(state,departamento){
  state.departamentos.push(departamento)
 },
 SELECIONAR_DEPARTAMENTO(state,departamentoId){
  const index = state.departamentos.findIndex((d) => d.id_dep === departamentoId)
  state.departamentoSelecionado = state.departamentos[index]
 },
 ALTERAR_DEPARTAMENTO(state, departamento){
  const index = state.departamentos.findIndex((d) => d.id_dep === departamentoId)
  state.departamentos.set(index,departamento)
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
  //SOBRE
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
  },
  alterarSobre({ commit }, sobre){
    api.put('/sobre/'+ sobre.id, sobre)
    .then((response) => {
      commit('ALTERAR_PRODUTO', response.data)
    })
  },
  //PAQUERA
  adicionarPaquera ({commit}, paquera){
    api.post('/paquera',paquera)
    .then((response) => {
      commit('ADICIONAR_PAQUERA', response.data)
      Notify.create({ color: 'positive', position:'top',
      message: 'Cadastro concluído com sucesso!',
      icon: 'verify'
    })
    })
  },
  obterPaqueras ({ commit }){
    api.get('/paquera')
    .then((response) => {
      commit('SET_PAQUERAS', response.data)
    })
  },
  selecionarPaquera ({ commit }, paqueraId){
    commit('SELECIONAR_PAQUERA', paqueraId)
  },
  alterarPaquera({ commit }, paquera){
    api.put('/paquera/'+ paquera.id_paq,paquera)
    .then((response) => {
      commit('ALTERAR_PAQUERA', response.data)
    })
  },

  //DEPARTAMENTO
  adicionarDepartamento ({commit}, departamento){
    api.post('/departamento',departamento)
    .then((response) => {
      commit('ADICIONAR_DEPARTAMENTO', response.data)
      Notify.create({ color: 'positive', position:'top',
      message: 'Cadastro concluído com sucesso!',
      icon: 'verify'
    })
    })
  },
  obterDepartamentos ({ commit }){
    api.get('/departamento')
    .then((response) => {
      commit('SET_DEPARTAMENTO', response.data)
    })
  },
  selecionarDepartamento ({ commit }, departamentoId){
    commit('SELECIONAR_DEPARTAMENTO', departamentoId)
  },
  alterarDepartamento({ commit }, departamento){
    api.put('/departamento/'+ departamento.id_dep,departamento)
    .then((response) => {
      commit('ALTERAR_DEPARTAMENTO', response.data)
    })
  }

}

const getters = {
  token: (state) => state.token,
  sobres: (state) => state.sobres,
  sobreSelecionado: (state) => state.sobreSelecionado,
  paqueras: (state) => state.paqueras,
  paqueraSelecionado: (state) => state.paqueraSelecionado,
  departamentos: (state) => state.departamentos,
  departamentoSelecionado: (state) => state.departamentoSelecionado
  
  

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}