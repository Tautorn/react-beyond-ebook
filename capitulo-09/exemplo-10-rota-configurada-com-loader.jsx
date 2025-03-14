import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const productLoader = async ({ params }) => {
  const product = await getClothingById(params.id);
  if (!product) {
    throw new Response("Produto não encontrado", { status: 404 });
  }
  return product;
};

const router = createBrowserRouter([
  {
    path: "/product/:id",
    element: <ProductDetails />,
    loader: productLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;