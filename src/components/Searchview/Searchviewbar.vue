<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
const listCategories = ref([])
const listJobs = ref([])

const getListCategories = async () => {
  try {
    const response = await axios.get("http://localhost/demo-bret/public/api/category/all");
    listCategories.value = response.data.data.map(item => ({
      id: item.id,
      categoryname: item.nameCategory,
      image: '/src/assets/img/' + item.image
    }));
  } catch (error) {
    console.error("Error con a cargar lista categorias: ", error)
  }
};


//AXIOSJOBS
const getListJobs = async () => {
  try {
    const response = await axios.get("http://localhost/demo-bret/public/api/job/all");
    listJobs.value = response.data.data.map(item => ({
      id: item.id,
      nameJob: item.nameJob,
      cost: item.cost,
      description: item.description
    }));
  } catch (error) {
    console.error("Error con a cargar lista de trabajos: ", error)
  }
};
//AXIOSJOBS

//AXIOSJOBSELECTED

//AXIOSJOBSELECTED
onMounted(async () => {
  try {
    await getListCategories(), getListJobs()
  }
  catch (error) {
    console.log("Error con getListCategories", error)
  }
});
async function onClickSelectedJob(id) {
  listJobs.value = [];
  try {
    const response = await axios.get("http://localhost/demo-bret/public/api/jobfilter/" + id);
    listJobs.value = response.data.data.map(item => ({
      id: item.id,
      nameJob: item.nameJob,
      cost: item.cost,
      description: item.description
    }));
  } catch (error) {
    console.error("Error con a cargar lista de trabajos: ", error)
  }
};


async function onClickCostJob(costMin, costMax) {
  listJobs.value = [];
  try {
    const response = await axios.get("http://localhost/demo-bret/public/api/jobfilter/" + costMin + "/" + costMax);
    listJobs.value = response.data.data.map(item => ({
      id: item.id,
      nameJob: item.nameJob,
      cost: item.cost,
      description: item.description
    }));
  } catch (error) {
    console.error("Error con a cargar lista de trabajos: ", error)
  }
};

async function onClickSearchJob(letter) {
  listJobs.value = [];
  try {
    const response = await axios.get("http://localhost/demo-bret/public/api/jobfilterName/" + letter);
    listJobs.value = response.data.data.map(item => ({
      id: item.id,
      nameJob: item.nameJob,
      cost: item.cost,
      description: item.description
    }));
  } catch (error) {
    console.error("Error con a cargar lista de trabajos: ", error)
  }
};



</script>

<template>
  <!--Search Bar Start-->
  <div class="col-12 p-0 m-0">
    <div class="d-flex align-items-center bg-container-search py-5">
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

            <!-- SEARCHBAR-->
            <div class="search">
              <form v-on:submit.prevent="onClickSearchJob(letter)">
                <input v-model="letter" type="text" class="form-control search_bar-font"
                  placeholder="&#xf002; Busca cualquier servicio...">
                <button type="submit"
                  class="btn btn-primary font-weight-bold search_btn-font d-flex align-content-center justify-content-center ">Buscar</button>
              </form>

            </div>
            <!-- SEARCHBAR-->

            <!-- DROPDOWN-->
            <div class="d-flex justify-content-around p-3 ">
              <div class="dropdown ">
                <button class="btn-dropdown dropdown-toggle " type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false">Categorias </button>
                <ul class="dropdown-menu date-work text-center " aria-labelledby="dropdownMenuButton1">
                  <div v-for="n in listCategories">
                    <li @click="onClickSelectedJob(n.id)" >{{ n.categoryname }}</li>
                  </div>
                </ul>
              </div>

              <!-- DROPDOWN-->
              <div class="dropdown ">
                <button class="btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false"> Precio </button>
                <ul class="dropdown-menu date-work text-center " aria-labelledby="dropdownMenuButton1">
                  <li  v-on:click="onClickCostJob(0, 500)">0-500</li>
                  <li v-on:click="onClickCostJob(501, 1000)">501-1000</li>
                  <li v-on:click="onClickCostJob(1001, 10000)">1001-10000</li>
                  <li v-on:click="onClickCostJob(10001, 50000)">10001+</li>
                </ul>
              </div>
            </div>
            <!-- DROPDOWN-->
           


          </div>
        </div>
      </div>
    </div>
    <!-- CARDS-->

    <!-- CARDS-->

    <div class="col-12 p-0 m-0">
      <p class="text-center pt-5 about-title">Trabajos disponibles</p>
      <div class=" py-4">
        <div class="col-10 container-fluid">
          <div class="row justify-content-center align-items-center text-center">

            <div v-for="n in listJobs" class="card m-2 " style="width: 18rem;">
              <div class="card-body ">
                <h5 class="title-work">{{ n.nameJob }}</h5>
                <p class="description-work2">{{ n.description }}</p>
                <p class="amount-work">{{ n.cost }}/h</p>
                <a href="#" class="btn-contacto btn">Enviar mensaje</a>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>



  </div>
  <!--Search Bar End-->
</template>

<style scoped></style>