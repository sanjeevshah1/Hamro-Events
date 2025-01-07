import Box from "../Components/Box"
import Info from "../Components/Info"

const provider = () => {
  return (
    <div className="bg-mainColor min-h-screen font-josefinSlab flex flex-col">
      <Info name='nischal' email="nischal" phone="9800000000" location="hd"/>
      <div className="flex flex-col px-4 mx-4">
        <p className="text-[2rem] text-white ">Services</p>

        <div className="flex flex-col gap-2  mb-5">
          <p className="text-[1.5rem] text-center">Accepted</p>
          <Box event="Birthday" date={new Date()} venue="Somewhere"/>
          <Box event="Entertainment" date={new Date()} venue="Somewhere"/>
          <Box event="Wedding" date={new Date()} venue="Somewhere"/>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <p className="text-[1.5rem] text-center">Requests</p>
          <Box event="Birthday" date={new Date()} venue="Somewhere"/>
          <Box event="Entertainment" date={new Date()} venue="Somewhere"/>
          <Box event="Wedding" date={new Date()} venue="Somewhere"/>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <p className="text-[1.5rem] text-center">Available</p>
          <Box event="Birthday" date={new Date()} venue="Somewhere"/>
          <Box event="Entertainment" date={new Date()} venue="Somewhere"/>
          <Box event="Wedding" date={new Date()} venue="Somewhere"/>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          <p className="text-[1.5rem] text-center">Not Available</p>
          <Box event="Birthday" date={new Date()} venue="Somewhere"/>
          <Box event="Entertainment" date={new Date()} venue="Somewhere"/>
          <Box event="Wedding" date={new Date()} venue="Somewhere"/>
        </div>
      
      </div>
    </div>
  )
}

export default provider