<template>

    <mt-header fixed :title="title">
      <router-link to="/" slot="left">
        <mt-button icon="back" >返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name:'headers',

    computed:{
      ...mapGetters({
        title:'getTitle'
      })
    }
  }
</script>

<style>
.mint-header{
    opacity: 0.9;
}
</style>
