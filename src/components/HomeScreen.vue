<template>
  <div>
    <div class="header">
      <img src="../assets/logo-header.png" alt="42-logo" height="40">
      <ul>
        <li>
          <router-link :to="{
              name: 'inicio'
            }">Inicio</router-link>
        </li>
        <li>
          <router-link :to="{
              name: 'componentes'
            }">Componentes</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeScreen",
  props: {
    msg: String
  }
};
</script>
