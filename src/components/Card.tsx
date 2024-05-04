import Image from "next/image"

interface Card {
  imageUrl: string;
  alt: string;
  titleCard: string;
  textBody: string;
}

function Card({ imageUrl, alt, titleCard, textBody }: Card) {
  return (
    <div className="flex h-[25vh] p-2 border-2 border-primaryBlack rounded gap-2 bg-primaryWhite/20
    md:flex-col md:size-full md:items-center md:px-1">

      <Image className="max-[376px]:hidden border-2 border-primaryBlack rounded w-[40%] object-cover object-center
      md:w-[90%] md:h-[30vh] lg:h-[45vh] lg:object-top"
        src={imageUrl} width={100} height={100} alt={alt} priority={true}  loading="eager"
      />

      <div className="max-[376px]:justify-between max-[376px]:pt-0 flex flex-col gap-2 justify-around pt-3 md:grow md:pt-1">
        <h2 className="max-[376px]:text-2xl text-center font-semibold text-3xl font-['Abhaya_Libre'] md:text-xl">{titleCard}</h2>
        <p className="text-center text-[1rem] leading-4	font-['Tenor_Sans'] md:mt-0 md:py-2">{textBody}</p>
        <button className="text-sm font-semibold shadow bg-rose text-primaryWhite rounded-md px-4 py-1 mt-2 mx-auto block md:mt-auto">Saiba mais</button>
      </div>
    </div>
  )
}

export default Card;