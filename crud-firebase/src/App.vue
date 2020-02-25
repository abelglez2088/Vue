<template>
  <div id="app" class="container">
    <div class="text-center">
      <router-link :to="{name: 'inicio'}">
      <img src="@/assets/logo.png" alt=""></router-link>
    <router-view/>
    </div>
    
  </div>
</template>
