import Image from "next/image";
function Illustration(){
    return(
        <div className="">
        <Image
          src="/illustration.svg"
          alt="illustration"
          width={500}
          height={350}
          className="w-full max-w-[500px] h-auto"
        />
      </div>
    )
}
export default Illustration;