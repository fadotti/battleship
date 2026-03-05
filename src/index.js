import "./style.css";
import { renderLandingPage } from "./landing-page.js";
import { renderBoardSetup } from "./board-setup.js";
import { renderArena } from "./arena.js";

// renderLandingPage();

window.renderLandingPage = renderLandingPage;
window.renderBoardSetup = renderBoardSetup;
window.renderArena = renderArena;