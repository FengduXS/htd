<template>
    <div class="rich_text">
        <div id="editor" type="text/plain" style="width: 1000px;height: 300px;"></div>
        <input type="button" value="获取内容" @click="getInner" />
    </div>
</template>
<script>
    /*import '../../../static/UE/ueditor.config'
    import '../../../static/UE/ueditor.all.min'
    import '../../../static/UE/lang/zh-cn/zh-cn'
    import '../../../static/UE/ueditor.parse.min'*/
    export default {
        data(){
            return {
                editor:null,
                config:{}
            }
        },
        props:{
            defaultMsg:{type:String},
            //config:{type:Object}
        },
        mounted(){
            this.editor = UE.getEditor('editor',this.config);
        },
        methods:{
            getUEContent(){
                return this.editor.getContent()
            },
            getInner(){
                console.log(this.getUEContent());
            }
        }
    }
</script>
<style>

</style>