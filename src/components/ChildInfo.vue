<template>
  <div class="child">
    <div class="text-field text-field_floating">
      <input
          class="text-field__input"
          type="text"
          id="name"
          :value="childNameInput"
          @input="changeNameInput"
          @change="modifyChild"
          placeholder="Введите ваше имя">
      <label class="text-field__label" for="name">Имя</label>
    </div>
    <div class="text-field text-field_floating">
      <input
          class="text-field__input"
          type="text"
          id="age"
          :value="childAgeInput"
          @input="changeAgeInput"
          @change="modifyChild"
          autocomplete="off"
          placeholder="Введите ваш возраст">
      <label class="text-field__label" for="age">Возраст</label>
    </div>
    <button @click="removeChild">
      Удалить
    </button>
  </div>
</template>

<script>
export default {
  name: "ChildInfo",
  emits: ['modifyChild', 'removeChild'],
  props: ['id', 'childName', 'childAge'],
  data() {
    return {
      childNameInput: this.childName,
      childAgeInput: this.childAge,
      childId: this.id
    }
  },
  methods: {
    changeNameInput(e) {
      this.childNameInput = e.target.value
    },

    //небольшая проверка на возраст от 0, не более 3 цифр
    changeAgeInput(e) {
      if(e.target.value.length <= 3) {
        if(e.target.value.length === 1) {
          e.target.value = e.target.value.replace(/[^1-9]/g, '')
        } else {
          e.target.value = e.target.value.replace(/\D/g, '')
        }

        this.childAgeInput = e.target.value
      } else {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1)
      }
    },

    modifyChild() {
      this.$emit('modifyChild', {
        id: this.childId,
        name: this.childNameInput,
        age: this.childAgeInput
      })
    },

    removeChild() {
      this.$emit('removeChild', this.childId)
    }
  }
}
</script>

<style scoped>

</style>