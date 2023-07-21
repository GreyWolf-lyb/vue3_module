import { createStore } from "vuex";
import routerList from '@/router/pages';

type Person = {
    name: String;
    path: String;
};

const str: any = sessionStorage.getItem('breadcrumb');
const result: Person = JSON.parse(str);

export default createStore({
    state: {
        breadcrumbPath:result||[{"name":"首页","path":"/homepage"},{"name":"首页","path":"/home"}],
    },
    mutations: {
        increment(state, value) {
            state.breadcrumbPath = value
        }
    },
    actions:{
        increment({ commit }, action) {
            
            let recursionRoute = <any>[];
            function recursion(child: any) {
                child.forEach((item: any, index: number) => {
                        recursionRoute.push(item)
                        if (item.children) {
                            recursion(item.children);
                        }
                })
            }
            recursion(routerList);
            
            let arr = <any>[];

            action.forEach((item: any, index: number) => {
                recursionRoute.forEach((key: any) => {
                    if (item === key.path) {
                        arr.push({
                            name: key.menu.title,
                            path:key.path
                       }) 
                    }
                })
            })
            sessionStorage.setItem('breadcrumb', JSON.stringify(arr));

            commit('increment',arr)
        }
    },
    modules: {}
})

