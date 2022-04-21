<template>
  <div>
    <h1>{{ msg }}</h1>
    <School></School>
    <hr />
    <Student></Student>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "你好呀",
    };
  },
  components: { School, Student },
};
</script>

<style></style>
