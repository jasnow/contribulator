/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
$(document).on("turbolinks:load", () =>
  $(".js-emoji").each(function() {
    return $(this).html(emojione.toImage($(this).text()));
  })
);
