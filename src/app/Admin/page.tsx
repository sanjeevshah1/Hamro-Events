import Info from "../Components/Info"
import Box from "../Components/Box"
import PieChart from "../Components/Pie"

const page = () => {
  return (
    <div className="min-h-screen font-josefinSlab flex flex-col">
      <Info name="Nischal" />
      <div className="flex flex-col px-4 mx-4">
        <p className="text-[2rem] text-white ">Service Providers</p>

        <div className="flex flex-col gap-2  mb-5">
          <Box type="provider" provider="Birthday" email="nischalojha59@gmail.com" status="Active"/>
          <Box type="provider" provider="Entertainment" email="ent@gmail.com" status="Banned"/>
          <Box type="provider" provider="Wedding" email="wed@gmail.com" status="Active"/>
        </div>
        
        <p className="text-[2rem] text-white lg:mt-10">Users</p>

        <PieChart dataValues={[12, 20]}/>

      </div>
    </div>
  )
}

export default page