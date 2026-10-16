import type { ErrandItem, ReportPayload } from '../types/directory';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function optionalString(value: unknown): boolean {
  return value === undefined || typeof value === 'string';
}

export function isStringList(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

export function isErrandList(value: unknown): value is ErrandItem[] {
  return Array.isArray(value) && value.every((errand: unknown) =>
    isRecord(errand)
    && typeof errand.id === 'string'
    && typeof errand.title === 'string'
    && typeof errand.completed === 'boolean'
    && typeof errand.createdAt === 'string'
    && optionalString(errand.listingId)
    && optionalString(errand.placeName)
    && optionalString(errand.notes)
    && Array.isArray(errand.checklist)
    && errand.checklist.every((item: unknown) =>
      isRecord(item)
      && typeof item.id === 'string'
      && typeof item.text === 'string'
      && typeof item.completed === 'boolean'),
  );
}

const issueTypes = new Set(['wrong_contact', 'wrong_hours', 'wrong_requirements', 'closed_or_moved', 'other']);

export function isReportList(value: unknown): value is ReportPayload[] {
  return Array.isArray(value) && value.every((report: unknown) =>
    isRecord(report)
    && typeof report.listingId === 'string'
    && typeof report.listingName === 'string'
    && typeof report.issueType === 'string' && issueTypes.has(report.issueType)
    && typeof report.description === 'string'
    && typeof report.suggestedCorrection === 'string'
    && optionalString(report.reporterContact),
  );
}
