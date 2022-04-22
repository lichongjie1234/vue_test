<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">search Github User</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="keyWord"
        />&nbsp;<button @click="searchUsers">search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errmsg: "",
        users: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log("请求成功", response.data.items);
          //请求成功赋值
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errmsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          console.log("请求失败", error.message);
          //请求失败赋值
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errmsg: error.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style></style>
