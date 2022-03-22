<template>
  <p>{{personName}}, {{ageText}}</p>
</template>

<script>
export default {
  name: "ShowLinePreview",
  props: ['personName', 'personAge'],
  computed: {
    ageText() {
      let value = +this.personAge
      let txt
      let count = value % 100
      if (count >= 5 && count <= 20) {
        txt = 'лет'
      } else {
        count = count % 10
        if (count === 1) {
          txt = 'год'
        } else if (count >= 2 && count <= 4) {
          txt = 'года'
        } else {
          txt = 'лет'
        }
      }
      return value + " " + txt
    }
  }
}
</script>

<style scoped>

</style>