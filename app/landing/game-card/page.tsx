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
        <MagicCard 
          className="flex w-full sm:w-4/5 md:w-1/4 lg:w-1/5 cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-lg"
          style={{
            backgroundImage: "url('/path-to-image/volcan-galeras.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-white dark:text-gray-200">
            Volcán Galeras
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(0,128,0,0.6),rgba(255,255,255,0))]" />
        </MagicCard>

        <MagicCard 
          className="flex w-full sm:w-4/5 md:w-1/4 lg:w-1/5 cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-lg"
          style={{
            backgroundImage: "url('/path-to-image/laguna-la-cocha.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-white dark:text-gray-200">
            Laguna de La Cocha
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(0,128,0,0.6),rgba(255,255,255,0))]" />
        </MagicCard>

        <MagicCard 
          className="flex w-full sm:w-4/5 md:w-1/4 lg:w-1/5 cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-lg"
          style={{
            backgroundImage: "url('/path-to-image/santuario-las-lajas.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-white dark:text-gray-200">
            Santuario de las Lajas
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(0,128,0,0.6),rgba(255,255,255,0))]" />
        </MagicCard>

        <MagicCard 
          className="flex w-full sm:w-4/5 md:w-1/4 lg:w-1/5 cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-lg"
          style={{
            backgroundImage: "url('/path-to-image/parque-los-nevados.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-white dark:text-gray-200">
            Parque Nacional Natural de Los Nevados
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(0,128,0,0.6),rgba(255,255,255,0))]" />
        </MagicCard>

        <MagicCard 
          className="flex w-full sm:w-4/5 md:w-1/4 lg:w-1/5 cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-lg"
          style={{
            backgroundImage: "url('/path-to-image/cumbal.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-white dark:text-gray-200">
            Cumbal
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(0,128,0,0.6),rgba(255,255,255,0))]" />
        </MagicCard>

        <MagicCard 
          className="flex w-full sm:w-4/5 md:w-1/4 lg:w-1/5 cursor-pointer flex-col items-center justify-center overflow-hidden p-20 shadow-lg"
          style={{
            backgroundImage: "url('/path-to-image/ipiales.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <p className="z-10 whitespace-nowrap text-4xl font-medium text-white dark:text-gray-200">
            Ipiales
          </p>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(0,128,0,0.6),rgba(255,255,255,0))]" />
        </MagicCard>
      </MagicContainer>
    </div>
  );
}
