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
const LoginForm = Loadable({
  loader: () => import('./LoginForm'),
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
const InputFormCus = Loadable({
  loader: () => import('./Customer/inputForm'),
  loading: Loading
})
const InputFormCle = Loadable({
  loader: () => import('./Cleaner/inputForm'),
  loading: Loading
})
const InputFormJob = Loadable({
  loader: () => import('./Work/inputForm'),
  loading: Loading
})
const Buiding = Loadable({
  loader: () => import('./Buiding'),
  loading: Loading
})
export {
  Cleaner,
  Customer,
  NotFound,
  LoginForm,
  Work,
  Home,
  InputFormCus,
  InputFormCle,
  InputFormJob,
  Buiding
}