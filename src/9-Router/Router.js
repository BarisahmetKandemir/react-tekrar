import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayOut from './pages/LayOut'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import NoPages from './pages/NoPages'
import ContactDetail from './pages/ContactDetail'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayOut/>}>
                        <Route index element={<Home/>}/>
                        <Route path="blogs" element={<Blogs/>}/>
                        <Route path="contact" element={<Contact/>}/>
                        <Route path="contact/:id" element={<ContactDetail/>}/>
                        <Route path="*" element={<NoPages/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router