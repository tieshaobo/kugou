import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import newSong from '@/components/home/index'
import singer from '@/components/singer/singer'
import songList from '@/components/songList/songList'
import sort from '@/components/sort/sort'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/newSong',
            name: 'newSong',
            component: newSong
        }, {
            path: '/sort',
            name: 'sort',
            component: sort
        }, {
            path: '/songList',
            name: 'songList',
            component: songList
        }, {
            path: '/singer',
            name: 'singer',
            component: singer
        }


    ]
})