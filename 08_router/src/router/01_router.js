import { createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import HomeView from '@/views/01_router/HomeView.vue';
import PathVariable from '@/views/01_router/pathVariable.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: HomeView
        },
        {
            path: "/pathvariable",
            component: PathVariable
        }
    ]
})

/* router 객체를 export함(main.js에서 import할 용도) */
export default router;