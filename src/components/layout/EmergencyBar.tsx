import { useState } from 'react';
import { Siren, PhoneCall, ChevronDown, ChevronUp, ShieldAlert, HeartPulse, Flame, Waves } from 'lucide-react';

interface EmergencyContact {
  id: string;
  name: string;
  subtext: string;
  number: string;
  displayNumber: string;
  icon: typeof HeartPulse;
  colorClass: string;
  borderClass: string;
}

const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: 'mdh',
    name: 'Hospital ER',
    subtext: "M'lang District Hospital",
    number: '09631805532',
    displayNumber: '0963-180-5532',
    icon: HeartPulse,
    colorClass: 'bg-rose-600 hover:bg-rose-700 text-white',
    borderClass: 'border-rose-700',
  },
  {
    id: 'pnp',
    name: 'Police Station',
    subtext: 'PNP M’lang Hotline',
    number: '09501545463',
    displayNumber: '0950-154-5463',
    icon: ShieldAlert,
    colorClass: 'bg-blue-600 hover:bg-blue-700 text-white',
    borderClass: 'border-blue-700',
  },
  {
    id: 'bfp',
    name: 'Fire Station',
    subtext: 'BFP Emergency',
    number: '0645720160',
    displayNumber: '(064) 572-0160',
    icon: Flame,
    colorClass: 'bg-amber-600 hover:bg-amber-700 text-white',
    borderClass: 'border-amber-700',
  },
  {
    id: 'mdrrmo',
    name: 'Rescue 24/7',
    subtext: 'MDRRMO Operations',
    number: '09298765432',
    displayNumber: '0929-876-5432',
    icon: Waves,
    colorClass: 'bg-emerald-700 hover:bg-emerald-800 text-white',
    borderClass: 'border-emerald-800',
  },
];

export const EmergencyBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900 text-white border-b border-slate-800 transition shadow-inner">
      <div className="max-w-4xl mx-auto px-4 py-2">
        {/* Toggle Bar */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-xs font-bold text-rose-400 hover:text-rose-300 transition cursor-pointer"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
            </span>
            <Siren className="w-4 h-4 text-rose-400" />
            <span className="tracking-wide uppercase">Emergency 24/7 Speed Dial</span>
            <span className="hidden sm:inline text-[11px] text-slate-400 font-normal">
              — Police, Hospital, BFP, MDRRMO
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded transition cursor-pointer"
          >
            <span>{isOpen ? 'Hide Hotlines' : 'Quick Call'}</span>
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Expandable Emergency Hotlines Grid */}
        {isOpen && (
          <div className="pt-3 pb-2 grid grid-cols-2 sm:grid-cols-4 gap-2 animate-in fade-in slide-in-from-top-1 duration-150">
            {EMERGENCY_CONTACTS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={`tel:${item.number}`}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border ${item.borderClass} ${item.colorClass} shadow-sm transition active:scale-98`}
                  title={`Call ${item.name} (${item.displayNumber})`}
                >
                  <div className="p-1.5 rounded-lg bg-black/20 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs truncate">{item.name}</span>
                      <PhoneCall className="w-3 h-3 opacity-80" />
                    </div>
                    <p className="text-[10px] opacity-90 font-mono truncate">{item.displayNumber}</p>
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
