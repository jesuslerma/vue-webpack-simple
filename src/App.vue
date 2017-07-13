<template>
  <div id="app">
    Mostrar Categorias en Tabla 
    <input type="checkbox" 
      @click="changeShowTable">
    <component 
      :is='currentCategoryView'
      @selectcategory='onSelectCategory'
      :categories='categories'>
    </component>
  </div>
</template>

<script>
import CategoriesUl from './components/CategoriesUl.vue'
import CategoriesTable from './components/CategoriesTable.vue'
import axios from 'axios'


export default {
  name: 'app',
  data () {
    return {
      showTable: false,
      categories: []
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
    },
     onSelectCategory (category) {
      category.selected = !category.selected
    }
  },

  mounted: function () {
    var url = 'https://raw.githubusercontent.com/jesuslerma/vuejs101-guide/master/categories.json'
    var that = this

    axios.get(url).then(function (response) {
      that.categories = response.data
    })
  },

  components: {
    categoriesUl: CategoriesUl,
    categoriesTable: CategoriesTable
  }
}
</script>