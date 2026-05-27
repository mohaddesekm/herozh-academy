import Index from './pages/Index/Index';
import Courses from './pages/Courses/Courses';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import Blog from './pages/Blog/Blog';
import Article from './pages/Article/Article';

const routes = [
    { path: '/', element: <Index /> },
    { path: '/courses', element: <Courses /> },
    { path: '/cart', element: <Cart /> },
    { path: '/product', element: <Product /> },
    { path: '/blog', element: <Blog /> },
    { path: '/article', element: <Article /> },
];

export default routes;
