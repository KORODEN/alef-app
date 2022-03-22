<template>
  <header>
    <div class="logo">
      <img src="../assets/images/Logo_imi_horizontal.png" alt="">
    </div>
    <nav>
      <RouterLink to="/form">Форма</RouterLink>
      <RouterLink to="/preview">Превью</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Header"
}
</script>

<style scoped>

</style>