<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">Ul Tour</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/"><i class="bi bi-house-fill"></i> Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/katalog"><i class="bi bi-archive-fill"></i> Katalog</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/pesanan">
              <i class="bi bi-book-half"></i> Pesanan Saya
              <span class="badge bg-success ms-2">{{ updateJmlPesanan ? updateJmlPesanan.length : jumlah_pemesanan.length }}</span>
            </router-link>
          </li>
        </ul>
      </div>      
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data() {
    return {
      jumlah_pemesanan: []
    }
  },
  props: ['updateJmlPesanan'],
  methods: {
    setJumlah(data) {
      this.jumlah_pemesanan = data
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/pesanan")
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log(error)
      );
  },
};
</script>

<style>
</style>