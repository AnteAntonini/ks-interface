<template>
  <v-form v-model="valid">
    <v-container>
      <v-row style="width: 80%" class="ma-auto mt-10">
        <v-col cols="12">
          <v-text-field
            v-model="user.firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="user.lastname"
            :rules="nameRules"
            :counter="15"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <p class="red--text text-left">{{ error }}</p>
        </v-col>

        <v-col cols="12">
          <v-text-field
            v-model="user.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-btn class="button-register" @click="signup" :disabled="!valid"
            >Register</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Register",
  data: () => ({
    valid: false,
    user: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    error: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
  methods: {
    signup() {
      this.$store.dispatch("user", this.user);

      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.button-register {
  text-transform: capitalize;
  color: white !important;
  background-color: #30a7d7 !important;
  width: 200px !important;
  height: 45px !important;
  margin-top: 40px;
  font-size: 18px;
  font-weight: 400;
}
</style>>

