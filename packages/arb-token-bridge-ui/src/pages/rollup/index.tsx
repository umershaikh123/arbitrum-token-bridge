import { AssetTable } from '../../components/common/Assets'
import CenteredTabs from '../../components/common/Tabs'
import ResponsiveAppBar from '../../components/common/navbar'

export default function Index() {
  return (
    <div id="backgroundImage" className="">
      <ResponsiveAppBar wallet={false} marginBelow={'mb-12'} />
      <div className="    flex    h-full w-full  flex-col     py-2 backdrop-blur-2xl  sm:px-16">
        <>
          <div className="mb-4 mt-4 flex w-full items-center justify-center space-x-8 text-[#CDEBFF]">
            <div className=" flex h-full  w-3/12 flex-col items-center justify-center rounded-xl  border-2 border-[#1377BB] px-2 py-4 text-center shadow-md   shadow-[#1377BB]">
              <h1 className=" lg:text-xl xl:text-2xl">ETH bridged</h1>
              <h1 className=" font-light lg:text-lg xl:text-xl">120 ETH</h1>
            </div>

            <div className=" flex h-full w-3/12 flex-col items-center justify-center rounded-xl  border-2 border-[#1377BB] px-2 py-4 text-center shadow-md   shadow-[#1377BB]">
              <h1 className="lg:text-xl xl:text-2xl ">Rewards earned</h1>
              <h1 className=" font-light lg:text-lg xl:text-xl">120 ETH</h1>
            </div>

            <div className=" flex h-full w-3/12 flex-col items-center  justify-center rounded-xl  border-2 border-[#1377BB] px-2 py-4 text-center shadow-md   shadow-[#1377BB]">
              <h1 className=" lg:text-xl xl:text-2xl">
                Total transactions processed
              </h1>
              <h1 className="font-light lg:text-lg xl:text-xl">120</h1>
            </div>
          </div>

          <div className="  flex  flex-row items-center justify-around ">
            <CenteredTabs />
          </div>
        </>
      </div>
    </div>
  )
}
