// Search for lenses by title.
// With help from Code Newbies

var allRows = $("tr");
$("input#search").on("keydown keyup", function() {
    allRows.hide();
    $("tr:contains('" + $(this).val() + "')").show();
});
