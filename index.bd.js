(()=>{"use strict";document.addEventListener("DOMContentLoaded",(()=>{var e,t,o,n,a;"localhost"!==window.location.hostname&&(e=window,t=document,o="script","ga",e.GoogleAnalyticsObject="ga",e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,n=t.createElement(o),a=t.getElementsByTagName(o)[0],n.async=1,n.src="https://www.google-analytics.com/analytics.js",a.parentNode.insertBefore(n,a),window.ga("create","UA-119883226-1","auto"),window.ga("send","pageview"))})),document.querySelectorAll("section.year > div.header").forEach((e=>{const t="collapse";e.addEventListener("click",(e=>{e.stopPropagation();let o=e.target.parentElement;"SECTION"===o.tagName?o.classList.contains(t)?o.classList.remove(t):o.classList.add(t):o.click()}))}));const e=document.getElementById("go-top");null!==e&&(window.addEventListener("scroll",(()=>{document.body.scrollTop>40||document.documentElement.scrollTop>40?e.style.display="block":e.style.display="none"})),e.onclick=()=>{document.getElementById("container").scrollIntoView()})})();