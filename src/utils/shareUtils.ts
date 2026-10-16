import type { DirectoryListing } from '../types/directory';
import { formatCheckedDate } from './timeUtils';

export function formatListingShareText(listing: DirectoryListing): string {
  const requirementsList =
    listing.requirements.length > 0
      ? listing.requirements
          .map((r) => `  • ${r.item}${r.note ? ` (${r.note})` : ''}`)
          .join('\n')
      : '  • Valid ID & cash payment';

  const contactList = [
    listing.contact.mobile ? `Mobile: ${listing.contact.mobile}` : null,
    listing.contact.landline ? `Landline: ${listing.contact.landline}` : null,
    listing.contact.email ? `Email: ${listing.contact.email}` : null,
  ]
    .filter(Boolean)
    .join(' | ');

  return `📍 ${listing.name}${listing.shortName ? ` (${listing.shortName})` : ''}
🏢 ${listing.location.street}, ${listing.location.barangay}, M'lang
⏰ Hours: ${listing.openingHours.schedule}
${listing.openingHours.lunchBreak ? `⚠️ Note: ${listing.openingHours.lunchBreak}\n` : ''}📞 Contact: ${contactList || 'See in person'}
🎒 Ano ang Dalhon (What to Bring):
${requirementsList}

✅ Verified: ${formatCheckedDate(listing.lastCheckedDate)}
(Shared via M'lang Pocket Community Guide)`;
}

export async function shareListing(listing: DirectoryListing): Promise<{ shared: boolean; method: 'native' | 'clipboard' }> {
  const text = formatListingShareText(listing);
  const title = `${listing.name} — M'lang Pocket Guide`;

  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
      });
      return { shared: true, method: 'native' };
    } catch (err) {
      // User cancelled share or fallback needed
      if ((err as Error).name !== 'AbortError') {
        await navigator.clipboard.writeText(text);
        return { shared: true, method: 'clipboard' };
      }
      return { shared: false, method: 'native' };
    }
  }

  // Fallback to clipboard
  await navigator.clipboard.writeText(text);
  return { shared: true, method: 'clipboard' };
}
