import * as d3 from "d3";
import { events } from './EVENTS.js';

export const LAYER_NAMES = {
    intro: "Held in Iran",
	prime_ministers: "Prime ministers",
    foreign_secretaries: "Foreign secretaries",
    solitary_confinement: "Solitary confinement",
    hunger_strikes: "Hunger strikes",
    medical_attention: "Medical attention",
    locations: "Locations",
    birthdays: "Birthdays",
};

const LAYER_INTROS = {
    intro: "Held in Iran",
	prime_ministers: "Prime ministers",
    foreign_secretaries: "Foreign secretaries",
    solitary_confinement: "Solitary confinement",
    hunger_strikes: "Hunger strikes",
    medical_attention: "Medical attention",
    locations: "Locations",
    birthdays: "Birthdays",
};

const INTRO_LAYER = {
	name: LAYER_NAMES["intro"],
	type: "divider",
	events: [],
	days: 2172,
	intro: LAYER_INTROS["intro"]
};


function sortByDate(a, b) {
	return a.start_date - b.start_date;
}

function parseDisplayOrder(str) {
	if (isNaN(str) || str.trim() === "") return Infinity;
	return Number(str);
}

function sortByOrder(a, b) {
	return parseDisplayOrder(a.display_order) - parseDisplayOrder(b.display_order);
}

function getLayers() {
	const rows = d3.tsvParse(events);
	const filtered_rows = rows.map(r => {
		return ({
			...r,
			start_date: r.start ? new Date(r.start) : null,
			end_date: r.end ? new Date(r.end) : null,
		});
	}).filter(r => r.start_date || r.end_date)

	const sorted_rows = filtered_rows
		.sort(sortByDate)
		.sort(sortByOrder);

	let layers = [INTRO_LAYER];
	let layer_names = new Set().add(INTRO_LAYER.name);

	sorted_rows.forEach(row => {
		const layer_name = LAYER_NAMES[row.layer];
		const layer_intro = LAYER_INTROS[row.layer];
		let layer_i = [...layer_names].indexOf(layer_name);
		if (layer_i < 0) {
			layer_names.add(layer_name);
			layers.push({
				name: layer_name,
        		type: row.type,
				events: [],
				days: row.type === "fill" ? 0 : 2172,
				intro: layer_intro
			})
			layer_i = layers.length - 1;
		}
		const this_layer = layers[layer_i];
		this_layer.events.push(row);
		if (this_layer.type === "fill") this_layer.days = this_layer.days + Number(row.days);
	})
	return layers;
}

export const LAYERS = getLayers();