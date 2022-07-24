import * as d3 from "d3";
import { events } from './EVENTS.js';

export const LAYER_NAMES = {
    prime_ministers: "Prime ministers",
    foreign_secretaries: "Foreign secretaries",
    solitary_confinement: "Solitary confinement",
    hunger_strikes: "Hunger strikes",
    medical_attention: "Medical attention",
    locations: "Locations",
    birthdays: "Birthdays",
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

	let layers = [];
	let layer_names = new Set();

	sorted_rows.forEach(row => {
		const layer_name = LAYER_NAMES[row.layer];
		let layer_i = [...layer_names].indexOf(layer_name);
		if (layer_i < 0) {
			layer_names.add(layer_name);
			layers.push({
				name: layer_name,
        		type: row.type,
				events: [],
				days: row.type === "fill" ? 0 : 2172
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