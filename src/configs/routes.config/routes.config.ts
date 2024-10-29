import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [
    ...authRoute,
    {
        key: 'landing',
        path: '/',
        component: lazy(() => import('@/views/Landing')),
        authority: [],
    },
    {
        key: 'pricing',
        path: '/pricing',
        component: lazy(() => import('@/views/Pricing')),
        authority: [],
    },
]

export const protectedRoutes: Routes = [
    {
        key: 'home',
        path: '/',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    {
        key: 'dashboard',
        path: '/dashboard',
        component: lazy(() => import('@/views/Dashboard')),
        authority: [],
    },
    {
        key: 'profile',
        path: '/profile',
        component: lazy(() => import('@/views/Profile')),
        authority: [],
    },
    {
        key: 'settings',
        path: '/settings',
        component: lazy(() => import('@/views/Settings')),
        authority: [],
    },
    {
        key: 'tasks.tts',
        path: '/tasks/tts',
        component: lazy(() => import('@/views/tasks/TTSTask')),
        authority: [],
    },
    {
        key: 'tasks.ai-image',
        path: '/tasks/ai-image',
        component: lazy(() => import('@/views/tasks/AIImageTask')),
        authority: [],
    },
    {
        key: 'payment',
        path: '/payment',
        component: lazy(() => import('@/views/Payment')),
        authority: [],
    },
    {
        key: 'payment.status',
        path: '/payment/status',
        component: lazy(() => import('@/views/PaymentStatus')),
        authority: [],
    },
    ...othersRoute,
]