
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return(
      <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline ">
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
        </div>

        <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</p>
        </div>
          
          
        <div className="h-[180px]">
          <img src={item.image} className="h-full w-full" />
        </div>

        <div className="flex content-between items-center gap-20 mt-3">
            <p className="text-green-600 font-semibold">{item.price}</p>
        <div/>

        <div
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
        </div>
      </div>
      </div>);
};

export default CartItem;
