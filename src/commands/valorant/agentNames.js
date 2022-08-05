const regions = [
    "AP",
    "BR",
    "ESPORTS",
    "EU",
    "KR",
    "LATAM",
    "NA",
];

const locales = [
    "ar-AE",
    "de-DE",
    "en-GB",
    "en-US",
    "es-ES",
    "es-MX",
    "fr-FR",
    "id-ID",
    "it-IT",
    "ja-JP",
    "ko-KR",
    "pl-PL",
    "pt-BR",
    "ru-RU",
    "th-TH",
    "tr-TR",
    "vi-VN",
    "zh-TW",
    "zh-CN"
]

export default function getAgentNames(commands) {
    commands.create({
        name: 'agents',
        description: 'Returns agents names',
        options: [{
            name: "region",
            description: "Your region",
            required: true,
            type: "STRING",
            choices: regions.map((region) => ({
                name: region,
                value: region
            })),
        }, {
            name: "locale",
            description: "Your locale",
            required: true,
            type: "STRING",
            choices: locales.map((locale) => ({
                name: locale,
                value: locale
            })),
        }]
    })
}