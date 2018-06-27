<template>
  <div>
    <Header></Header>
    <div class="article-list" v-for="i in list">
      <!--<ul>
          <li v-for="i in list">
              <router-link :to="'/content/'+i.id">{{i.title}}</router-link>
              <time v-text="$utils.goodTime(i.create_at)"></time>

          </li>
      </ul>-->
      <!--<mt-cell title="$api.get(i.title)">-->
      <!--<mt-cell :title="i.title" :to="'/content/'+i.id" is-link >
      </mt-cell>-->
      <mt-cell :title="i.title" :to="'/content/'+i.id" is-link>
        <span style="color: #ccc;font-size: 12px;" v-text="$utils.goodTime(i.create_at)"></span>
        <img title="avatar" slot="icon" :src="i.author.avatar_url" width="30" height="30">
      </mt-cell>

      <!--<router-link :to="'/content/'+i.id">{{i.title}}</router-link>

      <time v-text="$utils.goodTime(i.create_at)"></time>
      <img slot="icon" src="" width="24" height="24">-->

    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'

  export default {
    components: {
      Header,
      Footer
    },
    //      这里是调用 cnodejs.org 的 topics 列表接口，并且将结果打印出来
    data() {
      return {
        list: []
      }
    },
    methods: {
      getData() {
        this.$api.get('topics', null, r => {
          this.list = r.data
          console.log(r.data)
        })

      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style>
  .mint-cell-title {
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    text-overflow: ellipsis;
  }

  .mint-cell-title:hover {
    background: #666;
  }

  #app > div:nth-child(1) {
    margin-top: 40px;
  }

  .mint-cell img {
    border-radius: 15px;
  }

</style>
