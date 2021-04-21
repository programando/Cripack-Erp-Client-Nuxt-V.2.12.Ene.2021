<template>
  <div class="text-sm">
    <div class="flex justify-between my-2">
      <h3 class="mt-4">
        Mostrando registros del 1 al 10 de un total de 150 registros
      </h3>
      <input class="px-2 border focus:outline-none" type="text" />
    </div>
    
      <ve-table :columns="columns" :table-data="tableData" />
      <div class="table-pagination">
        <ve-pagination
          :total="totalCount"
          :page-index="pageIndex"
          :page-size="pageSize"
          @on-page-number-change="pageNumberChange"
          @on-page-size-change="pageSizeChange"
        />
      </div>
    
  </div>
</template>


<script>
// Simulation table data from database
let DB_DATA = [];

export default {
  data() {
    return {
      // page index
      pageIndex: 1,
      // page size
      pageSize: 8,
      columns: [
        {
          field: "",
          key: "a",
          title: "#OT",
          align: "center",
          width: 20,
          renderBodyCell: ({ row, column, rowIndex }, h) => {
            return (this.pageIndex - 1) * this.pageSize + rowIndex + 1;
          }
        },
        {
          field: "solicitud",
          key: "b",
          title: "Solicitud",
          align: "center",
          width: 150
        },
        {
          field: "terminada",
          key: "c",
          title: "Terminada",
          align: "left",
          width: 150
        },
        {
          field: "referencia",
          key: "d",
          title: "Referencia",
          align: "left",
          width: 300
        },
        {
          field: "estilo",
          key: "e",
          title: "Estilo",
          align: "left",
          width: 200
        },
        {
          field: "cantidad",
          key: "f",
          title: "Cantidad",
          align: "left",
          width: 20
        },
        {
          field: "cabidad",
          key: "g",
          title: "Cabidad",
          align: "left",
          width: 20
        },
        {
          field: "estado",
          key: "h",
          title: "Estado",
          align: "left",
          width: 100
        },
        {
          field: "factura",
          key: "i",
          title: "#Factura",
          align: "left",
          width: 100
        },
        {
          field: "remision",
          key: "j",
          title: "#Remision",
          align: "left",
          width: 100
        },
        { field: "guia", key: "k", title: "#Guia", align: "left", width: 100 },
        {
          field: "fecha",
          key: "l",
          title: "Fecha entrega",
          align: "left",
          width: 100
        }
      ]
    };
  },
  computed: {
    // table data
    tableData() {
      const { pageIndex, pageSize } = this;
      return DB_DATA.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
    },
    // total count
    totalCount() {
      return DB_DATA.length;
    }
  },
  methods: {
    // page number change
    pageNumberChange(pageIndex) {
      this.pageIndex = pageIndex;
    },

    // page size change
    pageSizeChange(pageSize) {
      this.pageIndex = 1;
      this.pageSize = pageSize;
    },

    // Simulation table data
    initDatabase() {
      DB_DATA = [];
      for (let i = 0; i < 100; i++) {
        DB_DATA.push({
          solicitud: `14-Apr-20${i}1`,
          terminada: `14-Apr-20${i}1`,
          referencia: `(P) TQ #252 PRODUCTORA DE PLAGUICIDAS COD 3449238${i}`,
          estilo: `TROQUEL PLANO - NUEVO ${i}`,
          cantidad: 1,
          cabidad: 2,
          estado: "En proceso",
          factura: "N/A",
          remision: "",
          guia: "",
          fecha: `14-Apr-20${i}1`
        });
      }
    }
  },
  created() {
    this.initDatabase();
  }
};
</script>

<style>
.table-pagination {
  margin-top: 20px;
  text-align: right;
}
</style>