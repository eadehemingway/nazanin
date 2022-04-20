

export const COLUMNS = 7;
export const BOX_SIZE = 10;

export const LAYER_NAMES = {
    politics: "politics",
    location: "location"
};

export const LAYERS = [
    {
        name: LAYER_NAMES.politics,
        type: "fill",
        events: [
            {
                id: "w",
                description: "hhhh",
                start_date: new Date("April 03, 2016 00:00:00"),
                end_date: new Date("April 29, 2016 00:00:00")
            },
            {
                id: "q",
                description: "hhhh",
                start_date: new Date("June 03, 2019 00:00:00"),
                end_date: new Date("June 20, 2019 00:00:00")
            }
        ]
    },
    {
        name: LAYER_NAMES.location,
        type: "fill",
        events: [
            {
                id: "a",
                description: "hhhh",
                start_date: new Date("April 03, 2020 00:00:00"),
                end_date: new Date("April 30, 2020 00:00:00")
            },
            {
                id: "b",
                description: "hhhh",
                start_date: new Date("April 03, 2021 00:00:00"),
                end_date: new Date("April 04, 2021 00:00:00")
            }
        ]
    },
];

export const MIN_DATE = new Date("April 03, 2016 00:00:00");
export const MAX_DATE = new Date("March 16, 2022 00:00:00");