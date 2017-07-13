module.exports = { 
  listMixin: {
    props: ['categories'],
    methods: {
      selectCategory: function (category) {
        this.$emit('selectcategory', category)
      }
    }
  }
}