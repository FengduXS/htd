<template>
  <div class="test1">
    test1
    <p>{{getCount}}</p>
  </div>
</template>
<style scoped>

</style>
<script>
  export default{
    computed:{
      //获取vuex值
      getCount:function (){
        return this.$store.state.muduleCount.num;
      }
    },
    mounted(){
      let param = this.$route.query;
      //console.log(param);
    },
  }

</script>
