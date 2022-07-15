<template>
  <div class="">
    <label class="mr-4" for="">Buscar Cliente</label>
    <input type="text"  v-model="nuevoCliente" @input="filterResults(nuevoCliente)"   class="border focus:outline-none px-4 rounded-lg" placeholder="codigo, nombre o alias">
    <div class="mt-10">
      <ul>
        <li v-for="cliente in filtrado" :key="cliente.id">
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
      filtrado: [],
    }
  },

  methods: {
        filterResults ( ) {
           this.filtrado = this.clientes.filter(e => e.name.toLowerCase().startsWith(this.nuevoCliente.toLowerCase()));
        }

  

  }
}
</script>

<style>

</style>