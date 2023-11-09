<template>
  <div class="home">
    <!-- Desktop View -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Tempat-tempat Wisata,</strong><br />
                yang sangat menarik.
              </h2>
              <p>Pastikan tujuan anda sangat berkesan.</p>
              <router-link class="btn btn-lg btn-success" to="/katalog"
                >Jelajahi <i class="bi bi-arrow-right"></i></router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <img src="../assets/img/dashboard.png" style="width: 100%" />
        </div>
      </div>
    </div>

    <!-- Mobile View -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6">
          <img src="../assets/img/dashboard.png" style="width: 100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Tempat-tempat Wisata,</strong><br />
                yang sangat menarik.
              </h2>
              <p>Pastikan tujuan anda sangat berkesan.</p>
              <router-link class="btn btn-lg btn-success" to="/katalog"
                >Jelajahi <i class="bi bi-arrow-right"></i></router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
};
</script>

<style>
</style>