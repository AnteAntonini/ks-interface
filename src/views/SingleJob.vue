<template>
  <div>
    <v-card>
      <div class="d-flex flex-no-wrap justify-start">
        <div style="width: 70%; height: 100%; margin: 0 auto">
          <v-card-title
            class="headline d-flex justify-space-between ml-1"
            style="width: 100%; font-size: 50px"
            >{{ posao.title }}
            <v-chip class="ma-2 px-5" outlined x-large>
              {{ posao.satnica }}kn/h
            </v-chip>
            <Review />
          </v-card-title>
          <v-card-text style="font-size: 1.5em">
            <div class="my-10">
              <v-icon>mdi-map-marker </v-icon>
              <span class="pl-5">{{ posao.lokacija }}</span>
            </div>
            <div class="mb-10">
              <v-icon>mdi-domain </v-icon>
              <span class="pl-5">{{ posao.poslodavac }}</span>
            </div>
            <div class="mb-10">
              <v-icon>mdi-account </v-icon>
              <span class="pl-5">{{ posao.brojOsoba }}</span>
            </div>
            <div>
              <span>Opis posla:</span>
              <v-textarea class="mt-5" style="width: 60%" outlined :value="posao.description" readonly>
                
              </v-textarea>
            </div>
            <div>
              <span>Kontakt informacija: 0123 123123 123</span>
            </div>
            <div class="mt-7 d-flex justify-space-between">
              <div>
                <span>Natječaj vrijedi od:</span>
                <span style="font-size: 0.8em; margin-left: 20px"
                  >30-11-2020.</span
                >
              </div>
              <div>
                <span>Natječaj vrijedi do:</span>
                <span style="font-size: 0.8em; margin-left: 20px"
                  >{{posao.date}}</span
                >
              </div>
            </div>
            <div class="mt-10">
              <span>Napomena:</span>
              <v-textarea class="mt-5" style="width: 60%" outlined value="napomena..." readonly>
               
              </v-textarea>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              v-if="isLogedIn"
              color="green"
              dark
              class="mx-auto pa-7 mb-10"
              @click="snackbar = true"
            >
              Prijavi Se
            </v-btn>
            <v-snackbar v-model="snackbar">
              {{ text }}
              <template v-slot:action="{ attrs }">
                <v-btn
                  color="pink"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                  :to="{ name: 'JobList' }"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Review from "../components/Review";

export default {
  name: "PosaoDetaljno",
  components: {
    Review,
  },
  data() {
    return {
      snackbar: false,
      text: "Uspješno ste se prijavili za posao",
      posao: this.posaoDetaljno,
    };
  },
  computed: {
    ...mapGetters(["isLogedIn"]),
  },
  props: {
    posaoDetaljno: Object,
  },
  mounted() {
    console.log(this.posao);
  },
};
</script>

<style scoped>
.v-application .headline {
  font-size: 3em !important;
}
</style>