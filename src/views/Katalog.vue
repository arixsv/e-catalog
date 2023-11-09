<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Katalog <strong>Objek Wisata</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input v-model="search"
              type="text"
              class="form-control"
              placeholder="Temukan tempat wisata yang ingin dikunjungi"
              aria-label="Pencarian"
              aria-describedby="basic-addon1" @keyup="searchDestinasi"
            />
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div
          class="col-md-4 mt-d"
          v-for="destinasi in destinasis"
          :key="destinasi.id"
        >
          <CardDestinasi :destinasi="destinasi" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardDestinasi from "@/components/CardDestinasi.vue";
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Katalog",
  components: {
    Navbar,
    CardDestinasi,
  },
  data() {
    return {
      destinasis: {},
      search: '',
    };
  },
  methods: {
    setDestinasi(data) {
      this.destinasis = data;
    },
    searchDestinasi() {
      axios
      .get("http://localhost:3000/destinasi?q="+this.search)
      .then((response) => this.setDestinasi(response.data))
      .catch((error) => console.log(error));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/destinasi")
      .then((response) => this.setDestinasi(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>