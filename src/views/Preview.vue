<template>
  <div class="personInfo">
    <h2>Персональные данные</h2>
    <ShowLinePreview
        :personName="personName"
        :personAge="personAge"
    />
  </div>

  <div class="personInfo" v-if="children.length">
    <h2>Дети</h2>
    <div class="children">
      <ShowLinePreview class="child"
           v-for="child in children"
           :key="child.id"
           :personName="child.name"
           :personAge="child.age"
      />
    </div>
  </div>
</template>

<script>
import ShowLinePreview from "@/components/ShowLinePreview"

export default {
  // eslint-disable-next-line
  name: "Preview",
  emits: ['changeNameInput', 'changeAgeInput', 'modifyChildren'],
  props: ['personName', 'personAge', 'children'],
  components: { ShowLinePreview }
}
</script>

<style scoped>

.personInfo p {
  font-weight: 700;
  margin-top: 20px;
  font-size: 1.15rem;
  line-height: 24px;
}

.personInfo:last-child {
  margin-top: 60px;
}

.children {
  margin: 0;
}

.children .child {
  display: inline-block;
  margin-bottom: 20px;
  height: 44px;
  padding: 10px 20px;
  background-color: #F1F1F1;
  border-radius: 5px;
}

</style>