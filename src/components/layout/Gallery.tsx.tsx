import Image from "next/image";

interface Props {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
}

export default function Gallery({ img1, text1, img2, text2, img3, text3, img4, text4, img5, img6, text5 }: Props) {
  return (
    <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-24">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">

        <div className=" hidden col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full md:flex flex-col">
          <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
            <Image loading="lazy" width={200} height={200} src={img1} alt="" className="absolute inset-0 h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
            <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">{text1}</h3>
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">

          <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
              <Image loading="lazy" width={200} height={200} src={img2} alt="" className="absolute inset-0 h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">{text3}</h3>
            </div>
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
              <Image loading="lazy" width={200} height={200} src={img3} alt="" className="absolute inset-0 h-full w-full object-cover  object-top  group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">{text4}</h3>
            </div>
          </div>

          <div className="grid mt-4 gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
              <Image loading="lazy" width={200} height={200} src={img4} alt="" className="absolute inset-0 h-full w-full object-cover  object-center  group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">{text3}</h3>
            </div>
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
              <Image loading="lazy" width={200} height={200} src={img5} alt="" className="absolute inset-0 h-full w-full object-cover  object-top  group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">{text4}</h3>
            </div>
          </div>
        </div>
        {
          img6 && (
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <div className="group relative hidden md:flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                <Image loading="lazy" width={200} height={200} src={img6} alt="" className="absolute inset-0 h-full w-full object-cover  object-top  group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">{text5}</h3>
              </div>
            </div>
          )
        }


      </div>
    </div>

  )
}
