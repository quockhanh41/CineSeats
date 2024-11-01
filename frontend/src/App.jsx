import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/header';
import Footer from './components/footer'
import { routes } from './routes/index'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const LayoutHeader = route.isShowHeader ? Header : Fragment
            const LayoutFooter = route.isShowFooter ? Footer : Fragment

            return (
              <Route key={route.path} path={route.path} element={
                <>
                  <LayoutHeader />
                  <Page />
                  <LayoutFooter />
                </>


              } />
            )
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App
