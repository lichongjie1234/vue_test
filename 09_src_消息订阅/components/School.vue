<template>
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ age }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Student",
  data() {
    return {
      name: "温岭中学",
      age: "浙江省温岭市",
    };
  },
  mounted() {
    // console.log("School", this);
    // this.$bus.$on("hello", (data) => {
    //   console.log("我是school组件，收到了数据", data);
    // });
    this.pubId = pubsub.subscribe("hello", (msg, data) => {
      console.log("订阅数据", msg, data);
    });
  },
  beforeDestroy() {
    // this.$bus.$off("hello");
    pubsub.unsubscribe(this.pubId);
  },
};
// export default {

// };
</script>

<style></style>
