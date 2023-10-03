import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PetStoreContext } from "../context/PetStoreContext"

const Dogs = () => {
  const chile = new Intl.NumberFormat("es-CL")
  const { products } = useContext(PetStoreContext)
  const { dogProducts, setdogProducts } = useContext(PetStoreContext)
  const { countProducts, setCountProducts } = useContext(PetStoreContext)
  const { total, setTotal } = useContext(PetStoreContext)
  const dogProductsList = products.filter((product) => product.categoria === "perro");


  const onAddProduct = (product) => {
    if (dogProducts.find((item) => item.id == product.id)) {
      const products = dogProducts.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
      setTotal(total + product.price * product.qty)
      setCountProducts(countProducts + product.qty)
      return setdogProducts([...products])
    }

    setTotal(total + product.price * product.qty)
    setCountProducts(countProducts + product.qty)
    setdogProducts([...dogProducts, product])
  }

  const navigate = useNavigate()
  const handleClick = (product) => {
    navigate(`/${product.id}`)
  }

  return (
    <div className="product-list-container">
      <div className="product-list">
        {dogProductsList.map((product) => (
          <div className="product-card" id={product.id} key={product.id}>
            <div className="img-container" onClick={() => handleClick(product)}>
              <img src={product.img} alt={product.name} />
            </div>
            <h2 onClick={() => handleClick(product)}>
              {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
            </h2>
            <p>{product.descrption.join(", ")}</p>
            <button onClick={() => onAddProduct(product)}>
              Agregar ${chile.format(product.price)}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dogs
