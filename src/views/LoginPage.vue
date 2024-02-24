<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <div class="login-form">
        <h2>Prijava</h2>

        <div class="form-group">
          <input type="text" v-model="username" placeholder="Korisničko ime" />
        </div>
        <div class="form-group">
          <input type="password" v-model="password" placeholder="Lozinka" />
        </div>
        <button class="login-btn" type="submit">Prijavi se</button>
        <div class="links">
          <router-link to="SignUp">Registriraj se</router-link>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { Auth } from "../services/index.js";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let success = await Auth.loginPage(this.username, this.password);

      if (success == true) {
        this.$router.push({ name: "HomePage" }); //kasnije promijeni
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-form {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px; /* Povećaj ili smanji prema potrebi */
  width: 100%;
}

h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

input {
  width: calc(
    100% - 20px
  ); /* Smanjio sam širinu za 20px radi sličnosti s Facebookom */
  padding: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: #fafafa;
  font-size: 14px;
}

.login-btn {
  width: calc(
    100% - 20px
  ); /* Smanjio sam širinu za 20px radi sličnosti s Facebookom */
  padding: 10px;
  background-color: #3897f0;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #3578e5;
}

.links {
  margin-top: 10px;
}

.links a {
  color: #385185;
  text-decoration: none;
  font-weight: bold;
}
</style>
