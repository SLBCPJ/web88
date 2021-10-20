import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/views/Landing';
import Home from '@/views/Home';
import Error from '@/views/Error404';
import Login from '@/views/auth/Login';
import UserDetail from '@/views/UserDetail';
import ProductCreate from '@/views/ProductCreate';
Vue.use(Router)

// export default new Router({
const router = new Router({    
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'landing',
            component: Landing
        },
        {
            path: '/add',
            name: 'createProduct',
            component: ProductCreate
            
        },
        {
            path: '/home',
            name: 'home',
            component: Home
            
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta:{
                isAuth: true
            }
            
        },
        {
            path: '/user/:id',
            name: 'user-detail',
            component: UserDetail,
            meta: {
                requiresAuth: true
            }
            
        },
        {
            path: '*',
            name: 'error',
            component: Error
        }

    ],
});

router.beforeEach((to,from,next)=>{
    if (to.meta.requiresAuth) {
        //enviamos a autenticar
        if (!localStorage.getItem('token')) {
            next({
                name: 'login'
            })
        }else{
            next()
        }
    }else{
        next();
    }
    //se crea condicional para no mostrar la vista de login ya cuando una persona ha hecho el login
    if (to.meta.isAuth) {
        if (localStorage.getItem('token')) {
            next({
            name: 'home'
            });
        }else{
            next()
        }
    }else{
        next()
    }
});

export default router;