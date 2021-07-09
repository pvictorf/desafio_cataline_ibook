import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { $axios, $cookies } from '@/utils/nuxt-instance'

interface Login {
  email: string;
  password: string;
}

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  private token = '';

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token   
  }

  @Mutation
  private REMOVE_TOKEN() {
    this.token = ''
  }

  @Action
  public async login({ email, password }: Login) {
    const { accessToken } = await $axios.$post('/login', {email, password})
    const twoDays = 60 * 60 * 24 * 2
   
    $cookies.set('token', accessToken, {
      path: '/',
      maxAge: twoDays
    })

    this.context.commit('SET_TOKEN', accessToken)
  }

  @Action
  public async autoLogin() {
    const token = $cookies.get('token')
    if(token) {
      return this.context.commit('SET_TOKEN', token)
    }
    return this.context.commit('REMOVE_TOKEN')
  }

  @Action
  public logout() {
    $cookies.remove('token')
    this.context.commit('REMOVE_TOKEN')
  }

}