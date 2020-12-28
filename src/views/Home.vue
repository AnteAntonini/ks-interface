<template>
  <div class="text-center">
    <v-img fluid src="@/assets/home-page-img.jpg">
      <v-btn
        @click="$router.push({ name: 'JobList' })"
        depressed
        class="center white--text pa-6"
        color="blue-grey darken-4"
        >Search for jobs</v-btn
      >
    </v-img>
  </div>
</template>

<script>
export default {};
</script>