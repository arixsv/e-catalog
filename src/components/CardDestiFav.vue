<template>
  <div class="card card-destinasi shadow mb-4">
    <img :src="require(`../assets/img/${favorit.banner}`)" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title fw-bold">{{ favorit.nama }}</h5>
      <p class="card-text">
        {{ favorit.deskripsi }}. <br>
        - Biaya : Rp. {{ favorit.biaya }},- /rombongan
      </p>
      <!-- <a href="#" class="btn btn-success float-end">Pemesanan</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CardDestiFav",
  props: ["favorit"],
};
</script>

<style>
</style>