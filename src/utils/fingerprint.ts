import * as Fingerprint from "@fingerprint/agent";
import { FP_API_KEY, FP_ENDPOINT, FP_REGION } from "../consts";

const KEY = "fp_vid";

let agent: Awaited<ReturnType<typeof Fingerprint.start>> | null = null;
let pending: Promise<string> | null = null;

async function getAgent() {
  if (!agent) {
    agent = await Fingerprint.start({
      apiKey: FP_API_KEY,
      region: FP_REGION,
      ...(import.meta.env.PROD && { endpoints: [FP_ENDPOINT] }),
    });
  }

  return agent;
}

async function identify(): Promise<string> {
  console.log("run identify");
  performance.mark("fp:agent-start");
  const fp = await getAgent();
  performance.mark("fp:agent-ready");
  const { visitor_id } = await fp.get();
  performance.mark("fp:done");

  performance.measure("fp:init", "fp:agent-start", "fp:agent-ready");
  performance.measure("fp:get", "fp:agent-ready", "fp:done");
  performance.measure("fp:total", "fp:agent-start", "fp:done");

  for (const m of performance.getEntriesByType("measure")) {
    if (m.name.startsWith("fp:"))
      console.log(m.name, Math.round(m.duration), "ms");
  }

  const MARKS = ["fp:agent-start", "fp:agent-ready", "fp:done"];
  const MEASURES = ["fp:init", "fp:get", "fp:total"];

  MARKS.forEach((n) => performance.clearMarks(n));
  MEASURES.forEach((n) => performance.clearMeasures(n));

  if (!visitor_id) {
    throw new Error("[Error] visitor_id is unavailabe");
  }

  try {
    sessionStorage.setItem(KEY, visitor_id);
  } catch {}

  return visitor_id;
}

export function getVisitorId(): Promise<string> {
  // try {
  //   const cached = sessionStorage.getItem(KEY);
  //   if (cached) return Promise.resolve(cached);
  // } catch {}

  if (!pending) {
    pending = identify().finally(() => {
      pending = null;
    });
  }
  return pending;
}

async function waitForAnimations(): Promise<void> {
  const anims = document.getAnimations().filter((a) => {
    const timing = a.effect?.getComputedTiming();
    if (!timing) {
      return false;
    }

    return Number.isFinite(timing.endTime) && Number(timing.endTime) <= 2000;
  });

  if (!anims.length) return;
  await Promise.allSettled(anims.map((a) => a.finished));
}

// export function initFingerprint(): void {
//   if (!FP_API_KEY) return;

//   waitForAnimations().then(() =>
//     getVisitorId()
//       .then((id) => {
//         if (import.meta.env.DEV) console.log("[fp]", id);
//       })
//       .catch((err) => {
//         if (import.meta.env.DEV) console.warn("[fp]", err);
//       }),
//   );
// }

export function initFingerprint(): void {
  if (!FP_API_KEY) {
    return;
  }

  if (import.meta.env.DEV) {
    new PerformanceObserver((list) => {
      for (const e of list.getEntries()) {
        console.warn("[longtask]", Math.round(e.duration), "ms");
      }
    }).observe({ type: "longtask", buffered: true });
  }

  // const run = () => {
  //   getVisitorId()
  //     .then((id) => {
  //       if (import.meta.env.DEV) console.log("[fp]", id);
  //     })
  //     .catch((err) => {
  //       if (import.meta.env.DEV) console.warn("[fp]", err);
  //     });
  // };

  // if ("requestIdleCallback" in window) {
  //   requestIdleCallback(run, { timeout: 5000 });
  // } else {
  //   setTimeout(run, 2000);
  // }

  getVisitorId()
    .then((id) => {
      if (import.meta.env.DEV) {
        console.log("[fp]", id);
      }
    })
    .catch((err) => {
      if (import.meta.env.DEV) {
        console.warn("[Error][fp]", err);
      }
    });
}
