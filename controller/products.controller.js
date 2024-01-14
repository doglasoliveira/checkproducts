sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment"
], function (
	Controller,
	Fragment
) {
	"use strict";

	return Controller.extend("checkprice.controller.products", {
		onInit() {
		},

		onValueHelpProductPress: function (oEvent) {
			var oView = this.getView();

			if (!this._pProducts) {
				this._pProducts = Fragment.load({
					id: oView.getId(),
					name: "checkprice.view.fragments.vhProducts",
					controller: this
				}).then(function (oProducts) {
					oView.addDependent(oProducts);
					oProducts.bindElement("/Products");
					return oProducts;
				});
			}
			this._pProducts.then(function (oProducts) {
				oProducts.open();
			});
		},

		onValueHelpProductsClose: function () {
			this._pProducts.then(function (oProducts) {
				oProducts.close();
			});
		},

		onSelectItem: function (oEvent) {
			const oItemSelected = oEvent.getSource().getSelectedItem().getBindingContext().getObject();
			this.byId('idProductInput').setValue(oItemSelected.ProductName);
			this.onValueHelpProductsClose();
			this.loadProductPrices(oItemSelected.ProductID);
		},

		loadProductPrices: function (sProductID) {
			var oTable = this.getView().byId("idProductsTable");
			var oBinding = oTable.getBinding("items");
			var oFilter = new sap.ui.model.Filter("ProductID", sap.ui.model.FilterOperator.EQ, sProductID);
			oBinding.filter([oFilter]);
		},

		resetFilters: function () {
			var oTable = this.getView().byId("idProductsTable");
			var oBinding = oTable.getBinding("items");
			oBinding.filter([]);
			this.byId('idProductInput').setValue('');
		},
	});
});