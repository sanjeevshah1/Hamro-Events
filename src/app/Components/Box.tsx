


const Box = ({event, date, venue}:{event:string, date:Date, venue:string}) => {
  return (
    <div className="bg-[#D9D9D9] font-josefinSlab flex flex-row gap-2 p-2 rounded-md">
        <img className="w-20 rounded-md my-auto" src="camera.jpg" alt="Anything"/>
        <div className="flex flex-col items-center">
            <p>{event}</p>
            <div className="flex gap-2 ">
                <p className="">Date:{date.toLocaleDateString()}</p>
                <p className="">Venue:{venue}</p>
            </div>
        </div>
    </div>
  )
}

export default Box
