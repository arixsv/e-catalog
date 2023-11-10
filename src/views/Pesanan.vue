<template>
  <div class="pesanan">
    <Navbar :updateJmlPesanan="pesanans" />
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
                <router-link
                  class="text-dark text-decoration-none"
                  to="/katalog"
                  >Katalog</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Pesanan Saya
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Pesanan <strong>Saya</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr class="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Foto Daerah Wisata</th>
                  <th scope="col">Daerah Wisata</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Tanggal Berangkat</th>
                  <th scope="col">Keseluruhan Biaya</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(pesanan, index) in pesanans" :key="pesanan.id">
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                    :src="require(`../assets/img/${pesanan.destinasis.banner}`)"
                      class="img-fluid shadow"
                      width="250"
                    />
                  </td>
                  <td>
                    <strong>{{ pesanan.destinasis.nama }}</strong>
                  </td>
                  <td>{{ pesanan.keterangan ? pesanan.keterangan : "-" }}</td>
                  <td class="text-center">{{ pesanan.tanggal_berangkat }}</td>
                  <td class="text-end">Rp. {{ pesanan.destinasis.biaya }}</td>
                  <td class="text-center text-danger">
                    <i
                      class="bi bi-trash"
                      @click="hapusPesanan(pesanan.id)"
                    ></i>
                  </td>
                </tr>

                <tr>
                  <td colspan="5" class="text-end">
                    <strong>Total Keseluruhan Biaya :</strong>
                  </td>
                  <td colspan="2" class="text-end">
                    <strong>Rp. {{ totalBiaya }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Checkout Form -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group mt-3">
              <label for="nama_lengkap">Nama Lengkap</label>
              <input
                type="text"
                class="form-control"
                v-model="pesan.nama_lengkap"
              />
            </div>
            <div class="form-group mt-3">
              <label for="email">Email</label>
              <input type="text" class="form-control" v-model="pesan.email" />
            </div>
            <div class="form-group mt-3">
              <label for="telepon">Telepon</label>
              <input type="text" class="form-control" v-model="pesan.telepon" />
            </div>

            <button
              type="submit"
              class="btn btn-success float-end mt-3"
              @click="checkout"
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
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pesanan",
  components: {
    Navbar,
  },
  data() {
    return {
      pesanans: [],
      pesan: {},
    };
  },
  methods: {
    setPesanan(data) {
      this.pesanans = data;
    },
    hapusPesanan(id) {
      axios
        .delete("http://localhost:3000/pesanan/" + id)
        .then(() => {
          this.$router.push({ path: "/pesanan" });
          console.log("Pesanan Berhasil Dihapus");

          // Update Data Pesanan
          axios
            .get("http://localhost:3000/pesanan/")
            .then((response) => this.setPesanan(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    checkout() {
      if(this.pesan.nama_lengkap && this.pesan.email && this.pesan.telepon){
        this.pesan.pesanans = this.pesanans;
        axios
          .post("http://localhost:3000/checkout", this.pesan)
          .then(() => {

            // Hapus Semua Pesanan Ketika Sudah Checout
            this.pesanans.map(function (item){
              return axios
              .delete("http://localhost:3000/pesanan/" + item.id)
              .then(() => {
                this.$router.push({ path: "/pesanan" });
                console.log("Pesanan Berhasil Dihapus");
                
              })
              .catch((error) => console.log(error));
                  })

                  this.$router.push({ path: "/berhasil-checkout"})
                  console.log("Checkout Berhasil");
                })
                .catch((err) => console.log(err));
      } else {
        console.log("Harap Lengkapi Data Pemesanan");
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/pesanan/")
      .then((response) => this.setPesanan(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalBiaya() {
      return this.pesanans.reduce(function (items, data) {
        return items + data.destinasis.biaya;

        // return items+data.destinasis.biaya*jumlah_pesanan; // Jika ingin menjumlahkan dengan quantitynya
      }, 0);
    },
  },
};
</script>

<style>
</style>