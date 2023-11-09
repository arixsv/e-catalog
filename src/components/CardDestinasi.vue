<template>
    <div class="card card-destinasi shadow mb-4">
      <img :src=" '..//assets/img/' + destinasi.banner" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ destinasi.nama }}</h5>
        <p class="card-text">
          {{ destinasi.deskripsi }}. <br>
          - Biaya : Rp. {{ destinasi.biaya }},- /rombongan
        </p>
        <router-link :to="'/destinasi/'+destinasi.id" class="btn btn-success float-end"><i class="bi bi-journal-bookmark-fill"></i> Pemesanan</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardDestinasi",
    props: ["destinasi"],
  };
  </script>
  
  <style>
  </style>