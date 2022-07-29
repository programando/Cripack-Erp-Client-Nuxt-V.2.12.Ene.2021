<template>
  <div class="relative px-10">
    <label class="mr-4" for="">Buscar Cliente</label>
    <input type="text"  v-model="nuevoCliente" class="border focus:outline-none px-4 rounded-lg" placeholder="codigo, nombre o alias">
    <div class="mt-10 absolute top-4 bg-gray-100 border z-50  rounded">
      <ul>
        <li class="px-10 py-2" v-for="cliente in filterResults" :key="cliente.id">
          Codigo: {{ cliente.codigo }} - Nombre: {{ cliente.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FiltroClientes',
  data() {
    return {
      clientes: [
        {id: 1, codigo: 2345, name: 'Esteban Contreras'},
        {id: 2, codigo: 3245, name: 'Luis Nieto'},
        {id: 3, codigo: 4245, name: 'Omar Gonzalez'},
        {id: 4, codigo: 5245, name: 'Alberto Perez'}
      ] ,

      nuevoCliente: '',
    }
  },

  computed: {
        filterResults () {
            if (this.nuevoCliente != '') {
              return this.clientes.filter(e => e.name.toLowerCase().startsWith(this.nuevoCliente.toLowerCase()));
            } else {
              return []
            }            

        } 
  },

}
</script>

<style>

</style>