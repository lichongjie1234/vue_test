<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和为：{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <H3>下方组件的总人数：{{ personList.length }}</H3>
    <select v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    ...mapMutations("countOptions", ["increment", "decrement"]),
    ...mapActions("countOptions", ["incrementOdd", "incrementWait"]),
  },
  computed: {
    ...mapState("countOptions", ["sum", "school", "subject"]),
    ...mapState("personOptions", ["personList"]),
    ...mapGetters("countOptions", ["bigSum"]),
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
