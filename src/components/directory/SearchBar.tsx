import React from 'react';
import { Search, X, Clock, MapPin } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onlyOpenNow: boolean;
  onToggleOpenNow: () => void;
  selectedBarangay: string;
  onBarangayChange: (barangay: string) => void;
  barangayList: string[];
  filteredCount: number;
  totalCount: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  onlyOpenNow,
  onToggleOpenNow,
  selectedBarangay,
  onBarangayChange,
  barangayList,
  filteredCount,
  totalCount,
}) => {
  return (
    <div className="space-y-2">
      {/* Search Input Box */}
      <div className="relative flex items-center">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search places, services (e.g., Hospital, Cedula, 2x2 photo, tire patch)..."
          className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 shadow-sm transition"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 rounded-md"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Quick Filters Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Open Now Chip */}
          <button
            onClick={onToggleOpenNow}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border font-medium transition cursor-pointer ${
              onlyOpenNow
                ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Open Now</span>
          </button>

          {/* Barangay Dropdown */}
          <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg px-2 py-1 text-slate-700 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedBarangay}
              onChange={(e) => onBarangayChange(e.target.value)}
              className="bg-transparent text-xs font-medium focus:outline-none cursor-pointer"
            >
              <option value="all">All Barangays</option>
              {barangayList.map((bg) => (
                <option key={bg} value={bg}>
                  {bg}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Count Label */}
        <div className="text-[11px] text-slate-500 font-medium">
          Showing <span className="font-bold text-slate-800">{filteredCount}</span> of {totalCount} verified places
        </div>
      </div>
    </div>
  );
};
