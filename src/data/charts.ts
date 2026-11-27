import type { FlowChart } from "@/components/flow";

export const FOUR_DOMAINS: FlowChart = {
  id: "f-four",
  eyebrow: "The four domains",
  viewBox: "0 0 980 262",
  aria: "Culture informs politics, politics governs industry, industry feeds finance, and delivered value reshapes what people want.",
  caption:
    "Culture and politics settle what counts as value. Industry and finance create and move it, and delivered value changes what people want next.",
  groups: [
    { x: 8, y: 44, w: 444, h: 134, label: "Pair one: define and rank value" },
    { x: 528, y: 44, w: 444, h: 134, label: "Pair two: create and move value" },
  ],
  nodes: [
    { x: 20, y: 70, eye: "Value Definition", title: "Culture", sub: "Wants and needs", href: "/culture" },
    { x: 280, y: 70, eye: "Value System", title: "Politics", sub: "Priorities and rules", href: "/politics" },
    { x: 540, y: 70, eye: "Value Creation", title: "Industry", sub: "Rising productivity", href: "/industry" },
    { x: 800, y: 70, eye: "Value Exchange", title: "Finance", sub: "Issue, move, regulate", href: "/finance" },
  ],
  edges: [
    { d: "M185 111 L273 111", label: "informs", lx: 229, ly: 99 },
    { d: "M445 111 L533 111", label: "governs", lx: 489, ly: 99 },
    { d: "M705 111 L793 111", label: "feeds", lx: 749, ly: 99 },
    { d: "M880 157 L880 232 L100 232 L100 160", label: "delivered value reshapes wants", lx: 490, ly: 236, kind: "accent" },
  ],
};

export const CULTURE_TO_POLITICS: FlowChart = {
  id: "f-politics",
  eyebrow: "From culture to politics",
  viewBox: "0 0 980 200",
  aria: "Individuals form culture, culture guides support, support builds coalitions, coalitions govern through politics, and political rules reshape cultural norms.",
  caption:
    "Shared definitions of value guide where individuals place their support. Support scales into coalitions, and the rules those coalitions write feed back into culture.",
  nodes: [
    { x: 10, y: 30, w: 140, eye: "People", title: "Individuals", sub: "Wants and needs", variant: "muted" },
    { x: 215, y: 30, w: 140, eye: "Definition", title: "Culture", sub: "Shared definition" },
    { x: 420, y: 30, w: 140, eye: "Exchange", title: "Support", sub: "For expected value" },
    { x: 625, y: 30, w: 140, eye: "Scale", title: "Coalitions", sub: "Parties, countries" },
    { x: 830, y: 30, w: 140, eye: "Value System", title: "Politics", sub: "Rules and direction", variant: "filled" },
  ],
  edges: [
    { d: "M155 71 L208 71", label: "form", lx: 181.5, ly: 59 },
    { d: "M360 71 L413 71", label: "guides", lx: 386.5, ly: 59 },
    { d: "M565 71 L618 71", label: "builds", lx: 591.5, ly: 59 },
    { d: "M770 71 L823 71", label: "govern", lx: 796.5, ly: 59 },
    { d: "M900 117 L900 170 L285 170 L285 120", label: "rules reshape norms", lx: 592.5, ly: 174, kind: "accent" },
  ],
};

export const NEW_VALUE: FlowChart = {
  id: "f-industry",
  eyebrow: "How new value appears",
  viewBox: "0 0 980 142",
  aria: "Change opens new wants, new wants signal industry, and industry creates new value.",
  caption: "Change opens wants that did not exist before. Industry responds by producing new types of value, which enlarges the market.",
  nodes: [
    { x: 20, y: 30, eye: "Direction", title: "Change", sub: "Technology, tastes", variant: "muted" },
    { x: 280, y: 30, eye: "Culture", title: "New Wants", sub: "Defined by culture" },
    { x: 540, y: 30, eye: "Value Creation", title: "Industry", sub: "Productivity rises", variant: "filled" },
    { x: 800, y: 30, eye: "Result", title: "New Value", sub: "The market expands" },
  ],
  edges: [
    { d: "M185 71 L273 71", label: "opens", lx: 229, ly: 59 },
    { d: "M445 71 L533 71", label: "signals", lx: 489, ly: 59 },
    { d: "M705 71 L793 71", label: "creates", lx: 749, ly: 59 },
  ],
};

export const FINANCE_MOVES: FlowChart = {
  id: "f-finance",
  eyebrow: "How finance moves value",
  viewBox: "0 0 980 200",
  aria: "Stored value enters finance, finance funds producers, producers create new value, and new value returns as stored value.",
  caption:
    "Finance connects the three time frames. Value saved in the past funds production in the present, and the value produced becomes the stored value of the next cycle.",
  nodes: [
    { x: 20, y: 30, eye: "Past", title: "Stored Value", sub: "Savings and assets" },
    { x: 280, y: 30, eye: "Value Exchange", title: "Finance", sub: "Issue, move, regulate", variant: "filled" },
    { x: 540, y: 30, eye: "Present", title: "Producers", sub: "Raise productivity" },
    { x: 800, y: 30, eye: "Future", title: "New Value", sub: "Goods and services" },
  ],
  edges: [
    { d: "M185 71 L273 71", label: "enters", lx: 229, ly: 59 },
    { d: "M445 71 L533 71", label: "funds", lx: 489, ly: 59 },
    { d: "M705 71 L793 71", label: "create", lx: 749, ly: 59 },
    { d: "M880 117 L880 170 L100 170 L100 120", label: "returns as stored value", lx: 490, ly: 174, kind: "accent" },
  ],
};

export const CREDIT_LOOP: FlowChart = {
  id: "f-credit",
  eyebrow: "The credit loop",
  viewBox: "0 0 980 340",
  aria: "A promise attracts an advance of support or capital, delivery tests the promise, and credit expands when the expectation is met or contracts when it is missed.",
  caption:
    "The same loop runs in politics and in finance. A met expectation allows a larger promise in the next round, and a missed one shrinks what others will advance.",
  nodes: [
    { x: 20, y: 150, eye: "Credit", title: "Promise", sub: "Expected future value" },
    { x: 280, y: 150, eye: "Today", title: "Advance", sub: "Support or capital" },
    { x: 540, y: 150, eye: "Test", title: "Delivery", sub: "Promise is tested", variant: "filled" },
    { x: 800, y: 60, eye: "Expectation Met", title: "Credit Expands", sub: "More support, capital" },
    { x: 800, y: 240, eye: "Expectation Missed", title: "Credit Contracts", sub: "Both are withdrawn" },
  ],
  edges: [
    { d: "M185 191 L273 191", label: "attracts", lx: 229, ly: 179 },
    { d: "M445 191 L533 191", label: "comes due", lx: 489, ly: 179 },
    { d: "M705 183 L793 101", label: "met", lx: 749, ly: 146, kind: "good" },
    { d: "M705 199 L793 281", label: "missed", lx: 749, ly: 244, kind: "crit" },
    { d: "M880 55 L880 26 L100 26 L100 142", label: "allows larger promises", lx: 490, ly: 30, kind: "accent" },
  ],
};
