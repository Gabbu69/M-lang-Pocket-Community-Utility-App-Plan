import React, { useState } from 'react';
import type { ErrandItem, DirectoryListing } from '../../types/directory';
import {
  CheckSquare,
  Square,
  Plus,
  Trash2,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface ErrandsChecklistProps {
  errands: ErrandItem[];
  onToggleChecklistItem: (errandId: string, itemId: string) => void;
  onToggleErrandComplete: (errandId: string) => void;
  onDeleteErrand: (errandId: string) => void;
  onOpenAddModal: () => void;
  onViewListing: (listingId: string) => void;
  allListings: DirectoryListing[];
}

export const ErrandsChecklist: React.FC<ErrandsChecklistProps> = ({
  errands,
  onToggleChecklistItem,
  onToggleErrandComplete,
  onDeleteErrand,
  onOpenAddModal,
  onViewListing,
  allListings,
}) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');
  const [expandedErrandIds, setExpandedErrandIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedErrandIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredErrands = errands.filter((e) => {
    if (filter === 'pending') return !e.completed;
    if (filter === 'completed') return e.completed;
    return true;
  });

  const pendingCount = errands.filter((e) => !e.completed).length;

  return (
    <div className="space-y-4">
      {/* Top Controls: Add Button & Filter Chips */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div>
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
            <CheckSquare className="w-4 h-4 text-emerald-600" />
            <span>Errands &amp; Document Checklist</span>
          </h3>
          <p className="text-xs text-slate-500">
            {pendingCount === 0
              ? 'All caught up! No pending errands.'
              : `${pendingCount} errand${pendingCount > 1 ? 's' : ''} to complete`}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Filter Pills */}
          <div className="bg-slate-100 p-0.5 rounded-xl flex items-center text-xs font-medium">
            <button
              onClick={() => setFilter('all')}
              className={`px-2.5 py-1 rounded-lg transition ${
                filter === 'all' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-600'
              }`}
            >
              All ({errands.length})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-2.5 py-1 rounded-lg transition ${
                filter === 'pending'
                  ? 'bg-white text-slate-900 shadow-2xs font-bold'
                  : 'text-slate-600'
              }`}
            >
              Pending ({pendingCount})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-2.5 py-1 rounded-lg transition ${
                filter === 'completed'
                  ? 'bg-white text-slate-900 shadow-2xs font-bold'
                  : 'text-slate-600'
              }`}
            >
              Done ({errands.length - pendingCount})
            </button>
          </div>

          <button
            onClick={onOpenAddModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold shadow-xs transition cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Errand</span>
          </button>
        </div>
      </div>

      {/* Empty State */}
      {filteredErrands.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center space-y-3">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto border border-emerald-100">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="max-w-sm mx-auto space-y-1">
            <p className="font-bold text-sm text-slate-800">
              {filter === 'completed' ? 'No completed errands yet' : 'Your Errands List is Empty'}
            </p>
            <p className="text-xs text-slate-500">
              Add your planned errands (like getting a Cedula, hospital checkup, or vulcanizing) and pack your documents before heading out!
            </p>
          </div>
          {filter === 'all' && (
            <button
              onClick={onOpenAddModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold shadow-xs transition"
            >
              <Plus className="w-4 h-4" />
              <span>Create First Errand</span>
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredErrands.map((errand) => {
            const isExpanded = expandedErrandIds[errand.id] ?? true;
            const completedItemsCount = errand.checklist.filter((i) => i.completed).length;
            const totalItemsCount = errand.checklist.length;
            const progressPercent =
              totalItemsCount > 0 ? Math.round((completedItemsCount / totalItemsCount) * 100) : 0;

            const linkedPlace = errand.listingId
              ? allListings.find((l) => l.id === errand.listingId)
              : null;

            return (
              <div
                key={errand.id}
                className={`bg-white rounded-2xl border transition shadow-sm overflow-hidden ${
                  errand.completed
                    ? 'border-slate-200 bg-slate-50/50 opacity-80'
                    : 'border-slate-200/90 hover:border-emerald-500/50'
                }`}
              >
                {/* Header Row */}
                <div className="p-4 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <button
                      onClick={() => onToggleErrandComplete(errand.id)}
                      className="mt-0.5 text-emerald-600 hover:text-emerald-700 cursor-pointer shrink-0"
                      title={errand.completed ? 'Mark as pending' : 'Mark errand as completed'}
                    >
                      {errand.completed ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <h4
                          className={`text-sm font-bold leading-tight ${
                            errand.completed
                              ? 'line-through text-slate-400'
                              : 'text-slate-900'
                          }`}
                        >
                          {errand.title}
                        </h4>
                        {errand.completed && (
                          <span className="text-[10px] font-bold uppercase px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
                            Completed
                          </span>
                        )}
                      </div>

                      {/* Linked Destination */}
                      {linkedPlace && (
                        <div className="flex items-center gap-1 text-xs text-emerald-800 font-medium mb-1">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <button
                            onClick={() => onViewListing(linkedPlace.id)}
                            className="underline hover:text-emerald-950 font-semibold truncate"
                          >
                            {linkedPlace.name} ({linkedPlace.location.barangay})
                          </button>
                        </div>
                      )}

                      {errand.notes && (
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                          {errand.notes}
                        </p>
                      )}

                      {/* Progress Bar for Documents */}
                      {totalItemsCount > 0 && (
                        <div className="mt-2 flex items-center gap-2">
                          <div className="w-24 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                            <div
                              className="bg-emerald-600 h-1.5 rounded-full transition-all"
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>
                          <span className="text-[11px] font-medium text-slate-500">
                            {completedItemsCount}/{totalItemsCount} items ready ({progressPercent}%)
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions Right */}
                  <div className="flex items-center gap-1 shrink-0">
                    {totalItemsCount > 0 && (
                      <button
                        onClick={() => toggleExpand(errand.id)}
                        className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition cursor-pointer"
                        title={isExpanded ? 'Collapse documents' : 'Expand documents'}
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    )}

                    <button
                      onClick={() => onDeleteErrand(errand.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 transition cursor-pointer"
                      title="Delete errand"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Sub-Checklist (What to Bring / Documents to pack) */}
                {totalItemsCount > 0 && isExpanded && (
                  <div className="px-4 pb-3 pt-1 border-t border-slate-100 bg-slate-50/60">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Pack What to Bring:
                    </p>
                    <div className="space-y-1.5">
                      {errand.checklist.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => onToggleChecklistItem(errand.id, item.id)}
                          className={`flex items-start gap-2.5 p-2 rounded-xl border text-xs cursor-pointer transition select-none ${
                            item.completed
                              ? 'bg-emerald-50/70 border-emerald-200/80 text-emerald-900'
                              : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                          }`}
                        >
                          <div className="mt-0.5 shrink-0">
                            {item.completed ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <Square className="w-4 h-4 text-slate-400" />
                            )}
                          </div>
                          <span className={item.completed ? 'line-through text-slate-500' : ''}>
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
