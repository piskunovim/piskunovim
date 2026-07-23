import * as Fingerprint from "@fingerprint/agent";
import { FP_API_KEY, FP_ENDPOINT, FP_REGION, FP_WORKER_BASE } from "../consts";

// const KEY = "fp_vid";
// const EVENT_KEY = "fp_eid";

type FP = {
  visitor_id: string;
  event_id: string;
};

let agent: Awaited<ReturnType<typeof Fingerprint.start>> | null = null;
let pending: Promise<FP> | null = null;

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

async function identify(): Promise<FP> {
  const fp = await getAgent();
  const { visitor_id, event_id } = await fp.get();

  if (!visitor_id) {
    throw new Error("[Error] visitor_id is unavailabe");
  }

  // try {
  //   sessionStorage.setItem(KEY, visitor_id);
  //   if (event_id) sessionStorage.setItem(EVENT_KEY, event_id);
  // } catch {}

  return { visitor_id, event_id };
}

export function getVisitorId(): Promise<FP> {
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

export function initFingerprint(): void {
  if (!FP_API_KEY) return;

  waitForAnimations().then(() =>
    getVisitorId()
      .then((result) => {
        // let eventId: string | null = null;
        // try {
        //   eventId = sessionStorage.getItem(EVENT_KEY);
        // } catch {}
        const { visitor_id, event_id } = result;
        console.log("[fp] visitor", visitor_id);
        if (event_id) {
          console.log("[fp] event", `${FP_WORKER_BASE}/event?id=${event_id}`);
        }
        console.log("[fp] view ", `${FP_WORKER_BASE}/view`);
      })
      .catch((err) => {
        console.warn("[fp]", err);
      }),
  );
}

// export function initFingerprint(): void {
//   if (!FP_API_KEY) {
//     return;
//   }

//   const run = () => {
//     getVisitorId()
//       .then((id) => {
//         if (import.meta.env.DEV) console.log("[fp]", id);
//       })
//       .catch((err) => {
//         if (import.meta.env.DEV) console.warn("[fp]", err);
//       });
//   };

//   if ("requestIdleCallback" in window) {
//     requestIdleCallback(run, { timeout: 5000 });
//   } else {
//     setTimeout(run, 2000);
//   }

// getVisitorId()
//   .then((id) => {
//     if (import.meta.env.DEV) {
//       console.log("[fp]", id);
//     }
//   })
//   .catch((err) => {
//     if (import.meta.env.DEV) {
//       console.warn("[Error][fp]", err);
//     }
//   });
// }
