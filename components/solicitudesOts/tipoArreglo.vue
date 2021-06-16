<template>
  <div  class="w-40 ">
 
      <VueSelect :data="tiposArreglo" v-model="selectedWrestler" v-on:valueSelect="onValueSelect">
         
      </VueSelect>
    
  </div>
</template>

<script>
  import VueSelect from "@/components/library/Select.vue"
  import TiposArreglo from "@/models/SolicitudesOts";
  export default {
    name:'SolitiducOtTipoArreglo'  ,
    props: [ 'width' ],
    components: { VueSelect  },
    data() {
      return  {
          tiposArreglo: [],
               selectedWrestler: 'Hulk Hogan',
      wrestlers: [
        'Stone Cold Steve Austin',
        'Bret Hart',
        'Ric Flair',
        'Macho Man Randy Savage',
        'Jake The Snake Roberts',
        'The Undertaker',
        'Hulk Hogan',
        'Rikishi',
        'John Cena',
        'Shawn Michaels',
        'British Bulldog',
        'Superfly Jimmy Snuka',
        'The Ultimate Warrior',
        'Andre The Giant',
        'Doink The Clown',
      ]
      }
    },

  methods: {
    onValueSelect(value) {
      this.selectedWrestler = value;
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
