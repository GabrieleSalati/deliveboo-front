<script>
export default {
  data() {
    return {
      title: "Slider",
    };
  },
};
</script>

<template>
  <div class="container">
    <h1 class="text-center">
      Perché dovresti scegliere <span>DeliveBoo?</span>
    </h1>
    <div id="carousel" class="carousel slide my-5">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../../assets/4.png"
            class="d-block w-100"
            alt="immagine slider"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/3.png"
            class="d-block w-100"
            alt="immagine slider"
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../assets/5.png"
            class="d-block w-100"
            alt="immagine slider"
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1:hover span {
  /* Stili al passaggio del mouse sull'h1 */
  font-weight: 900;
  color: #bd2222;

  /* Transizione */
  transition: font-weight 0.3s ease, color 0.3s ease;
}
</style>
