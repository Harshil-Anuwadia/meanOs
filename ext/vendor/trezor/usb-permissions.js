const _0x419d=["addEventListener","1jIpkMq","1052087LomcxR","usb-permissions-close","usb-permissions-init","update","postMessage","contentWindow","length","903821kvMozi","tabs","1AfEuxM","data","index","removeEventListener","2CpZaJG","543166phkpex","19167pivMUa","*://connect.trezor.io/*/popup.html","790298rzGdbC","1348963Wrrreu","408343pIQYvA","42CrrfRu","runtime","query","beforeunload"],_0x5dfd=function(e,t){return _0x419d[e-=443]},_0x47ea04=_0x5dfd;!function(e,t){const s=_0x5dfd;for(;;)try{if(865749===parseInt(s(460))*parseInt(s(466))+parseInt(s(454))*parseInt(s(456))+-parseInt(s(467))*parseInt(s(462))-parseInt(s(465))+parseInt(s(446))*parseInt(s(447))+parseInt(s(464))+-parseInt(s(461)))break;e.push(e.shift())}catch(t){e.push(e.shift())}}(_0x419d);const switchToPopupTab=e=>{const t=_0x5dfd;window[t(459)](t(444),switchToPopupTab),e?chrome[t(455)][t(443)]({url:t(463)},e=>{const s=t;e.length<0||chrome[s(455)][s(450)](e[0].id,{active:!0})}):chrome[t(455)][t(443)]({currentWindow:!0,active:!0},e=>{const s=t;e[s(453)]<0||(chrome[s(455)][s(443)]({index:e[0][s(458)]-1},e=>{const t=s;e[t(453)]<0||chrome.tabs[t(450)](e[0].id,{active:!0})}),chrome.tabs.remove(e[0].id))})};window.addEventListener("message",e=>{const t=_0x5dfd;if(e[t(457)]===t(449)){document.getElementById("trezor-usb-permissions")[t(452)][t(451)]({type:"usb-permissions-init",extension:chrome[t(468)].id},"*")}else e[t(457)]===t(448)&&switchToPopupTab()}),window[_0x47ea04(445)](_0x47ea04(444),switchToPopupTab);