import Image from "next/image";

interface Props {
  title: string;
  text: string;
}

function Cta({ title, text }: Props) {
  return (
    <section className="bg-primaryBlack text-primaryWhite flex text-center lg:w-[80%] rounded mx-auto">
      <Image width={500} height={500} src={'/imgCta.jpg'} alt=""  loading="lazy"
        className="hidden md:block w-[60%]"
      />
      <div className="flex flex-col gap-5 justify-between p-5 md:py-12 lg:p-16">
     
        <h2 className="font-['Abhaya_Libre'] text-rose drop-shadow-lg	leading-6 text-2xl font-semibold lg:text-3xl">{title}</h2>
        <p className="p-1 font-light text-sm md:text-lg">{text}</p>

        <div className="relative my-3 px-4 py-3 max-w-[400px] w-full mx-auto rounded-full hover:bg-primaryWhite hover:text-primaryBlack  cursor-pointer border-2 border-primaryWhite bg-primaryBlack text-primaryWhite">
          <div className="bg-rose p-2 shadow-2xl rounded-full w-fit absolute -top-3 -left-2">
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.3819 0.123413C6.07734 0.123413 0.966797 5.21774 0.966797 11.5023C0.966797 13.6529 1.56609 15.667 2.60829 17.3829L1.59006 20.833C1.5316 21.0311 1.52775 21.2412 1.57893 21.4413C1.6301 21.6414 1.7344 21.824 1.88087 21.97C2.02734 22.116 2.21057 22.22 2.41128 22.271C2.612 22.322 2.8228 22.3182 3.02152 22.2599L6.48257 21.2449C8.26182 22.318 10.3023 22.884 12.3819 22.8812C18.6865 22.8812 23.797 17.7869 23.797 11.5023C23.797 5.21774 18.6865 0.123413 12.3819 0.123413ZM9.7998 14.0773C12.1091 16.3782 14.3133 16.682 15.0918 16.7104C16.2756 16.7537 17.4285 15.8524 17.8771 14.8067C17.9338 14.6766 17.9543 14.5338 17.9367 14.3931C17.919 14.2524 17.8637 14.119 17.7767 14.0068C17.1511 13.2103 16.3053 12.6379 15.4788 12.069C15.3063 11.95 15.0942 11.9023 14.8871 11.9358C14.6801 11.9694 14.4941 12.0815 14.3681 12.2488L13.6832 13.2899C13.6472 13.3459 13.5911 13.386 13.5264 13.4021C13.4616 13.4182 13.3932 13.409 13.3351 13.3764C12.8705 13.1113 12.1935 12.6607 11.7073 12.1759C11.221 11.6912 10.7963 11.0471 10.5578 10.6136C10.5282 10.5585 10.5196 10.4946 10.5337 10.4337C10.5478 10.3729 10.5835 10.3191 10.6342 10.2825L11.689 9.50189C11.8395 9.37142 11.9367 9.19034 11.9619 8.9931C11.9872 8.79586 11.9388 8.59625 11.826 8.43228C11.3146 7.68582 10.7187 6.73682 9.8546 6.10757C9.74308 6.02701 9.61244 5.97678 9.47554 5.96182C9.33864 5.94685 9.20018 5.96767 9.0738 6.02223C8.02361 6.47056 7.11497 7.61982 7.15835 8.80209C7.18689 9.57813 7.49167 11.7754 9.7998 14.0773Z" fill="#EEEDE9" />
            </svg>
          </div>
          <a target="_blank" href={'https://api.whatsapp.com/send/?phone=5567991697056&text&type=phone_number&app_absent=0'} className="linkCta text-2xl">Agende seu horario</a>
        </div>
      </div>
    </section>
  )
}

export default Cta;