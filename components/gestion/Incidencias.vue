<template>
  <div class="my-10 mx-28 border p-4 rounded-md alto">
    <h2 class="text-xl font-semibold">Incidencias</h2>
    <div class="mt-10">
      <div v-for="incidencia in incidencias" :key="incidencia.id" class="w-1/2">
        <IncidenciasStatus :incidencia="incidencia" />
      </div>
    </div>
  </div>
</template>

<script>
import IncidenciasStatus from "@/components/gestion/IncidenciasStatus.vue";

export default {
  name: "Incidencias",
  components: {
    IncidenciasStatus
  },
  data() {
    return {
      incidencias: [
        {
          id: 1,
          tiempo: "4 hors ago",
          titulo: "+ 5 New Products were added",
          descripcion: "Congratulatuions",
          status: "sin iniciar"
        },
        {
          id: 2,
          tiempo: "4 hors ago",
          titulo: "+ 5 New Products were added",
          descripcion: "Congratulatuions",
          status: "en proceso"
        },
        {
          id: 3,
          tiempo: "4 hors ago",
          titulo: "+ 5 New Products were added",
          descripcion: "Congratulatuions",
          status: "finalizado"
        },
        {
          id: 4,
          tiempo: "4 hors ago",
          titulo: "+ 5 New Products were added",
          descripcion: "Congratulatuions",
          status: "en proceso"
        },
        {
          id: 5,
          tiempo: "4 hors ago",
          titulo: "+ 5 New Products were added",
          descripcion: "Congratulatuions",
          status: "sin iniciar"
        }
      ]
    };
  }
};
</script>

<style scoped>
.alto {
  max-height: 300px;
  overflow-y: scroll;
}
</style>
