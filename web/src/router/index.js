import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '../views/pk/PkIndexView'
import RecordView from '../views/record/RecordView'
import RankListView from '../views/ranklist/RankListIndexView'
import UserBotIndexView from '../views/user/bots/UserBotIndexView'
import NotFound from '../views/error/NotFound'
import AiShare from '../views/aishare/AiShare'

const routes = [
  {
    path:'/',
    name:"home",
    redirect:"pk/"
  },
  {
    path:"/pk/",
    name:"pk_index",
    component:PkIndexView
  },
  {
    path:"/record/",
    name:"record_index",
    component:RecordView
  },
  {
    path:"/ranklist/",
    name:"ranklist_index",
    component:RankListView
  },
  {
    path:"/AIshare/",
    name:"AIshare_index",
    component:AiShare
  },
  {
    path:"/user/bot/",
    name:"user_bot_index",
    component:UserBotIndexView
  },
  {
    path:"/404/",
    name:"404",
    component:NotFound 
  },
  {
    path:"/:catchAll(.*)",
    name:"123",
    redirect:"/404/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
