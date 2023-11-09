<template>
  <div class="destinasi">
    <Navbar />

    <div class="container">
      <!-- Breadcrumb -->
      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link class="text-dark text-decoration-none" to="/"
                  >Home</router-link
                >
              </li>
              <li class="breadcrumb-item">
                <router-link class="text-dark text-decoration-none" to="/katalog"
                  >Katalog</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Destinasi
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- Detail -->
      <div class="row mt-3">
        <div class="col-md-6">
          <img
            :src="'..//assets/img/' + destinasi.banner"
            class="img-fluid shadow"
          />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ destinasi.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Biaya : <strong>Rp. {{ destinasi.biaya }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group mt-3">
              <label for="tanggal_berangkat">Pemesanan Untuk Tanggal</label>
              <input
                type="date"
                class="form-control"
                v-model="pesan.tanggal_berangkat"
              />
            </div>
            <div class="form-group mt-3">
              <label for="keterangan">Keterangan</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="Tempat-tempat yang ingin dikunjungi..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-success float-end mt-3"
              @click="pemesanan"
            >
              Pesan <i class="bi bi-send-fill"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "DestiDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      destinasi: {},
      pesan: {},
    };
  },
  methods: {
    setDestinasi(data) {
      this.destinasi = data;
    },
    pemesanan() {
      if (this.pesan.tanggal_berangkat) {
        this.pesan.destinasis = this.destinasi;
        axios
          .post("http://localhost:3000/pesanan", this.pesan)
          .then(() => {
            this.$router.push({ path: "/pesanan"})
            console.log("Pesanan Berhasil Dibuat");
          })
          .catch((err) => console.log(err));
      } else {
        console.log("Harap Lengkapi Pesanan");
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/destinasi/" + this.$route.params.id)
      .then((response) => this.setDestinasi(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>