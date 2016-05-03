// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require_tree .

$(document).on("page:change", function(){
  $('input[value="Update Resume"]').attr('disabled', true);
  $('#user_document').bind("click", function(){
    if($('#user_document')[0].files.length == 0)
      $('input[value="Update Resume"]').attr('disabled', false);
    else
      $('input[value="Update Resume"]').attr('disabled', true);
    });

  $('input[value="Delete"]').click(function(){
      return confirm('Are you sure you want to delete this item?');
  });

  // $('#angel_scraper').click(function(){
  //   $('input[name="pages"]').attr('disabled', this.checked)
  // });
});
