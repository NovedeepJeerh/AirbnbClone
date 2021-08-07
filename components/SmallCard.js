import Image from "next/image";

function SmallCard({img, location, distance}) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl text-white cursor-pointer hover:bg-red-400 hover:scale-105 transition-transform duration-200 ease-out">
            {/* left */}
            <div className="relative h-16 w-16">
                <Image 
                    src={img}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>
            {/* right */}
            <div>
                <h2 className="">{location}</h2>
                <h3 className="text-gray-600">{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard
