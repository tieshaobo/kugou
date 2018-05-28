<template>
<div>
    <ul class="list">
        <li class="list-item" v-for="item in list" :key="item.id">
            <img :src="(item.imgurl).replace('{size}',400)" alt="">
            <p>{{item.rankname}}</p>
            <i></i>
        </li>
    </ul>
</div>
</template>

<script>
import {getSort} from "@/api"
export default {
    name: 'sort',
    data(){
        return {
            list:[]
        }
    },
    created(){
        getSort().then((data)=>{
            this.list = data.list
        })
    },

}
</script>

<style scoped>
.list{
    width:100%;
    height:auto;
    overflow:hidden;

}
.list-item{
    display: flex;
    justify-content: space-around;
    height:5rem;
    margin:5px;
}
.list-item img{
    width:5rem;
    height:5rem;
}
.list-item p{
    flex:1;
    align-items: stretch;
    line-height: 5rem;
}
.list-item i{
    width:50px;
    height:50px;
    
}
</style>
