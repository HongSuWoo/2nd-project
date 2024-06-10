<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 <RouterLink to="/home">홈    </RouterLink>
 <RouterLink to="/login">     로근</RouterLink>
 
<main>
<RouterView/>
</main>

</template>

<style scoped>

</style>
