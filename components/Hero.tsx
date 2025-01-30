
import Illustration from "@/components/Illustration"
import PasswordGenerator from "@/components/PasswordGenerator"
import Link from "next/link";




function Hero(){
    return(
        <div className="flex flex-col items-center h-[860px] md:h-[830px] lg:h-[614px] p-2 mt-10">
            <div className="flex flex-col items-center gap-4">
            <h1 className="text-5xl font-[900] ">Random Password Generator</h1>
            <p>Create strong and secure passwords to keep your account safe online.</p>
            </div>
            <div className="flex items-center mt-12 gap-8">
                <Illustration />
                <PasswordGenerator />
            </div>

        </div>
    )
}
export default Hero;