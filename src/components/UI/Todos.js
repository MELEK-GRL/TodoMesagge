import user from "../../assets/image/user.png";
import { FaRegSmile } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useState, useEffect } from "react";
import CartPage from "./CartPage";

export default function Todos() {
  const [list, setList] = useState([]);

  const [button, setButton] = useState();

  

  const [avatars, setAvatars] = useState(false);
  const [images, setImages] = useState(false);

  const addSubmit = (e) => {
    e.preventDefault();
    setList([...list, button]);
    setButton("");
  };

  useEffect(() => {
    if (avatars) {
      const fileReader = new FileReader()
      
      fileReader.addEventListener('load',function(){
        setImages(this.result)
      });
      fileReader.readAsDataURL(avatars);
    }
  }, [avatars]);
  return (
    <div className="flex flex-col w-full gap-3">
      <form
        onSubmit={addSubmit}
        className="flex gap-2 flex-col w-full border-white border rounded-md shadow-md p-2"
      >
        <div className="flex w-full gap-3">
          <img
            src={user}
            alt={user}
            className="object-cover border rounded-full w-16 h-16"
          />
          <input
            value={button || ""} required
            onChange={(e) => setButton(e.target.value)}
            className="focus:outline-none  w-full placeholder:px-1 h-full max-h-16 min-h-full placeholder:text-gray-500 rounded-md border text-sm placeholder:text-sm"
            placeholder="Write Something,Merve"
          />
        </div>
        <div className="boxEnd gap-3">
          <FaRegSmile size={16} />

          <div className="avatar cursor-pointer">
            <FiPlus size={16} className="cursor-pointer text-center absolute top[30%] " />
            <input  
              type="file" 
              onChange={(e) => setAvatars(e.target.files[0])}
              className="  w-1 h-4 opacity-0 top-0 right-0 left-0 absolute  bg-red-400 cursor-pointer"
            />
          </div>
        </div>
      </form>

      <div className="w-full flex flex-col gap-6">
        {list.map((listes, index) => (
          <CartPage key={index} listes={listes} images={images} avatars={avatars}/>
        ))}
      </div>
    </div>
  );
}