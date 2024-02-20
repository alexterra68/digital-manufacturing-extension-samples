sap.ui.define([
    "sap/ui/model/resource/ResourceModel",
    "sap/dm/dme/podfoundation/control/PropertyEditor"
], function (ResourceModel, PropertyEditor) {
    "use strict";
    var oFormContainer;
    return PropertyEditor.extend( "com.custom.plugins.scanassembly.statusapp.builder.PropertyEditor" ,{

		constructor: function(sId, mSettings){
			PropertyEditor.apply(this, arguments);
			
			this.setI18nKeyPrefix("customComponentListConfig.");
			this.setResourceBundleName("com.custom.plugins.scanassembly.statusapp.i18n.builder");
			this.setPluginResourceBundleName("com.custom.plugins.scanassembly.statusapp.i18n.i18n");
		},
		addPropertyEditorContent: function(oPropertyFormContainer){
			var oData = this.getPropertyData();
			this.addInputField(oPropertyFormContainer, "title", oData);
			this.addInputField(oPropertyFormContainer, "sfcSelectionProcessKey", oData);
            this.addInputField(oPropertyFormContainer, "createInventoryProcessKey", oData);
            this.addInputField(oPropertyFormContainer, "indexValidationProcessKey", oData);
            this.addInputField(oPropertyFormContainer, "getAndValidateIndexProcessKey", oData);
            this.addInputField(oPropertyFormContainer, "barcodePaternProcessKey", oData);
            this.addSwitch(oPropertyFormContainer, "exchangeComponentFeature", oData);
            this.addInputField(oPropertyFormContainer, "assemblyIntervalMiliSec", oData);
            this.addSwitch(oPropertyFormContainer, "isAssemblyIntervalRequired", oData);
            this.addInputField(oPropertyFormContainer, "autoFocusDelayMiliSec", oData);
            
            oFormContainer = oPropertyFormContainer;
		},
		getDefaultPropertyData: function(){
			return  {
                        "title" : "Status",
                        "sfcSelectionProcessKey"    : "",
                        "createInventoryProcessKey"    : "",
                        "indexValidationProcessKey" : "",
                        "getAndValidateIndexProcessKey" : "",
                        "barcodePaternProcessKey" : "",
                        "exchangeComponentFeature" : false,
                        "assemblyIntervalMiliSec"  : 100,
                        "isAssemblyIntervalRequired" : true,
                        "autoFocusDelayMiliSec" : 1000
			        };
		}
	});
});