<template>
    <div class="header">
        <h1>Catstagram</h1>
        <P>Home of Cat Pictures</P>

    </div>
</template>

<script>
 export default {

 }
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}
 .header {
    /* background: rgba(7, 7, 7, 0.953); */
    font-size: xx-large;
    font-style: italic;
    height: fit-content;
    text-align: left;
    width:100%;
    font-family: Georgia, 'Times New Roman', Times, serif;
    border-bottom: 1px solid rgb(110, 109, 109);
    
 }
 h1 {
    padding: 0 10px;
    margin:0;
    background-image: linear-gradient(180deg, rgba(190,93,255,1) 0%, rgba(225,106,231,1) 50%, rgba(69,252,250,1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent; 
    
 }
 p{
    font-size: medium;
    padding: 0 10px;
 }

</style>