import bgBottom from "/images/bg-pattern-bottom.svg"
import bgTop from "/images/bg-pattern-top.svg"
import bgCard from "/images/bg-pattern-card.svg"
import victor from "/images/image-victor.jpg"

export default function App() {
  const infors = [
    { num: "80K", content: "Followers" },
    { num: "803K", content: "Likes" },
    { num: "1.4K", content: "Photos" }
  ]
  return (
    <main className="min-h-screen flex justify-center items-center bg-Darkcyan">
      <section>
        <img src={bgTop} alt="" className="absolute -top-72 -left-32 w-1/2" />

        <div className="bg-white rounded-lg w-96">
          <div className="relative">
            <img src={victor} alt="" className="absolute rounded-full ml-32 bg-white p-2 mt-28" />
            <img src={bgCard} alt="" className="w-full rounded-lg" />

          </div>
          <div className="flex flex-col items-center p-4 mt-16">
            <h1 className="text-xl font-semibold">Victor Crest <p className="inline-flex text-Darkgrayishblue">26</p></h1>
            <span className="text-Darkgrayishblue">London</span>
            <div className="flex flex-row gap-8 mt-8">
              {infors.map((infor) => (
                <div>
                  <h1 className="text-xl font-semibold">{infor.num}</h1>
                  <p className="text-Darkgrayishblue">{infor.content}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
        <img src={bgBottom} alt="" className="absolute -bottom-72 -right-32 w-1/2" />
      </section>
    </main>
  )
}