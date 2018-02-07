/*
This is a JavaScript (JS) file.
JavaScript is the programming language that powers the web.

To use this file, place the following <script> tag just before the closing </body> tag in your HTML file, making sure that the filename after "src" matches the name of your file...

    <script src="script.js"></script>

Learn more about JavaScript at https://developer.mozilla.org/en-US/Learn/JavaScript

When you're done, you can delete all of this grey text, it's just a comment.
*/

function greetMe(name) {
  var today = new Date().toDateString();
  console.log("Hello " + name + ", today is " + today);
}

function date_time(id)
<html>
  <head>
  <script type="text/javascript">
    function startTime()
  {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('txt').innerHTML=h+":"+m+":"+s;
    t=setTimeout('startTime()',500);
  }
  function checkTime(i)
{
  if (i<10)
  {
    i="0" + i;
  }
  return i;
}
</script>
</head>
<body onload="startTime()">
  <div id="txt"></div>
</body>
</html>
greetMe("World");
