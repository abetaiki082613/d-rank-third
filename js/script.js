$(function () {
  $("#btn_gNav_header").on("click", function () {
    $(this).toggleClass("open");
    $("#area_gNav").toggleClass("open");
    // $("#area_logo_header").toggleClass("open");
  });
});

// メニューをクリックされたら、非表示にする
$(function () {
  $(".nav_gNav-menu li a").on("click", function () {
    $("#area_gNav").removeClass("open");
    $("#btn_gNav_header").removeClass("open");
    // $("#area_logo_header").removeClass("open");
  });
});
