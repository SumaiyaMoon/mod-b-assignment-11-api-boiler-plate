import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductForm from '../../pages/ProductForm'
import ProductDetail from '../../pages/ProductDetail'
import Product from '../../pages/Product'

export default function AppRouter() {
    return ( 
    <>
    <Router>
      <Routes>
          <Route path='/' element={<Product />}/>
          <Route path='/:id' element={<ProductDetail />}/>
          <Route path='productForm' element={<ProductForm />}/>
          <Route path='productForm/:id' element={<ProductForm />}/>
      </Routes>
    </Router>
    </>
    )
  }