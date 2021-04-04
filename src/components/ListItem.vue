<template>
    <div>
        <input type="checkbox" v-model="isPurchased" />
        <label>{{ item }}</label>
    </div>
</template>
<script>

export default{
  name: "listItem",
  props: {
      item: String,
  },
  data(){
      return {
          isPurchased: false,
      }
  }
}
</script>

<style scoped>

</style>