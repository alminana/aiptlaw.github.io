//https://pt.stackoverflow.com/questions/270800/converter-um-cod%c3%adgo-em-jquery-para-javascript-puro/270831#270831

var mobileItems = document.querySelectorAll('#slide-out .nav-mobile .main-menu li.menu-item-has-children');
[].forEach.call(mobileItems, function(el){
   var i = document.createElement('i');
   i.setAttribute('class','mobile-arrows fa fa-chevron-down');
   el.appendChild(i);
});

var li_i = document.querySelectorAll('li.menu-item-has-children i.mobile-arrows');
[].forEach.call(li_i, function(el){
   el.addEventListener('click', function(){
      if(this.className.indexOf('fa-chevron-down') != -1){
         this.classList.remove("fa-chevron-down");
         this.classList.add("fa-chevron-up");
      }else{
         this.classList.remove("fa-chevron-up");
         this.classList.add("fa-chevron-down");
      }

      var ul = this.parentNode.querySelectorAll('ul')[0];
      ul.style.display = ul.offsetParent === null ? 'block' : 'none';

   });
});

var mobileItems = document.querySelectorAll('#slide-out .st-nav-mobile .main-menu *');
var elpai = mobileItems[0].parentNode;
[].forEach.call(mobileItems, function(el){
   elpai.parentNode.appendChild(el);

   var tn = el.nodeName.toLowerCase();
   if(tn == "div" && el.className.indexOf('menu-mega-latest-posts') != -1) el.outerHTML = '';
   if(tn == "div" && el.className.indexOf('mega-cat-content-tab') != -1) el.outerHTML = '';
   if(tn == "div" && el.className.indexOf('mega-recent-post') != -1) el.outerHTML = '';
});

elpai.outerHTML = '';


Resources