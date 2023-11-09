<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Dashboard />

      <div class="row mt-4">
        <div class="col">
          <h2>Destinasi <strong>Populer</strong></h2>
        </div>
        <div class="col">
          <router-link to="/katalog" class="btn btn-success float-end"
            >Lihat Semua <i class="bi bi-eye-fill"></i></router-link
          >
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-4 mt-d" v-for="favorit in favorits" :key="favorit.id">
          <CardDestiFav :favorit="favorit"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Dashboard from "@/components/Dashboard.vue";
import CardDestiFav from "@/components/CardDestiFav.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Dashboard,
    CardDestiFav,
  },
  data() {
    return {
      favorits: [],
    };
  },
  methods: {
    setDestiFav(data) {
      this.favorits = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/favorit")
      .then((response) => this.setDestiFav(response.data))
      .catch((error) => console.log(error)
      );
  },
};
</script>
