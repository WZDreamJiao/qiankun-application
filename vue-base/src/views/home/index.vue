<template>
  <div class = "box" style="height: 100%">
    <el-row style="height: 100%">
      <el-col :span="3" style="height: 100%">
        <el-menu
            style="height: 100%"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse">
          <el-menu-item
              v-for="(item,index) in navMenuArr"
              :index="index.toString()"
              :key="index"
              @click="handleApp(item)">
            <i class="el-icon-location"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21" style="height: 100%">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <div id="container"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import navMenuArr from "@/qiankun/index"
import { start } from 'qiankun';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data(){
    return {
      navMenuArr,
      isCollapse: true,
    }
  },
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
  methods:{
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleApp(item){
      console.log(123)
      this.$router.push({path:`${item.activeRule}`})
    },

  }
}
</script>

<style scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

</style>
