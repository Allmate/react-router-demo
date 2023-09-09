import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import NavBar from './components/navbar';
import OrderSummary from './components/orderSummary';
import NoMatch from './components/404';
import Products from './components/products';
import FeaturedProducts from './components/featuredProducts';
import NewProducts from './components/newProducts';
import Users from './components/users';
import UserDetails from './components/userDetails';
import Admin from './components/admin';
import './App.css';
import Profile from './components/profile';
import Login from './components/login';
import { AuthProvider } from './utils/auth';
import RequireAuth from './components/requireAuth';

// import About from './components/about';
const LazyAbout = React.lazy(() => import('./components/about'));

function App() {
    return (
        <AuthProvider>
            <div className="App">
                <NavBar />

                <Routes>
                    <Route path="*" element={<NoMatch />} />
                    <Route path="/" element={<Home />} />
                    <Route
                        path="about"
                        element={
                            <React.Suspense fallback={<h1>Loading...</h1>}>
                                <LazyAbout />
                            </React.Suspense>
                        }
                    />
                    <Route path="order-summary" element={<OrderSummary />} />
                    <Route path="products" element={<Products />}>
                        <Route index element={<FeaturedProducts />} />
                        <Route path="featured" element={<FeaturedProducts />} />
                        <Route path="new" element={<NewProducts />} />
                    </Route>
                    <Route path="users" element={<Users />} />
                    <Route path="users/admin" element={<Admin />} />
                    <Route path="users/:id" element={<UserDetails />} />
                    <Route
                        path="profile"
                        element={
                            <RequireAuth>
                                <Profile />
                            </RequireAuth>
                        }
                    />
                    <Route path="login" element={<Login />} />
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;
