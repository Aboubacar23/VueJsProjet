<template>
    <div class="radio">
        <h2>Radio</h2>
        <button type="btn btn-primary" @click="sendMessage"> Envoyer un message</button>
    </div>
    
</template>


<script>

export default {
  name: "Radio",
  methods:{
      sendMessage(){
          this.$emit('sent-message',{
              message: 'Mon premier magnifique message'
          })
      }
  }
}
</script>

<style>

</style>