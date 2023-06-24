import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
const useTodoStore = defineStore('todo', () => {
  const todos = ref([
    { id: 1, title: '吃饭' },
    { id: 2, title: '睡觉' },
    { id: 3, title: '打豆豆' }
  ])
  const arr = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const total = computed(() => {
    return arr.value.reduce((prev, next) => {
      return prev + next
    }, 0)
  })
  const updataTodo = () => {
    todos.value.push({ id: 4, title: '啦啦啦' })
  }
  return { todos, updataTodo, arr, total }
})
export default useTodoStore
