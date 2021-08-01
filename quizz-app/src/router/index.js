import Vue from 'vue'
import VueRouter from 'vue-router'
import quiz from '../views/quiz.vue'
// import home from '../views/home.vue'
import login from '../views/login.vue'
import admin from '../views/admin.vue'
import quizEdit from '../cmps/quiz-edit.vue'
import submissions from '../cmps/submissions.vue'
import templates from '../cmps/templates.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Quiz',
    component: quiz
  },
  {
    path: '/login',
    name: 'Login Page',
    component: login
  },
  {
    path: '/admin',
    name: 'Admin Page',
    component: admin,
    children:[
      {
        path:'/quiz/edit',
        name:'Quiz Edit',
        component:quizEdit
      },
      {
        path:'/submissions',
        name:'Submissions',
        component:submissions
      },
      {
        path:'/templates',
        name:'Templates',
        component:templates
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
