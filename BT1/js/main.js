$(document).ready(function () {
    createCanvas();
    let count = 0;
    let fontSize = parseInt($('p').css('font-size'));
    $('#zoomIn').click(function(e) {
      fontSize += 2;
      $('p').css('font-size',fontSize);
      count++;
      if(count == 3) {
        $(this).addClass('disabled');
      };
      $('#zoomOut').removeClass('disabled');
    });
    $('#zoomOut').click(function(e) {
      fontSize -= 2;
      $('p').css('font-size',fontSize);
      count--;
      if(count == 0) {
        $(this).addClass('disabled');
      }
      $('#zoomIn').removeClass('disabled');
    });
    $('#copy').click(function(e) {
      $(this).notify('Copy!',{
        className: 'success',
        position: 'top left',
        autoHideDelay: 2000,
      });
      navigator.clipboard.writeText($('p').text());
    });
    let check = false;
    $('#darkMode').click(function(e) {
      if(!check) {
        $(this).text('Light');
        check = true;
        changeTheme('dark');
      } else {
        $(this).text('Dark');
        check = false;
        changeTheme('light');
      }
    });
  });