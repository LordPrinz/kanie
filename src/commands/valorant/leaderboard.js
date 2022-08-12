const regions = [
    "AP",
    "BR",
    "EU",
    "KR",
    "LATAM",
    "NA",
];

export default function getLeaderboard(commands) {
    commands.create({
        name: 'leaderboard',
        description: 'Returns leaderboard for current episode',
        options: [{
                name: "region",
                description: "Your region",
                required: true,
                type: "STRING",
                choices: regions.map((region) => ({
                    name: region,
                    value: region
                })),
            },
            {
                name: "size",
                description: "Defaults to 20. Valid values: 1 to 30.",
                type: "NUMBER",
            },
            {
                name: "startindex",
                description: "Defaults to 0",
                type: "NUMBER",
            }
        ]
    })
}