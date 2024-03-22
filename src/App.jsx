import Header from "./Components/Header";
import Shoes from "./Components/Shoes";
import { CartFunctionProvider } from "./Store/ShoesCartContext";
import { CartShoesProvider } from "./Store/CartShoesProvider";
import Cart from "./Components/Cart";
function App() {
  return (
    <>
    <CartShoesProvider>
      <CartFunctionProvider>
            <main className=" bg-zinc-800 scroll-smooth max-h-full">
              <Header />
              <Shoes />
              <Cart />
            </main>
        </CartFunctionProvider>
    </CartShoesProvider>
       
    </>
  );
}

export default App;
