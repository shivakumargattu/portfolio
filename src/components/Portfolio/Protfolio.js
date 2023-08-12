import {MdOutlineKeyboardArrowRight} from "react-icons/md"
const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className='pb-3 py-6'>
          <p className='text-4xl front-bold  inline border-b-4  border-gray-500'>Portfolio</p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (<>
            <a key={product.id} href={product.href} className=" border-2 border-white-900 p-4 group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex justify-between">
                
                <button className= 'group text-white w-fit  px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer'>
            Demo <span className='group-hover:rotate-90 duration-300 '><MdOutlineKeyboardArrowRight size={20}/> </span>
        </button>
        <button className= ' group text-white w-fit  px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer'>
            code <span className='group-hover:rotate-90 duration-300 '><MdOutlineKeyboardArrowRight size={20}/> </span>
        </button>     
              </div>

            </a>


</>
          ))}
        </div>
        <div className="flex justify-center items-center p-5">
        <button className= ' group text-white w-fit  px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  cursor-pointer'>
            Show More <span className='group-hover:rotate-90 duration-300 '> </span>
        </button>     
       
        </div>
        
      </div>
      
    </div>
  )
}