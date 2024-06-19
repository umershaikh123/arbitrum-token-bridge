import { AssetTable } from '../../components/common/Assets'
import CenteredTabs from '../../components/common/Tabs'
import ResponsiveAppBar from '../../components/common/navbar'

export default function Index() {
  return (
    <div id='backgroundImage' className=''>
      <ResponsiveAppBar wallet={false}   marginBelow={"mb-12"}/>
      <div className="    flex   h-full  w-full  flex-col     px-16 py-2">
        <>
          <div className="  flex  flex-row items-center justify-around ">
            <CenteredTabs />
          </div>
        </>
      </div>
    </div>
  )
}
