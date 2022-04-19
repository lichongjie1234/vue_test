<template>
    <div>
         <h2>学生姓名：{{studentName}}</h2><br/>
         <h2>学生年龄：{{age}}</h2><br/>
         <button @click="showName">点我提示学生姓名</button>
    </div>
</template>

<script>
 export default{
     name:'MyStudent',
     data(){
         return{
            studentName:'lcj',
            age:28

         }
     },
     methods: {
         showName(){
             alert(this.studentName)
         }
     }
 }
</script>

<style>

</style>