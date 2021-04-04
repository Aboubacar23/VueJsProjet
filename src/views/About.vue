<template>
  <div>
      <div class="about">
        <h1>C'est la page about</h1>
        <h1 class="h1">Bonjour About</h1>
        <button>Cliqiez ici</button>
        <h3 :class="$style.bleu">ça va bien!</h3>
    </div>
  </div>
 
</template> 


<script>

export default{
    name: "About"
}
</script>


<style module>
    .h1 {
      font-family: 'Times New Roman', Times, serif;
      color: red;
    }
    button {
      background-color: blue;
      font-size: 40px;
      font-style: italic;
      font-weight: bold;
      font-family: 'Courier New', Courier, monospace;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .bleu{
      color: #2c3aa0;
      font-weight: bold;
      size: 100px;
    }
</style>