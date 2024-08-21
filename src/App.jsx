import { useEffect, useState } from 'react'
import Guitar from './components/Guitar'
import Header from './components/Header'
import { db } from './data/db';

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    const existingItem = cart.find((x) => x.item.id === item.id);

    if (!existingItem) {
      setCart(prevCart => [...prevCart, { item: item, quantity: 1 }]);
    }
    else {
      // There's no point in cloning the array because the reference of the objects persists. 
      // The only thing that becomes a shallow copy is the actual array object.
      existingItem.quantity++;
    }
  }

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((x) => (<Guitar key={x.id} guitar={x} onAddToCart={handleAddToCart} />))}
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
