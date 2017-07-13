<template>
  <div id="app">
    Mostrar Categorias en Tabla 
    <input type="checkbox" 
      @click="changeShowTable">
    <categories-ul :categories='categories'></categories-ul>
  </div>
</template>

<script>
import CategoriesUl from './components/CategoriesUl.vue'
var categories = [
  { name: 'clothing', selected: false }
]

export default {
  name: 'app',
  data () {
    return {
      showTable: false,
      categories
    }
  },
  methods: {
    changeShowTable() {
      this.showTable = !this.showTable
    }
  },
  components: {
    categoriesUl: CategoriesUl
  }
}
</script>