import type { TrainingDay } from './types';

export const DAYS: TrainingDay[] = [
  {
    id: 'mon',
    short: 'Mon',
    label: 'Rest',
    type: 'rest',
  },
  {
    id: 'tue',
    short: 'Tue',
    label: 'Push — Arms',
    type: 'push',
    duration: '90–105 min',
    muscles: 'Lateral delts · Front delts · Triceps',
    exercises: [
      { id: 'dbs', tier: 'T1', name: 'DB Shoulder Press', note: 'Anchor of session — shoulder strength lives here' },
      { id: 'sacl', tier: 'T2', name: 'Single Arm Cable Lateral Raise', note: 'Cable keeps tension at bottom — superior to DB here' },
      { id: 'octe', tier: 'T2', name: 'Overhead Cable Tricep Extension', note: 'Full stretch overhead — long head priority' },
      { id: 'tpd', tier: 'T3', name: 'Tricep Pushdown', note: 'Elbows pinned — isolate the movement' },
      { id: 'dblr_tue', tier: 'T3', name: 'DB Lateral Raise', note: 'Finisher — lateral delt fully exhausted by end' },
    ],
  },
  {
    id: 'wed',
    short: 'Wed',
    label: 'Push — Chest',
    type: 'push',
    duration: '90–105 min',
    muscles: 'Upper chest · Mid chest · Triceps · Lateral delts',
    exercises: [
      { id: 'idp', tier: 'T1', name: 'Incline DB Press', note: 'Primary compound — upper chest is the Rogers priority' },
      { id: 'sfb', tier: 'T2', name: 'Smith Flat Bench Press', note: 'Secondary — mid chest thickness. Use safeties every set' },
      { id: 'pdf1', tier: 'T3', name: 'Pec Deck Fly', note: 'Full stretch — feel the chest load at the bottom' },
      { id: 'pdf2', tier: 'T3', name: 'Pec Deck Fly (finisher)', note: 'Constant tension pump — lighter weight, controlled' },
      { id: 'dblr_wed', tier: 'T3', name: 'DB Lateral Raise', note: 'Third weekly lateral delt hit — Rogers priority' },
    ],
  },
  {
    id: 'thu',
    short: 'Thu',
    label: 'Rest',
    type: 'rest',
  },
  {
    id: 'fri',
    short: 'Fri',
    label: 'Pull — Arms',
    type: 'pull',
    duration: '75–90 min',
    muscles: 'Biceps · Brachialis · Forearms · Rear delts',
    exercises: [
      { id: 'bcc', tier: 'T1', name: 'Bayesian Cable Curl', note: 'Full stretch at bottom — own the lengthened position' },
      { id: 'pc', tier: 'T2', name: 'Preacher Curl', note: 'Dead stop at bottom — no momentum' },
      { id: 'tchc_fri', tier: 'T3', name: 'Twisted Crossbody Hammer Curl', note: 'Forearm hit — 3 sec eccentric, slow down' },
      { id: 'sardf', tier: 'T3', name: 'Single Arm Rear Delt Fly', note: "Pinch at peak contraction — don't rush" },
    ],
  },
  {
    id: 'sat',
    short: 'Sat',
    label: 'Pull — Back',
    type: 'pull',
    duration: '90–105 min',
    muscles: 'Lats · Mid-back · Rear delts · Biceps (indirect)',
    exercises: [
      { id: 'lpd', tier: 'T1', name: 'Lat Pulldown', note: "Full stretch at top — don't cut the ROM" },
      { id: 'salpd', tier: 'T2', name: 'SA Lat Pulldown (Left)', note: 'Left side only — asymmetry correction. Non-negotiable' },
      { id: 'cr', tier: 'T1', name: 'Cable Row', note: 'Drive elbows back — squeeze mid-back at peak' },
      { id: 'sacr', tier: 'T2', name: 'SA Cable Row (Left)', note: 'Left side only — match right side ROM' },
      { id: 'tchc_sat', tier: 'T3', name: 'Twisted Crossbody Hammer Curl', note: 'Forearm frequency hit — slow eccentric, 3 sec down' },
    ],
  },
  {
    id: 'sun',
    short: 'Sun',
    label: 'Legs',
    type: 'legs',
    duration: '90 min',
    muscles: 'Quads · Hamstrings · Glutes · Calves',
    exercises: [
      { id: 'sms', tier: 'T1', name: 'Smith Machine Squat', note: 'Full depth — break parallel every rep. Safe without spotter' },
      { id: 'lp', tier: 'T2', name: 'Leg Press', note: "Full ROM — don't lock out at top" },
      { id: 'rdl', tier: 'T2', name: 'Romanian Deadlift (DB)', note: 'Hinge at hip — feel hamstring stretch load at bottom' },
      { id: 'le', tier: 'T3', name: 'Leg Extension', note: 'Full extension — squeeze at the top' },
      { id: 'lc', tier: 'T3', name: 'Leg Curl', note: 'Full ROM — feel the hamstring rattle' },
      { id: 'crs', tier: 'T3', name: 'Calf Raise (Smith)', note: 'Full stretch at bottom — calves only respond to full ROM' },
    ],
  },
];

// JS getDay(): 0=Sun,1=Mon,2=Tue,3=Wed,4=Thu,5=Fri,6=Sat
// DAYS array:  0=Mon,1=Tue,2=Wed,3=Thu,4=Fri,5=Sat,6=Sun
const JS_DAY_TO_INDEX: Record<number, number> = {
  0: 6, // Sunday
  1: 0, // Monday
  2: 1, // Tuesday
  3: 2, // Wednesday
  4: 3, // Thursday
  5: 4, // Friday
  6: 5, // Saturday
};

export function getDefaultDayIndex(): number {
  const idx = JS_DAY_TO_INDEX[new Date().getDay()] ?? 1;
  return DAYS[idx].type === 'rest' ? 1 : idx;
}