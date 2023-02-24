<template>
    <div class="common-layout">
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main >
          <RouterView />
        </el-main>
      </el-container>
    </div>
  </template>
  
  
  <script lang="ts" setup>
      import { ElHeader,ElMain,ElContainer } from 'element-plus';
      import Header from '@/components/Header/Header.vue'
  </script>
  
  <style>
  html,body{
    width: 100%;
    height: 100%;
  }
  .el-header{
    height: 10%;
  }
  </style>