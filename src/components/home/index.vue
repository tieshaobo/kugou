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
            {{item.filename}}
            <i class="dowmload"></i>
        </li>
    </ul>
</div>
</template>

<script>
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
        this.axios("/api/?json=true").then(({
            data
        }) => {
            console.log(data)
            this.banner = data.banner;
            this.data = data.data;
        })
    }
}
</script>

<style>
.newsong{
    width:100%;
}
.mint-swipe{
    height:15.4rem;
}

.list{
    width:100%;
    height:3rem;
    text-align:left;
    line-height:3rem;
    font-size:1.6rem;
    padding-left:1rem;
    border-bottom:1px solid #eee;
    box-sizing:border-box;
}
.dowmload{
    float:right;
    margin-right:2rem;
    width:1.6rem;
    height:1.6rem;
    margin-top:0.7rem;
    background:url("http://m.kugou.com/v3/static/images/index/download_icon_2.png");
    background-size:100% 100%;
}
</style>
