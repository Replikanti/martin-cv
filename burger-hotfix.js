// burger hotfix v4: move CTA out of burger to the right; keep menu readable
(function(){
  function ready(fn){/in/.test(document.readyState)?setTimeout(function(){ready(fn)},9):fn()}
  ready(function(){
    var nav = document.getElementById("mainNav");
    var headerNav = document.querySelector("header .nav") || document.querySelector(".nav");
    if(!nav || !headerNav) return;

    // Ensure .actions exists at the far right
    var actions = headerNav.querySelector(".actions");
    if(!actions){
      actions = document.createElement("div");
      actions.className = "actions";
      headerNav.appendChild(actions);
    }

    // Find CTA inside nav by text or target
    function isCTA(a){
      var t = (a.textContent||"").toLowerCase();
      var href = (a.getAttribute("href")||"").toLowerCase();
      return t.indexOf("domluvit")>-1 || t.indexOf("schůzku")>-1 || href.indexOf("#contact")>-1;
    }
    var cta = null;
    var links = nav.querySelectorAll("a");
    for(var i=0;i<links.length;i++){ if(isCTA(links[i])){ cta = links[i]; break; } }

    // Move or create CTA
    if(cta){
      actions.appendChild(cta);
    } else {
      cta = document.createElement("a");
      cta.href = "#contact";
      cta.textContent = "Domluvit schůzku";
      actions.appendChild(cta);
    }
    cta.classList.add("btn","primary");
    cta.style.position = "relative";
    cta.style.zIndex = "1100";
  });
})();