$(document).ready(function() {
    // Add event listener to the document body
    $('body').click(function(event) {
      // Check if the clicked element is not inside the navbar collapse
      if (!$(event.target).closest('.navbar-collapse').length) {
        // Hide the navbar collapse if it is currently shown
        if ($('.navbar-collapse').hasClass('show')) {
          $('.navbar-collapse').collapse('hide');
          $('.navbar-toggler').addClass('collapsed');
          $('.navbar-toggler').attr('aria-expanded', 'false');
          $('.navbar-toggler').removeClass("collapsed");
          $('.navbar-toggler').removeClass("change");
        }
      }
    });
  });


 document.addEventListener('DOMContentLoaded', function () {
        var currentYear = new Date().getFullYear();
        var copyrightElement = document.getElementById('copyright');
        copyrightElement.innerHTML = '&copy; ' + currentYear + ' Potencia  All Rights Reserved.';
      });

      $('.design_and_building').click(function(){
         location.href="design-and-build.html";
      })

      $('.construction').click(function(){
         location.href="construction.html";
      })

      $('.m_e_p').click(function(){
         location.href="m-e-p.html";
      })

      $('.family_entertainment_centers').click(function(){
         location.href="family-entertainment-centers.html";
      })

       $('.concept_design_and_rendering').click(function(){

         location.href="concept-design-and-3d-rendering.html";
      })

       $('.themed_artistic_rockwork').click(function(){
         location.href="themed-artistic-rockwork.html";
      })

       $('.themed_art_worked').click(function(){
         location.href="themed-art-worked.html";
      })

      $('.turnkey_fit_out').click(function(){
         location.href="turnkey-fit-out.html";
      })

       $('.themed_retail_concept_stores').click(function(){
         location.href="themed-retail-concept-stores.html";
      })

        $('.villa_construction').click(function(){
         location.href="villa-construction.html";
      })

      $('.metal_structure_and_metal_props').click(function(){
         location.href="metal-structure-and-metal-props.html";
      })     
      