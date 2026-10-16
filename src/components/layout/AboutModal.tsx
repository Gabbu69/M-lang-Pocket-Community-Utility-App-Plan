import React, { useState } from 'react';
import type { ReportPayload } from '../../types/directory';
import { ShieldCheck, X, ExternalLink, CheckCircle2, Lock, FileText, AlertCircle, Copy, Check } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  reports?: ReportPayload[];
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, reports = [] }) => {
  const [copiedReports, setCopiedReports] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-emerald-800 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-700 border border-emerald-500/50 flex items-center justify-center text-amber-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight">About M’lang Pocket</h3>
              <p className="text-xs text-emerald-200">Community utility &amp; transparency disclosure</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-700/60 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs text-slate-700 leading-relaxed">
          {/* Independence Disclaimer Alert */}
          <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200/80 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-amber-900 text-xs">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Independent Community Notice</span>
            </div>
            <p className="text-amber-900/90 text-[11px] leading-relaxed">
              M’lang Pocket is an independent civic utility and community guide. It is <span className="font-bold">NOT</span> an official application of the Local Government Unit (LGU) of M’lang or the Provincial Government of Cotabato unless formal authorization or partnership is established.
            </p>
          </div>

          {/* Core Philosophy */}
          <div className="space-y-1">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Core Purpose: "Where, What &amp; How"
            </h4>
            <p>
              Residents and visitors often lose hours traveling to offices only to discover missing requirements (such as 2x2 photos or uncertified documents), closed lunch windows, or changed phone numbers.
            </p>
            <p className="font-medium text-slate-800">
              M’lang Pocket answers three fundamental questions for each place:
            </p>
            <ul className="list-disc list-inside space-y-0.5 text-slate-600 pl-1">
              <li><strong>Where should I go?</strong> (Exact street, barangay, and landmark)</li>
              <li><strong>What should I bring?</strong> (Only confirmed requirements and IDs)</li>
              <li><strong>How can I contact them?</strong> (Checked landlines and active mobile hotlines)</li>
            </ul>
          </div>

          {/* Philosophy: 20 checked > 200 unverified */}
          <div className="p-3 bg-emerald-50/70 rounded-2xl border border-emerald-100 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Curated Accuracy Policy</span>
            </div>
            <p className="text-emerald-950/90 text-[11px]">
              We adhere strictly to: <span className="font-bold">"20 verified listings over 200 copied entries."</span> Every listing in this starter directory includes an explicit audit date and source verification method.
            </p>
          </div>

          {/* Official Starting Sources */}
          <div className="space-y-1.5">
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Verification Sources
            </h4>
            <ul className="space-y-1 text-slate-600">
              <li className="flex items-start gap-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Province of Cotabato Official Directory:</strong> Starting source for provincial facilities including M’lang District Hospital (Office #18) and provincial line services.{' '}
                  <a
                    href="https://cotabatoprov.gov.ph/directory-of-offices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 underline font-semibold inline-flex items-center gap-0.5"
                  >
                    cotabatoprov.gov.ph/directory-of-offices <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  <strong>LGU M’lang Public Portal &amp; Citizens Charter:</strong> For local civil registry, treasury, and municipal health schedules.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Field &amp; Direct Phone Audits:</strong> Direct verification of repair garages, photocopy hubs, utility offices, and community pharmacies.
                </span>
              </li>
            </ul>
          </div>

          {/* Offline & Privacy */}
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-slate-800">
              <Lock className="w-3.5 h-3.5 text-slate-600" />
              <span>100% Offline &amp; Private</span>
            </div>
            <p className="text-[11px] text-slate-600">
              Your saved places, personal errands, and checklist items remain entirely on your device using browser <code className="bg-slate-200/80 px-1 py-0.5 rounded text-[10px]">localStorage</code>. No registration, no tracking, and no cloud surveillance.
            </p>
          </div>

          {/* Community Feedback & Logged Reports */}
          <div className="p-3.5 bg-emerald-50/50 rounded-2xl border border-emerald-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-bold text-emerald-950">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>My Submitted Reports ({reports.length})</span>
              </div>
              {reports.length > 0 && (
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(JSON.stringify(reports, null, 2));
                    setCopiedReports(true);
                    setTimeout(() => setCopiedReports(false), 2000);
                  }}
                  className="px-2 py-1 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-lg text-[10px] font-bold flex items-center gap-1 transition cursor-pointer"
                  title="Copy JSON feedback to email to maintainer"
                >
                  {copiedReports ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedReports ? 'Copied JSON!' : 'Export Reports'}</span>
                </button>
              )}
            </div>

            {reports.length > 0 ? (
              <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                {reports.map((r, i) => (
                  <div key={i} className="p-2 bg-white rounded-xl border border-emerald-100 text-[11px] space-y-0.5">
                    <div className="flex items-center justify-between font-semibold text-slate-800">
                      <span>{r.listingName}</span>
                      <span className="text-[9px] uppercase font-bold text-amber-700 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                        {r.issueType}
                      </span>
                    </div>
                    <p className="text-slate-600 line-clamp-1">{r.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[11px] text-slate-500 italic">
                No error reports logged yet on this device. When you submit a correction, it appears here so you can review or export it.
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs">
          <span className="text-slate-500 font-medium">M’lang, Province of Cotabato</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-semibold transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
