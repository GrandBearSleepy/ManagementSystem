import Loadable from 'react-loadable'
import { Loading } from '../components';


// import Cleaner from './Cleaner';
// import Customer from './Customer';
// import Login from './Login';
// import NotFound from './NotFound';

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
const Work = Loadable({
  loader: () => import('./Home'),
  loading: Loading
})
export {
  Cleaner,
  Customer,
  NotFound,
  Login,
  Work,
  Home
}