const reviews=[

{
name:"Rahul Patil",
review:"Very clean centre and quick reporting."
},

{
name:"Nikita Bhanwase",
review:"Professional staff and affordable charges."
},

{
name:"Amit Kulkarni",
review:"Highly recommended Digital X-Ray Centre."
}

]

function Testimonials(){

return(

<section className="py-20">

<div className="container mx-auto px-6">

<h2 className="text-center text-4xl font-bold">

Patient Reviews

</h2>

<div className="grid lg:grid-cols-3 gap-8 mt-14">

{reviews.map((item,index)=>(

<div
key={index}
className="bg-white rounded-3xl shadow-lg p-8"
>

⭐⭐⭐⭐⭐

<p className="mt-6 text-gray-600">

"{item.review}"

</p>

<h3 className="mt-6 font-bold">

{item.name}

</h3>

</div>

))}

</div>

</div>

</section>

)

}

export default Testimonials;