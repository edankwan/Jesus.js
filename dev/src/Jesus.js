/** 
 *  @license
 * Jesus.js
 * License: MIT
 * Author: Edan Kwan
 * Version: 0.0.1 (2012/6/12)
 */

(function(exports){
    function Jesus(){
    }

    var UNDEF;
    var _jesusDeadBody;

    Jesus.die = function(){
        //check if Jesus died to prevent him to die again
        if(_jesusDeadBody) return;
        _jesusDeadBody = exports.Jesus;
        exports.Jesus = UNDEF;

        // back to life in 3 days ---
        //=====================
        setTimeout(function(){
            exports.Jesus = _jesusDeadBody;
        }, 3 * 24 * 60 * 60 *1000);
    };

    Jesus.isDead = function(){ return !!_jesusDeadBody;};
    
    exports.Jesus = Jesus;
}(this));

