sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("checkprice.controller.login", {
            onInit: function () {

            },

            onChangeType: function(oEvent){
                const btn = oEvent.getSource();
                const cType = btn.getProperty('type');
                btn.setType(cType === 'Password' ? 'Text' : 'Password')
                btn.setValueHelpIconSrc(cType === 'Password' ? 'sap-icon://hide' : 'sap-icon://show')
            },

            onPressLogin: function(){
                const oRouter = this.getOwnerComponent().getRouter();
			    oRouter.navTo("Routeproducts");
            }
        });
    });
