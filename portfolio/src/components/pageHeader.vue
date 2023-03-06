<template>
    <div class="page-header">
        <h1>{{ headerText }} </h1>
    </div>
</template>
<script>
export default {
    components: 
    {

    },
    props:
    {
        headerText: {
            type: String,
            required: true
        }
    }
}
</script>
<style>
.page-header
{
    text-align: center;
    color: white;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    padding: 1rem;
    position: relative;
    margin-bottom: 1em;
   
  }
.page-header:after 
{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background-color: rgb(143, 142, 142);
    border-radius: 2px;
  }

</style>