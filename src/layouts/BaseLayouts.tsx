import Header from "components/Header";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer";

export default function BaseLayout() {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
