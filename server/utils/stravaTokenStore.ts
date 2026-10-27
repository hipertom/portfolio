import { neon } from '@neondatabase/serverless';

function database() {
    return neon(useRuntimeConfig().databaseUrl);
}

export async function readStoredStravaRefreshToken(): Promise<string | null> {
    const [row] = await database()`select refresh_token from strava_token where id = 1`;

    return row?.refresh_token ?? null;
}

export async function storeStravaRefreshToken(refreshToken: string): Promise<void> {
    await database()`
        insert into strava_token (id, refresh_token)
        values (1, ${refreshToken})
        on conflict (id) do update set refresh_token = excluded.refresh_token, updated_at = now()
    `;
}
