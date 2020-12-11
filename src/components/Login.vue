<template>
  <div class="my-15" style="width: 100%">
  <v-row style="width: 100%" class="justify-center">
  <v-col  cols="12" md="4" class="ml-6">
  <v-form v-model="valid" ref="form">
    <p class="grey-title">Log In</p>
    <v-container style="height: 350px; width: 100%; background: #f5f5f5; position: relative">
      <v-row class="ma-auto mt-10">
        <v-col
          cols="12"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        
         <v-col
          cols="12"
        >
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-row  class="d-flex justify-center">
            <v-btn   @click="login" :disabled="!valid" color="#4dad5b" class="button">Log In</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </v-col>

  <v-col cols="12" md="4" class="ml-6" style="width: 50%">
      <p class="grey-title">Join the Online Poslovni Servis!</p>
      <v-col style="background: #f5f5f5; height: 350px; position: relative;">
          <p>Create a Online Poslovni Servis account today! With a Online Poslovni Servis account, you can search and post jobs!</p>
          <v-row  class="d-flex justify-center">
           <v-btn to="/register" class="button" color="#30a7d7">Create an Account</v-btn>
          </v-row>
      </v-col>
  </v-col>
  </v-row>
  </div>
</template>


<script>


  export default {
    name: 'Login',
    data: () => ({
      valid: false,
      email: '',
      error: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        }, 
    }),
    methods: {
      login() {
        this.$router.push({name: 'Home'});
      },
    },
  }
</script>

<style lang="scss" scoped>
.button {
    text-transform: capitalize;
    color: white;
    position: absolute;
    bottom: 30px;
}

.grey-title {
  color: #919191;
  text-align: start;
  font-size: 22px
}
.header-title {
  font-weight: 400;
  color: #919191;
}
</style>