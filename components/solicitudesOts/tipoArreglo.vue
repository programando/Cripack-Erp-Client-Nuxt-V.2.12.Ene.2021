<template>
  <div>
    <v-select :class="width"
      label="nom_tp_arreglo"
       class   = "style-chooser"
       :options  = "tiposArreglo"
       :reduce   = "tipoArreglo => tipoArreglo.nom_tp_arreglo"

    > </v-select>
  </div>
</template>

<script>
  import vSelect from "vue-select";
  import TiposArreglo from "@/models/SolicitudesOts";
  export default {
    name:'SolitiducOtTipoArreglo'  ,
    props: [ 'width' ],
    components: { vSelect },
    data() {
      return  {
          tiposArreglo: [],
      }
    },

    mounted() {
          TiposArreglo.getTiposArreglo() 
          .then( response => {
                this.tiposArreglo = response.data;
          })
    }

  }
</script>

<style>
    .style-chooser .vs__search::placeholder,
    .style-chooser .vs__dropdown-toggle,
    .style-chooser .vs__dropdown-menu {
      background: white;
      border: none;
      color: #394066;
      text-transform: lowercase;
    }

    .style-chooser .vs__clear,
    .style-chooser .vs__open-indicator {
      fill: #394066;
    }
    .vs__selected-options {
      height: 20px;
    }
    .vue-dropzon {
      height: 20px;
    }
    .wn-menu-content-list .v-select-select {
      border: none;
    }
    .vs__selected {
      font-size: 14px;
    }
    .vs__selected-options{
      display: block !important;
    }
</style>
