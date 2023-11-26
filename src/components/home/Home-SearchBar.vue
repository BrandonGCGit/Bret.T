<script setup>

</script>

<template>
  <!--Search Bar Start-->
  <div class="col-12 p-0 m-0">
    <div class="d-flex align-items-center bg-container-search pb-5">
      <div class="col-10 container-fluid">
        <div class=" row justify-content-center align-items-center">
          <h1 class="my-4 title-font text-center">¿Ofreces servicios o estás buscando contratar servicios en Costa Rica?
          </h1>
          <div class="col-md-10">
            <p class="my-5 text-center subtitle-font">Explore nuestra selección de servicios y
              encuentre
              exactamente lo que necesita para sus proyectos. Nuestra búsqueda avanzada le permite
              filtrar por
              categoría, ubicación, experiencia, etc.</p>

<!--              <input type="text" class="form-control search_bar-font"-->
<!--                     placeholder="&#xf002;   Busca cualquier sevicio...">-->
<!--              &lt;!&ndash;<button class="btn btn-primary font-weight-bold search_btn-font">Buscar</button>&ndash;&gt;-->
              <!--<a href="" class="btn btn-primary font-weight-bold search_btn-font d-flex align-content-center justify-content-center" >Buscar</a>-->
              <RouterLink
                class="fs-3 btn btn-primary font-weight-bold search_btn-font d-flex align-content-center justify-content-center" to="search" >Ver Trabajos
              </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Search Bar End-->
</template>

<style scoped>

</style>