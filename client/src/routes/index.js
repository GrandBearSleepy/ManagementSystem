import {
  Cleaner,
  Customer,
  NotFound,
  LoginForm,
  Work,
  Home,
  InputFormCus,
  InputFormCle,
  InputFormJob
} from '../pages';

import {
  UserOutlined,
  RestOutlined,
  MehOutlined,
  UsergroupAddOutlined,
  SolutionOutlined,
  ReconciliationOutlined,
  HomeOutlined,
  FileAddOutlined
} from '@ant-design/icons';


export const mainRoutes = [
  {
    pathname: '/',
    component:LoginForm
  },
  {
    pathname: '/login',
    component: LoginForm
  },
  {
    pathname: '/404',
    component: NotFound
  },
]

export const adminRoutes = [
  {
    pathname: '/',
    title: 'Home',
    icon: <HomeOutlined />,
    subMenus: [
      {
        pathname: '/',
        title: 'Dashboard',
        icon: <HomeOutlined />,
        component: Home,
        exact: true
      }],
    isNav: true,
    exact: true
  },
  {
    pathname: '/customer',
    component: Customer,
    title: 'Customer',
    icon: <UserOutlined />,
    subMenus: [
      {
        pathname: '/customer/addNew',
        title: 'Add Customer',
        icon: <UsergroupAddOutlined />,
        component: InputFormCus
      },
      {
        pathname: '/customer/viewAll',
        title: 'All Customers',
        icon: <SolutionOutlined />,
        component: Customer
      }],
    isNav: true
  },
  {
    pathname: '/cleaner',
    component: Cleaner,
    title: 'Cleaner',
    icon: <MehOutlined />,
    subMenus: [
      {
        pathname: '/cleaner/addNew',
        title: 'Add Cleaner',
        icon: <UsergroupAddOutlined />,
        component: InputFormCle,
      },
      {
        component: Cleaner,
        pathname: '/cleaner/viewAll',
        title: 'All Cleaners',
        icon: <SolutionOutlined />
      }],
    isNav: true
  },
  {
    pathname: '/job',
    component: Work,
    title: 'Job',
    icon: <RestOutlined />,
    subMenus: [
      {
        pathname: '/job/newJob',
        title: 'Add New Job',
        component: InputFormJob,
        icon: <FileAddOutlined />

      },
      {
        pathname: '/job/viewAll',
        title: 'View All',
        component: Work,
        icon: <ReconciliationOutlined />

      }],
    isNav: true
  }
]