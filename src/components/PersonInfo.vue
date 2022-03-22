<template>
  <div class="personInfo">
    <h2>Персональные данные</h2>
    <div class="text-field text-field_floating">
      <input
          class="text-field__input"
          type="text"
          id="name"
          :value="personNameInput"
          @input="changeNameInput"
          placeholder="Введите ваше имя">
      <label class="text-field__label" for="name">Имя</label>
    </div>
    <div class="text-field text-field_floating">
      <input
          class="text-field__input"
          type="text"
          id="age"
          :value="personAgeInput"
          @input="changeAgeInput"
          autocomplete="off"
          placeholder="Введите ваш возраст">
      <label class="text-field__label" for="age">Возраст</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonInfo",
  emits: ['changeNameInput', 'changeAgeInput'],
  props: ['personName', 'personAge'],
  data() {
    return {
      personNameInput: this.personName,
      personAgeInput: this.personAge
    }
  },
  methods: {
    changeNameInput(e) {
      this.personNameInput = e.target.value
      this.$emit('changeNameInput', this.personNameInput)
    },

    //небольшая проверка на возраст от 0, не более 3 цифр
    changeAgeInput(e) {
      if(e.target.value.length <= 3) {
        if(e.target.value.length === 1) {
          e.target.value = e.target.value.replace(/[^1-9]/g, '')
        } else {
          e.target.value = e.target.value.replace(/\D/g, '')
        }

        this.personAgeInput = e.target.value
        this.$emit('changeAgeInput', this.personAgeInput)
      } else {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1)
      }
    }
  }
}
</script>

<style scoped>

</style>