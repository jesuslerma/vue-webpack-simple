<template>
  <ul>
    <li v-for='category in categories'>
      <category-li
        :name='category.name'
        :selected='category.selected'></category-li>
    </li>
  </ul>
</template>
<script >
  import CategoryLi from './CategoryLi.vue'

  export default {
    props: ['categories'],
    components: {
      categoryLi: CategoryLi
    }
  }
</script>