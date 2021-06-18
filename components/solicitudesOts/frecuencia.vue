<template>
  <div :class="width">
      <VueSelect :data="sustratos" v-model="itemSelected" v-on:valueSelect="onValueSelect"> </VueSelect>
  </div>
</template>

<script>
  import VueSelect from "@/components/htmlControls/select.vue"
  import Sustratos from "@/models/SolicitudesOts.js";
  export default {
    name:'SolitiducOtFrecuencia'  ,
    props: [ 'width' ],
    components: { VueSelect  },
    data() {
      return  {
          dataInicial :[],
          sustratos: [],
          itemSelected: 'Seleccione una opción...',
          idItemSelected:0,
      }
    },

  methods: {
    onValueSelect(value) {
      this.itemSelected   = value ;
      this.idItemSelected = this.dataInicial.filter(function (item) {
          return item.nom_sustrato === value;
      });
     this.$emit('input', this.idItemSelected[0]['id_sustrato']);
    },
    getAloneArray ( Data) {
      return Data.map( row => row.nom_sustrato );
    }
  },

    mounted() {
          Sustratos.getSustratos() 
          .then( response => {
              this.dataInicial = response.data;
              this.sustratos   = this.getAloneArray( response.data );
          })
    },

  }
</script>