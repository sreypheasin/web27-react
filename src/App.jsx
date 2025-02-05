import { useEffect, useState } from "react";
import CardProduct from "./components/cards/card-product";
import { getAllProduct } from "../service/product";

function App() {
  const [number, setNumber] = useState(0);
  const [products, setProducts] = useState([]);
  console.log("products", products);

  const handleCount = () => {
    setNumber(number + 1);
  };

  // useEffect (called-back function, dependency)
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getAllProduct();
      setProducts(data.products);
    };

    fetchProduct();
  }, []);

  // console.log('outside useEffect');
  return (
    <main className="max-w-screen-xl mx-auto">
      <section className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <CardProduct
            thumbnail={product.thumbnail}
            stock={product.stock}
            description={product.description}
            title={product.title}
            price={product.price}
            discountPercentage={product.discountPercentage}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
