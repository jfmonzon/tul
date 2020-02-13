$(function()
{
  $("li.dropdown-submenu [data-toggle='dropdown']").on("click", function(event)
  {
    event.preventDefault();
    event.stopPropagation();
    $(".submen").removeClass("show");
    $(this).siblings().toggleClass("show");
    if(!$(this).next().hasClass('show'))
    {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown',function(e)
    {
      $('.dropdown-submenu .show').removeClass("show");
    });
  });
});

