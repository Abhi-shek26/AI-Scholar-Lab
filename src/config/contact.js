export const DOMAIN = "aischolarslab.org";

export const APPLY_EMAIL = "apply@aischolarslab.org";
export const CONTACT_EMAIL = "contact@aischolarslab.org";

const BASE_URL = import.meta.env.BASE_URL || "/";

// Frontend-only secure approach: expose only teaser assets, never full brochure PDF.
export const BROCHURE_TEASER_IMAGE_PATHS = [
	`${BASE_URL}brochure/teaser-page-1.png`,
	`${BASE_URL}brochure/teaser-page-2.png`,
	`${BASE_URL}brochure/teaser-page-3.png`,
];