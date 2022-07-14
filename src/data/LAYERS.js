export const LAYER_NAMES = {
    prime_ministers: "Prime ministers",
    foreign_secretaries: "Foreign secretaries",
    solitary_confinement: "Solitary confinement",
    hunger_strikes: "Hunger strikes",
    medical_attention: "Medical attention",
    locations: "Locations",
    birthdays: "Birthdays",
};

export const LAYERS = [
    {
        name: LAYER_NAMES.prime_ministers,
        type: "divider",
        events: [
            {
                "type": "divider",
                "display_order": "0",
                "layer": "prime_ministers",
                "group": "",
                "name": "David Cameron",
                "start_date": new Date("April 3, 2016 00:00:00"),
                "end_date": new Date("July 13, 2016 00:00:00"),
                "days": "101",
                "description": "David Cameron",
                "link_index": "",
                "link": "#N/A",
                "source": "#N/A"
			  },
			  {
                "type": "divider",
                "display_order": "1",
                "layer": "prime_ministers",
                "group": "",
                "name": "Theresa May",
                "start_date": new Date("July 13, 2016 00:00:00"),
                "end_date": new Date("July 24, 2019 00:00:00"),
                "days": "1106",
                "description": "Theresa May",
                "link_index": "",
                "link": "#N/A",
                "source": "#N/A"
			  },
			  {
                "type": "divider",
                "display_order": "2",
                "layer": "prime_ministers",
                "group": "",
                "name": "Boris Johnson",
                "start_date": new Date("July 24, 2019 00:00:00"),
                "end_date": new Date("March 16, 2022 00:00:00"),
                "days": "966",
                "description": "Boris Johnson",
                "link_index": "",
                "link": "#N/A",
                "source": "#N/A"
			  }
        ]
    },
    {
        name: LAYER_NAMES.foreign_secretaries,
        type: "divider",
        highlights: null,
        events: [
            {
                "type": "divider",
                "display_order": "3",
                "layer": "foreign_secretaries",
                "group": "",
                "name": "Boris Johnson",
                "start_date": new Date("July 13, 2016 00:00:00"),
                "end_date": new Date("July 9, 2018 00:00:00"),
                "days": "726",
                "description": "For the majority of Nazanin’s incarceration, Boris Johnson is the UK’s foreign secretary – the position responsible for putting pressure on Iran to return her.",
                "link_index": "",
                "link": "#N/A",
                "source": "#N/A"
			  },
			  {
                "type": "divider",
                "display_order": "4",
                "layer": "foreign_secretaries",
                "group": "",
                "name": "Jeremy Hunt",
                "start_date": new Date("July 9, 2018 00:00:00"),
                "end_date": new Date("July 24, 2019 00:00:00"),
                "days": "380",
                "description": "Towards the end of Theresa May's term as Prime Minister, Jeremy Hunt is passed the baton.",
                "link_index": "",
                "link": "#N/A",
                "source": "#N/A"
			  },
			  {
                "type": "divider",
                "display_order": "5",
                "layer": "foreign_secretaries",
                "group": "",
                "name": "Dominic Raab",
                "start_date": new Date("July 24, 2019 00:00:00"),
                "end_date": new Date("September 15, 2021 00:00:00"),
                "days": "784",
                "description": "Then follows Dominic Raab, the first foreign secretary under Prime Minister Boris Johnson",
                "link_index": "",
                "link": "#N/A",
                "source": "#N/A"
			  },
			  {
                "type": "divider",
                "display_order": "6",
                "layer": "foreign_secretaries",
                "group": "",
                "name": "Liz Truss",
                "start_date": new Date("September 15, 2021 00:00:00"),
                "end_date": new Date("March 16, 2022 00:00:00"),
                "days": "182",
                "description": "After Raab's appointment as Johnson's deputy, Liz Truss became Foreign Secretary",
                "link_index": "",
                "link": "#N/A",
                "source": "#N/A"
			  },
        ]
    },
    // {
    //     name: LAYER_NAMES.locations,
    //     type: "divider",
    //     highlights: null,
    //     events: [
    //         {
    //             "type": "divider",
    //             "display_order": "7",
    //             "layer": "locations",
    //             "group": "Tehran airport",
    //             "name": "Tehran",
    //             "start_date": new Date("April 3, 2016 00:00:00"),
    //             "end_date": new Date("April 4, 2016 00:00:00"),
    //             "days": "1",
    //             "description": "Arrested at Tehran airport and held in Tehran for the night",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "divider",
    //             "display_order": "8",
    //             "layer": "locations",
    //             "group": "Kerman",
    //             "name": "Kerman",
    //             "start_date": new Date("April 4, 2016 00:00:00"),
    //             "end_date": new Date("May 18, 2016 00:00:00"),
    //             "days": "44",
    //             "description": "Moved to an undisclosed location in Kerman and held in solitary confinement",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "divider",
    //             "display_order": "9",
    //             "layer": "locations",
    //             "group": "Kerman",
    //             "name": "Kerman",
    //             "start_date": new Date("May 18, 2016 00:00:00"),
    //             "end_date": new Date("June 13, 2016 00:00:00"),
    //             "days": "26",
    //             "description": "Released from solitary confinement and taken to the general women’s section in Kerman Central Prison",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "divider",
    //             "display_order": "10",
    //             "layer": "locations",
    //             "group": "Evin prison",
    //             "name": "Evin",
    //             "start_date": new Date("June 13, 2016 00:00:00"),
    //             "end_date": new Date("December 25, 2016 00:00:00"),
    //             "days": "195",
    //             "description": "On or around this date Nazanin is taken to Evin and held in solitary confinement in the high security Section 2A",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "divider",
    //             "display_order": "11",
    //             "layer": "locations",
    //             "group": "Evin prison",
    //             "name": "Evin",
    //             "start_date": new Date("December 25, 2016 00:00:00"),
    //             "end_date": new Date("August 23, 2018 00:00:00"),
    //             "days": "606",
    //             "description": "Released from solitary confinement and moved to the general cells for women political prisoners in Evin",
    //             "link_index": "5",
    //             "link": "",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "divider",
    //             "display_order": "12",
    //             "layer": "locations",
    //             "group": "Parents' house",
    //             "name": "Parent’s house",
    //             "start_date": new Date("August 23, 2018 00:00:00"),
    //             "end_date": new Date("August 26, 2018 00:00:00"),
    //             "days": "3",
    //             "description": "Nazanin granted a three day temporary release from Evin, spending time with her family in Tehran",
    //             "link_index": "6",
    //             "link": "",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "divider",
    //             "display_order": "13",
    //             "layer": "locations",
    //             "group": "Evin prison",
    //             "name": "Evin",
    //             "start_date": new Date("August 26, 2018 00:00:00"),
    //             "end_date": new Date("July 15, 2019 00:00:00"),
    //             "days": "323",
    //             "description": "Nazanin returns to Evin prison",
    //             "link_index": "7",
    //             "link": "",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "divider",
    //             "display_order": "14",
    //             "layer": "locations",
    //             "group": "Imam Khomeini hospital",
    //             "name": "Hospital",
    //             "start_date": new Date("July 15, 2019 00:00:00"),
    //             "end_date": new Date("July 20, 2019 00:00:00"),
    //             "days": "5",
    //             "description": "Spends 6 days in effective solitary confinement in Imam Khomeini hospital",
    //             "link_index": "8",
    //             "link": "",
    //             "source": "Guardian"
	// 		  },
	// 		  {
    //             "type": "divider",
    //             "display_order": "15",
    //             "layer": "locations",
    //             "group": "Evin prison",
    //             "name": "Evin",
    //             "start_date": new Date("July 20, 2019 00:00:00"),
    //             "end_date": new Date("March 17, 2020 00:00:00"),
    //             "days": "241",
    //             "description": "Transferred back to Evin prison",
    //             "link_index": "9",
    //             "link": "",
    //             "source": "Guardian"
	// 		  },
	// 		  {
    //             "type": "divider",
    //             "display_order": "16",
    //             "layer": "locations",
    //             "group": "Parents' house",
    //             "name": "Parent’s house",
    //             "start_date": new Date("March 17, 2020 00:00:00"),
    //             "end_date": new Date("March 7, 2021 00:00:00"),
    //             "days": "355",
    //             "description": "Released from Evin due to the pandemic",
    //             "link_index": "10",
    //             "link": "",
    //             "source": "BBC"
	// 		  },
	// 		  {
    //             "type": "divider",
    //             "display_order": "17",
    //             "layer": "locations",
    //             "group": "Parents' house",
    //             "name": "Parent’s house",
    //             "start_date": new Date("March 7, 2021 00:00:00"),
    //             "end_date": new Date("March 16, 2022 00:00:00"),
    //             "days": "374",
    //             "description": "Awaiting result of second sentence and under travel ban",
    //             "link_index": "11",
    //             "link": "",
    //             "source": "REDRESS"
	// 		  }
    //     ]
    // },
    // {
    //     name: LAYER_NAMES.solitary_confinement,
    //     type: "fill",
    //     highlights: [
    //         {
    //             start_date: new Date("April 3, 2016 00:00:00"),
    //             end_date: new Date("July 13, 2016 00:00:00"),
    //             description: "strong beliefs"
    //         },
    //     ],
    //     events: [
    //         {
    //             "type": "fill",
    //             "display_order": "18",
    //             "layer": "solitary_confinement",
    //             "group": "Kerman",
    //             "name": "Undisclosed location",
    //             "start_date": new Date("April 4, 2016 00:00:00"),
    //             "end_date": new Date("May 18, 2016 00:00:00"),
    //             "days": "44",
    //             "description": "Moved to an undisclosed location in Kerman and held in solitary confinement",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "19",
    //             "layer": "solitary_confinement",
    //             "group": "Evin prison",
    //             "name": "Section 2A",
    //             "start_date": new Date("June 13, 2016 00:00:00"),
    //             "end_date": new Date("December 25, 2016 00:00:00"),
    //             "days": "195",
    //             "description": "On or around this date Nazanin is taken to Evin and held in solitary confinement in the high security Section 2A",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  }
    //     ]
    // },
    // {
    //     name: LAYER_NAMES.hunger_strikes,
    //     type: "fill",
    //     highlights: null,
    //     events: [
    //         {
    //             "type": "fill",
    //             "display_order": "20",
    //             "layer": "hunger_strikes",
    //             "group": "Incarceration protest",
    //             "name": "Hunger strike",
    //             "start_date": new Date("November 13, 2016 00:00:00"),
    //             "end_date": new Date("November 18, 2016 00:00:00"),
    //             "days": "5",
    //             "description": "Nazanin goes on hunger strike in protest of her incarceration",
    //             "link_index": "12",
    //             "link": "",
    //             "source": "Guardian"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "21",
    //             "layer": "hunger_strikes",
    //             "group": "Deprivation of medical attention",
    //             "name": "Hunger strike",
    //             "start_date": new Date("January 13, 2019 00:00:00"),
    //             "end_date": new Date("January 16, 2019 00:00:00"),
    //             "days": "3",
    //             "description": "Nazanin goes on hunger strike in protest of being deprived medical attention from the Iranian authorities",
    //             "link_index": "13",
    //             "link": "",
    //             "source": "Guardian"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "22",
    //             "layer": "hunger_strikes",
    //             "group": "Joint strike with husband Richard",
    //             "name": "Hunger strike",
    //             "start_date": new Date("June 15, 2019 00:00:00"),
    //             "end_date": new Date("June 29, 2019 00:00:00"),
    //             "days": "14",
    //             "description": "Nazanin and her husband both stage hunger strikes in protest of her imprisonment",
    //             "link_index": "14",
    //             "link": "",
    //             "source": "Guardian"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "23",
    //             "layer": "hunger_strikes",
    //             "group": "In support of Kylie Moore-Gilbert",
    //             "name": "Hunger strike",
    //             "start_date": new Date("December 26, 2019 00:00:00"),
    //             "end_date": new Date("December 27, 2019 00:00:00"),
    //             "days": "1",
    //             "description": "Nazanin goes on hunger strike in support of Kylie Moore-Gilbert being held in Iran",
    //             "link_index": "15",
    //             "link": "https://www.thejournal.ie/nazanin-zaghari-ratcliffe-boris-johnson-4950117-Dec2019/",
    //             "source": "TheJournal.ie"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "24",
    //             "layer": "hunger_strikes",
    //             "group": "In support of Kylie Moore-Gilbert",
    //             "name": "Hunger strike",
    //             "start_date": new Date("December 31, 2019 00:00:00"),
    //             "end_date": new Date("January 2, 2020 00:00:00"),
    //             "days": "2",
    //             "description": "Nazanin continues her strike in support of her fellow British national.",
    //             "link_index": "15",
    //             "link": "https://www.thejournal.ie/nazanin-zaghari-ratcliffe-boris-johnson-4950117-Dec2019/",
    //             "source": "TheJournal.ie"
	// 		  },
    //     ]
    // },
    // {
    //     name: LAYER_NAMES.medical_attention,
    //     type: "fill",
    //     highlights: null,
    //     events: [
    //         {
    //             "type": "fill",
    //             "display_order": "25",
    //             "layer": "medical_attention",
    //             "group": "",
    //             "name": "Shoulder x-ray",
    //             "start_date": new Date("February 3, 2017 00:00:00"),
    //             "end_date": new Date("February 4, 2017 00:00:00"),
    //             "days": "1",
    //             "description": "Prison clinic GP x-rayed shoulder recommending that she be sent to a neck and shoulder specialist as a matter of urgency",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "26",
    //             "layer": "medical_attention",
    //             "group": "",
    //             "name": "Seen by neurologist",
    //             "start_date": new Date("February 19, 2017 00:00:00"),
    //             "end_date": new Date("February 20, 2017 00:00:00"),
    //             "days": "1",
    //             "description": "Specialised neurologist recommended immediate hospitalisation, which did not happen",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "27",
    //             "layer": "medical_attention",
    //             "group": "",
    //             "name": "Clinic visits at Evin prison ",
    //             "start_date": new Date(""),
    //             "end_date": new Date(""),
    //             "days": "0",
    //             "description": "Two visits to the clinic at Tehran’s Evin Prison",
    //             "link_index": "29",
    //             "link": "https://www.amnesty.org.uk/press-releases/iran-jailed-briton-nazanin-zaghari-ratcliffe-breaking-point-health-declines",
    //             "source": "Amnesty"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "28",
    //             "layer": "medical_attention",
    //             "group": "",
    //             "name": "Psychiatric ward",
    //             "start_date": new Date("July 15, 2019 00:00:00"),
    //             "end_date": new Date("July 21, 2019 00:00:00"),
    //             "days": "6",
    //             "description": "Spends 6 days in effective solitary confinement in Imam Khomeini hospital",
    //             "link_index": "2",
    //             "link": "https://www.theguardian.com/news/2019/jul/22/nazanin-zaghari-ratcliffe-has-returned-to-jail-says-husband",
    //             "source": "Guardian"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "29",
    //             "layer": "medical_attention",
    //             "group": "",
    //             "name": "Neurological assessment",
    //             "start_date": new Date("May 15, 2017 00:00:00"),
    //             "end_date": new Date("May 16, 2017 00:00:00"),
    //             "days": "1",
    //             "description": "After over three months’ wait, Nazanin is taken to hospital for an assessment of her neurological health. The appointment lasted two hours and she was prescribed 20 physiotherapy sessions on her shoulder.",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "30",
    //             "layer": "medical_attention",
    //             "group": "",
    //             "name": "Assessed by independent female psychiatrist",
    //             "start_date": new Date("July 19, 2017 00:00:00"),
    //             "end_date": new Date("July 20, 2017 00:00:00"),
    //             "days": "1",
    //             "description": "Diagnosed with advanced depression, detailing a number of traumatic effects of her detention, including loss of concentration, an inability to sleep, resulting in taking increasingly strong anti-depressants, sedatives, and sleeping pills, a loss of appetite, mood swings, heart palpitations, and increasing paranoia.",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "31",
    //             "layer": "medical_attention",
    //             "group": "",
    //             "name": "Psychiatrist appointment",
    //             "start_date": new Date("December 9, 2017 00:00:00"),
    //             "end_date": new Date("December 10, 2017 00:00:00"),
    //             "days": "1",
    //             "description": "Following this session Nazanin’s psychiatrist doubled her dosage of anti-depressants.",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "32",
    //             "layer": "medical_attention",
    //             "group": "",
    //             "name": "IRCT medical report",
    //             "start_date": new Date("October 29, 2020 00:00:00"),
    //             "end_date": new Date("October 31, 2020 00:00:00"),
    //             "days": "2",
    //             "description": "Nazanin diagnosed with serious and chronic post-traumatic stress disorder, major depression and obsessive–compulsive disorder due to her treatment in prison and under house arrest, and the continuing legal uncertainty and separation from her family. In addition, she experiences ongoing physical pain and impairment in her neck, right shoulder, and arm, which arose as a result of her treatment and the denial of medical care.",
    //             "link_index": "30",
    //             "link": "https://irct.org/uploads/media/IRCT-IFEG,_NZR_Letter_to_REDRESS_2021.pdf",
    //             "source": "IRCT"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "33",
    //             "layer": "medical_attention",
    //             "group": "",
    //             "name": "Visit prison clinic",
    //             "start_date": new Date("November 23, 2017 00:00:00"),
    //             "end_date": new Date("November 24, 2017 00:00:00"),
    //             "days": "1",
    //             "description": "Nazanin collapsed and had to be carried to the prison clinic by her fellow prisoners, unable to speak and suffering what the prison doctor termed a “PTSD attack.”",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
    //     ]
    // },
    // {
    //     name: LAYER_NAMES.birthdays,
    //     type: "fill",
    //     highlights: null,
    //     events: [
    //         {
    //             "type": "fill",
    //             "display_order": "34",
    //             "layer": "birthdays",
    //             "group": "Daughter",
    //             "name": "Gabriella's 2nd",
    //             "start_date": new Date("June 11, 2016 00:00:00"),
    //             "end_date": new Date("June 12, 2016 00:00:00"),
    //             "days": "1",
    //             "description": "empty",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "35",
    //             "layer": "birthdays",
    //             "group": "Daughter",
    //             "name": "Gabriella's 3rd",
    //             "start_date": new Date("June 11, 2017 00:00:00"),
    //             "end_date": new Date("June 12, 2017 00:00:00"),
    //             "days": "1",
    //             "description": "empty",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "36",
    //             "layer": "birthdays",
    //             "group": "Daughter",
    //             "name": "Gabriella's 4th",
    //             "start_date": new Date("June 11, 2018 00:00:00"),
    //             "end_date": new Date("June 12, 2018 00:00:00"),
    //             "days": "1",
    //             "description": "empty",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "37",
    //             "layer": "birthdays",
    //             "group": "Daughter",
    //             "name": "Gabriella's 5th",
    //             "start_date": new Date("June 11, 2019 00:00:00"),
    //             "end_date": new Date("June 12, 2019 00:00:00"),
    //             "days": "1",
    //             "description": "empty",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "38",
    //             "layer": "birthdays",
    //             "group": "Daughter",
    //             "name": "Gabriella's 6th",
    //             "start_date": new Date("June 11, 2020 00:00:00"),
    //             "end_date": new Date("June 12, 2020 00:00:00"),
    //             "days": "1",
    //             "description": "empty",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "39",
    //             "layer": "birthdays",
    //             "group": "Daughter",
    //             "name": "Gabriella's 7th",
    //             "start_date": new Date("June 11, 2021 00:00:00"),
    //             "end_date": new Date("June 12, 2021 00:00:00"),
    //             "days": "1",
    //             "description": "empty",
    //             "link_index": "1",
    //             "link": "https://redress.org/wp-content/uploads/2018/02/Urgent-Appeal-to-Special-Rapporteur-on-Torture-_Nazanin-Zaghari-Ratcliffe_13-February-2018.pdf",
    //             "source": "REDRESS"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "",
    //             "layer": "birthdays",
    //             "group": "Own",
    //             "name": "Nazanin's 38th",
    //             "start_date": new Date("December 26, 2016 00:00:00"),
    //             "end_date": new Date("December 27, 2016 00:00:00"),
    //             "days": "1",
    //             "description": "empty",
    //             "link_index": "3",
    //             "link": "https://www.theguardian.com/news/2018/dec/26/nazanin-zaghari-ratcliffe-spends-40th-birthday-in-iranian-jail",
    //             "source": "Guardian"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "",
    //             "layer": "birthdays",
    //             "group": "Own",
    //             "name": "Nazanin's 39th",
    //             "start_date": new Date("December 26, 2017 00:00:00"),
    //             "end_date": new Date("December 27, 2017 00:00:00"),
    //             "days": "1",
    //             "description": "empty",
    //             "link_index": "3",
    //             "link": "https://www.theguardian.com/news/2018/dec/26/nazanin-zaghari-ratcliffe-spends-40th-birthday-in-iranian-jail",
    //             "source": "Guardian"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "",
    //             "layer": "birthdays",
    //             "group": "Own",
    //             "name": "Nazanin's 40th",
    //             "start_date": new Date("December 26, 2018 00:00:00"),
    //             "end_date": new Date("December 27, 2018 00:00:00"),
    //             "days": "1",
    //             "description": "empty",
    //             "link_index": "3",
    //             "link": "https://www.theguardian.com/news/2018/dec/26/nazanin-zaghari-ratcliffe-spends-40th-birthday-in-iranian-jail",
    //             "source": "Guardian"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "",
    //             "layer": "birthdays",
    //             "group": "Own",
    //             "name": "Nazanin's 41st",
    //             "start_date": new Date("December 26, 2019 00:00:00"),
    //             "end_date": new Date("December 27, 2019 00:00:00"),
    //             "days": "1",
    //             "description": "empty",
    //             "link_index": "3",
    //             "link": "https://www.theguardian.com/news/2018/dec/26/nazanin-zaghari-ratcliffe-spends-40th-birthday-in-iranian-jail",
    //             "source": "Guardian"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "",
    //             "layer": "birthdays",
    //             "group": "Own",
    //             "name": "Nazanin's 42nd",
    //             "start_date": new Date("December 26, 2020 00:00:00"),
    //             "end_date": new Date("December 27, 2020 00:00:00"),
    //             "days": "1",
    //             "description": "empty",
    //             "link_index": "3",
    //             "link": "https://www.theguardian.com/news/2018/dec/26/nazanin-zaghari-ratcliffe-spends-40th-birthday-in-iranian-jail",
    //             "source": "Guardian"
	// 		  },
	// 		  {
    //             "type": "fill",
    //             "display_order": "",
    //             "layer": "birthdays",
    //             "group": "Own",
    //             "name": "Nazanin's 43rd",
    //             "start_date": new Date("December 26, 2021 00:00:00"),
    //             "end_date": new Date("December 27, 2021 00:00:00"),
    //             "days": "1",
    //             "description": "empty",
    //             "link_index": "3",
    //             "link": "https://www.theguardian.com/news/2018/dec/26/nazanin-zaghari-ratcliffe-spends-40th-birthday-in-iranian-jail",
    //             "source": "Guardian"
	// 		  }
    //     ]
    // }
];