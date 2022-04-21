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
  mounted() {
    console.log("School", this);
    this.$bus.$on("hello", (data) => {
      console.log("我是school组件，收到了数据", data);
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>

<style></style>
