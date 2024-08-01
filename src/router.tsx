import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { loader as productsLoader, Products } from './views/Products';
import { NewProduct, action as newProductAction } from './views/NewProduct';
import {
    EditProduct,
    loader as editProductLoader,
    action as editProductAction,
} from './views/EditProduct';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader,
            },
            {
                path: 'products/new',
                element: <NewProduct />,
                action: newProductAction,
            },
            {
                path: 'products/:id/edit', // ROA Pattern
                element: <EditProduct />,
                loader: editProductLoader,
                action: editProductAction,
            },
        ],
    },
]);
