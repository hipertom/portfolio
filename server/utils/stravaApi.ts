const stravaTokenUrl = 'https://www.strava.com/oauth/token';
const stravaApiBaseUrl = 'https://www.strava.com/api/v3';
const activitiesPerPage = 200;
const maximumActivityPages = 10;

export interface StravaSummaryActivity {
    id: number;
    name: string;
    sport_type: string;
    start_date: string;
    start_date_local: string;
    distance: number;
    moving_time: number;
    total_elevation_gain: number;
    workout_type: number | null;
}

interface StravaTokenResponse {
    access_token: string;
    refresh_token: string;
    expires_at: number;
}

export function isStravaConfigured(): boolean {
    const { databaseUrl, strava } = useRuntimeConfig();

    return Boolean(databaseUrl && strava.clientId && strava.clientSecret && strava.refreshToken);
}

export async function refreshStravaAccessToken(refreshToken: string): Promise<StravaTokenResponse> {
    const { clientId, clientSecret } = useRuntimeConfig().strava;

    return await $fetch<StravaTokenResponse>(stravaTokenUrl, {
        method: 'POST',
        body: {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
        },
    });
}

export async function fetchStravaActivitiesSince(accessToken: string, since: Date): Promise<StravaSummaryActivity[]> {
    const activities: StravaSummaryActivity[] = [];

    for (let page = 1; page <= maximumActivityPages; page++) {
        const pageOfActivities = await $fetch<StravaSummaryActivity[]>(`${stravaApiBaseUrl}/athlete/activities`, {
            headers: { Authorization: `Bearer ${accessToken}` },
            query: { after: Math.floor(since.getTime() / 1000), page, per_page: activitiesPerPage },
        });

        activities.push(...pageOfActivities);

        if (pageOfActivities.length < activitiesPerPage) {
            break;
        }
    }

    return activities;
}
