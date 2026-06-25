import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { CartProvider } from '@context/CartContext'
import { ToastProvider } from '@context/ToastContext'
import Header from '@components/layout/Header/Header'
import Footer from '@components/layout/Footer/Footer'
import Home from '@pages/Home/Home'
import Shop from '@pages/Shop/Shop'
import ProductDetail from '@pages/ProductDetail/ProductDetail'
import Blog from '@pages/Blog/Blog'
import BlogPost from '@pages/BlogPost/BlogPost'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastProvider>
          <AppLayout />
        </ToastProvider>
      </CartProvider>
    </BrowserRouter>
  )
}
