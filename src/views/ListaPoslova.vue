<template>
  <div style="height: 100%; width: 100%">
    <v-row style="height: 100%; width: 100%">
      <!-- NAVIGATION DRAWER -->
      <v-col md="3" class="pa-0 filters" style="height: 100%">
        <v-card width="265px" class="pl-9 mr-0">
          <v-navigation-drawer
            permanent
            fixed
            style="height: 100%; width: 255px"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title py-5">
                  Filters
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider class="mb-4"></v-divider>

            <v-list
              nav
              class="list ml-5"
              v-for="item in items"
              :key="item.title"
            >
              <v-list-item>
                  <input class="form-radio-input" type="radio" :value="item.value" :id="'item'+index" v-model="selectedRadio">
                <v-list-item-content>
                  <v-list-item-title class="nav-list ml-5">
                    {{ item.title }} 
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>

      <!-- SEARCH NAVBAR -->
      <v-app-bar
        color="white"
        style="height: 88px; width: 100%; margin-left: 60px"
        fixed
        app
        elevate-on-scroll
      >
        <v-spacer></v-spacer>
        <div class="d-flex justify-space-between py-4" style="width: 500px">
          <v-text-field
            label="Pretraži poslove"
            v-model="search"
            autocomplete="off"
            @click="removeFilter"
            prepend-inner-icon="mdi-magnify"
            class="search-events mt-6"
            hint="search other jobs"
          ></v-text-field>
          <v-btn class="pa-3 ml-3 mt-6" style="text-transform: capitalize"
            >Search</v-btn
          >
        </div>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-col md="6" class="mx-auto">
        <!-- Lista poslova -->
        <div v-for="(posao, i) in filtriraniPoslovi" :key="i">
          <v-col cols="12" class="pl-0">
            <v-hover v-slot="{ hover }">
              <v-card
                color="#546E7A"
                dark
                max-width="500"
                height="200"
                router
                :to="{ name: 'PosaoDetaljno', params: {posaoDetaljno :  posao} }"
                :class="{ 'on-hover': hover }"
                :elevation="hover ? 16 : 2"
              >
                <div class="d-flex flex-no-wrap justify-start">
                  <div style="width: 90%">
                    <v-card-title
                      class="headline d-flex justify-space-between ml-1"
                      style="width: 100%"
                      >{{ posao.title }}
                      <v-chip class="ma-2 px-5" outlined x-large>
                        {{ posao.satnica }}kn/h
                      </v-chip>
                    </v-card-title>
                    <v-card-text class="ml-5">
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
        </div>
      </v-col>
    </v-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selectedRadio: [],
      search: '',
      items: [
          { title: 'Svi',  value: 'svi'},
          { title: 'Fizicki', value: 'fizicki' },
          { title: 'IT',  value:'it' },
          {title: 'Ostalo', value: 'ostalo'}
        ],
        poslovi: [
            {title: 'Kuhar', satnica: 30, lokacija: 'Zagreb', poslodavac: 'Hilton', brojOsoba: 2, tipPosla: 'ostalo'},
            {title: 'Konobar', satnica: 25, lokacija: 'Dubrovnik', poslodavac: 'Bellevue', brojOsoba: 1, tipPosla: 'ostalo'},
            {title: 'Dizajner', satnica: 60, lokacija: 'Zagreb', poslodavac: 'Marko', brojOsoba: 1, tipPosla: 'it'},
            {title: 'Frontend Developer', satnica: 40, lokacija: 'Zagreb', poslodavac: 'Marko', brojOsoba: 4, tipPosla: 'it'},
            {title: 'Backend Developer', satnica: 50, lokacija: 'Zagreb', poslodavac: 'Marko', brojOsoba: 4, tipPosla: 'it'},  
            {title: 'Građevina', satnica: 45, lokacija: 'Split', poslodavac: 'Dado', brojOsoba: 14, tipPosla: 'fizicki'},
        ]
    }
  },
  methods: {
    removeFilter() {
      this.selectedRadio = null
    }
  },
  computed: {
    filtriraniPoslovi() {
        return this.poslovi.filter((posao) => {
          if(this.selectedRadio === 'svi') {
            return posao.title
          } else if (this.selectedRadio === 'ostalo') {
            return posao.tipPosla.match('ostalo')
          } else if (this.selectedRadio === 'it') {
            return posao.tipPosla.match('it')
          } else if (this.selectedRadio === 'fizicki') {
            return posao.tipPosla.match('fizicki')
          }
           else
          return posao.title.toLowerCase().match(this.search)
        }) 
    }
  }
 }
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