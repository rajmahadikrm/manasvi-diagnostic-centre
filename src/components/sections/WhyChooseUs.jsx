import {
FaCheckCircle,
FaHeartbeat,
FaUserMd,
FaShieldAlt,
FaSmile,
FaXRay
} from "react-icons/fa";

const data = [

{
title:"Digital X-Ray",
icon:<FaXRay/>
},

{
title:"Experienced Staff",
icon:<FaUserMd/>
},

{
title:"Accurate Reports",
icon:<FaCheckCircle/>
},

{
title:"Affordable Charges",
icon:<FaHeartbeat/>
},

{
title:"Clean Environment",
icon:<FaShieldAlt/>
},

{
title:"Quick Service",
icon:<FaSmile/>
}

];

function WhyChooseUs(){

return(

<section className="py-20 bg-gray-50">

<div className="container mx-auto px-6">

<h2 className="text-center text-4xl font-bold">

Why Choose Us

</h2>

<p className="text-center text-gray-500 mt-4">

Professional Digital X-Ray Services in Wagholi

</p>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

{data.map((item,index)=>(

<div
key={index}
className="bg-white rounded-3xl p-8 shadow hover:-translate-y-2 duration-300"
>

<div className="text-5xl text-red-600">

{item.icon}

</div>

<h3 className="text-xl font-bold mt-6">

{item.title}

</h3>

<p className="mt-4 text-gray-500">

We provide reliable and quality diagnostic
services for every patient.

</p>

</div>

))}

</div>

</div>

</section>

)

}

export default WhyChooseUs;