// Theme choice lives in localStorage under "theme" (light | dark | system).

/** Runs before first paint (inlined in the root layout) so the page never flashes the wrong theme. */
export const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("theme");var d=t==="dark"||((!t||t==="system")&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.dataset.theme=d?"dark":"light"}catch(e){}})()`;
