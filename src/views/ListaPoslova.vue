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
              class="list"
              v-for="(item, index) in items"
              :key="item.title"
            >
              <v-list-item link>
                <v-list-item-icon>
                  <v-radio-group v-model="radioGroup">
                    <v-radio
                      :value="index"
                    ></v-radio>
                  </v-radio-group>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="nav-list">
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
        <div v-for="(posao, i) in poslovi" :key="i">
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
      radioGroup: 1,
      items: [
          { title: 'Svi', icon: 'mdi-view-dashboard',},
          { title: 'Fizički', icon: 'mdi-image' },
          { title: 'IT', icon: 'mdi-help-box' },
          {title: 'Ostalo', icon: 'mdi-help-box'}
        ],
        poslovi: [
            {title: 'Kuhar', satnica: 30, lokacija: 'Zagreb', poslodavac: 'Hilton', brojOsoba: 2},
            {title: 'Dizajner', satnica: 60, lokacija: 'Zagreb', poslodavac: 'Marko', brojOsoba: 1},
            {title: 'IT', satnica: 40, lokacija: 'Zagreb', poslodavac: 'Marko', brojOsoba: 4},
            {title: 'IT', satnica: 40, lokacija: 'Zagreb', poslodavac: 'Marko', brojOsoba: 4},
        ]
    }
  },
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