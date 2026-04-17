import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { BROCHURE_TEASER_IMAGE_PATHS } from "../config/contact";
import { Link } from "react-router-dom";
import { useState } from "react";

const PREVIEW_PAGE_COUNT = 2;
const BLURRED_PREVIEW_PAGE_INDEX = 2;

export default function ProgramOverview() {
  const [imageLoadErrors, setImageLoadErrors] = useState({});
  const blurredPreviewPath =
    BROCHURE_TEASER_IMAGE_PATHS[BLURRED_PREVIEW_PAGE_INDEX] || BROCHURE_TEASER_IMAGE_PATHS[1] || "";

  const handleImageError = (idx) => {
    setImageLoadErrors((prev) => ({ ...prev, [idx]: true }));
  };

  return (
    <MainLayout>
      <section className="min-h-screen pt-32 pb-20 bg-cover bg-center bg-fixed relative transition-colors duration-300"
        style={{ backgroundImage: "url(/images/backgrounds/program-fellowship-path.jpg)" }}>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8 rounded-2xl border border-white/20"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-5 text-white drop-shadow-lg">
              Program Overview
            </h1>
            <p className="text-lg text-gray-100 mb-8">
              Preview the program brochure for a complete overview of tracks, structure, admissions, and output expectations.
            </p>

            <div className="rounded-xl border border-white/20 bg-white/10 p-3 mb-3 max-w-3xl mx-auto">
              <div className="h-[80vh] min-h-[460px] max-h-[820px] overflow-y-auto pr-1 space-y-4">
                {BROCHURE_TEASER_IMAGE_PATHS.slice(0, PREVIEW_PAGE_COUNT).map((imagePath, index) => (
                  <div
                    key={imagePath}
                    className="rounded-lg overflow-hidden border border-white/15 bg-black/20 flex justify-center"
                  >
                    {imageLoadErrors[index] ? (
                      <div className="h-[520px] w-full grid place-items-center p-6 text-center text-sm text-gray-200 bg-white/5">
                        Teaser page {index + 1} is unavailable. Add image file at
                        <span className="block mt-1 text-accent">{imagePath}</span>
                      </div>
                    ) : (
                      <img
                        src={imagePath}
                        alt={`Brochure teaser page ${index + 1}`}
                        className="w-full max-w-[680px] h-auto object-contain"
                        loading="lazy"
                        onError={() => handleImageError(index)}
                      />
                    )}
                  </div>
                ))}

                {blurredPreviewPath && (
                  <div className="relative rounded-lg overflow-hidden border border-white/15 bg-black/20 min-h-[520px] flex justify-center">
                    {imageLoadErrors[BLURRED_PREVIEW_PAGE_INDEX] ? (
                      <div className="h-[520px] w-full grid place-items-center p-6 text-center text-sm text-gray-200 bg-white/5">
                        Blurred teaser page 3 is unavailable. Add image file at
                        <span className="block mt-1 text-accent">{blurredPreviewPath}</span>
                      </div>
                    ) : (
                      <img
                        src={blurredPreviewPath}
                        alt="Brochure teaser page 3 (blurred preview)"
                        className="w-full max-w-[680px] h-auto object-contain blur-md brightness-75 pointer-events-none select-none"
                        loading="lazy"
                        onError={() => handleImageError(BLURRED_PREVIEW_PAGE_INDEX)}
                      />
                    )}

                    <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px] grid place-items-center p-6">
                      <div className="max-w-lg w-full rounded-xl border border-accent/40 bg-slate-900/75 p-5 text-center shadow-xl">
                        <p className="text-sm uppercase tracking-wide text-accent mb-2">
                          Preview Limit Reached
                        </p>
                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                          Request Full Brochure Access
                        </h3>
                        <p className="text-sm text-gray-200 mb-4">
                          Full brochure is not hosted publicly. Share your basic details and we will send access.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-accent text-black font-semibold hover:brightness-110 transition-all"
                          >
                            Contact for Brochure Request
                          </Link>
                          <Link
                            to="/apply"
                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-white/25 bg-white/10 text-white font-semibold hover:border-accent/60 transition-all"
                          >
                            Share Basic Info
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <p className="text-xs text-gray-300 mb-6">Showing 2 clear teaser pages • Remaining pages are protected</p>

            <p className="text-sm text-gray-200 mb-4">
              Brochure download is shared after we receive your basic details.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-black font-semibold hover:brightness-110 transition-all"
              >
                Share Basic Info
              </Link>
              <Link
                to="/apply"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/25 bg-white/10 text-white font-semibold hover:border-accent/60 transition-all"
              >
                Apply Now
              </Link>
            </div>

          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
