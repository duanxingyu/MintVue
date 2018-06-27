<template>
  <div>
    <Header></Header>
    <div>
      <h2 v-text="title"></h2>
      <span class="author">作者：{{loginname}}</span>
      <span class="create_time">发表于：{{$utils.goodTime(dat.create_at)}}</span>

      <div class="text item">
        <article id="article" class="markdown-body" v-html="dat.content"></article>
      </div>

      <div>
        <h3>评论：</h3>

        <div v-for="i in dat.replies" style="border-bottom: 1px solid #cccccc;">
          <div v-if="dat.replies.length!==0">


            <!--<mt-cell :title="i.author.loginname" :value="$utils.goodTime(i.create_at)"></mt-cell>-->

            <div class="username"><img :src="i.author.avatar_url" width="40px" height="40px">
              <span style="">{{i.author.loginname}}</span>
            </div>
            <div class="reply_content" v-html="i.content"></div>
            <div class="reply_time">发表于：{{$utils.goodTime(i.create_at)}}</div>

            <!--<p>评论者：{{i.author.loginname}} 评论于：{{$utils.goodTime(i.create_at)}}</p>-->
          </div>
          <div v-else>
            <div>暂无评论</div>
          </div>
        </div>

      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      Header,
      Footer
    },
    data() {
      return {
        id: this.$route.params.id,
        dat: {},
        loginname: ''
      }
    },
    created() {
      this.getData()
    },

    computed: {
      ...mapGetters({
        title: 'getTitle'
      })
    },
    methods: {
      getData() {
        this.$api.get('topic/' + this.id, null, r => {
          this.dat = r.data;
          this.loginname = r.data.author.loginname
          this.$store.commit("set_title", r.data["title"]);
          console.log(r.data)
        })
      },

    }
  }
</script>

<style>
  .reply_content img {
    box-sizing: border-box;
    width: 100%;
    max-width: 261.333vw;
    margin: 0 auto;
    padding: 5.333vw;
    font-size: 3.733vw;
    content: "viewport-units-buggyfill; max-width: 261.333vw; padding: 5.333vw; font-size: 3.733vw";
  }

  .markdown-body {
    box-sizing: border-box;
    width: 100%;
    max-width: 261.333vw;
    margin: 0 auto;
    padding: 5.333vw;
    font-size: 3.733vw;
    content: "viewport-units-buggyfill; max-width: 261.333vw; padding: 5.333vw; font-size: 3.733vw";
  }
  .markdown-body h3, h2 {
    color: #3c3c3c;
    font-weight: 700;
  }

  .markdown-body blockquote, .markdown-body dl, .markdown-body ol, .markdown-body p, .markdown-body pre, .markdown-body table, .markdown-body ul {
    margin-top: 0;
    margin-bottom: 4.267vw;
    content: "viewport-units-buggyfill; margin-bottom: 4.267vw";
  }

  .markdown-body img {
    max-width: 100%;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    background-color: #fff;
  }

  .markdown-text ul {
    list-style: none;
  }
  .markdown-text pre,.reply_content pre{
    padding: 4.267vw;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: .8vw;
  }

  .markdown-text a {
    color: #26a2ff;
    text-decoration: none;
  }

</style>
<style scoped>
  body, html {
    overflow-x: hidden;
    word-break: break-all;
    word-wrap: break-word;
    font-family: "微软雅黑";
  }

  h2 {
    text-align: center;
    margin-top: 40px;
  }

  .author {
    text-align: center;
    display: block;
    margin: 5px 0px;
  }

  .create_time {
    display: block;
    text-align: center;
    font-size: 14px;
  }

  #article {
    overflow-x: hidden;
    word-break: break-all;
    word-wrap: break-word;
    font-family: "微软雅黑";
  }
  h2{
    font-size: 20px;
  }


  .username {
    color: #666666;
    font-size: 14px;
    margin: 10px 0px 0px 0px;
  }

  .username > img {
    border-radius: 20px;
    position: relative;
  }

  .username > span {
    display: inline-block;
    position: relative;
    top: -16px;
    left: 5px;
  }

  .reply_content {
    color: #707274;
    margin: 5px 25px 20px 25px;
    font-size: 16px;
    overflow-x: hidden;
    word-break: break-all;
    word-wrap: break-word;
  }

  .reply_time {
    margin: 20px 0 10px 10px;
    color: #999999;
    font-size: 14px;
  }
</style>
