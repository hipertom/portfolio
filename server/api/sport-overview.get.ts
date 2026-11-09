export default defineEventHandler(async () => {
    if (!isStravaConfigured()) {
        if (import.meta.dev) {
            return createDummySportOverview();
        }

        throw createError({ statusCode: 503, statusMessage: 'Strava is not configured' });
    }

    const accessToken = await getStravaAccessToken();
    const stravaActivities = await fetchStravaActivitiesSince(accessToken, startOfPreviousYear());

    const overview = buildSportOverview(stravaActivities);

    return { ...overview, recentRaces: await addOfficialTimes(accessToken, overview.recentRaces) };
});
