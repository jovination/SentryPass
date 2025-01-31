import Image from "next/image";
function Illustration(){
    return(
        <div className="w-full flex justify-center p-2">
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