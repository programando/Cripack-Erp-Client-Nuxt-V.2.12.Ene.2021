<template>
  <div :class="width">
      <VueSelect :data="Tirajes" v-model="itemSelected" v-on:valueSelect="onValueSelect"> </VueSelect>
  </div>
</template>

<script>
  import VueSelect from "@/components/htmlControls/select.vue"
  import Tirajes from "@/models/SolicitudesOts.js";
  export default {
    name:'SolitiducOtTiraje'  ,
    props: [ 'width' ],
    components: { VueSelect  },
    data() {
      return  {
          dataInicial :[],
          Tirajes: [],
          itemSelected: 'Seleccione una opción...',
          idItemSelected:0,
      }
    },

  methods: {
    onValueSelect(value) {
      this.itemSelected   = value ;
      this.idItemSelected = this.dataInicial.filter(function (item) {
          return item.nom_tiraje === value;
      });
     this.$emit('input', this.idItemSelected[0]['id_tiraje']);
    },
    getAloneArray ( Data) {
      return Data.map( row => row.nom_tiraje );
    }
  },

    mounted() {
          Tirajes.getTirajes() 
          .then( response => {
              this.dataInicial = response.data;
              this.Tirajes   = this.getAloneArray( response.data );
          })
    },

  }
</script>