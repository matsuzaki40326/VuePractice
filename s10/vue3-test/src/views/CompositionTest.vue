<template>
  <div>
    CompositionTest
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>ref: {{ nameRef }}</p>
    <p>reactive: {{ book.title }}</p>
    <p>reactive: {{ book.author[0] }}</p>
    <p>reactiveToRefs: {{ titleRef }}</p>
    <p>reactiveToRefs: {{ authorRef[1] }}</p>
    <button @click="btnClick">click</button>
    <p>computed: {{ totalPrice }}</p>
    <div>
      watch: <input v-model="search">
    </div>
    <div>
      watchEffect: <input v-model="searchEffect">
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, watch, watchEffect, onMounted } from 'vue'
export default {
  setup() {
    let name = 'test'
    const age = 30
    const nameRef = ref('test20')

    const book = reactive({
      title: 'title',
      author: ['a', 'y']
    })

    const bookToRefs = reactive({
      titleRef: 'titleRef',
      authorRef: ['aRef', 'yRef']
    })

    const btnClick = e => {
      console.log(book.title)
      console.log(e)
    }

    const item = reactive({
      price: 100,
      number: 1
    })

    const totalPrice = computed(() => {
      return item.price * item.number
    })

    const search = ref('')
    watch(search, (newValue, prevValue) => {
      console.log(`watch: ${search.value}`)
      console.log(`new: ${newValue}`)
      console.log(`prev: ${prevValue}`)
    })

    const searchEffect = ref('')
    watchEffect(() => {
      console.log(`watchEffect: ${searchEffect.value}`)
    })

    onMounted(() => {
      console.log('onMounted')
    })


    console.log('setup')
    console.log(this)
    console.log(nameRef)
    console.log(nameRef.value)
    return {
      name,
      age,
      nameRef,
      book,
      ...toRefs(bookToRefs),
      btnClick,
      item,
      totalPrice,
      search,
      searchEffect
    }
  },
  data() {
    return {
      number: 1,
      sports: 'soccer'
    }
  },
  created() {
    console.log('created')
    console.log(this)
  },
  mounted() {
    console.log('mounted')
  }
}
</script>

<style></style>