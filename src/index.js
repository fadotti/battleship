import "./style.css";
import { renderLandingPage } from "./landing-page.js";
import { renderBoardSetup } from "./board-setup.js";
import { renderArena } from "./arena.js";
import { addLandingPageHandlers } from "./event-handlers.js";

renderLandingPage();
addLandingPageHandlers();
document.querySelector('body > div:nth-child(2) > input').focus();

window.renderLandingPage = renderLandingPage;
window.renderBoardSetup = renderBoardSetup;
window.renderArena = renderArena;