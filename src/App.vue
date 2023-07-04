<script>
import { RouterView,RouterLink } from 'vue-router'

export default{
    computed: {
        loggedInStatus(){
            return this.$store.getters.GET_AUTH_STATUS;
        }
    }
}
</script>

<template>
    <RouterView></RouterView>
</template>