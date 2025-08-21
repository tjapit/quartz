document.querySelectorAll<HTMLDivElement>(".ref-nav").forEach(el => {
  el.addEventListener("click", (e) => {
    // If the click wasn’t on a child<a>, follow the default link
    if (!(e.target as HTMLElement).closest("a")) {
      const url = el.dataset.defaultLink
      if (url) window.location.href = url
    }
  })
})

