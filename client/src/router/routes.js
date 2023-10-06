const removeQueryParams = to => {
  if(Object.keys(to.query).length)
    return {path: to.path, query: {}, hash: to.hash}
}


const routes = [
  {
    path: '/',
    name: 'welcome',
    component:()=> import('@/views/layouts/landing-page.vue'),
    // beforeEnter: [removeQueryParams],
  }
]

export {routes}