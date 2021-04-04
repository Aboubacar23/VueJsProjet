<template>
  <div class="home">
        <h1>HomeLink</h1>
        <p>Je suis un nouveau component</p>
        <span>{{ message }}</span>

        <HelloWorld msg="Salut tout le monde je suis Condé Aboubacar Sidiki"/>
  </div>
</template>
<script>
import HelloWorld from './HelloWorld.vue'
export default {
  components: { HelloWorld },
    name: 'HomeLink',
    props:{
        message: String
    }
}
</script>
<style>

</style>