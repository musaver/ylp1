import type { ComponentType } from "react";
import type { Metadata } from "next";
import C0, { meta as m0 } from "./school-of-islam";
import C1, { meta as m1 } from "./nahal";
import C2, { meta as m2 } from "./mashal";
import C3, { meta as m3 } from "./muhawil";
import C4, { meta as m4 } from "./quad-solutions";
import C5, { meta as m5 } from "./youthlink-media";

export const entries: Record<string, { Component: ComponentType; meta: Metadata }> = {
  "school-of-islam": { Component: C0, meta: m0 },
  "nahal": { Component: C1, meta: m1 },
  "mashal": { Component: C2, meta: m2 },
  "muhawil": { Component: C3, meta: m3 },
  "quad-solutions": { Component: C4, meta: m4 },
  "youthlink-media": { Component: C5, meta: m5 },
};
