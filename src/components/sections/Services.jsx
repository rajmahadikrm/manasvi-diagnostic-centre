import {
FaXRay,
FaBone,
FaHandPaper,
FaWalking,
FaHeartbeat,
FaProcedures
} from "react-icons/fa";

const services=[

{
name:"Chest X-Ray",
icon:<FaHeartbeat/>
},

{
name:"Spine X-Ray",
icon:<FaBone/>
},

{
name:"Hand X-Ray",
icon:<FaHandPaper/>
},

{
name:"Leg X-Ray",
icon:<FaWalking/>
},

{
name:"Skull X-Ray",
icon:<FaXRay/>
},

{
name:"All Types Of Digital X-Ray",
icon:<FaProcedures/>
}

]

function Services(){

return(

<section className="py-20">

<div className="container mx-auto px-6">

<h2 className="text-center text-4xl font-bold">

Our Services

</h2>

<p className="text-center mt-4 text-gray-500">

Professional Digital X-Ray Imaging

</p>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

{services.map((service,index)=>(

<div
key={index}
className="border rounded-3xl p-8 hover:bg-red-600 hover:text-white duration-300 shadow"
>

<div className="text-5xl mb-5">

{service.icon}

</div>

<h3 className="text-2xl font-bold">

{service.name}

</h3>

<p className="mt-4">

High-quality digital imaging with fast
report generation.

</p>

</div>

))}

</div>

</div>

</section>

)

}

export default Services;