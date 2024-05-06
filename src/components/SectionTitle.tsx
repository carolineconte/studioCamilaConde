
import Shine from '@/components/icons/Shine'
interface Props {
  sectionTitle: string;
}

function SectionTitle({ sectionTitle }: Props) {
  return (
    <div className='p-2 w-full gap-0 flex bg-primaryBlack text-white rounded-lg items-center justify-center '>
     <div className='-m-6 pb-4 opacity-30'>
        <Shine />
      </div>
      <h2 className="font-['Abhaya_Libre'] text-xl font-bold lg:text-3xl">
        {sectionTitle}
      </h2>
      <div className='-m-6 pt-6 opacity-30'>
        <Shine />
      </div>
    </div>
  )
}

export default SectionTitle;