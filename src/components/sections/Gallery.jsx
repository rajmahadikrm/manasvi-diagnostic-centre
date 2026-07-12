const images = [

"https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=900",

"/images/sixth.jpeg",

"/images/seven.jpeg",

"/images/second.jpeg",

"/images/fourth.jpeg",

"/images/fifth.jpeg",

];

function Gallery(){

return(

<section className="py-20 bg-gray-50">

<div className="container mx-auto px-6">

<h2 className="text-center text-4xl font-bold">

Gallery

</h2>

<p className="text-center text-gray-500 mt-3">

Our Centre

</p>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

{images.map((img,index)=>(

<img

key={index}

src={img}

className="rounded-3xl hover:scale-105 duration-300 shadow-lg cursor-pointer"

/>

))}

</div>

</div>

</section>

)

}

export default Gallery;