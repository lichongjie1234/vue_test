<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "温岭中学",
      age: "浙江省温岭市",
    };
  },
};
</script>

<style></style>
