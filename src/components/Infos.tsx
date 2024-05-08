import { LuAlertCircle } from "react-icons/lu";

interface Props {
  infosList: string[];
}

export default function Infos({ infosList }: Props) {

  return (
    <div className="w-fit relative mt-10 px-12 py-6 mb-12 border border-primaryBlack rounded-lg mx-auto">
      <span className="absolute -top-3 right-[50%] bg-primaryWhite text-2xl px-3 text-rose"><LuAlertCircle /></span>
      <p className="font-bold">Informações importantes</p>
      <ul className="list-disc">
        {infosList.map( (item,i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}