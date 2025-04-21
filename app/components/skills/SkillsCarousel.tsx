export default function SkillsCarousel({
  slides,
}: {
  slides: { name: string; link: string; id: number }[];
}) {
  return (
    <div>
      {slides.map((slide) => (
        <image key={slide.id} href={slide.link}></image>
      ))}
    </div>
  );
}
