<template>
  <div class="background">
      <div class="article">
        <div class="find-cuisine">
            <h1>Find your recipe</h1>
            <SearchBar />
        </div>
      </div>
      <div class="opacity"></div>
  </div>
</template>

<style scoped>
    .find-cuisine {
      text-align:center;
    }

    h1 {
      font-family: 'Fasthand', cursive;
      font-size: 5rem;
      color: white; 
      margin-bottom: 2rem;
    }

    .opacity {
      z-index:1;
      position:absolute;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity:50%;
      
    }

    .article {
      z-index:10;
      position:absolute;
      width: 100%;
      height: 100%;
      display:flex;
      justify-content:center;
      align-items:center;
    }

    .background {
        position:relative; 
        height: 100vh;
        background-image: url('../assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg'); 
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>