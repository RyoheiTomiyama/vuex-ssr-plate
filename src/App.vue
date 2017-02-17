<template lang='jade'>
  #app
    img(src='./assets/logo.png')
    ul
      li
        router-link(to="/" exact) Home
      li
        router-link(to="/topics") Topics
      li
        router-link(to="/counter") Counter
      li
        router-link(to="/about") About
      li
        router-link(to="/login") Login
    router-view.view
</template>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
  .router-link-active{
    color: red ;
  }
</style>
