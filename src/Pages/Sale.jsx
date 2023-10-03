import { useContext } from "react"
import { SaleContext } from "../context/SaleContext"

const Cart = () => {
  const chile = new Intl.NumberFormat("es-CL")
  const { products } = useContext(SaleContext)
  const { allProducts, setAllProducts } = useContext(SaleContext)
  const { countProducts, setCountProducts } = useContext(SaleContext)
  const { total, setTotal } = useContext(SaleContext)

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id == product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
      setCountProducts(countProducts + 1)
      setTotal(total + product.price)
      return setAllProducts([...products])
    }
  }

  const onSubsProduct = (product) => {
    if (product.qty == 1) {
      onDeleteProduct(product)
      return
    }

    if (allProducts.find((item) => item.id == product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      )
      setCountProducts(countProducts - 1)
      setTotal(total - product.price)
      return setAllProducts([...products])
    }
  }

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id)

    setTotal(total - product.price * product.qty)
    setCountProducts(countProducts - product.qty)
    setAllProducts(results)
  }

  const onDeleteCart = () => {
    setAllProducts([])
    setCountProducts(0)
    setTotal(0)
  }

  return countProducts ? (
    <div className="cart-container">
      <div className="cart">
        <div className="cart-l">
          {allProducts.map((product) => (
            <div className="cart-card" id={product.id} key={product.id}>
              <div className="card-l">
                <div className="img-cart">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="title-total">
                  <h2>
                    {product.name.charAt(0).toUpperCase() +
                      product.name.slice(1)}
                  </h2>
                  <p>${chile.format(product.price)}</p>
                </div>
              </div>
              <div className="card-r">
                <i
                  onClick={() => onSubsProduct(product)}
                  className="fa-solid fa-minus"
                ></i>
                <p className="each-qty">{product.qty}</p>
                <i
                  onClick={() => onAddProduct(product)}
                  className="fa-solid fa-plus"
                ></i>
                <p className="subtotal">
                  ${chile.format(product.price * product.qty)}
                </p>
                <i
                  onClick={() => onDeleteProduct(product)}
                  className="fa-solid fa-trash"
                ></i>
              </div>
            </div>
          ))}
          <button className="delete-cart" onClick={() => onDeleteCart()}>
            Vaciar Carrito
          </button>
        </div>
        <div className="cart-r">
          <h2>Resumen</h2>
          <div className="cant">
            <p>Cantidad:</p>
            <p className="cant-p">{countProducts} products</p>
          </div>
          <div className="total">
            <p>Total:</p>
            <p className="total-p">${chile.format(total)}</p>
          </div>
          <button className="pay">Pagar</button>
        </div>
      </div>
    </div>
  ) : (
    <div className="cart-container">
      <div className="empty">
        <p>Carrito vacío</p>
      </div>
    </div>
  )
}

export default Cart
