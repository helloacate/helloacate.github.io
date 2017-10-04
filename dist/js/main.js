/**
 * Created by FASMOVY on 2017-10-4.
 */

function timer() {
  var imgs = document.getElementsByClassName("autoimg");
  var pos = 0;
  var len = imgs.length;
  setInterval(function(){
    imgs[pos].style.display = 'none';
    pos = ++pos == len ? 0:pos;
    imgs[pos].style.display = 'inline';
  },5000);
}
timer();
