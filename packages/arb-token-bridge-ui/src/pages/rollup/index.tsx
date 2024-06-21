import { AssetTable } from '../../components/common/Assets'
import CenteredTabs from '../../components/common/Tabs'
import ResponsiveAppBar from '../../components/common/navbar'

export default function Index() {
  return (
    <div id='backgroundImage' className=''>
      <ResponsiveAppBar wallet={false}   marginBelow={"mb-12"}/>
      <div className="    flex    h-full w-full  flex-col     sm:px-16 py-2  backdrop-blur-2xl">
        <>
        <div className='flex justify-center items-center w-full text-[#CDEBFF] space-x-8 mb-4 mt-4'>
              <div className=' border-2 text-center  shadow-md shadow-[#1377BB] border-[#1377BB] justify-center items-center  w-3/12 h-full py-4 px-2 flex flex-col   rounded-xl'>
                <h1 className=' lg:text-xl xl:text-2xl'>ETH bridged</h1>
                <h1 className=' lg:text-lg xl:text-xl font-light'>120 ETH</h1>
              </div>

              <div className=' border-2 text-center shadow-md shadow-[#1377BB] border-[#1377BB] justify-center items-center  w-3/12 h-full py-4 px-2 flex flex-col   rounded-xl'>
                <h1 className='lg:text-xl xl:text-2xl '>Rewards earned</h1>
                <h1 className=' lg:text-lg xl:text-xl font-light'>120 ETH</h1>
              </div>


              <div className=' border-2 text-center shadow-md shadow-[#1377BB] border-[#1377BB]  justify-center items-center  w-3/12 h-full py-4 px-2 flex flex-col   rounded-xl'>
                <h1 className=' lg:text-xl xl:text-2xl'>Total transactions processed</h1>
                <h1 className='lg:text-lg xl:text-xl font-light'>120</h1>
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
