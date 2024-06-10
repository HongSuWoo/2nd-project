<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 <RouterLink to="/home">home /    </RouterLink>
 <RouterLink to="/login">     login</RouterLink>
 
<main>
<RouterView/>
</main>

</template>

<style scoped>

</style>
