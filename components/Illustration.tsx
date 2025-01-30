import Image from "next/image";
function Illustration(){
    return(
            <div className="">
                <Image
                 src="/illustration.svg"
                 alt="illustration"
                 width={500}
                 height={350}
                />
            </div>
    )
}
export default Illustration;