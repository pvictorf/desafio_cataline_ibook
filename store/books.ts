import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Book } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

interface Show {
  id: Book['id']
}

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private books = [] as Book[]
  private book = {} as Book
  private suggestBooks = [] as Book[]
  private lastSearch = ''
  private loading = false

  public get $all() {
    return this.books
  }

  public get $single() {
    return this.book
  }

  public get $suggestBooks() {
    return this.suggestBooks
  }

  public get $isLoading() {
    return this.loading
  }

  public get $lastSearch() {
    return this.lastSearch
  }

  @Mutation
  public SET_ALL(books: Book[]) {
    this.books = books
  }

  @Mutation
  public SET_SINGLE(book: Book) {
    this.book = book
  }

  @Mutation
  public SET_SUGGETS(books: Book[]) {
    this.suggestBooks = books
  }

  @Mutation
  public SET_LOADING(loading: boolean) {
    this.loading = loading
  }

  @Mutation
  public SET_LASTSEARCH(search: string) {
    this.lastSearch = search
  }

  @Action
  public async index() {
    const books = await $axios.$get('/books')
    this.context.commit('SET_ALL', books)
  }

  @Action
  public async show({ id }: Show) {
    const book = await $axios.$get(`/books/${id}`)
    this.context.commit('SET_SINGLE', book)
  }

  @Action
  public async suggets(title = '') {
    if(!title.trim()) {
      this.context.commit('SET_SUGGETS', [])
      return;
    } 

    const books = await $axios.$get(`/books?title_like=${title}`)
    this.context.commit('SET_SUGGETS', books ?? [])
  }

  @Action
  public async search(search = '') {
    const books = await $axios.$get(`/books?q=${search}`)
    this.context.commit('SET_LASTSEARCH', search)
    this.context.commit('SET_ALL', books ?? [])
  }

  @Action
  isLoading(loading: boolean) {
    this.context.commit('SET_LOADING', loading)
  }
}