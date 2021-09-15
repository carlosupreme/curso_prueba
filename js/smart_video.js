const d = document,
  cl = console.log,
  w = window;
export default function smartVideo() {
  const $videos = d.querySelectorAll("video[data-video]"),
    options = {
      threshold: 0.5,
    },
    cb = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play();
        } else {
          entry.target.pause();
        }

        w.addEventListener("visibilitychange", (e) =>
          d.visibilityState === "visible"
            ? entry.target.play()
            : entry.target.pause()
        );
      });
    },
    observer = new IntersectionObserver(cb, options);

  $videos.forEach((video) => observer.observe(video));
}
