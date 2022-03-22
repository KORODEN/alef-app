<template>
  <PersonInfo
      :personName="personName"
      @changeNameInput="(value) => {
        this.checkRoute()
        this.$emit('changeNameInput', value)
      }"
      :personAge="personAge"
      @changeAgeInput="(value) => {
        this.checkRoute()
        this.$emit('changeAgeInput', value)
      }"
  />
  <ChildrenInfo
      :children="children"
      @modifyChildren="(value) => {
        this.checkRoute()
        this.$emit('modifyChildren', value)
      }"
  />
  <div class="save">
    <button :disabled="!isValid" @click="completedForm">
      Сохранить
    </button>
  </div>
</template>

<script>
import PersonInfo from "@/components/PersonInfo";
import ChildrenInfo from "@/components/ChildrenInfo";

export default {
  // eslint-disable-next-line
  name: "Form",
  emits: ['changeNameInput', 'changeAgeInput', 'modifyChildren'],
  props: ['personName', 'personAge', 'children'],
  computed: {
    //проверка наличия данных в полях имя и возраст пользователя,
    //а также проверка непустых полей у детей
    isValid() {
      if(this.personName && this.personAge) {
        if (this.children.length > 0) {
          let check = true
          this.children.forEach(item => {
            if(item.name === '' || item.age === '') {
              check = false
            }
          })
          if(check) {
            return true
          } else {
            this.checkRoute()
            return false
          }
        } else {
          return true
        }
      } else {
        this.checkRoute()
        return false
      }
    }
  },
  methods: {
    completedForm() {
      this.$router.getRoutes().forEach(route => {
        if(route.path === '/preview') {
          route.meta.notCompleted = false
        }
      })
      this.$router.push('/preview')
    },
    checkRoute() {
      this.$router.getRoutes().forEach(route => {
        if(route.path === '/preview') {
          route.meta.notCompleted = true
        }
      })
    }
  },
  components: {PersonInfo, ChildrenInfo}
}
</script>

<style scoped>

</style>