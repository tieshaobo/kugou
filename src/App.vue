<template>
<div id="app">
    <mt-header
        fixed
        title=""
        class="header"
    >
        <router-link
            to="/"
            slot="left"
        >
            <mt-button><img
                    class="logo"
                    width=100%
                    height=100%
                    src="http://m.kugou.com/v3/static/images/index/logo.png"
                /></mt-button>
            </router-link>
            <mt-button slot="right"><img
                    class="search"
                    width=100%
                    height=100%
                    src="http://m.kugou.com/v3/static/images/index/search.png"
                /></mt-button>
            </mt-header>
            <mt-navbar
                class="nav"
                fixed
                v-model="selected"
            >
                <mt-tab-item id="1" v-model="selected">
                    <router-link to="newSong">新歌</router-link>
                </mt-tab-item>
                <mt-tab-item id="2">
                    <router-link to="sort">排行</router-link>
                </mt-tab-item>
                <mt-tab-item id="3">
                    <router-link to="songList">歌单</router-link>
                </mt-tab-item>
                <mt-tab-item id="4">
                    <router-link to="singer">歌手</router-link>
                </mt-tab-item>
                </mt-navbar>
                <!-- <mt-tab-container>
    <mt-tab-container-item id="selected">
       <router-view/>
    </mt-tab-container-item>
    </mt-tab-container> -->
                <!-- <ul class="nav">
      <li><router-link to="home">新歌</router-link></li>
      <li><router-link>排行</router-link></li>
      <li><router-link>歌单</router-link></li>
      <li class="active"><router-link>歌手</router-link></li>
    </ul> -->
                <div class="main" :style="{height:viewH}">
                    <router-view/>
                </div>
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            selected: "1"
        }
    },
    computed:{
      viewH(){
        var h = document.documentElement.clientHeight || document.body.clientHeight;
        console.log(h)
        return +"px"
      }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.header {
    height: 5rem;
}

.logo {
    width: 10rem;
}

.search {
    width: 2.5rem;
}
.mint-navbar.is-fixed {
    top: 5rem;
    height: 3rem;
}

.mint-tab-item-label {
    font-size: 1.6rem;
}

.main {
    width: 100%;
    height:calc(100% - 8rem);
    position: fixed;
    top: 8rem;
    margin-top:5px;
    overflow:auto;
}
</style>
