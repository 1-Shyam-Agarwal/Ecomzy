import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div>


      <div className="flex flex-row flex-wrap content-stretch">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="m-10 flex justify-between flex-wrap w-lvw shadow-md p-4">

          <div className="font-semibold">Summary</div>
          <p>
            <span className="font-semibold" >Total Items: <span className="font-thin">{cart.length}</span></span>
          </p>
          <p className="font-semibold" >Total Amount: <span className="font-thin">${totalAmount}</span></p>
          <button className="font-semibold">
            CheckOut Now
          </button>
      </div>

      </div>
) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
