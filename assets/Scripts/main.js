window.onscroll = () => {
    if (window.scrollY > 150) {
      document.querySelector("div.navbar").classList.remove("no-background");
      document.querySelector("div.navbar").classList.add("background");
    } else {
      document.querySelector("div.navbar").classList.remove("background");
      document.querySelector("div.navbar").classList.add("no-background");
    }
  };
  