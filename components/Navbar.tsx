import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
function Navbar(){
    return (
        <div>
         <nav 
         className="w-full px-4 md:px-8 flex flex-row items-center justify-between h-[90px] border-b border-[#C5D6E0]"
         >
            <Link
            className="flex items-center gap-2"
             href="/">
             <Image
              src="/sentrypass.svg"
              alt="SentryPass Logo"
              width={45}
              height={45}
             />
             <span className="text-2xl font-black">SentryPasskey</span>
            </Link>
            <Button className="rounded-[48px] text-lg font-medium w-[108px] h-[50px]" size="lg" >Get App</Button>
         </nav>

        </div>
    )
}
export default Navbar;