<template>
  <nav>
    <!-- Nav -->
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span>job</span>
        <span class="font-weight-bold">service</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Dropdown menu -->
      <div class="d-none d-md-flex mx-2">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              <v-icon left>mdi-chevron-down</v-icon>menu
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(link, index) in links"
              :key="index"
              link
              :to="link.route"
            >
              <v-list-item-title>
                <v-icon left>{{ link.icon }}</v-icon>
                {{ link.text }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-btn
        v-if="fetchUser && isLogedIn"
        depressed
        @click="$router.push({ name: 'Profile' })"
        class="blue-grey darken-4 white--text d-none d-sm-flex py-1 px-2 text-lowercase"
        >{{ fetchUser.email }}</v-btn
      >

      <!-- Logout -->
      <div v-if="fetchUser">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn @click="logOut()" icon v-bind="attrs" v-on="on">
              <v-icon>mdi-logout</v-icon>
            </v-btn>
          </template>
          <span class="red--text">Logout</span>
        </v-tooltip>
      </div>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer app v-model="drawer" class="blue-grey darken-4">
      <v-row class="mt-5">
        <v-col class="d-flex justify-center">
          <v-avatar color="transparent" size="100">
            <img src="/ante.jpg" alt="Image not found" />
          </v-avatar>
        </v-col>
      </v-row>

      <v-row class="mb-4">
        <v-col class="text-center">
          <span class="overline white--text">Some text</span>
        </v-col>
      </v-row>

      <!-- List of actions -->
      <v-list>
        <v-list-item
          v-for="(link, index) in links"
          :key="index"
          link
          :to="link.route"
        >
          <v-list-item-title class="white--text">
            <v-icon color="white" left>{{ link.icon }}</v-icon>
            {{ link.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    drawer: false,
    links: [
      { icon: "mdi-home", text: "Home", route: "/" },
      { icon: "mdi-format-list-bulleted", text: "Jobs List", route: "/list" },
      { icon: "mdi-account", text: "Login / Register", route: "/login" },
    ],
  }),
  computed: {
    ...mapGetters(["fetchUser", "isLogedIn"]),
  },
  methods: {
    logOut() {
      this.$store.dispatch("removeUser");
    },
  },
};
</script>