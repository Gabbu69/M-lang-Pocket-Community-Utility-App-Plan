import type { DirectoryListing } from '../types/directory';

export interface OpenStatus {
  isOpen: boolean;
  statusText: string;
  badgeClass: string;
  detailText: string;
}

export function getOpenStatus(listing: DirectoryListing): OpenStatus {
  if (listing.openingHours.is24Hours) {
    return {
      isOpen: true,
      statusText: 'Open 24/7',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      detailText: 'Continuous 24-hour service',
    };
  }

  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const currentHour = now.getHours() + now.getMinutes() / 60;

  const { daysOpen, openHour, closeHour } = listing.openingHours;

  const isTodayOpenDay = daysOpen.includes(currentDay);

  if (!isTodayOpenDay) {
    // Find next open day
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const nextDayIndex = daysOpen.find((d) => d > currentDay) ?? daysOpen[0];
    const nextDayName = dayNames[nextDayIndex];

    return {
      isOpen: false,
      statusText: 'Closed Today',
      badgeClass: 'bg-rose-100 text-rose-800 border-rose-300',
      detailText: `Opens ${nextDayName} at ${formatHour(openHour)}`,
    };
  }

  // It's an open day today
  if (currentHour >= openHour && currentHour < closeHour) {
    // Check if closing within 30 minutes
    const isClosingSoon = closeHour - currentHour <= 0.5;
    if (isClosingSoon) {
      return {
        isOpen: true,
        statusText: 'Closing Soon',
        badgeClass: 'bg-amber-100 text-amber-800 border-amber-300',
        detailText: `Closes at ${formatHour(closeHour)}`,
      };
    }

    return {
      isOpen: true,
      statusText: 'Open Now',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      detailText: `Closes at ${formatHour(closeHour)}`,
    };
  }

  if (currentHour < openHour) {
    return {
      isOpen: false,
      statusText: 'Closed Now',
      badgeClass: 'bg-slate-100 text-slate-700 border-slate-300',
      detailText: `Opens today at ${formatHour(openHour)}`,
    };
  }

  return {
    isOpen: false,
    statusText: 'Closed Now',
    badgeClass: 'bg-slate-100 text-slate-700 border-slate-300',
    detailText: `Closed for today (${formatHour(closeHour)})`,
  };
}

function formatHour(h: number): string {
  const hour = Math.floor(h);
  const minutes = Math.round((h - hour) * 60);
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;
  const minuteString = minutes > 0 ? `:${minutes.toString().padStart(2, '0')}` : ':00';
  return `${displayHour}${minuteString} ${period}`;
}

export function formatCheckedDate(dateStr: string): string {
  try {
    const [year, month, day] = dateStr.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const m = parseInt(month, 10) - 1;
    return `${monthNames[m]} ${parseInt(day, 10)}, ${year}`;
  } catch {
    return dateStr;
  }
}
