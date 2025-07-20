$(document).ready(function () {
  const $hamburger = $(".hamburger");
  const $navlinks = $(".nav-links");

  $hamburger.click(function () {
    const expanded = $(this).attr("data-expanded") === "true";
    $(this).attr("data-expanded", !expanded);
    $navlinks.attr("data-active", !expanded);
  });

  $(".nav-links").click(function () {
    $hamburger.attr("data-expanded", false);
    $navlinks.attr("data-active", false);
  });
});
