<template>
    <div class="base64">
        <input type="file" id="image"><br/>
    </div>
</template>
<style scoped>

</style>
<script>
    export default {
        computed: {},
        mounted() {
            let url = require('../../../assets/images/hy.jpg'); //这是站内的一张图片资源，采用的相对路径
            this.$local.convertImgToBase64(url, function(base64Img){
                //转化后的base64
                console.log(base64Img);
            });
        },
        methods:{

        }
    }

</script>
