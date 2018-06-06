<template>
    <div>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success" @click="test">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <test-props></test-props>
    </div>
</template>
<script>

import testProps from '../components/test'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'testvuex',
      'testData'
    ])
  },
  components: {
    testProps
  },
  methods: {
    ...mapActions([
      'searchMoive'
    ]),
    test () {
      this.$store.commit('TESTACTIONS', 'hellow vuex');
      this.$router.push('/aboutUs')
    }
  },
  mounted () {
    this.searchMoive({tag: '日本动漫'}).then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang="less" scoped>
.newsData{
  width: 100%;
  height: 400px;
  background: #eee;
}
</style>
