<template>
  <div class="red-b">
    test
    {{ testData }}
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      testData: 'testData'
    }
  }
}
</script>

<style scoped>
.red-b {
  border: 1px solid red;
}
</style>