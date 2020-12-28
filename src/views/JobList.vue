<template>
  <div class="pa-4">

    <!-- Create new job -->
    <v-row>
      <v-col cols="12">
        <JobDialog  @updateJob="createdJob"/>
      </v-col>
    </v-row>

    <!-- Lista poslova -->
    <v-row>
      <v-col cols="12" md="3">
        <div class="d-flex justify-space-between py-4">
          <v-text-field
            label="Search for jobs"
            v-model="search"
            autocomplete="off"
            @click="removeFilter"
            prepend-inner-icon="mdi-magnify"
            class="search-events mt-6"
          ></v-text-field>
        </div>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title"> Filters </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list nav class="list">
          <v-list-item class="py-0" v-for="(item,index) in items" :key="item.title">
            <input
              class="form-radio-input"
              type="radio"
              :value="item.value"
              :id="'item' + index"
              v-model="selectedRadio"
            />
            <v-list-item-content>
              <v-list-item-title class="nav-list ml-3">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list></v-col
      >
      <v-col cols="12" md="9">
        <v-row>
          <v-col
            cols="12"
            md="6"
            v-for="(posao, i) in filtriraniPoslovi"
            :key="i"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                max-width="500px"
                class="mx-auto"
                color="blue-grey darken-4"
                dark
                router
                :to="{
                  name: 'SingleJob',
                  params: { posaoDetaljno: posao },
                }"
                :class="{ 'on-hover': hover }"
                :elevation="hover ? 16 : 2"
              >
                <div class="d-flex flex-no-wrap justify-start">
                  <div style="width: 90%">
                    <v-card-title
                      class="headline d-flex justify-space-between ml-1 white--text"
                      style="width: 100%"
                      >{{ posao.title }}
                      <v-chip class="ma-2 px-5" outlined x-large>
                        {{ posao.satnica }}kn/h
                      </v-chip>
                    </v-card-title>
                    <v-card-text class="ml-5 white--text">
                      <v-icon>mdi-map-marker </v-icon>
                      <span class="pl-5">{{ posao.lokacija }}</span>
                      <br />
                      <v-icon>mdi-domain </v-icon>
                      <span class="pl-5">{{ posao.poslodavac }}</span>
                      <br />
                      <v-icon>mdi-account </v-icon>
                      <span class="pl-5">{{ posao.brojOsoba }}</span>
                    </v-card-text>
                  </div>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import JobDialog from "../components/JobDialog";

export default {
  components: {
    JobDialog,
  },
  data() {
    return {
      selectedRadio: [],
      search: "",
      items: [
        { title: "Svi", value: "svi" },
        { title: "Fizicki", value: "fizicki" },
        { title: "IT", value: "it" },
        { title: "Ostalo", value: "ostalo" },
      ],
      poslovi: [
        {
          title: "Kuhar",
          satnica: 30,
          lokacija: "Zagreb",
          poslodavac: "Hilton",
          brojOsoba: 2,
          job_type: "ostalo",
          description: 'opis posla...',
          date: '01-01-2021'
        },
        {
          title: "Konobar",
          satnica: 25,
          lokacija: "Dubrovnik",
          poslodavac: "Bellevue",
          brojOsoba: 1,
          job_type: "ostalo",
          description: 'opis posla...',
          date: '01-01-2021'
        },
        {
          title: "Dizajner",
          satnica: 60,
          lokacija: "Zagreb",
          poslodavac: "Marko",
          brojOsoba: 1,
          job_type: "it",
          description: 'opis posla...',
          date: '01-01-2021'
        },
        {
          title: "Frontend Developer",
          satnica: 40,
          lokacija: "Zagreb",
          poslodavac: "Marko",
          brojOsoba: 4,
          job_type: "it",
          description: 'opis posla...',
          date: '01-01-2021'
        },
        {
          title: "Backend Developer",
          satnica: 50,
          lokacija: "Zagreb",
          poslodavac: "Marko",
          brojOsoba: 4,
          job_type: "it",
          description: 'opis posla...',
          date: '01-01-2021'
        },
        {
          title: "Građevina",
          satnica: 45,
          lokacija: "Split",
          poslodavac: "Dado",
          brojOsoba: 14,
          job_type: "fizicki",
          description: 'opis posla...',
          date: '01-01-2021'
        },
      ],
    };
  },
  methods: {
    removeFilter() {
      this.selectedRadio = null;
    },
    createdJob(param) {
      this.poslovi.push({
        title: param.name,
        satnica: param.price,
        lokacija: param.location,
        poslodavac: 'Dado',
        brojOsoba: param.num_of_workers,
        job_type: param.job_type,
        date: param.date,
        description: param.description
      })
      
    }
  },
  computed: {
    filtriraniPoslovi() {
      return this.poslovi.filter((posao) => {
        if (this.selectedRadio === "svi") {
          return posao.title;
        } else if (this.selectedRadio === "ostalo") {
          return posao.job_type.match("ostalo");
        } else if (this.selectedRadio === "it") {
          return posao.job_type.match("it");
        } else if (this.selectedRadio === "fizicki") {
          return posao.job_type.match("fizicki");
        } else return posao.title.toLowerCase().match(this.search);
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.search-events {
  max-width: 100% !important;
}
.v-card.on-hover {
  position: relative;
  right: -8px;
}
</style>