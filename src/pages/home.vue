<template>
  <div id="home">
    <MultiSelect/>
  </div>
</template>

<script>
import MultiSelect from '@/components/core/MultiSelect'

export default  {
  data() {
    return {
    }      
  },
    name: 'home',
    components: {   
      MultiSelect
    }
}
</script>

<style scoped lang="scss">
  @import "@/css/main.scss"
</style>
