<template>
  <div class="header">
    <div class="container">
      <div class="logo">
        <h1>Vue TS Template</h1>
      </div>
      <div class="nav">
        <router-link to="/">Home</router-link>
        <span> | </span>
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
