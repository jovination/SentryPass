import FeaturedCards from "@/components/FeaturedCards"
function FeaturesSection(){
    return(
        <div className="w-full h-[1200px] md:h-[636px] bg-[#fffaeb] flex items-center justify-center flex-col space-y-14">
            <h1 className="text-4xl lg:text-5xl text-center font-[900] px-10 ">What makes a password strong?
            </h1>
      <FeaturedCards />
        </div>

    )
}
export default FeaturesSection;