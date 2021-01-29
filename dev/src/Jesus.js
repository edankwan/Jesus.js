/** 
 *  @license
 * Jesus.js
 * License: MIT
 * Author: Edan Kwan
 * Version: 0.0.2 (2013/6/11)
 */

(function(exports){
    function Jesus(){}

    var undef;
    var _jesusBody;

    // back to life in 3 days ---
    //=====================
    Jesus.walkOnWater = function(){
        var elems = document.querySelectorAll('*');
        for(var i = 0, len = elems.length; i < len; i++) {
            elems[i].style.float = Math.random() < 0.5 ? 'left' : 'right';
        }
    };

    Jesus.die = function(){
        //check if Jesus died to prevent him to die again
        if(_jesusBody) return;
        _jesusBody = exports.Jesus;
        exports.Jesus = undef;

        // back to life in 3 days ---
        //=====================
        setTimeout(function(){
            exports.Jesus = _jesusBody;
        }, 3 * 24 * 60 * 60 *1000);
    };
    
    Jesus.waterToWine = function() {
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp('water', 'gi'), 'wine')
    };

    Jesus.multiply = function(thing) {
        if (typeof thing === 'fish') {
            return Array(Math.ceil(Math.random() * 10)).fill(thing);
        } else {
            // Not able to multiply
            return thing;
        }
    }

    Jesus.isDead = function(){ return !!_jesusBody;};

    exports.Jesus = Jesus;
}(this));

