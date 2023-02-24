import { Chicken } from '@element-plus/icons-vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',redirect:'/home',
      name:"layout",
      component:()=>import('@/views/LayoutPage/LayoutPage.vue'),
      children:[
        {
          path:'/home' ,
          name:'home',
          component:()=>import('@/views/HomePage/Home.vue')

        },
        {
          path:'/community',
          name:'community',
          component:()=>import('@/views/CommunityPage/Community.vue')
        },
        {
          path:'/bluePrint',
          name:'bluePrint',
          component:()=>import('@/views/BlueprintPage/Blueprint.vue')
        },
        {
          path:'/mods',
          name:'mods',
          component:()=>import('@/views/ModsPage/Mods.vue')
        }
      ]
    }
  ]
})


export default router
