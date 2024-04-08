export default defineNuxtRouteMiddleware(async (to) => {
  const store = useUserStore();
  const user = await store.currentUser();

  if (user && (to.path === '/login' || to.path === '/register'))
    return navigateTo('/');
});
