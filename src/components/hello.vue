<template>
  <div>
    <h1>{{ id }}</h1>
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        id: this.$route.params.id
      }
    }
  }
</script>

<style lang="css" scoped>
  
</style>