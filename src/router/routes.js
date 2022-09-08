
export default [
    // {
    //     path     : "/:pathMatch(.*)*",
    //     component: () => import(/* webpackPrefetch: true */"../views/shared/PaginaNoEncontrada"),
    //     meta     : {
    //         title: 'Pagina no encontrada',
    //     }
    // },
    {
        path     : "/",
        name: "PaginaInicial",
        component: () => import(/* webpackPrefetch: true */"../layouts/DefaultLayout"),
        meta     : {
            title: 'Pagina Informativa',
        },
    }
]