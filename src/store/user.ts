import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    userId: '',
    userName: '',
    userAvatar: ''
  }),
  actions: {
    setUserId(userId: string) {
      this.userId = userId
    },
    setUserName(userName: string) {
      this.userName = userName
    },
    setUserAvatar(userAvatar: string) {
      this.userAvatar = userAvatar
    }
  },
})