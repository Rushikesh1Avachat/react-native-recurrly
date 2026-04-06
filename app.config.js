const appJson = require('./app.json');

export default {
    expo: {
        name: "Recurrly",
        slug: "react_native-recurrly",
        version: "1.0.0",

        android: {
            package: "com.rushikesh.recurrly",
            // Fix for the mergeReleaseJavaResource duplicate file error
            packagingOptions: {
                resources: {
                    pickFirsts: [
                        'META-INF/versions/9/OSGI-INF/MANIFEST.MF'
                    ]
                }
            }
        },

        ios: {
            bundleIdentifier: "com.rushikesh.recurrly",
            infoPlist: {
                ITSAppUsesNonExemptEncryption: false,
            },
        },

        extra: {
            eas: {
                projectId: "41df48ae-a7ac-4541-9184-e07ef8a7ea0a",
            },
            posthogProjectToken: process.env.POSTHOG_PROJECT_TOKEN,
            posthogHost: process.env.POSTHOG_HOST,
        },
    },
};