export type ServiceCategory =
  | 'all'
  | 'government'
  | 'health'
  | 'emergency'
  | 'utilities'
  | 'repair'
  | 'printing'
  | 'logistics'
  | 'agriculture'
  | 'market';

export interface RequirementItem {
  item: string;
  note?: string;
  isConfirmed: boolean; // Confirmed by office vs common requirement
}

export interface DirectoryListing {
  id: string;
  name: string;
  shortName?: string;
  category: Exclude<ServiceCategory, 'all'>;
  primaryService: string;
  description?: string;
  location: {
    street: string;
    barangay: string;
    landmark?: string;
    googleMapsUrl?: string;
  };
  contact: {
    isVerified?: boolean; // Phone details match the linked public source; no live call is implied.
    sourceUrl?: string;
    landline?: string;
    mobile?: string;
    email?: string;
    facebookPage?: string;
    trunklineLocal?: string;
    contactNote?: string;
  };
  openingHours: {
    schedule: string;
    lunchBreak?: string;
    is24Hours: boolean;
    daysOpen: number[]; // 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
    openHour: number;   // 24h format (e.g. 8 for 8:00 AM)
    closeHour: number;  // 24h format (e.g. 17 for 5:00 PM)
  };
  requirements: RequirementItem[];
  source: {
    name: string;
    url?: string;
    verificationMethod: 'Provincial Directory' | 'LGU Portal' | 'Field Check' | 'Direct Call' | 'Unverified draft' | 'Official public directory';
    citationNote?: string;
  };
  lastCheckedDate?: string; // YYYY-MM-DD of source review, only when a source was actually checked.
  verificationStatus: 'verified' | 'provisional';
  tips?: string[];
}

export interface ErrandItem {
  id: string;
  title: string;
  listingId?: string;
  placeName?: string;
  notes?: string;
  checklist: {
    id: string;
    text: string;
    completed: boolean;
  }[];
  completed: boolean;
  createdAt: string;
}

export interface ReportPayload {
  listingId: string;
  listingName: string;
  issueType: 'wrong_contact' | 'wrong_hours' | 'wrong_requirements' | 'closed_or_moved' | 'other';
  description: string;
  suggestedCorrection: string;
  reporterContact?: string;
}
