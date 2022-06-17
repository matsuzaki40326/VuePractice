<template>
  <div class="red-b">
    <div class="border__blue">
      SCSSTest
    </div>
    <div class="background__primary">
      SCSSGlobalTest
    </div>
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

<style scoped lang="scss">
.red-b {
  border: 1px solid red;
}

.border {
  &__blue {
    border: 1px blue solid;
  }
}

.background__primary {
  background-color: $color-primary;
}
</style>