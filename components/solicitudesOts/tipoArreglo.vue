<template>
  <div>
 
  </div>
</template>

<script>
  
  import TiposArreglo from "@/models/SolicitudesOts";
  export default {
    name:'SolitiducOtTipoArreglo'  ,
    props: [ 'width' ],
    components: {   },
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
