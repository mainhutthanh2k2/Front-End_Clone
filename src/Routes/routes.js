import {
  Default_Layout,
  Smart_phone,
  Laptop_Layout,
  Tablet_Layout,
  Alone_product,
  MainLayout,
  Search,
} from "~/commonest/Layout";
import Home from "~/Pages/Home/home";
import Smartphone from "~/Pages/Smart_phone/Smart_phone";
import Laptop from "~/Pages/LapTop/Laptop";
import Tablet from "~/Pages/Tablet/Tablet";
import Following from "~/Pages/Following/following";
import Container_search from "~/Pages/Search/Seearch";
import {ProductManager, CategoryManager, CustomerManager} from "~/Pages/Admin";

// public router
const publicRouter = [
  {
    path: "/",
    component: Home,
    layout: Default_Layout,
  },
  {
    path: "/search/:name",
    component: Container_search,
    layout: Search,
  },
  {
    path: "/following",
    component: Following,
    layout: Default_Layout,
  },
  {
    path: "/smart_phone",
    component: Smartphone,
    layout: Smart_phone,
  },
  {
    path: "/laptop",
    component: Laptop,
    layout: Laptop_Layout,
  },
  {
    path: "/tablet",
    component: Tablet,
    layout: Tablet_Layout,
  },
  {
    path: "/product/:id",
    component: Alone_product,
    layout: Alone_product,
  },
  {
    path: "/admin/product",
    component: ProductManager,
    layout: MainLayout,
  },
  {
    path: "/admin/category",
    component: CategoryManager,
    layout: MainLayout,
  },
  {
    path: "/admin/customer",
    component: CustomerManager,
    layout: MainLayout,
  },
];
const privateRouter = [];
export {publicRouter, privateRouter};
