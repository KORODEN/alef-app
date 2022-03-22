<template>
  <body>
    <Header/>
    <main>
      <RouterView
          :personName="personName"
          @changeNameInput="changeNameInput"
          :personAge="personAge"
          @changeAgeInput="changeAgeInput"
          :children="children"
          @modifyChildren="modifyChildren"
      />
    </main>
    <Footer/>
  </body>
</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  data() {
    return {
      personName: '',
      personAge: '',
      children: []
    }
  },
  methods: {
    changeNameInput(value) {
      this.personName = value
    },
    changeAgeInput(value) {
      this.personAge = value
    },
    modifyChildren(value) {
      this.children = value
    }
  },
  components: {Header, Footer}
}
</script>

<style>

</style>
