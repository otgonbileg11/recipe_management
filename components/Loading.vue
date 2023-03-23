<template>
    <div class="loading-page">
      <div class="loading"></div>
    </div>
</template>
<style scoped>
  .loading-page {
    padding-top: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loading {
    width: 4rem;
    height: 4rem;
    border: 8px solid #8da9c1;
    border-radius: 50%;
    border-top-color: #efdb0a;
    animation: spin 1s ease-in-out infinite;
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>