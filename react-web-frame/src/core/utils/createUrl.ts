import {API_BASE, API_TRANSPORT_PROTOCOL} from "../../environment.dev";

const URL_SEP = "/";

export function createURL(...segments: string[]) {
  return `${API_TRANSPORT_PROTOCOL}${URL_SEP}${URL_SEP}${API_BASE}${segments.join(URL_SEP)}`;
}