import Image from "next/image";
import { Button } from "./ui/button";
import { Label } from "@/components/ui/label"
import { IoRefreshOutline } from "react-icons/io5";
import Link from "next/link";




function Hero(){
    return(
        <div className="flex flex-col items-center h-[860px] md:h-[830px] lg:h-[614px] p-2 mt-4">
            <div className="flex flex-col items-center gap-4">
            <h1 className="text-5xl font-[900] ">Random Password Generator</h1>
            <p>Create strong and secure passwords to keep your account safe online.</p>
            </div>
            <div className="flex items-center mt-12 gap-8">
                <div className="">
                <Image
                 src="/illustration.svg"
                 alt="illustration"
                 width={500}
                 height={350}
                />
                </div>
                <div className="w-[560px] h-[312px]">
                        <div className="flex items-center justify-between">
                            <div
                            className="w-full max-w-[450px] h-[56px] rounded-full px-6 border border-[#d4d4d8] flex items-center justify-between"
                            >
                            <div>    
                            <Label
                            className="text-base font-lg"
                             htmlFor="password">5bUle3YWo8zYjdM</Label>
                            </div>
                            <div>
                            <Label
                            className="bg-[#C2F0CE] px-2 py-1 rounded-md  text-xs font-[600] tracking-wider"
                             htmlFor="password-level-status">Very strong</Label>
                             <Link>
                             <IoRefreshOutline />
                             </Link>
                            </div>
                            
                            </div>
                            <Button
                            className="bg-[#0B57CE] w-[95px] h-[54px] rounded-full text-base font-semibold" 
                            >Copy
                            </Button>

                        </div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
    )
}
export default Hero;