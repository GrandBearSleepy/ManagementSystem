import {
  Cleaner,
  Customer,
  NotFound,
  Login,
  Work,
  Home,
  InpuFormCus,
  InpuFormCle
} from '../pages';

import {
  UserOutlined,
  RestOutlined,
  MehOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  ReconciliationOutlined,
  HomeOutlined
} from '@ant-design/icons';


export const mainRoutes = [
  {
    pathname: '/login',
    component: Login
  },
  {
    pathname: '/404',
    component: NotFound
  },
]

export const adminRoutes = [
  {
    pathname: '/admin/home',
    title: 'Home',
    icon: <HomeOutlined />,
    subMenus: [
      {
        pathname: '/admin/home',
        title: 'Home',
        icon: <HomeOutlined />,
        component: Home
      }],
    isNav: true
  },
  {
    pathname: '/admin/customer',
    component: Customer,
    title: 'Customer',
    icon: <UserOutlined />,
    subMenus: [
      {
        pathname: '/admin/customer/addNew',
        title: 'Add Customer',
        icon: <UsergroupAddOutlined />,
        component: InpuFormCus
      },
      {
        pathname: '/admin/customer/viewAll',
        title: 'All Customers',
        icon: <SolutionOutlined />,
        component: Customer
      }],
    isNav: true
  },
  {
    pathname: '/admin/cleaner',
    component: Cleaner,
    title: 'Cleaner',
    icon: <MehOutlined />,
    subMenus: [
      {
        pathname: '/admin/cleaner/addNew',
        title: 'Add Cleaner',
        icon: <UsergroupAddOutlined />,
        component: InpuFormCle,
      },
      {
        component: Cleaner,
        pathname: '/admin/cleaner/viewAll',
        title: 'All Cleaners',
        icon: <SolutionOutlined />
      }],
    isNav: true
  },
  {
    pathname: '/admin/work',
    component: Work,
    title: 'Job',
    icon: <RestOutlined />,
    subMenus: [
      {
        pathname: '/admin/work/viewAll',
        title: 'View All',
        component: Work,
        icon: <ReconciliationOutlined />

      }],
    isNav: true
  }
]