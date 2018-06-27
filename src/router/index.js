import Vue from 'vue'
import Router from 'vue-router'
//在路由中引入index、content两个组件
import Index from '@/page/index'
import Content from '@/page/content'

Vue.use(Router)

export default new Router({
    //去掉地址栏中的/#/
//  mode: 'history',
    //配置路由地址
    routes: [{
            path: '/',
            component: Index
        },
        {
            path: '/content/:id', //因为我们的内容页面是要展示N条内容的，我们如何来区分这些内容呢，就是根据ID来进行区分。所以，这里使用了动态路由匹配。
            component: Content
        }
    ]
})