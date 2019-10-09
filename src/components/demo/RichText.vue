<template>
    <div class="rich_text">
        <div id="editor" type="text/plain" style="width:1024px;height:500px;"></div>
    </div>
</template>
<script>
    import '../../assets/js/ueditor/ueditor.config'
    import '../../assets/js/ueditor/ueditor.all'
    import '../../assets/js/ueditor/zh-cn'
    export default {
        data(){
            return {
                ue:null
            }
        },
        mounted(){
            this.ue = UE.getEditor('editor');
        }
    }
</script>
<style>

</style>