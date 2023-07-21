import {
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const pages = [
    {
        name: 'homepage',
        path: '/homepage',
        redirect:'/home',
        menu: {
            title: "首页",  
            icon: Location,
        },
        children:[
            {
                name: 'home',
                path: '/home',
                menu: {
                    title: "首页",  
                },
                component: () => import('@/pages/home/inedx.vue'),
            },
            {
                name: 'tablepagination',
                path: '/tablepagination',
                redirect:'/table',
                menu: {
                    title: "列表分页",  
                },
                children: [
                    {
                        name: 'table',
                        path: '/table',
                        menu: {
                            title: "列表",  
                        },
                        component: () => import('@/pages/table/index.vue')
                    },
                    {
                        name: 'pagination ',
                        path: '/pagination',
                        menu: {
                            title: "分页",  
                        },
                        component: () => import('@/pages/pagination/index.vue')
                    },
                ]
            },
        ]
    },
    {
        name: 'tree',
        path: '/tree',
        menu: {
            title: "树结构",  
            icon: Setting,
        },
        component: () => import('@/pages/tree/index.vue')
    },
]

export default pages;