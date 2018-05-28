<template>
<div>
    <ul class="newsong">
        <li>
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in banner" :key="item.id">
                    <img :src="item.imgurl" width="100%" height="100%"> 
                </mt-swipe-item>
            </mt-swipe>
        </li>
        <li class="list" v-for="item in data" :key="item.audio_id">
            <span>{{item.filename}}</span>
            <i class="dowmload"></i>
        </li>
    </ul>
</div>
</template>

<script>
import {getNewSong} from "@/api"
export default {
    name: 'singer',
    data() {
        return {
            banner:[],
            data:[]
        }
    },
    method:{
       
    },
    created() {
        // this.axios(newSong).then(({
        //     data
        // }) => {
        //     console.log(data)
        //     this.banner = data.banner;
        //     this.data = data.data;
        // })
        getNewSong().then((data)=>{
            this.banner = data.banner;
            this.data = data.data;
        })
    }
}
</script>

<style scoped>
.newsong{
    width:100%;
}
.mint-swipe{
    height:15.4rem;
}

.list{
    width:100%;
    height:5rem;
    text-align:left;
    line-height:5rem;
    font-size:1.6rem;
    display:flex;
    padding-left:1rem;
    border-bottom:1px solid #eee;
    box-sizing:border-box;
    justify-content: space-around;
}
.list span{
     flex:1;
}
.dowmload{
    margin-right:10px;
    width:20px;
    height:20px;
    margin-top:1.7rem;
    background:url("http://m.kugou.com/v3/static/images/index/download_icon_2.png");
    background-size:100% 100%;
}
</style>
