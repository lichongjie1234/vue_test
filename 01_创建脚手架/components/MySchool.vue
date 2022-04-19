<template>
    <div class='demo'>
         <h2>学校名称：{{schoolName}}</h2><br/>
         <h2>学校地址：{{address}}</h2><br/>
         <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
 export default{
     name:'MySchool',
     data(){
         return{
            schoolName:'温岭中学',
            address:'温岭'

         }
     },
     methods: {
         showName(){
             alert(this.schoolName)
         }
     }
 }
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>