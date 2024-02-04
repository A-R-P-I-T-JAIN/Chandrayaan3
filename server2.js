function timeline() {
    var selectors = {
      id: document.getElementById("timeline-1"),
      item: document.querySelectorAll("#timeline-1 .timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img",
    };
  
    selectors.item[0].classList.add(selectors.activeClass);
    selectors.id.style.backgroundImage =
      "url(" +
      selectors.item[0].querySelector(selectors.img).getAttribute("src") +
      ")";
  
    var itemLength = selectors.item.length;
  
    window.addEventListener("scroll", function () {
      var max, min;
    //   console.log("scrollY",window.scrollY)
      var pos = window.scrollY || window.scrollTop || document.documentElement.scrollTop;
  
      selectors.item.forEach(function (item, i) {

        min = item.offsetTop;
        max = item.offsetHeight + item.offsetTop;

        // console.log("min",min)
        // console.log("max",max)
  
        if (i == itemLength - 2 && pos > min + item.offsetHeight / 2) {
          selectors.item.forEach(function (el) {
            el.classList.remove(selectors.activeClass);
          });
          selectors.id.style.backgroundImage =
            "url(" +
            selectors.item[itemLength - 1]
              .querySelector(selectors.img)
              .getAttribute("src") +
            ")";
          selectors.item[itemLength - 1].classList.add(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.style.backgroundImage =
            "url(" + item.querySelector(selectors.img).getAttribute("src") + ")";
          selectors.item.forEach(function (el) {
            el.classList.remove(selectors.activeClass);
          });
          item.classList.add(selectors.activeClass);
        }
      });
    });
  }
  
  timeline();
  