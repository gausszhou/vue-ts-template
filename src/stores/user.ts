import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isLogin: false,
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
    },
    setIsLogin(isLogin: boolean) {
      this.isLogin = isLogin
    }
  },
})