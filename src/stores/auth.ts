import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '0520',
  }),
  getters: {},
  actions: {
    updateToken(newToken: string) {
      this.token = newToken
    },
  },
})
