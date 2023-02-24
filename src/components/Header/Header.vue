<template>
    <el-row :gutter="20" style=" border-bottom: 1px solid var(--el-border-color);">
        <el-col :span="4" class="logo">
            <img src="@/assets/img/logo/logo.png" alt="蓝图小屋" style="height: 100%;width: 100%;" />
        </el-col>
        <el-col :span="16" class="menu">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" router
                @select="handleSelect">

                <div class="flex-grow" />
                <el-menu-item index="/home">首页</el-menu-item>
                <el-menu-item index="/community">社区</el-menu-item>
                <el-sub-menu index="2">
                    <template #title>异星工厂</template>
                    <el-menu-item index="/mods">异星工厂模组</el-menu-item>
                    <el-menu-item index="/blueprint">异星工场蓝图</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </el-col>

        <el-col :span="4">
            <el-row :gutter="20" style="height: 100%;">
                <el-col :span="5">
                    <el-icon style="font-size: 15px;margin-top: 20px; margin-left: 15px;" ><User  @click="centerDialogVisible = true" /></el-icon>
                </el-col >
                <el-col :span="5">
                    <el-icon  style="font-size: 15px;margin-top: 20px;"><Search /></el-icon>
                </el-col>
                <el-col :span="14" style="display: flex;align-items: center;">
                    <el-button-group class="ml-4" >
                            <el-button type="primary" :icon="Edit"  >发帖11</el-button>
                            
                    </el-button-group>
                </el-col>

            </el-row>
        </el-col>
    </el-row>
    <el-dialog v-model="centerDialogVisible" title="登录" width="30%" center>
    <Login/>
  </el-dialog>
</template>


<script lang="ts" setup>
import { ElCol, ElRow, ElMenuItem, ElSubMenu,ElIcon,ElPopover } from 'element-plus';
import 'element-plus/theme-chalk/display.css'
import { ref } from 'vue'
import { User,Search,Edit } from '@element-plus/icons-vue';
import Login from '@/components/Login/Login.vue'


const centerDialogVisible = ref(false)
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style>
.el-menu {
    border-bottom: 0px solid var(--el-border-color);
}

.ml-4{
    display: flex;
    align-items: center;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>



