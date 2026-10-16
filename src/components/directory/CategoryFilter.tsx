import React from 'react';
import type { ServiceCategory } from '../../types/directory';
import {
  Layers,
  HeartPulse,
  Landmark,
  Siren,
  Wrench,
  Printer,
  Package,
  Sprout,
  ShoppingBag,
  Zap,
} from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: ServiceCategory;
  onSelectCategory: (category: ServiceCategory) => void;
}

const CATEGORIES: { id: ServiceCategory; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'All Services', icon: <Layers className="w-3.5 h-3.5" /> },
  { id: 'health', label: 'Hospital & Health', icon: <HeartPulse className="w-3.5 h-3.5" /> },
  { id: 'government', label: 'Municipal Offices', icon: <Landmark className="w-3.5 h-3.5" /> },
  { id: 'emergency', label: 'Emergency & Police', icon: <Siren className="w-3.5 h-3.5" /> },
  { id: 'utilities', label: 'Water & Electric', icon: <Zap className="w-3.5 h-3.5" /> },
  { id: 'repair', label: 'Motor & Repair', icon: <Wrench className="w-3.5 h-3.5" /> },
  { id: 'printing', label: 'Print & Photocopy', icon: <Printer className="w-3.5 h-3.5" /> },
  { id: 'logistics', label: 'Courier & Padala', icon: <Package className="w-3.5 h-3.5" /> },
  { id: 'agriculture', label: 'Agri-Vet & Seeds', icon: <Sprout className="w-3.5 h-3.5" /> },
  { id: 'market', label: 'Public Market', icon: <ShoppingBag className="w-3.5 h-3.5" /> },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="overflow-x-auto py-2 no-scrollbar">
      <div className="flex items-center gap-1.5 px-1 min-w-max">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition cursor-pointer border ${
                isSelected
                  ? 'bg-emerald-700 text-white border-emerald-800 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
