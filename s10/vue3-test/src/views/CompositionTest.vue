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
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
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

    console.log('setup')
    console.log(this)
    console.log(nameRef)
    console.log(nameRef.value)
    return {
      name,
      age,
      nameRef,
      book,
      ...toRefs(bookToRefs)
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