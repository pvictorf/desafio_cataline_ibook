import { Store } from 'vuex'
import { initializeStores } from '@/utils/store-accessor'

const initializer = (store: Store<any>) => initializeStores(store)

export const plugins = [initializer]
export * from '@/utils/store-accessor'

//Dispacha uma action durante a inicialização do Nuxt
//Nesse caso o autoLogin recupera o token do cookie
export const actions = {
  async nuxtServerInit({ dispatch }: Store<any>) {
    await dispatch('auth/autoLogin')
  }
} 