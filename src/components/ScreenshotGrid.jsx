import { useState } from 'react';
import { BarChart3, KanbanSquare, Smartphone, UserRound } from 'lucide-react';
import customerProfile from '../assets/customer-profile.png';
import dashboardDesktop from '../assets/dashboard-desktop.png';
import dealsPipeline from '../assets/deals-pipeline.png';
import mobileDashboard from '../assets/mobile-dashboard.png';

const screenshots = [
  {
    src: dashboardDesktop,
    caption: 'Analytics dashboard',
    alt: 'SalesFlow CRM analytics dashboard screenshot',
    icon: BarChart3
  },
  {
    src: mobileDashboard,
    caption: 'Mobile CRM experience',
    alt: 'SalesFlow CRM mobile dashboard screenshot',
    icon: Smartphone
  },
  {
    src: dealsPipeline,
    caption: 'Deal pipeline board',
    alt: 'SalesFlow CRM deal pipeline board screenshot',
    icon: KanbanSquare
  },
  {
    src: customerProfile,
    caption: 'Customer profile timeline',
    alt: 'SalesFlow CRM customer profile activity timeline screenshot',
    icon: UserRound
  }
];

function ScreenshotCard({ item }) {
  const Icon = item.icon;
  const [missingImage, setMissingImage] = useState(false);

  return (
    <figure className="premium-card group overflow-hidden">
      <div className="relative flex min-h-[240px] items-center justify-center bg-[#0b1220] p-2 sm:min-h-[390px] sm:p-3">
        {!missingImage ? (
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[520px] w-full object-contain"
            onError={() => setMissingImage(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col justify-between p-5 text-paper">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center border border-white/[0.1] bg-white/[0.06]">
                <Icon size={19} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/45">SalesFlow</span>
            </div>
            <div>
              <div className="mb-4 grid grid-cols-4 gap-2">
                {[72, 56, 84, 64].map((height, index) => (
                  <div key={index} className="flex h-20 items-end bg-white/[0.08] p-1">
                    <span className="block w-full bg-sage/70" style={{ height: `${height}%` }} />
                  </div>
                ))}
              </div>
              <div className="h-2 w-3/4 bg-white/[0.12]" />
              <div className="mt-2 h-2 w-1/2 bg-white/[0.1]" />
            </div>
          </div>
        )}
      </div>
      <figcaption className="border-t border-white/[0.08] px-4 py-3 text-sm font-medium text-slate-300">
        {item.caption}
      </figcaption>
    </figure>
  );
}

export default function ScreenshotGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {screenshots.map((item) => (
        <ScreenshotCard key={item.caption} item={item} />
      ))}
    </div>
  );
}
