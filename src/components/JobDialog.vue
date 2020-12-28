<template>
  <div class="text-end">
    <v-dialog v-model="dialog" width="1024">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="blue-grey darken-4" dark v-bind="attrs" v-on="on">
          <v-icon left>mdi-plus</v-icon>job
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="title blue-grey darken-4 white--text">
          Create new job
        </v-card-title>

        <v-card-text class="px-4">
          <v-form>
            <v-container>
              <v-row>
                <!-- Name -->
                <v-col cols="12" md="6">
                  <v-text-field v-model="job.name" type="text" label="Job name">
                  </v-text-field>
                </v-col>

                <!-- Date picker -->
                <v-col cols="12" md="6">
                  <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="job.date"
                        label="Deadline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="job.date"
                      @input="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <!-- Job type -->
                <v-col class="d-flex" cols="12" md="6">
                  <v-select
                    v-model="job.job_type"
                    :items="job_types"
                    label="Job type"
                  ></v-select>
                </v-col>

                <!-- Price -->
                <v-col cols="12" md="3">
                  <v-text-field
                    :disabled="job.as_agreed"
                    v-model="job.price"
                    type="number"
                    label="Price (kn/h)"
                  ></v-text-field>
                </v-col>

                <!-- As agreed switch -->
                <v-col class="mx-auto" cols="3" md="2">
                  <v-switch
                    label="As agreed"
                    v-model="job.as_agreed"
                  ></v-switch>
                </v-col>

                <!-- Location -->
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="job.location"
                    type="text"
                    label="Location"
                  ></v-text-field>
                </v-col>

                <!-- Number of workers -->
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="job.num_of_workers"
                    type="number"
                    label="Number of workers"
                  ></v-text-field>
                </v-col>

                <!-- Description -->
                <v-col class="mx-auto" cols="12" md="7">
                  <v-textarea
                    outlined
                    v-model="job.description"
                    label="Description"
                  ></v-textarea>
                </v-col>

                <!-- Spacer -->
                <!-- <v-col cols="12" md="6"></v-col> -->

                <!-- File upload -->
                <v-col class="mx-auto" cols="12" md="6">
                  <v-file-input
                    prepend-icon="mdi-camera"
                    label="Upload photos"
                    outlined
                    show-size
                    counter
                    multiple
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions class="pa-4">
          <v-btn color="blue-grey darken-4" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue-grey darken-4" dark @click="dialog = false; addNewJob()" >
            Create job
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
    menu2: false,
    job_types: ["IT", "Construction", "Catering"],
    job: {
      name: null,
      date: null,
      job_types: null,
      description: null,
      price: 20,
      as_agreed: false,
      location: null,
      num_of_workers: 1,
    },
  }),
  methods: {
    addNewJob: function() {
      this.$emit('updateJob', this.job)
    }
  }
};
</script>

<style>
</style>