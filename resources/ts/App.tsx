import React, { useEffect } from 'react';
import Header from './components/common/header';
import Footer from './components/common/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Layout from './components/common/Layout';
import Cart from './components/pages/Cart';
import Contact from './components/pages/Contact';

const App: React.FC = () => {    
    return (
        <>
        <Header />
        <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </Layout>
        <Footer />
        </>
    );
}

export default App;