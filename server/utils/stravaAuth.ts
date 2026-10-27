export async function getStravaAccessToken(): Promise<string> {
    const storedRefreshToken = await readStoredStravaRefreshToken();
    const configuredRefreshToken = useRuntimeConfig().strava.refreshToken;
    const refreshTokensToTry = [...new Set([storedRefreshToken, configuredRefreshToken])].filter(
        (refreshToken): refreshToken is string => Boolean(refreshToken),
    );

    for (const refreshToken of refreshTokensToTry) {
        const token = await refreshStravaAccessToken(refreshToken).catch(() => null);

        if (!token) {
            continue;
        }

        if (token.refresh_token !== storedRefreshToken) {
            await storeStravaRefreshToken(token.refresh_token);
        }

        return token.access_token;
    }

    throw createError({ statusCode: 502, statusMessage: 'Could not refresh the Strava access token' });
}
