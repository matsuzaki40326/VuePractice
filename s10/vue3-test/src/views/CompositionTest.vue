<template>
  <div>
    CompositionTest
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ nameRef }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let name = 'test'
    const age = 30
    const nameRef = ref('test20')
    console.log('setup')
    console.log(this)
    console.log(nameRef)
    console.log(nameRef.value)
    return {
      name,
      age,
      nameRef
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