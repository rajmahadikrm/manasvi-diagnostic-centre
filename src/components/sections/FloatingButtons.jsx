import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function FloatingButtons(){

return(

<>

<a

href="https://wa.me/9370125127"

target="_blank"

className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex justify-center items-center text-3xl shadow-xl hover:scale-110 duration-300 z-50"

>

<FaWhatsapp/>

</a>

<a

href="tel:+917887564545"

className="fixed bottom-28 right-6 bg-red-600 text-white w-16 h-16 rounded-full flex justify-center items-center text-2xl shadow-xl hover:scale-110 duration-300 z-50"

>

<FaPhoneAlt/>

</a>

</>

)

}

export default FloatingButtons;