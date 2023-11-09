<template>
    <div class="berhasil-checkout">
        <Navbar />
        
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col text-center">
                    <img src="../assets/img/waiting.png" width="300">
                    <h2><strong>Berhasil!</strong></h2>
                    <h4>Pemesanan anda segera kami proses. <br> Terima kasih telah memesan ditempat kami.</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    name: "BerhasilCheckout",
    components: {
        Navbar,
    },
};
</script>

<style>

</style>