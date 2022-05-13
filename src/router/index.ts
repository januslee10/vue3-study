import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { websiteTitle } from '@/config'
import { start, close } from '@/utils/nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to, form, next) => {
  start()
  next()
})

router.afterEach((to) => {
  const { title } = to.meta
  document.title = title ? `${title} - ${websiteTitle}` : websiteTitle
  close()
})

export default router
