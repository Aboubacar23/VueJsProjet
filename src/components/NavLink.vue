<template>
  <div> 
       <h1 class="text-primary">NavLink</h1>
         <radio  @sent-message="updateMessage" />
         <br>
         <br>
         <div>
               <span>{{ message}}</span>
         </div>
  </div>
</template>
<script>
import Radio from './Radio.vue'

    export default {
  components: { Radio },
        name: "NavLink",
        data: ()=>({
          message: "Pas de message"
        }),
        methods:{
          updateMessage(payload){
            this.message = payload.message
          }
        }
    }
</script>
