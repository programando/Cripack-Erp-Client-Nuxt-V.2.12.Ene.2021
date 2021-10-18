<template>
  <div class="pt-24 mx-2 font-Montserrat">
    <div class="flex items-center justify-center mx-auto mt-10">
      <h2 class="text-2xl font-semibold text-azul">
        Documentos de consulta
      </h2>
    </div>
    <div class="container p-6 mx-auto">
      <form class="flex justify-center space-x-4">
        <label class="py-2 text-lg font-semibold">Buscar : </label>
        <input
          type="text"
          class="w-64 px-4 py-2 border rounded focus:outline-none"
          v-model="buscarArchivo"
        />
      </form>
    </div>
    <div class="container flex justify-center p-6 mx-auto">
      <div class="w-5/6 border ">
        <table class="w-full">
          <thead class="w-full">
            <tr>
              <th class="w-4/12 px-4 text-lg text-left">Nombre</th>
              <th class="w-7/12 text-lg text-left">Tipo de documento</th>
              <th class="w-1/12"></th>
            </tr>
          </thead>
          <tbody class="w-full">
            <tr v-for="documento in documentoFiltrado" :key="documento.idarchivo" class="border">
              <td class="w-4/12 px-4 py-1 text-sm">{{ documento.nomarchivo | Capitalize }}</td>
              <td class="w-7/12 py-1 text-sm">{{ documento.observacion | Capitalize}}</td>
              <td class="w-1/12 cursor-pointer"><img class="w-8 h-5 lg:ml-14 xl:ml-14" src="/images/pdf.svg" alt="" @click = "pdfView ( documento.file_key)" > </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import Documentacion from '@/models/Documentos';
  import { address } from '@/config/address';
export default {
  
  name: "Bitacora",
  data() {
    return {
      archivos: [
        {
          idarchivo: 3,
          idcategoria: 1,
          nomarchivo: "ajustes picos.pdf",
          extension: "",
          observacion: "ajustar calibracion de la dimensión de los picos en la Hugo",
          palabrasclave: "HUGO AJUSTE CALIBRACION PICOS",
        },
        {
        idarchivo: 15,
        idcategoria: 1,
        nomarchivo: "calibracion origen.pdf",
        extension: "",
        observacion: "calibración origen dobladora hidraúlica",
        palabrasclave: "PERDIDA CALIBRACION ORIGEN HIDRAULICA",
        restringido: false,
        ruta: "",
        file_key: "5714wojx130921070509.PDF",
        fcha_rgstro: "2021-09-01 15:51:53",
        cnslta_web: 1
      },
      {
        idarchivo: 32,
        idcategoria: 2,
        nomarchivo: "en acanaladora.pdf",
        extension: "",
        observacion: "instrucciones para el envio de acanalados a maquina acanaladora",
        palabrasclave: "ACANALADORA ENVIO DATOS INFORMACION",
        restringido: false,
        ruta: "",
        file_key: "5714xpsa130921070557.PDF",
        fcha_rgstro: "2021-09-01 15:51:53",
        cnslta_web: 1
    },
         
      ],
      buscarArchivo:'',
    };
  },
  
  mounted() {
        this.getDocuments () ;
  },

  computed: {
    //  la busqueda se hace en el campo  "palabrasclave"
    documentoFiltrado() {
      return this.archivos.filter(documento => {
        let nameUp = this.buscarArchivo.toUpperCase()
        return documento.palabrasclave.includes(nameUp)
      })
    } 
  },

  methods: {
      getDocuments () {
          Documentacion.getDocuments ()
          .then ( response => {           
               this.archivos = response.data;
          })
      },
    pdfView ( pdfFile ) {
       window.open(address.apiUrl+'documentacion/download/file?pdfFile=' + pdfFile, '_blank');
    }
  },
  
};
</script>
