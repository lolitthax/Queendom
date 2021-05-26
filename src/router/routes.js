const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Index.vue')
        }]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    },
    {
        path: '/login',
        component: () => import ('components/AppLogin.vue'),
        children: [
            { path: '', component: () => import('pages/Login.vue')}
        ]

    },
    {
        path: '/registro',
        component: () =>
            import ('pages/registro.vue'),
    },
    {
        path: '/dashboard',
        component: () =>
            import ('pages/Dashboard/index.vue'),
              
    },
    {
        path: '/sobre',
        component: () =>
            import ('pages/Dashboard/sobre.vue'),
    },
    {
        path: '/adsobre',
        component: () =>
            import ('pages/Dashboard/sobrecreate.vue'),
         
    },
    {
        path: '/edsobre',
        component: () =>
            import ('pages/Dashboard/sobreedit.vue'),
            
    },
    {
        path: '/paquera',
        component: () =>
            import ('pages/Dashboard/paquera.vue'),
    },
    {
        path: '/adpaquera',
        component: () =>
            import ('pages/Dashboard/paqueracreate.vue'),
           
    },
    {
        path: '/edpaquera',
        component: () =>
            import ('pages/Dashboard/paqueraedit.vue'),
            
    },
    {
        path: '/departamento',
        component: () =>
            import ('pages/Dashboard/departamento.vue'),
    },
    {
        path: '/addepartamento',
        component: () =>
            import ('pages/Dashboard/departamentocreate.vue'),
            
    },
    {
        path: '/eddepartamento',
        component: () =>
            import ('pages/Dashboard/departamentoedit.vue'),
            
    },
    
]


export default routes