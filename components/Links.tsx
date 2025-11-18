import DottedGlowBackground from "./ui/dotted-glow-background";
export default function MyLinks() {
  const favoriteLinks = [
    {
      title: "Homepage",
      description: "My online portfolio and personal website.",
      link: "https://www.thepaynetrain.com",
      image: "/links-cvhome.jpg", // Path to your image in your project
    },
    {
      title: "Blog",
      description:
        "A central place for all my articles posted over the internet, mainly linkedin but some others as well.",
      link: "https://blog.thepaynetrain.com",
      image: "/links-blog.jpg",
    },
    {
      title: "LinkedIn",
      description: "My Linkedin Profile.",
      link: "https://www.linkedin.com/in/lapayne1982/",
      image: "/links-linkedin.png",
    },
    {
      title: "Github",
      description: "My Github repo with various projects and code samples.",
      link: "https://github.com/lapayne",
      image: "/links-github.png",
    },
  ];

  return (
    // The main container with the Dotted Background effect applied
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* This is where the Dotted Glow Background component would sit. 
        It usually applies the SVG dots and the subtle glow effect.
      */}
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />

      <div className="relative z-10 mx-auto max-w-xl space-y-6 px-4 py-8">
        {favoriteLinks.map((item, index) => (
          // Individual Clickable Link Card
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            // Styling for the Aceternity UI card look
            className="group block w-full rounded-xl border border-white/[0.1] bg-black px-6 py-6 transition duration-300 ease-in-out hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:border-white/[0.2]"
          >
            <div className="flex items-center space-x-6">
              {/* Image Placeholder */}
              <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-white transition duration-200 group-hover:text-cyan-400">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  {item.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
