import { useAuthStore } from '@/stores'
/**
 * 获取tocken
 */
const authStore = useAuthStore()
export function getToken() {
  return authStore.token
}
