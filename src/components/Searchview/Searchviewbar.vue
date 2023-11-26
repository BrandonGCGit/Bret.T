<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import router from "@/router";
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
    console.log("JOBS",response.data)
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

async function getProfileId (id){
  let profile_id
  try {
    const response =  await axios.get(`http://localhost/demo-bret/public/api/profile_job_filter/${id}`);
    profile_id = response.data.data.profiles_id


    const responseProfileId =  await axios.get(`http://localhost/demo-bret/public/api/profile_filter/${profile_id}`);

    router.push(`/profile/${responseProfileId.data.data.users_id}`)

    console.log("id profile searcbar", response.data)

  } catch (error) {
    console.error("Error con a cargar lista de trabajos: ", error)
  }
}


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
                    <li onmouseover="this.style.cursor='grab'" @click="onClickSelectedJob(n.id)" >{{ n.categoryname }}</li>
                  </div>
                </ul>
              </div>
              <!-- DROPDOWN-->
              <div class="dropdown ">
                <button class="btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1"
                  data-bs-toggle="dropdown" aria-expanded="false"> Precio </button>
                <ul class="dropdown-menu date-work text-center " aria-labelledby="dropdownMenuButton1">
                  <li onmouseover="this.style.cursor='grab'" v-on:click="onClickCostJob(0, 1000)">₡0-1000</li>
                  <li onmouseover="this.style.cursor='grab'" v-on:click="onClickCostJob(1001, 5000)">₡1000-5000</li>
                  <li onmouseover="this.style.cursor='grab'" v-on:click="onClickCostJob(5001, 20000)">₡5000-20000</li>
                  <li onmouseover="this.style.cursor='grab'" v-on:click="onClickCostJob(20001, 9999999999999)">₡20000 o mas</li>
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
                <p class="amount-work"> ₡{{ n.cost }}/h</p>
                <button @click="getProfileId(n.id)" class="btn-contacto btn">Ver Perfil</button>
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