import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export default function AppLayout() {
  const navidation = useNavigation();
  const isLoading = navidation.state === "loading";
  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]  '>
      {isLoading && <Loader />}
      <Header />
      <div className='overflow-scroll'>
        <main className='container mx-auto px-2 sm:px-0'>
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
