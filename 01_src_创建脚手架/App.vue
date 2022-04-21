<template>
  <DIV>
      <img src="./assets/logo.png" alt="loge">
      <MySchool></MySchool>
      <MyStudent></MyStudent>
  </DIV>
</template>

<script>
    import MySchool from './components/MySchool.vue'
    import MyStudent from './components/MyStudent.vue'
    export default {
        name:'App',
        components: {
            MySchool,
            MyStudent
        }
    }
</script>

<style>

</style>
