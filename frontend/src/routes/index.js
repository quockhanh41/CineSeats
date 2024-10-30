import Account from "../pages/account/account";
import Admin from "../pages/admin/admin";
import Contact from "../pages/contact/contact";
import HomePage from "../pages/home/home";
import Login from "../pages/login/login";
import Movie from "../pages/movie/movie";
import Payment from "../pages/payment/payment";
import Register from "../pages/register/register";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/account',
        page: Account,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/login',
        page: Login,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/register',
        page: Register,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/movie',
        page: Movie,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/contact',
        page: Contact,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/payment',
        page: Payment,
        isShowHeader: true,
        isShowFooter: true
    },
    {
        path: '/admin',
        page: Admin,
        isShowHeader: true,
        isShowFooter: true
    },
]

