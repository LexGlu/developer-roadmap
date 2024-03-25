import{a as c,T as u}from"./jwt.M546E6_Y.js";import"./navigation.Bz95h8j7.js";window.fireEvent=t=>{const{action:e,category:o,label:n,value:s}=t;if(!window.gtag){console.warn("Missing GTAG - Analytics disabled");return}window.gtag("event",e,{event_category:o,event_label:n,value:s})};function i(t){t.classList.add("opacity-0","transition-opacity","duration-300"),t.classList.remove("hidden"),setTimeout(()=>{t.classList.remove("opacity-0")})}function a(t="hide"){document.querySelectorAll("[data-auth-required]").forEach(e=>{t==="hide"?e.classList.add("hidden"):i(e)})}function d(t="hide"){document.querySelectorAll("[data-guest-required]").forEach(e=>{t==="hide"?e.classList.add("hidden"):i(e)})}function r(){const t=["/account/update-profile","/account/notification","/account/update-password","/account/settings","/account/roadmaps","/account/road-card","/account/friends","/account","/team","/team/progress","/team/roadmaps","/team/new","/team/members","/team/settings"];a("hide"),d("show"),t.includes(window.location.pathname)&&(window.location.href="/")}function p(){const t=["/login","/signup","/verify-account","/verification-pending","/reset-password","/forgot-password"];if(d("hide"),a("show"),t.includes(window.location.pathname)){const e=window.localStorage.getItem("authRedirect")||"/";window.localStorage.removeItem("authRedirect"),window.location.href=e}}function l(){c.get(u)?p():r()}window.setTimeout(()=>{l()},0);class h{constructor(){this.triggerPopup=this.triggerPopup.bind(this),this.onDOMLoaded=this.onDOMLoaded.bind(this),this.handleClosePopup=this.handleClosePopup.bind(this),this.handleKeydown=this.handleKeydown.bind(this)}triggerPopup(e){const o=e?.target?.closest("[data-popup]")?.dataset?.popup||"unknown-popup",n=document.querySelector(`#${o}`);if(!n)return;e.preventDefault(),n.classList.remove("hidden"),n.classList.add("flex");const s=n.querySelector("[autofocus]");s&&s.focus()}handleClosePopup(e){const o=e.target,n=o.closest(".popup-body"),s=o.closest(".popup");!o.closest(".popup-close")&&n||s&&(s.classList.add("hidden"),s.classList.remove("flex"))}handleKeydown(e){if(e.key!=="Escape")return;const o=document.querySelector(".popup:not(.hidden)");o&&(o.classList.add("hidden"),o.classList.remove("flex"))}onDOMLoaded(){document.addEventListener("click",this.triggerPopup),document.addEventListener("click",this.handleClosePopup),document.addEventListener("keydown",this.handleKeydown)}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded)}}const w=new h;w.init();
