import { getRow } from "../services/utils";

export const BACKGROUND_COLOR = "#000000";

const NO_OF_YEARS = 7;

const MIN_YEAR_GUTTER = 20;
const MIN_TOTAL_GUTTER = NO_OF_YEARS * MIN_YEAR_GUTTER;

export const SPACE_FOR_TOP_LABELS = 60;
export const SPACE_FOR_LEFT_LABELS = 30;

export const MARGIN_TOP = 40;
export const MARGIN_RIGHT = 40;
export const MARGIN_BOTTOM = 40;
export const MARGIN_LEFT = 40;

const HORIZONTAL_SPACE = SPACE_FOR_LEFT_LABELS + MARGIN_RIGHT + MARGIN_LEFT;
const VERTICAL_SPACE = SPACE_FOR_TOP_LABELS + MARGIN_TOP + MARGIN_BOTTOM;

const window_width = window.innerWidth;
const window_height = window.innerHeight;

const chart_width = (window_width * 0.6) - HORIZONTAL_SPACE;
const chart_height = (window_height * 1) - VERTICAL_SPACE;

export const DAY_COLUMNS = 7;
const DAY_ROWS = getRow(365, "2022") + 1;

const box_width = ((chart_width - MIN_TOTAL_GUTTER) / NO_OF_YEARS) / DAY_COLUMNS;
const box_height = chart_height / DAY_ROWS;


export const BOX_SIZE = Math.min(box_width, box_height);
export const YEAR_GUTTER = Math.max(MIN_YEAR_GUTTER, (chart_width - ((BOX_SIZE * DAY_COLUMNS) * NO_OF_YEARS)) / NO_OF_YEARS);

export const COLUMN_WIDTH = BOX_SIZE * DAY_COLUMNS;
export const SVG_HEIGHT = (BOX_SIZE * DAY_ROWS) + SPACE_FOR_TOP_LABELS;

export const MIN_DATE = new Date("April 03, 2016 000:00:00");
export const MAX_DATE = new Date("March 16, 2022 000:00:00");