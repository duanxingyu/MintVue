<template>
  <div>
    <Header></Header>
    <mt-loadmore :top-method="loadTop"  ref="loadmore" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"
                 @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange">

      <div class="article-list" v-for="i in list">
        <mt-cell :title="i.title" :to="'/content/'+i.id" is-link>
          <span style="color: #ccc;font-size: 12px;" v-text="$utils.goodTime(i.create_at)"></span>
          <img title="avatar" slot="icon" :src="i.author.avatar_url" width="30" height="30">
        </mt-cell>
      </div>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">{{topStatus}}</span>
        <span v-show="topStatus === 'loading'">{{topStatus}}</span>
      </div>

      <!--<div slot="bottom" class="mint-loadmore-bottom">-->
        <!--<span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">{{bottomStatus}}</span>-->
        <!--<span v-show="bottomStatus === 'loading'">{{bottomStatus}}</span>-->
      <!--</div>-->

    </mt-loadmore>
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
        list: [],
        topStatus: '',
        bottomStatus:'',
        limit: 15,
        page: 10,
        allLoaded: false,
      }
    },
    methods: {
      getData() {
        this.$api.get('topics', {
          page: this.page,
          limit: this.limit,
        }, r => {
          this.list = r.data
          console.log(r)
        })

      },
      loadTop() {
        setTimeout(() => {
          // 加载更多数据
          this.limit += 10;
          // this.page += 5;
          this.getData();
          this.$refs.loadmore.onTopLoaded();

        }, 1000);

      },
      handleTopChange(status) {
        this.topStatus = status;
        if (this.topStatus === 'drop') {
          this.topStatus = '松开立即刷新'
        } else if (this.topStatus === 'pull') {
          this.topStatus = '下拉即可刷新'
        } else {
          this.topStatus = '正在刷新中...'
        }

      },
      handleBottomChange(status){

      },
      loadBottom() {
      // 加载更多数据
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$refs.loadmore.onBottomLoaded();
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
