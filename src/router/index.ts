import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import config from '@/config/index';
import routes from '@/router/routes';
const router = createRouter({
    // history: createWebHistory(),
    history:createWebHashHistory(config.baseURL),
    routes
})

router.beforeEach(async (to, from) => {
    if (
      // 检查用户是否已登录
      !localStorage.getItem('token') &&
      // ❗️ 避免无限重定向
      to.name !== 'login'
    ) {
      // 将用户重定向到登录页面
      return { name: 'login' }
    }
  })

export default router;