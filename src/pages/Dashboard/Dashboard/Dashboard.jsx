

import { Route, Switch } from 'react-router-dom'
import './Navbar.css'

import DashboardHome from '../DashboardPage/DashboardHome'
import Navbar from './Navbar'
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min'
import OrderList from '../DashboardPage/OrderList'
import Pay from '../DashboardPage/Pay'
import Review from '../DashboardPage/Review'
import MakeAdmin from '../DashboardPage/MakeAdmin'
import useAuth from '../../context/useAuth'
import AdminRoute from '../../Register/AdminRoute/AdminRoute'
import AddProduct from '../DashboardPage/AddProduct/AddProduct'
import AllOrders from '../DashboardPage/AllOrders/AllOrders'
import { Spinner } from 'react-bootstrap'
import ManageProducts from '../DashboardPage/ManageProducts/ManageProducts'
import NotFound from '../../NotFound/NotFound'

function Dashboard () {
  let { path } = useRouteMatch()
  const { isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className='App my-5'>
        <Spinner
          style={{ marginTop: '200px', height: '100px', width: '100px' }}
          animation='border'
          variant='warning'
        />
      </div>
    )
  }

  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path={`${path}`}>
          <DashboardHome />
        </Route>
        <Route path={`${path}/myorders`}>
          <OrderList />
        </Route>
        <Route path={`${path}/pay`}>
          <Pay />
        </Route>
        <Route path={`${path}/review`}>
          <Review />
        </Route>

        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin />
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct />
        </AdminRoute>
        <AdminRoute path={`${path}/manageOrder`}>
          <AllOrders />
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
          <ManageProducts />
        </AdminRoute>

        <AdminRoute path={`${path}/*`}>
          <NotFound />
        </AdminRoute>
      </Switch>
    </>
  )
}

export default Dashboard
