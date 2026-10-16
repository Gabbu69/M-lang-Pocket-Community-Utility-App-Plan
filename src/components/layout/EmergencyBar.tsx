import { useState } from 'react';
import { Siren, PhoneCall, ChevronDown, ChevronUp, ShieldAlert, HeartPulse } from 'lucide-react';
import { MLANG_DIRECTORY } from '../../data/mlangDirectory';

interface EmergencyContact {
  id: string;
  name: string;
  subtext: string;
  number: string;
  displayNumber: string;
  icon: typeof HeartPulse;
  colorClass: string;
  borderClass: string;
  sourceUrl: string;
  sourceLabel: string;
}

const hospital = MLANG_DIRECTORY.find((listing) => listing.id === 'mdh-hospital');
const police = MLANG_DIRECTORY.find((listing) => listing.id === 'police-station');

const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: 'national-911',
    name: 'Emergency 911',
    subtext: 'Police, fire, medical & rescue',
    number: '911',
    displayNumber: '911',
    icon: Siren,
    colorClass: 'bg-rose-600 hover:bg-rose-700 text-white',
    borderClass: 'border-rose-700',
    sourceUrl: 'https://pia.gov.ph/press-release/911-becomes-filipinos-lifeline-as-emergency-calls-top-5-2-million-in-early-2026/',
    sourceLabel: '911: DILG / PIA',
  },
  ...(police?.contact.isVerified && police.contact.mobile && police.contact.sourceUrl ? [{
    id: 'pnp',
    name: 'Police Station',
    subtext: 'Published municipal hotline',
    number: police.contact.mobile.replace(/[^0-9+]/g, ''),
    displayNumber: police.contact.mobile,
    icon: ShieldAlert,
    colorClass: 'bg-blue-600 hover:bg-blue-700 text-white',
    borderClass: 'border-blue-700',
    sourceUrl: police.contact.sourceUrl,
    sourceLabel: 'Police: LGU contact page',
  }] : []),
  ...(hospital?.contact.isVerified && hospital.contact.landline && hospital.contact.sourceUrl ? [{
    id: 'mdh',
    name: 'Hospital Contact',
    subtext: 'General hospital line',
    number: hospital.contact.landline.replace(/[^0-9+]/g, ''),
    displayNumber: hospital.contact.landline,
    icon: HeartPulse,
    colorClass: 'bg-emerald-700 hover:bg-emerald-800 text-white',
    borderClass: 'border-emerald-800',
    sourceUrl: hospital.contact.sourceUrl,
    sourceLabel: 'Hospital: Provincial directory',
  }] : []),
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
            aria-expanded={isOpen}
            aria-controls="emergency-contacts"
            className="flex items-center gap-2 text-xs font-bold text-rose-400 hover:text-rose-300 transition cursor-pointer"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
            </span>
            <Siren className="w-4 h-4 text-rose-400" />
            <span className="tracking-wide uppercase">Emergency Contacts</span>
            <span className="hidden sm:inline text-[11px] text-slate-400 font-normal">
              — 911, Police, Hospital
            </span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="emergency-contacts"
            className="flex items-center gap-1 text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded transition cursor-pointer"
          >
            <span>{isOpen ? 'Hide Hotlines' : 'Quick Call'}</span>
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Expandable Emergency Hotlines Grid */}
        {isOpen && (
          <div id="emergency-contacts" className="pt-3 pb-2 animate-in fade-in slide-in-from-top-1 duration-150">
            <div className="grid grid-cols-1 min-[380px]:grid-cols-2 sm:grid-cols-3 gap-2">
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
                    <p className="text-[10px] opacity-90 truncate">{item.subtext}</p>
                  </div>
                </a>
              );
            })}
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-300">
              For fire or rescue emergencies, dial 911. Local BFP and MDRRMO direct numbers are awaiting verification. Published contacts have not been call-tested.
            </p>
            <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-slate-400">
              {EMERGENCY_CONTACTS.map((item) => (
                <a key={item.id} href={item.sourceUrl} target="_blank" rel="noreferrer" className="underline hover:text-white">
                  {item.sourceLabel}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
