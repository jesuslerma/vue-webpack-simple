<template>
  <div id="app">
    Mostrar Categorias en Tabla 
    <input type="checkbox" 
      @click="changeShowTable">
    <component 
      :is='currentCategoryView'>
    </component>
  </div>
</template>

<script>
import CategoriesUl from './components/CategoriesUl.vue'
import CategoriesTable from './components/CategoriesTable.vue'

export default {
  name: 'app',
  data () {
    return {
      showTable: false
    }
  },
  computed: {
    currentCategoryView () {
      return this.showTable ? 'categoriesTable' : 'categoriesUl'
    }
  },
  methods: {
    changeShowTable() {
      this.showTable = !this.showTable
    }
  },

  components: {
    categoriesUl: CategoriesUl,
    categoriesTable: CategoriesTable
  }
}
</script>