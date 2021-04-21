<template>
  <div id="app">
    <Tree/>
  </div>
</template>

<script>

import Tree from "./components/Tree";
export default {
  name: "App",
  components: {
    Tree
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
  div {
    text-align: left;
  }
}
.bold {
  font-weight: bold;
  text-align: left;
}
li {
  list-style: none;
  text-align: left;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: none;
}
</style>
