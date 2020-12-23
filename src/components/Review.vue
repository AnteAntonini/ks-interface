<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="blue-grey darken-4" dark v-bind="attrs" v-on="on">
          <v-icon left>mdi-plus</v-icon>Review
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="title white--text blue-grey darken-4">
          Leave review
        </v-card-title>

        <v-card-text class="pt-10 pb-0">
          <v-row>
            <!-- Rate the worker -->
            <v-col cols="3">Rate the worker</v-col>
            <v-col cols="9"
              ><v-rating
                v-model="rating1"
                background-color="orange lighten-3"
                color="orange"
                large
              ></v-rating>
            </v-col>

            <!-- Rate the job -->
            <v-col cols="3">Rate the job</v-col>
            <v-col cols="9">
              <v-rating
                v-model="rating2"
                background-color="orange lighten-3"
                color="orange"
                large
              ></v-rating>
            </v-col>

            <!-- Leave a comment -->
            <v-col cols="12">
              <v-textarea
                v-model="comment"
                outlined
                label="Leave a comment"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions class="pa-4">
          <v-btn text color="blue-grey darken-4" @click="dialog = false"
            >cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn color="blue-grey darken-4" dark @click="dialog = false">
            submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    comment: null,
    rating1: 3,
    rating2: 3,
  }),
};
</script>

<style>
</style>