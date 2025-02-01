
import Illustration from "@/components/Illustration"
import PasswordGenerator from "@/components/PasswordGenerator"
import Headings from "@/components/Headings"




function Hero(){
    return(
        <div className="flex flex-col items-center h-[990px] md:h-[830px] lg:h-screen p-2 mt-10  mb-10c">
            <Headings />
            <div className="flex flex-col items-center md:flex-col lg:flex-row mt-12 lg:mt-20 gap-8">
                <Illustration />
                <PasswordGenerator />
            </div>

        </div>
    )
}
export default Hero;