export interface Experience {
    roles: string[];
    company: string;
    location: string;
    startDate: string;
    endDate: string | null;
    description: string;
    continuationNote?: string;
}
