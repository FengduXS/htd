<template>
    <div class="md5">
        md5
    </div>
</template>
<script>
    import md5 from 'js-md5'
    export default {
        data(){
            return {

            }
        },
        mounted(){
            let mdtxt = md5('nice');
            console.log(mdtxt);
        },
    }
</script>
<style>

</style>