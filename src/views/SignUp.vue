<template>
  <div class="signup-container">
    <h2>Registracija</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <input type="text" v-model="name" placeholder="Ime" />
      </div>
      <div class="form-group">
        <input
          type="text"
          v-model="username"
          placeholder="Korisničko ime"
          :class="{ invalid: !isUsernameValid }"
        />
        <div v-if="!isUsernameValid" class="error-msg">
          Mora sadržavati barem 6 znakova.
        </div>
      </div>
      <div class="form-group">
        <input
          type="password"
          v-model="password"
          placeholder="Lozinka"
          :class="{ invalid: !isPasswordValid }"
        />
        <div v-if="!isPasswordValid" class="error-msg">
          Mora sadržavati barem 6 znakova.
        </div>
      </div>
      <div class="form-group">
        <label>Datum dolaska:</label>
        <input
          type="date"
          v-model="arrivalDate"
          :class="{ invalid: !isArrivalDateValid }"
        />
        <div v-if="!isArrivalDateValid" class="error-msg">
          Molimo unesite datum dolaska.
        </div>
      </div>
      <div class="form-group">
        <label>Datum odlaska:</label>
        <input
          type="date"
          v-model="departureDate"
          :class="{ invalid: !isDepartureDateValid }"
        />
        <div v-if="!isDepartureDateValid" class="error-msg">
          Molimo unesite datum odlaska.
        </div>
      </div>
      <button class="signup-btn" @click="signUp">Registriraj se</button>
      <router-link to="/">
        <button class="login-page-btn">Idi na Login</button>
      </router-link>
    </form>
  </div>
</template>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.form-group {
  margin-bottom: 20px;
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  display: block;
  font-weight: bold;
}

.signup-btn,
.login-page-btn {
  width: 200px; /* Postavite fiksnu širinu gumba prema potrebi */
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.signup-btn {
  background-color: #007bff;
  color: #fff;
}

.signup-btn:hover {
  background-color: #0056b3;
}

.login-page-btn {
  background-color: #555;
  color: #fff;
}

.login-page-btn:hover {
  background-color: #333;
}

.invalid {
  border-color: red;
}

.error-msg {
  color: red;
  margin-top: 5px;
}
</style>

<script>
import { Auth } from "../services/index.js";

export default {
  data() {
    return {
      name: "",
      username: "",
      password: "",
      arrivalDate: "",
      departureDate: "",
    };
  },
  computed: {
    isUsernameValid() {
      return this.username.length > 6;
    },
    isPasswordValid() {
      return this.password.length > 6;
    },
    isArrivalDateValid() {
      return !!this.arrivalDate;
    },
    isDepartureDateValid() {
      return !!this.departureDate;
    },
  },
  methods: {
    async register() {
      console.log();
      let success = await Auth.register(
        this.name,
        this.username,
        this.password,
        this.arrivalDate,
        this.departureDate
      );

      if (success == true) {
        this.$router.push({ name: "HomePage" }); //kasnije promijeni

        //console.log(this.usersData);
      }
    },
  },
};
</script>
