<template>
  <div>
    <HomeScreen/>
    <router-view/>
  </div>
</template>
<script>
import HomeScreen from "../components/HomeScreen";

export default {
  name: "App",
  components: {
    HomeScreen
  }
};
</script>