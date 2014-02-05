# about jQuery flatHeightAll

このプラグインは、一行あたりのアイテム数が同じ場合（最終行は除く）に、各行の高さ(CSSのheight)を揃えるjQueryプラグインです。

# 利用方法

    <script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
    <script src="../dist/jquery.flatHeightAll.min.js"></script>
    <script>
      $(function(){
        // 基本的な利用方法
        $('.item').flatHeightAll();
    
        // リサイズ時に動作させたい場合
        $(window).resize(function(){$('.item').flatHeightAll();});
      });
    </script>

詳細は[サンプル](sample/index.html)を参照のこと。

![イメージ](sample/examples.png)
