<template>
    <div class="top">
        <ul>
            <li class="menuli" v-for="item in menus"><router-link :to="{name:item.name}">{{item.txt}}</router-link></li>
        </ul>
    </div>
</template>
<style>
    .menuli{float:left;margin-left:20px;}
</style>
<script>
    export default {
        data(){
            return {
                menus:[
                    {txt:'菜单1',name:'menu1'},
                    {txt:'菜单2',name:'menu2'},
                    {txt:'菜单3',name:'menu3'},
                ]
            }
        }
    }
</script>