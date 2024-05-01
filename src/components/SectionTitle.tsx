
interface Props {
  sectionTitle: string;
}
function SectionTitle({ sectionTitle }: Props) {
  return (
    <h2 className="w-full bg-primaryBlack text-white text-center p-2 rounded-lg font-['Abhaya_Libre'] text-xl font-bold lg:text-3xl">{sectionTitle}</h2>
  )
}

export default SectionTitle;