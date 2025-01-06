


const Box = ({event, date, venue}:{event:string, date:Date, venue:string}) => {
  return (
    <div className="bg-white/60  h-24 font-josefinSlab flex flex-row gap-2 p-2 rounded-md  hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 my-2">
        <img className="ml-2 w-20 rounded-md my-auto" src="camera.jpg" alt="Anything"/>
        <div className="flex flex-col  justify-center w-full ml-4">
            <p>{event}</p>
            <div className="flex gap-2 ">
                <p className="">Date: {date.toLocaleDateString()}</p>
                <p className="">Venue: {venue}</p>
            </div>
        </div>
    </div>
  )
}

export default Box
