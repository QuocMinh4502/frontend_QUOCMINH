function createCanvas() {
  
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
  
    var grd = ctx.createLinearGradient(0, 0, 300, 0);
    grd.addColorStop(0, "#FF0000");
    grd.addColorStop(0.1, "#FF4000");
    grd.addColorStop(0.2, "#FFBF00");
    grd.addColorStop(0.3, "#FFFF00");
    grd.addColorStop(0.4, "#80FF00");
    grd.addColorStop(0.5, "#00FF00");
    grd.addColorStop(0.6, "#00FF80");
    grd.addColorStop(0.7, "#0080FF");
    grd.addColorStop(0.8, "#FA58F4");
    grd.addColorStop(0.9, "#FA58D0");
    grd.addColorStop(1, "#FA5882");
  
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, c.width, c.height);
    c.addEventListener("mousemove",function(e){
      var pos = getPosition(this);
      var x = e.pageX - pos.x;
      var y = e.pageY - pos.y;
      var coord = "x=" + x + ", y=" + y;
      var c = this.getContext('2d');
      var p = c.getImageData(x, y, 1, 1).data; 
      if((p[0] == 0) && (p[1] == 0) && (p[2] == 0) && (p[3] == 0)){
        coord += " (Transparent color detected, cannot be converted to HEX)";
      }
      
      var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
      document.querySelector('p').style.color = hex;
  },false);
  }
  
  function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
  }
  function getPosition(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: curleft, y: curtop };
    }
    return undefined;
  }
  function changeTheme(darkMode){
    if(darkMode == 'dark') {
      $('.button').css('background-color','#000');
      $('.content').css({'background-color':'#000','color':'#fff'});
    } else if(darkMode == 'light') {
      $('.button').css('background-color','#fff');
      $('.content').css({'background-color':'#fff','color':'#000'});
    }
  }
