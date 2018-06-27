<template>
    <div>
        <Header></Header>
        <div>
            <h2 v-text="dat.title"></h2>
            <span class="author">作者：{{loginname}}</span>
            <span class="create_time">发表于：{{$utils.goodTime(dat.create_at)}}</span>
            <hr />
            <div class="text item">
                <article id="article" v-html="dat.content"></article>
            </div>
            <hr />
            <div>
                <h3>评论：</h3>
                <ul>
                    <div v-for="i in dat.replies">
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
                </ul>
            </div>
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
        methods: {
            getData() {
                this.$api.get('topic/' + this.id, null, r => {
                    this.dat = r.data;
                    this.loginname = r.data.author.loginname
                    console.log(r.data)
                })
            }
        }
    }
</script>

<style scoped>
    body,html {
        overflow-x: hidden;
        word-break: break-all;
        word-wrap: break-word;
        font-family: "微软雅黑";
    }
    h2{
        text-align: center;
        margin-top:40px;
    }
    hr{
        border: 0.5px solid #CCCCCC;
    }
    .author{
        text-align: center;
        display: block;
        margin: 5px 0px;
    }
    .create_time{
        display: block;
        text-align: center;
        font-size: 14px;
    }
    #article{
        overflow-x: hidden;
        word-break: break-all;
        word-wrap: break-word;
        font-family: "微软雅黑";
    }
    #article>div>p>img {
        height: 120px;
        width: 120px;
        overflow-x: hidden;
        word-break: break-all;
        word-wrap: break-word;
    }
    
    .username {
        color: #666666;
        margin: 10px 0px 0px -30px;
    }
    
    .username>span {
        display: inline-block;
        position: relative;
        top: -16px;
        left: 10px;
    }
    
    .username>img {
        border-radius: 20px;
        position: relative;
    }
    
    .reply_content {
        color: #707274;
        margin: 10px 15px 20px -10px;
        font-size: 16px;
        overflow-x: hidden;
        word-break: break-all;
        word-wrap: break-word;
    }
    
    .reply_time {
        margin: 20px 0 20px -20px;
        color: #999999;
        font-size: 14px;
    }
</style>