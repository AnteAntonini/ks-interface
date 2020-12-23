<template>
  <div class="pa-4">
    <v-row justify="center">
      <v-col cols="12" md="5">
        <v-card outlined>
          <v-card-title class="title white--text blue-grey darken-4">
            Profile
          </v-card-title>
          <v-card-text>
            <div class="text-center">
              <v-avatar class="ma-4" size="150">
                <img src="ante.jpg" alt="John" />
              </v-avatar>
            </div>
            <v-divider></v-divider>
            <div class="title">Ante Antonini, 23</div>
            <div class="body-1">Profession: <b>web developer</b></div>
            <div class="body-1">Location: <b>Metković</b></div>
            <div class="body-1">Rating: <b>4.2/5</b></div>
            <div class="body-1"><a href="">Reviews</a></div>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="$router.go(-1)" depressed text>Back</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>