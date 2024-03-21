import Header from "./Components/Header";
import Shoes from "./Components/Shoes";
import { CartFunctionProvider } from "./Store/ShoesCartContext";
function App() {
  return (
    <>
    <CartFunctionProvider>
      <main className=" bg-zinc-800 scroll-smooth max-h-full">
        
          <Header />
          <Shoes />
        
        
      </main>
      </CartFunctionProvider> 
    </>
  );
}

export default App;
