import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConsultarTView from '../views/ConsultarTView.vue'
import ConstularPorIdView from '../views/ConstularPorIdView.vue'
import GuardarEstView from '../views/GuardarEstView.vue'
import BorrarView from '../views/BorrarView.vue'
import ActualizarView from '../views/ActualizarView.vue'
import ActualizarPView from '../views/ActualizarPView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
   {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
    
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requiereAutorizacion: true,
      esPublica: false
    }
  },
  {
    path: '/consultar',      
    name: 'consultar',
    component: ConsultarTView
  },
  {
    path: '/consultar-id',
    name: 'consultar-id',
    component: ConstularPorIdView
  },
  {
    path: '/guardar',
    name: 'guardar',
    component: GuardarEstView
  },
  {
    path: '/borrar',
    name: 'borrar',
    component: BorrarView
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: ActualizarView
  },
  {
    path: '/patch',
    name: 'patch',
    component: ActualizarPView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
	if (to.meta.requiereAutorizacion) {
		const estaAutenticado = localStorage.getItem("estaAutenticado");
		const token = localStorage.getItem("token");

		if (! estaAutenticado) {
			console.log("Redirigiendo al Login");
			next({name: 'login'})
		} else {
			next();
		}

		/*Le envio a una página de login*/
	} else {
		console.log("Pase Libre")
		next();
		/*Le dejo que pase sin autenticación*/
	}
})

export default router
