<template>
  <div>
      <h2 @click="showName">学校名称：{{name}}</h2>
      <h2>学校地址：{{age}}</h2>
  </div>
</template>

<script>
import { mixin } from '../mixin'
export default {
    name:'Student',
    data() {
        return {
            name:'温岭中学',
            age:'浙江省温岭市'
        }
    },
    mixins:[mixin]
}
</script>

<style>

</style>