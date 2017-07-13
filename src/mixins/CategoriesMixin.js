const axios = require('axios')

module.exports = { 
  listMixin: {
    data() {
      return {
        categories: []
      }
    },
    methods: {
      selectCategory (category) {
        category.selected = !category.selected
        this.$emit('selectcategory', category)
      }
    },
    mounted: function () {
      var url = 'https://raw.githubusercontent.com/jesuslerma/vuejs101-guide/master/categories.json'
      var that = this

      axios.get(url).then(function (response) {
        that.categories = response.data
      })
    }
  }
}