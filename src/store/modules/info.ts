import { defineStore } from 'pinia'
const useInfoStore = defineStore('info', {
  state: () => {
    return {
      count: 99,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  actions: {
    updateNum(a: number, b: number) {
      if (typeof a === 'number' && typeof b === 'number') {
        this.count = this.count + a + b
      } else {
        console.error('请以 updateNum( number,  number) 格式传入')
      }
    }
  },
  getters: {
    total() {
      const result: any = this.arr.reduce((prev: number, next: number) => {
        return prev + next
      })
      return result
    }
  }
})
export default useInfoStore
