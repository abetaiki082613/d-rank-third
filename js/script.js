$(function () {
  $("#area_btn_gNav").on("click", function () {
    // $(this).toggleClass("open");
    $("#area_gNav-menu_open").removeClass("close_menu");
    $("#area_gNav-menu_open").toggleClass("open");
  });
});

// メニューをクリックされたら、非表示にする
$(function () {
  $(".area_Nav_menu li a").on("click", function () {
    $("#area_gNav-menu_open").removeClass("open");
    $("#area_gNav-menu_open").addClass("close_menu");
    // $("#area_btn_gNav").removeClass("open");
  });

  $("#area_gNav_click_btn_close i").on("click", function () {
    $("#area_gNav-menu_open").removeClass("open");
    $("#area_gNav-menu_open").addClass("close_menu");
    // $("#area_btn_gNav").removeClass("open");
  });
  $(".close").on("click", function () {
    if ($("#area_gNav-menu_open").hasClass("open")) {
      $("#area_gNav-menu_open").removeClass("open");
      $("#area_gNav-menu_open").addClass("close_menu");
    }
  });
});
