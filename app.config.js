const appJson = require('./app.json');

export default {
    expo: {
        ...appJson.expo,

        ios: {
            ...appJson.expo?.ios,

            bundleIdentifier: "com.avachatrushikesh.recurrly",

            // ✅ MOVE THIS HERE
            infoPlist: {
                ITSAppUsesNonExemptEncryption: false,
            },
        },

        extra: {
            ...(appJson.expo?.extra || {}),

            posthogProjectToken: process.env.POSTHOG_PROJECT_TOKEN,
            posthogHost: process.env.POSTHOG_HOST,

            eas: {
                projectId: "41df48ae-a7ac-4541-9184-e07ef8a7ea0a",
            },
        },
    },
};