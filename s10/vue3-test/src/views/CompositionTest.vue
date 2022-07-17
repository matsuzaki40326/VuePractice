<template>
  <div>
    CompositionTest
  </div>
</template>

<script>
export default {
  data(){},
  setup() {
    console.log('setup')
    console.log(this)
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