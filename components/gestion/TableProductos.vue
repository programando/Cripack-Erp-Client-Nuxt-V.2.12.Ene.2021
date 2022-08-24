<template>
  <div>
    <div class="ancho alto-maximo">
      <table class="border-t">
        <thead class="border table-sticky">
          <tr class="w-full bg-white text-azul ">
            <th class="w-10 text-xs border table-sticky py-1"></th>
            <th class="w-40 text-xs border table-sticky py-1">Alias Grupo</th>
            <th class="w-40 text-xs border table-sticky py-1">
              Nombre de Grupo
            </th>
          </tr>
        </thead>
        <tbody class="alto-table-2">
          <tr
            class=""
            v-for="producto in productos"
            :key="producto.id_grupo_estlo"
          >
            <td class="w-10 px-2 py-2 text-xs border text-azul cursor-pointer">
              <input class="cursor-pointer" type="checkbox" name="" id="" />
            </td>
            <td class="w-40 px-4 py-2 text-lowerxs text-left border">
              {{ producto.nom_group_estlo }}
            </td>
            <td class="w-40 px-4 py-2 text-lowerxs text-left border">
              {{ producto.alias_grup_estlo }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-2">
      <input class="ml-2" type="checkbox" name="" id="" />
      <label for="">Todos</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableProductos",

  data() {
    return {
      productos: [
        {
          id_grupo_estlo: 1,
          nom_group_estlo: "grupo 1",
          alias_grup_estlo: "producto 1"
        },
        {
          id_grupo_estlo: 2,
          nom_group_estlo: "grupo 2",
          alias_grup_estlo: "producto 2"
        },
        {
          id_grupo_estlo: 3,
          nom_group_estlo: "grupo 3",
          alias_grup_estlo: "producto 3"
        },
        {
          id_grupo_estlo: 4,
          nom_group_estlo: "grupo 4",
          alias_grup_estlo: "producto 4"
        },
        {
          id_grupo_estlo: 5,
          nom_group_estlo: "grupo 5",
          alias_grup_estlo: "producto 5"
        },
        {
          id_grupo_estlo: 6,
          nom_group_estlo: "grupo 6",
          alias_grup_estlo: "producto 6"
        },
        {
          id_grupo_estlo: 7,
          nom_group_estlo: "grupo 7",
          alias_grup_estlo: "producto 7"
        },
        {
          id_grupo_estlo: 8,
          nom_group_estlo: "grupo 8",
          alias_grup_estlo: "producto 8"
        },
        {
          id_grupo_estlo: 8,
          nom_group_estlo: "grupo 8",
          alias_grup_estlo: "producto 8"
        },
        {
          id_grupo_estlo: 8,
          nom_group_estlo: "grupo 8",
          alias_grup_estlo: "producto 8"
        }
      ]
    };
  }
};
</script>

<style scoped>
.acho {
  min-width: 400px;
}

.alto-maximo {
  max-height: 300px;
  overflow-y: scroll;
}

.table-sticky {
  position: sticky;
  top: 0;
  background: white;
}
</style>
