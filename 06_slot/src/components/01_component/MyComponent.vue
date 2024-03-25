<template>
    <div>

    </div>
</template>
    <h1>MyComponent</h1>
<script>
import { onMounted } from 'vue';

export default {
        setup(){
            onMounted(async() => {
             console.log("Hello!");   
            })

        }
    }
</script>

<style scoped>

</style>