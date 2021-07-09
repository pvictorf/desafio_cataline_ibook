<template>
  <div class="login-form" >
    <Logo />
    <p class="login-text">
      Bem-vindo(a) ao Dashboard <br/>
      <strong>Entre na sua conta</strong>
    </p>  
    <form @submit.prevent="login">
      <input class="input" type="email" placeholder="E-mail" v-model="form.email" />
      <input class="input" type="password" placeholder="Senha" v-model="form.password" />
      <Button class="button" type="submit" text="Entrar"  />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  data() {
    return {
      form: {
        email: 'caty@cataline.io',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        await auth.login(this.form)
        this.$router.push('/dashboard')
      } catch(e) {
        console.log(e.message)
      }  
    }
  }
})
</script>

<style lang="scss" scoped>
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-gap: 2.5rem;
  padding: 5rem 3rem;
  width: 400px;
  background: color('dark', 'darkest'); 

  @include screen('small') {
    padding: 2rem 1rem;
    width: calc(100vw - 1rem);
  }

  .logo {
    max-width: 100px;
  }

  .login-text {
    color: color('light');
    font-size: 1.1rem;
    line-height: 1.4rem;
  }
  .input {
    background: transparent;
    border: 1px solid hsla(0,0%,96.9%,.5);
    padding: .5rem 1rem;
    border-radius: 5rem;
    color: color('light');
    font-size: 1.1rem;
    transition: all .3s ease; 
  }
  .input:focus,
  .input:active {
    border-color: color('light');
    outline-color: color('light');
  }

  form {
    display: grid;
    grid-gap: .5rem;

    .button {
      margin-top: 1rem;
    }

    * {
      width: 100%;
    }

  }
}

</style>