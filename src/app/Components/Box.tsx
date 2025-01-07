import { Edit, Search} from 'lucide-react';

type BoxProps = |{type: "event" | "user"; event:string, date:Date; venue:string}
          |{type: "provider"; provider:string; email:string; status:string};

const Box = ( props: BoxProps) => {
  if (props.type === "event" || props.type === "user")
  {
    return (
    <div className="bg-white/60  h-24 font-josefinSlab flex flex-row gap-2 p-2 rounded-md  hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 my-2">
        <img className="ml-2 w-20 rounded-md my-auto" src="camera.jpg" alt="Anything"/>
        <div className="flex flex-col  justify-center w-full ml-4">
            <p>{props.event}</p>
            <div className="flex gap-2 ">
                <p className="">Date: {props.date.toLocaleDateString()}</p>
                <p className="">Venue: {props.venue}</p>
            </div>
        </div>
        <button className='mr-2'>{/* edit */} <Edit size={20}/></button>
    </div>
  )}

  if (props.type === "provider")
    {
      return (
      <div className="bg-white/60  h-28 font-josefinSlab flex flex-row gap-2 p-2 rounded-md  hover:-translate-y-1 hover:shadow-lg transition-transform duration-300 my-2">
          <img className="ml-2 w-28 rounded-md my-auto" src="camera.jpg" alt="Anything"/>
          <div className="flex flex-col justify-center w-36 lg:w-full lg:ml-4 m-2\">
              <p>{props.provider}</p>
              <div className="flex flex-col overflow-hidden">
                  <p className="">Email: {props.email}</p>
                  <p className="">Status: {props.status}</p>
              </div>
          </div>
          <button className='mr-2'>{/* edit */} <Edit size={20}/></button>
      </div>
    )}

}

export default Box
