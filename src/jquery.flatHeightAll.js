/*! jQuery.flatHeightAll - v0.1.0 - 2014-02-06
* https://github.com/maepon/jqueryflatheightall
*/
/*@preserve Copyright (c) 2014 Masayuki Maekawa Licensed MIT*/

(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory(require("jquery"));
  }
  else {
    factory(jQuery);
  }
} (function ($) {
  "use strict";
  $.fn.flatHeightAll = function(){
    var tmpLeft       = -1,
        columnNum     = 0,
        tmpHeight     = 0,
        startIndex    = 0,
        $itemList     = this;

    $itemList.css('height','');

    $itemList.each(function(i){
      var $t        = $(this),
          itemLeft  = $t.offset().left;

      if (itemLeft > tmpLeft){
        tmpLeft = itemLeft;
      }else{
        columnNum = i;
        return false;
      }

      if ((i + 1) === $itemList.length){
        columnNum = $itemList.length;
      }
    });

    if (columnNum === 1){
      return this;
    }

    $itemList.each(function(i){
      var itemHeight = $(this).height();

      if ((i + 1) % columnNum === 1){
        startIndex = i;
      }

      if (itemHeight > tmpHeight){
        tmpHeight = itemHeight;
      }

      if ((i + 1) % columnNum === 0 || (i + 1) === $itemList.length){
        $itemList.slice(startIndex,i + 1).height(tmpHeight);
        tmpHeight = 0;
      }
    });

    return this;
  };
}));