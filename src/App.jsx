import Header from "./Components/Header.jsx";
import Shoes from "./Components/Shoes.jsx";
import { CartFunctionProvider } from "./Store/ShoesCartContext.jsx";
import { CartShoesProvider } from "./Store/CartShoesProvider.jsx";
import Checkout from "./Components/Checkout.jsx";
import Cart from "./Components/Cart.jsx";
function App() {
  return (
    
    <CartShoesProvider>
      <CartFunctionProvider>
            <main className=" bg-zinc-800 scroll-smooth max-h-full">
              <Header />
              <Shoes />
              <Cart />
              <Checkout />
            </main>
        </CartFunctionProvider>
    </CartShoesProvider>
       
  
  );
}

export default App;
