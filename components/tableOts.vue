<template>
<div class="size font-latos max-h-3.5">
  <ve-table class="text-xs" :columns="columns" :table-data="tableData"  />
  
  
</div>
  
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          { field: "Ots", key: "a", title: "# OT", align: "left", width:"6%" },
          { field: "solicitud", key: "b", title: "Solicitud", align: "left", width:"10%" },
          { field: "terminada", key: "c", title: "Terminanda", align: "left", width:"10%" },
          { field: "referencia", key: "d", title: "Referencia", align: "left" ,width:"30%"},
          { field: "estilo", key: "e", title: "Estilo", align: "left", width:"20%" },
          { field: "cantidad", key: "f", title: "Cantidad", align: "left", width:"6%" },
          { field: "cabidad", key: "g", title: "Cabidad", align: "left", width:"6%" },
          { field: "estado", key: "h", title: "Estado", align: "left", width:"10%" },
          { field: "factura", key: "i", title: "#Factura", align: "left", width:"10%" },
          { field: "remision", key: "j", title: "#Remisión", align: "left", width:"10%" },
          { field: "guia", key: "k", title: "Guia", align: "left", width:"10%" },
          { field: "fecha", key: "l", title: "Fecha Entrega", align: "left", width:"10%" },
        ],
        tableData: [
          {
            Ots: "80993",
            solicitud: "14-Apr-2021",
            terminada: "",
            referencia: "3944x2",
            estilo: "TROQUEL PLANO ARREGLO",
            cantidad: "1",
            cabidad: "2",
            estado: "En Proceso",
            factura: "N/A",
            remision: "",
            guia: "",
            fecha: ""
          },
          {
            Ots: "80993",
            solicitud: "14-Apr-2021",
            terminada: "",
            referencia: "(P) TQ #252 PRODUCTORA DE PLAGUICIDAS COD 3449238",
            estilo: "PLANO PREALISTAMIEN - NUEVO",
            cantidad: "1",
            cabidad: "2",
            estado: "En Proceso",
            factura: "N/A",
            remision: "",
            guia: "",
            fecha: ""
          },
          
          
        ],
      };
    },
  };
</script>
<style scoped>
 .size {
   font-size: 10px;
 }
</style>