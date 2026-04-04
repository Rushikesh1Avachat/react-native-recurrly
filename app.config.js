const appJson = require('./app.json');

export default {
    expo: {
        ...appJson.expo,
        extra: {
            ...(appJson.expo?.extra || {}),

            posthogProjectToken: process.env.POSTHOG_PROJECT_TOKEN,
            posthogHost: process.env.POSTHOG_HOST,

            // ✅ FIX: move inside extra.eas
            eas: {
                projectId: "41df48ae-a7ac-4541-9184-e07ef8a7ea0a",
            },
        },
    },
};