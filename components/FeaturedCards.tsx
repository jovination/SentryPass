import { FeaturedCard } from "./FeaturedCard"

const featuredCardData = [
  {
    imageSrc: "/password-checkmark.svg",
    imageAlt: "password-checkmark",
    title: "Long",
    description:
      "The longer a password, the more secure it is. A strong password should be at least 10 characters long.",
  },
  {
    imageSrc: "/encryption-lock.svg",
    imageAlt: "encryption-lock",
    title: "Complex",
    description:
      "Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable string of characters that doesn't resemble words or names.",
  },
  {
    imageSrc: "/data-shield-fingerprint.svg",
    imageAlt: "data-shield-fingerprint",
    title: "Unique",
    description: "A strong password should be unique to each account to reduce vulnerability in the event of a hack.",
  },
]

 function FeaturedCards() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-8">
      <div className="w-full flex flex-col gap-10 lg:flex-row justify-center">
        {featuredCardData.map((card, index) => (
          <div key={index} className="flex justify-center">
            <FeaturedCard
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default FeaturedCards;

