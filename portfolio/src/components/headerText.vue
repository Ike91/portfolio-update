<template>
    <div class="container top-discription" justify="center">
        <p>{{ discription }} </p>
  </div>
</template>
<script>
export default {
    components:
    {
       
    }, 
    props: {

        discription: {
            type: String,
            
        }
       
    }
}

</script>
<style scoped>
.container {
    margin-bottom: 2em;
    font-size: 18px;
    
  }
  .top-discription p
  {
    text-align: center;
    font-size: 18px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    padding-bottom: 2rem;
  }
</style>