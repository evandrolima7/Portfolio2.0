import scrollSuaveActive from "./modules/scrollModules/scrollSuave.js";
import scrollBotaoSobre from "./modules/scrollModules/scrollBotaoSobre.js";
import scrollBotaoContato from "./modules/scrollModules/scrollBotaoContato.js";
import animationScrollSection from "./modules/scrollModules/animationScrollSection.js";


import animateCardsSection from "./modules/animateModules/animateCardsSection.js";
import animateBtnContato from "./modules/animateModules/animateBtnContato.js";
import animateCardsHabilidades from "./modules/animateModules/animateCardsHabilidade.js";
import animateForm from "./modules/animateModules/animateForm.js";

import initModal from "./modules/modalModules/modal.js";

scrollSuaveActive();
scrollBotaoSobre();
scrollBotaoContato();
animationScrollSection();


animateCardsSection();
animateBtnContato();
animateCardsHabilidades();
animateForm();

initModal();