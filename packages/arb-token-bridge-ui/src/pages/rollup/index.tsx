import { AssetTable } from '../../components/common/Assets'

export default function Index() {
  return (
    <div className="    flex  min-h-[80vh]   w-full  flex-col justify-center  px-16 py-2">
      <>
        {/* <div className="flex "> */}
        <div className="mt-4 flex  flex-row items-center justify-around ">
          <div className="  text-wrap h-full w-[20rem] rounded-2xl border-2 bg-blue-500  px-4 py-6 text-center text-xl font-semibold text-white">
            <h1>52</h1>
            <h1>Staking Earned Returns</h1>
          </div>
          <div className="  text-wrap h-full w-[20rem] rounded-2xl border-2 bg-blue-500  px-4 py-6 text-center text-xl font-semibold text-white">
            <h1>1000</h1>
            <h1>Total ETH bridged</h1>
          </div>

          <div className="  text-wrap h-full w-[20rem] rounded-2xl border-2 bg-blue-500  px-4 py-6 text-center text-xl font-semibold text-white">
            <h1>52,000</h1>
            <h1>transactions processed</h1>
          </div>
        </div>

        <div className="mt-8 flex  flex-col space-y-4">
          <h1 className="text-5xl  font-semibold text-black">
            Bridging Assets
          </h1>

          <h1 className="text-md  font-medium text-gray-500">
            ETH associated assets in native bridge
          </h1>
        </div>

        <AssetTable />
      </>
    </div>
  )
}
