import Stars from "@/components/icons/Stars"
import Quot from "@/components/icons/Quot"
import { FaInstagram } from "react-icons/fa";


interface ReviewCard {
  name: string;
  text: string;
  insta: string;
}

function ReviewCard({ name, text, insta }: ReviewCard) {
  return (
    <div className="border-rose border-4 flex flex-col items-end justify-between text-black rounded-2xl p-2 mt-2 w-[90%] h-[100%] overflow-auto mx-auto md:w-full ">
      <div className="flex w-full justify-between items-center p-3">
        <Quot />
        <p className="border-b-4 border-rose text-left grow px-3 mx-4 md:text-2xl font-['Abhaya_Libre']">{name}</p>
      </div>
      <p className="flex items-center gap-2 mr-8 -mt-2">{insta}<FaInstagram/></p>
      <p className="text-sm p-2 grow md:text-lg">
        {text}
      </p>
      <Stars className="m-4 self-start" />
    </div>

  )
}

export default ReviewCard;