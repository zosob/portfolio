import HeroCard from './cards/HeroCard';
import AboutCard from './cards/AboutCard';
import ResearchCard from './cards/ResearchCard';
import PublicationsCard from './cards/PublicationsCard';
import TeachingCard from './cards/TeachingCard';
import AwardsCard from './cards/AwardsCard';
import ContactCard from './cards/ContactCard';

export default function BentoGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

      {/* Row 1: Hero (2/3) + About (1/3) — equal height via grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 md:items-stretch">
        <div className="md:col-span-2 flex">
          <div className="w-full"><HeroCard /></div>
        </div>
        <div className="flex">
          <div className="w-full"><AboutCard /></div>
        </div>
      </div>

      {/* Row 2: Research (1/3) + Publications (2/3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 md:items-stretch">
        <div className="flex">
          <div className="w-full"><ResearchCard /></div>
        </div>
        <div className="md:col-span-2 flex">
          <div className="w-full"><PublicationsCard /></div>
        </div>
      </div>

      {/* Row 3: Teaching (2/3) + Awards (1/3) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 md:items-stretch">
        <div className="md:col-span-2 flex">
          <div className="w-full"><TeachingCard /></div>
        </div>
        <div className="flex">
          <div className="w-full"><AwardsCard /></div>
        </div>
      </div>

      {/* Row 4: Contact full width */}
      <div>
        <ContactCard />
      </div>

    </section>
  );
}