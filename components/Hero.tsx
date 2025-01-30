import Image from "next/image";
import { Button } from "./ui/button";
import { Label } from "@/components/ui/label"
import { IoRefresh } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { RxMinus } from "react-icons/rx";
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"





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
                <div className="w-[560px] h-[312px] flex flex-col justify-center  space-y-14">
                    <div className="flex items-center justify-between">
                            <div
                            className="w-full max-w-[450px] h-[56px] rounded-full pr-4 pl-6 border border-[#d4d4d8] flex items-center justify-between"
                            >
                            <div>    
                            <Label
                            className="text-base font-lg"
                             htmlFor="password">5bUle3YWo8zYjdM</Label>
                            </div>
                            <div className="flex items-center gap-2">
                            <Label
                            className="bg-[#C2F0CE] px-3 py-1 rounded-md  text-xs font-[600] tracking-wider"
                             htmlFor="password-level-status">Very strong</Label>
                             <Link
                              href="/">
                             <IoRefresh className="text-2xl  scale-x-[-1]" />
                             </Link>
                            </div>
                            
                            </div>
                            <Button
                            className="bg-[#0B57CE] w-[95px] h-[54px] rounded-full text-base font-semibold" 
                            >Copy
                            </Button>

                        </div>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col space-y-1 ml-2">
                            <p>Password length: 
                            </p>
                            <p className="font-semibold">15</p>
                        </div>
                        <div className="flex items-center justify-between w-full max-w-[320px]">
                        <Button className="rounded-full border border-black" variant="outline" size="icon">
                        <RxMinus />
                        </Button>
                        <Slider
                        className="w-[220px]"
                         defaultValue={[50]} max={100} step={1} />

                        <Button className="rounded-full border border-black" variant="outline" size="icon">
                        <GoPlus />
                        </Button>

                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="ml-2">
                            <p>Characters used:</p>
                        </div>
                        <div className="flex items-center space-x-8">
                         
                            <div className="flex items-center space-x-2">
                                <Checkbox  />
                                <Label className="text-md font-bold" htmlFor="ABC">ABC</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox  />
                                <Label className="text-md font-bold" htmlFor="abc">abc</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox  />
                                <Label className="text-md font-bold" htmlFor="123">123</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox  />
                                <Label className="text-md font-bold" htmlFor="#$&">#$&</Label>
                            </div>
                       </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Hero;