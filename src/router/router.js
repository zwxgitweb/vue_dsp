import Login from '../views/Login/Login'
import Register from '../views/Register/Register'
import Root from '../views/Root/Root'
import Home from '../views/Home/Home'
import IDC from '../views/IDC/IDC'
import Toolkit from '../views/Toolkit/Toolkit'
import Plan from '../views/Plan/Plan'
import Unit from '../views/Unit/Unit'
import Originality from '../views/Originality/Originality'
import Advertising from '../views/Advertising/Advertising'
import NewOriginality from '../views/newOriginality/newOriginality'
import NewUnit from '../views/newUnit/newUnit'
import NewPlan from '../views/newPlan/newPlan'

export default [
    {
      path: '/root',
      name: 'root',
      component: Root,
      children: [
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/advertising',
          component: Advertising,
          children: [
            {
              path: '/advertising',
              redirect: '/neworiginality'
            },
            {
              path: '/neworiginality',
              component: NewOriginality
            },
            {
              path: '/newunit',
              component: NewUnit
            },
            {
              path: '/newplan',
              component: NewPlan
            }
          ]
        },
        {
          path: '/home',
          component: Home
        },
        {
          path: '/idc',
          component: IDC
        },
        {
          path: '/toolkit',
          component: Toolkit
        },
        {
          path: '/plan',
          component: Plan
        },
        {
          path: '/unit',
          component: Unit
        },
        {
          path: '/originality',
          component: Originality
        }
      ]
    },
   {
     path: '/',
     redirect: '/home'
   }
  ]