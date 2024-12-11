import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";

export default function ActivityCard() {
  return (
    <div className="mx-auto flex max-w-full flex-col items-center space-y-3 text-center">
      <h2 className="font-heading text-4xl leading-[1.1] sm:text-6xl md:text-3xl lg:text-5xl font-bold">
        Actividades y Lugares en Nariño
      </h2>
      <p className="text-muted-foreground max-w-[85%] pb-1 sm:pb-1 lg:pb-10 leading-normal sm:text-lg sm:leading-7">
        Explora las mejores actividades y lugares turísticos que Nariño tiene para ofrecer 🎮
      </p>

      <MagicContainer
        className="mt-20 flex h-auto w-full flex-wrap justify-center gap-10 px-14 pb-16 md:mt-28 lg:mt-28"
      >
        {/** Cr 28 _#17 39 centro piso edifisio tabarue **/}
        {[{
          title: "Serendismo",
          image: "/images/volcan-galeras.jpg"
        }, {
          title: "Cultura",
          image: "/images/laguna.jpeg"
        }, {
          title: "Gastronomia",
          image: "/images/papa.jpeg"
        }, {
          title: "Artesanía",
          image: "/images/nevados.jpeg"
        }, {
          title: "Relajación",
          image: "/images/cumbal.jpg"
        }, {
          title: "Festividades",
          image: "/images/ipiales.jpeg"
        }].map(({ title, image }, index) => (
          <MagicCard 
            key={index}
            className="relative flex w-full sm:w-4/5 md:w-1/4 lg:w-1/5 cursor-pointer flex-col items-center justify-center overflow-hidden shadow-lg"
          >
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${image}')` }}
            />
            <div className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_50%_120%,rgba(0,128,0,0.4),rgba(255,255,255,0))]" />
            <p className="z-10 whitespace-nowrap text-4xl font-medium text-white dark:text-gray-200 relative">
              {title}
            </p>
          </MagicCard>
        ))}
      </MagicContainer>
    </div>
  );
}
