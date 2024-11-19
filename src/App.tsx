import { RouteName } from "constants/route";
import BaseLayout from "layouts/BaseLayouts";
import Home from "pages/Home";
import About from "pages/About";
import Products from "pages/Products";
import Research from "pages/RD";
import News from "pages/News";
import Vacancy from "pages/Vacancy";
import Contact from "pages/Contact";
import ProductDetail from "pages/ProductDetail";
import NewsDetail from "pages/NewsDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" Component={BaseLayout}>
          <Route path={RouteName.Home} element={<Home />}></Route>
          <Route path={RouteName.About} element={<About />}></Route>
          <Route path={RouteName.Products} element={<Products />}></Route>
          <Route path={RouteName.Research} element={<Research />}></Route>
          <Route path={RouteName.News} element={<News />}></Route>
          <Route path={RouteName.Vacancy} element={<Vacancy />}></Route>
          <Route path={RouteName.Contact} element={<Contact />}></Route>

          <Route
            path={RouteName.ProductDetail}
            Component={ProductDetail}
          ></Route>
          <Route path={RouteName.NewsDetail} Component={NewsDetail}></Route>
          {/* <Route path={RouteName.Blog} Component={BlogPage}></Route>
          <Route path={RouteName.Status404} Component={Status404Page}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
