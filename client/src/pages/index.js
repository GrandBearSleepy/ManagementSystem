import Loadable from 'react-loadable'
import { Loading } from '../components';

const Cleaner = Loadable({
  loader: () => import('./Cleaner'),
  loading:Loading
})
const Customer = Loadable({
  loader: () => import('./Customer'),
  loading: Loading
})
const Login = Loadable({
  loader: () => import('./Login'),
  loading: Loading
})
const NotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: Loading
})
const Work = Loadable({
  loader: () => import('./Work'),
  loading: Loading
})
const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading
})
const InpuFormCus = Loadable({
  loader: () => import('./Customer/inputForm'),
  loading: Loading
})
const InpuFormCle = Loadable({
  loader: () => import('./Cleaner/inputForm'),
  loading: Loading
})
export {
  Cleaner,
  Customer,
  NotFound,
  Login,
  Work,
  Home,
  InpuFormCus,
  InpuFormCle
}