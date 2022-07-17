<template>
  <div>
    CompositionTest
    <p>{{ name }}</p>
    <p>{{ age }}</p>
  </div>
</template>

<script>
export default {
  setup() {
    let name = 'test'
    const age = 30
    console.log('setup')
    console.log(this)
    return {
      name,
      age
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