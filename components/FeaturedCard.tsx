import Image from "next/image"

interface FeaturedCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
}

export function FeaturedCard({ imageSrc, imageAlt, title, description }: FeaturedCardProps) {
  return (
    <div className="w-full   md:w-[448px] lg:w-[320px] h-auto min-h-[296px] bg-white rounded-[36px] flex flex-col items-center space-y-4 px-6 py-8 border border-[#FFDDBF]">
      <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} width={80} height={80} />
      <p className="font-semibold">{title}</p>
      <p className="text text-center">{description}</p>
    </div>
  )
}
