<!DOCTYPE html>
<html>
   <head>
      <title>Image Full-Screen  On Click.</title>
      <script src="http://code.jquery.com/jquery-1.9.1.js"></script>
	<script src="../amazon-cognito-auth-js/dist/amazon-cognito-auth.js"></script>
	<script src="js/cognito.js"></script>
      <script src="img/imageviewer.js"></script>
      <script type="text/javascript">
// function showimage()
// {
//     $("body").css("background-image","url('img/raw1.jpg')"); // Onclick of button the background image of body will be test here. Give the image path in url
//     $('#clickbutton').hide(); //This will hide the button specified in html
// }

$(function () {
    var viewer = ImageViewer();
    $('.gallery-items').click(function () {
        var imgSrc = this.src,
            highResolutionImage = $(this).data('high-res-img');
 
        viewer.show(imgSrc, highResolutionImage);
    });
});
</script>
    </head>
    <body>
      <!-- <input id="clickbutton" type="button" value="Click" onclick="showimage()" /> --> 

      <div id="image-gallery-1" class="cf">
    <img src="img/0D8A3214.JPG" data-high-res-src="img/0D8A3214.JPG" alt="" class="gallery-items">
    <img src="img/0D8A3215.JPG" data-high-res-src="img/0D8A3215.JPG" alt="" class="gallery-items">
    <img src="img/0D8A3216.JPG" data-high-res-src="img/0D8A3216.JPG" alt="" class="gallery-items">
    <img src="img/0D8A3217.JPG" data-high-res-src="img/0D8A3217.JPG" alt="" class="gallery-items">
</div>

    </body>
</html>