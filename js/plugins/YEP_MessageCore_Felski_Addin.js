"use strict";
//=============================================================================
// YEP_MessageCore_Felski_Addin.js
//=============================================================================
/*:
* @plugindesc Addin for YEP_MessageCore.js; Adjusts the ContinueMessageString to; Credits to yanfly and http://yanfly.moe/
*
* @param ContinueMessageString Threshold
* @desc Threshold to continue a message in one window. 
* Default: 4
* @default 4
*
*/

var Felski = Felski || {};

Felski.Parameters = PluginManager.parameters('YEP_MessageCore_Felski_Addin');
Felski.Param = Felski.Param || {};

Felski.Param.MSGcms = String(Felski.Parameters['ContinueMessageString Threshold']);
(function() {
    var adjustme = Felski.Param.MSGcms;
    Game_Interpreter.prototype.isContinueMessageString = function() {
        if (this.nextEventCode() === 101 && $gameSystem.messageRows() > adjustme) {
          return true;
        } else {
          return this.nextEventCode() === 401;
        }
    };
})();