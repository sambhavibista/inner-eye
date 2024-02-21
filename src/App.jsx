import { Route, 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider } from "react-router-dom";
import HomePage from "./pages/home_page";
import "./global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RootLayout from "./layout/root_layout";
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>  
        <Route index element={<HomePage />} />
        <Route path="about" element={<h1>About page</h1>} />
        <Route path="contact" element={<h1>Contact page</h1>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default App;
