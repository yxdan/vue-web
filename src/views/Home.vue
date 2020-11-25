<template>
    <div>
        这是首页
    </div>
</template>

<script>
    export default {
        name: "Home",
        mounted(){
            this.getProductList()
        },
        methods: {
            getProductList() {
                this.$http.get('/app/product/dropDown')
                    .then(function (response) {
                        console.log(17, response.data.retData)
                    }) .catch(function (error) {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>

</style>