<template>
  <v-app id="app">
    <Navbar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: {
    Navbar,
  },
  data: () => ({}),
};
</script>

<style lang="scss">
* {
  font-family: "Montserrat", sans-serif;
}
#app {
  background-color: #eee;
}

.center {
  margin-top: 40vh;
}
</style>