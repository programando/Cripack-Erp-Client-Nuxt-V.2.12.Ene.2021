<template>
  <div :class="width">
      <VueSelect :data="Maquinas" v-model="itemSelected" v-on:valueSelect="onValueSelect"> </VueSelect>
  </div>
</template>

<script>
  import VueSelect from "@/components/htmlControls/select.vue"
  import Maquinas from "@/models/SolicitudesOts.js";
  export default {
    name:'SolitiducOtMaquina'  ,
    props: [ 'width' ],
    components: { VueSelect  },
    data() {
      return  {
          dataInicial :[],
          Maquinas: [],
          itemSelected: 'Seleccione una opción...',
          idItemSelected:0,
      }
    },

  methods: {
    onValueSelect(value) {
      this.itemSelected   = value ;
      this.idItemSelected = this.dataInicial.filter(function (item) {
          return item.nom_maquina === value;
      });
     this.$emit('input', this.idItemSelected[0]['id_maquina']);
    },
    getAloneArray ( Data) {
      return Data.map( row => row.nom_maquina );
    }
  },

    mounted() {
          Maquinas.getMaquinas() 
          .then( response => {
              this.dataInicial = response.data;
              this.Maquinas   = this.getAloneArray( response.data );
          })
    },

  }
</script>