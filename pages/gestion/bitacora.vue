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
          v-model="buscarUsuario"
        />
      </form>
    </div>
    <div class="container flex justify-center p-6 mx-auto">
      <div class="w-5/6 border ">
        <table class="w-full">
          <thead class="w-full">
            <tr>
              <th class="w-4/12 px-4 text-lg text-left">Nombre</th>
              <th class="w-7/12 text-lg text-left">Observación</th>
              <th class="w-1/12"></th>
            </tr>
          </thead>
          <tbody class="w-full">
            <tr v-for="usuario in usuarioFiltrado" :key="usuario.idarchivo" class="border">
              <td class="w-4/12 px-4 py-1 text-sm">{{ usuario.nomarchivo }}</td>
              <td class="w-7/12 py-1 text-sm">{{ usuario.observacion }}</td>
              <td class="w-1/12 cursor-pointer"><img class="w-8 lg:ml-14 xl:ml-16" src="/images/pdf.svg" alt="" @click = "pdfView ( usuario.file_key)" > </td>
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
      usuarios: [
        {
          idarchivo: 0,
          nomarchivo: '',
          observacion: '',
          palabrasclave :'',
        },
         
      ],
      buscarUsuario:'',
    };
  },
  
  mounted() {
        this.getDocuments () ;
  },

  computed: {
    //  la busqueda se hace en el campo  "palabrasclave"
    usuarioFiltrado() {
      return this.usuarios.filter(usuario => {
        let nameUp = this.buscarUsuario.toUpperCase()
        return usuario.nomarchivo.includes(nameUp)
      })
    } 
  },

  methods: {
      getDocuments () {
          Documentacion.getDocuments ()
          .then ( response => {           
              this.usuarios = response.data;
          })
      },
    pdfView ( pdfFile ) {
       window.open(address.apiUrl+'documentacion/download/file?pdfFile=' + pdfFile, '_blank');
    }
  },
  
};
</script>
