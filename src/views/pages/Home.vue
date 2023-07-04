<template>
    <main>
        <h1>Hello {{ email }}</h1>
    </main>
</template>
<script>
    export default {
        name: 'Home',
        
        data(){
            return {
                email: this.$store.getters.GET_AUTH_INFO.email,
            }
        },
    }
</script>