{
  console.log("mat padho ye sab yaar");

  let links = new Set();

  let allEle = document.getElementsByTagName("a");
  for (const a of allEle) {
    if (!links.has(a)) {
      links.add(a);
    }

    for (const a of links) {
      if (a.href === "https://www.youtube.com/watch?v=dQw4w9WgXcQ") {
        a.setAttribute("style", "background-color: red");
      }
    }
  }

  setInterval(() => {
    let newLinks = [];
    let allEle = document.getElementsByTagName("a");
    if (links.size !== allEle.length) {
      for (const a of allEle) {
        if (!links.has(a)) {
          links.add(a);
          newLinks.push(a);
        }

        for (const a of newLinks) {
          if (a.href === "https://www.youtube.com/watch?v=dQw4w9WgXcQ") {
            a.setAttribute("style", "background-color: red; color: white");
          }
        }
      }
    }
  }, 5000);
}
