/**
 * Created by hailemichaelteklai on 8/15/14.
 */
var sheet = (function(){
    var style = document.createElement('sytle');
    style.appendChild(document.createTextNode(" "));
    document.head.appendChild(style);
    return style.sheet;
})();