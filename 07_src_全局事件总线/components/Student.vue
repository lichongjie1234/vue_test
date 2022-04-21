<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <button @click="sentStudentName">把学生名给school组件</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "jet",
      age: "28",
    };
  },
  mounted() {
    //console.log("School", this.x);
  },
  methods: {
    sentStudentName() {
      this.$bus.$emit("hello", this.name);
    },
  },
};
</script>

<style></style>
