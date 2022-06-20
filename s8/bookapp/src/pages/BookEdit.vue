<template>
  <div>
    BookEdit <br>
    {{ books }}
  </div>
</template>

<script>
export default {
  name: 'BookEdit',
 props: {
  books: Array
 }
}
</script>

<style>

</style>