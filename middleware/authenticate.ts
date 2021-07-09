import { Middleware } from '@nuxt/types'

const authenticate: Middleware = ({store, redirect}) => {
  const token = store.state.auth.token
  if (!token) {
    return redirect('/login')
  }
}

export default authenticate