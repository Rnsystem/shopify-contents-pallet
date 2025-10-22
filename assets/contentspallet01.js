document.addEventListener("DOMContentLoaded", function () {
  const areas = document.querySelectorAll(".contentspallet_pub__shoppable-image__area");
  areas.forEach((area) => {
    // マウスホバー
    area.addEventListener("mouseenter", () => {
      area.classList.add("contentspallet_pub__shoppable-image__area--active");
    });
    area.addEventListener("mouseleave", () => {
      area.classList.remove("contentspallet_pub__shoppable-image__area--active");
    });

    // タップ（スマホ）
    area.addEventListener("touchstart", () => {
      area.classList.add("contentspallet_pub__shoppable-image__area--active");
    });
    area.addEventListener("touchend", () => {
      area.classList.remove("contentspallet_pub__shoppable-image__area--active");
    });
  });
});
