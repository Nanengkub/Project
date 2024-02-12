import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/loginView.vue' //new command
import First from '../views/FirstView.vue'
import Q1 from '../views/Q1View.vue'
import Q2 from '../views/Q2View.vue'
import Q3 from '../views/Q3View.vue'
import Q4 from '../views/Q4View.vue'
import Q5 from '../views/Q5View.vue'
import corr1 from '../views/Correct1View.vue'
import corr2 from '../views/Correct2View.vue'
import corr3 from '../views/Correct3View.vue'
import corr4 from '../views/Correct4View.vue'
import corr5 from '../views/Correct5View.vue'
import wrong1 from '../views/Wrong1View.vue'
import wrong2 from '../views/Wrong2View.vue'
import wrong3 from '../views/Wrong3View.vue'
import wrong4 from '../views/Wrong4View.vue'
import wrong5 from '../views/Wrong5View.vue'
import end from '../views/EndView.vue'

const routes = [
  {
    path: '/login',//new command
    name: 'login',//new command
    component: Login //new command
  },
  {
    path: '/First',//new command
    name: 'First',//new command
    component: First //new command
  },
  {
    path: '/q1',//new command
    name: 'q1',//new command
    component: Q1 //new command
  },
  {
    path: '/q2',//new command
    name: 'q2',//new command
    component: Q2 //new command
  },
  {
    path: '/q3',//new command
    name: 'q3',//new command
    component: Q3 //new command
  },
  {
    path: '/q4',//new command
    name: 'q4',//new command
    component: Q4 //new command
  },
  {
    path: '/q5',//new command
    name: 'q5',//new command
    component: Q5 //new command
  },
  {
    path: '/corr1',
    name: 'corr1',
    component: corr1 
  },
  {
    path: '/corr2',
    name: 'corr2',
    component: corr2
  },
  {
    path: '/corr3',
    name: 'corr3',
    component: corr3 
  },
  {
    path: '/corr4',
    name: 'corr4',
    component: corr4 
  },
  {
    path: '/corr5',
    name: 'corr5',
    component: corr5
  },
  {
    path: '/wrong1',
    name: 'wrong1',
    component: wrong1 
  },
  {
    path: '/wrong2',
    name: 'wrong2',
    component: wrong2 
  },
  {
    path: '/wrong3',
    name: 'wrong3',
    component: wrong3 
  },
  {
    path: '/wrong4',
    name: 'wrong4',
    component: wrong4 
  },
  {
    path: '/wrong5',
    name: 'wrong5',
    component: wrong5 
  },
  {
    path: '/end',//new command
    name: 'end',//new command
    component: end //new command
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
const isAuthen=localStorage.getItem("auth");
    if(to.name!=='login' && !isAuthen){
      alert("Pls Login before use.");
      next({path:'/login'});
    }else{
      next();
    }
});
// 
export default router