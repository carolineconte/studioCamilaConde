import Stars from "@/components/icons/Stars"
import Quot from "@/components/icons/Quot"


interface ReviewCard {
  name: string;
  text: string;
}

function ReviewCard({ name, text }: ReviewCard) {
  return (
    <div className="bg-rose text-primaryWhite rounded-2xl p-2 mt-2 w-[90%] h-44 overflow-auto mx-auto md:w-full ">
      <div className="flex w-full justify-between items-center p-3">
       <Quot />
        <p className="border-b text-left grow px-3 mx-4 md:text-xl font-['Abhaya_Libre']">{name}</p>
        <Stars />
      </div>
      <p className="text-sm p-2 font-['Tenor_Sans']">
        {text}
      </p>
    </div>

  )
}

export default ReviewCard;