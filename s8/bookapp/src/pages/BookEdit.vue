<template>
  <div>
    BookEdit <br>
    {{ book.title }} <br>
    {{ books }}
  </div>
</template>

<script>
export default {
  name: 'BookEdit',
 props: {
  books: Array
 },
 data() {
  return {
    book: ''
  }
 },
 beforeRouteEnter(to, from, next) {
  next(vm => {
    vm.$nextTick().then(() => {
      vm.book = vm.books[vm.$route.params.id]
      console.log(vm.book)
    })
  })
 }
}
</script>

<style>

</style>