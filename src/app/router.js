import Router from '@cerebral/router'

export default Router({
    routes: [
        {
            path: '/',
            signal: 'home_routed'
        },
        {
            path: '/hardware/cabinets/:slug',
            signal: 'hardware_cabinet_routed'
        },
        {
            path: '/hardware/cabinets',
            signal: 'hardware_cabinets_routed'
        }
    ]
})