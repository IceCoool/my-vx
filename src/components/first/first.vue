<template>
    <div>
      首页
      <router-link to="/sec" class="toSec co_000">二级页</router-link>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name:'first',
        data(){
            return {}
        }
    }
</script>
<style>
  .toSec:hover{color: #09f;}
</style>
