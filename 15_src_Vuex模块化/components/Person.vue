<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addPerson">添加</button>
    <button @click="addPersonWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个随机的人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>

    <h3>上方组件的求和为：{{ sum }}</h3>
    <h3>列表中的第一个人的姓是：{{ firstPersonName }}</h3>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState("personOptions", ["personList"]),
    ...mapState("countOptions", ["sum"]),
    firstPersonName() {
      return this.$store.getters["personOptions/getFirstName"];
    },
  },
  methods: {
    addPerson() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("personOptions/AddPerson", personObj),
        (this.name = "");
    },
    addPersonWang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personOptions/addPersonWang", personObj),
        (this.name = "");
    },
    addPersonServer() {
      this.$store.dispatch("personOptions/addPersonNameServer"),
        (this.name = "");
    },
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
button {
  margin-left: 5px;
}
</style>
