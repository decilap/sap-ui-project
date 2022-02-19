sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController",
	'sap/ui/model/json/JSONModel'
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("sap.ui.demo.nav.controller.Home", {
		onInit : function () {
			// set mock model
			var sPath = sap.ui.require.toUrl("sap/ui/demo/nav/data.json"),
				oModel = new JSONModel(sPath);

			this.getView().setModel(oModel);
		},
		onDisplayNotFound : function () {
			// display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget : "home"
			});
		},

		onNavToEmployees : function () {
			this.getRouter().navTo("employeeList");
		},

		onNavToEmployeeOverview : function (oEvent) {
			this.getRouter().navTo("employeeOverview");
		},

		handleEditPress : function (oEvent) {
			var oTileContainer = this.byId("container"),
				bEditable = !oTileContainer.getEditable();

			oTileContainer.setEditable(bEditable);
			oEvent.getSource().setText(bEditable ? "Done" : "Edit");
		},

		handleBusyPress : function (oEvent) {
			var oTileContainer = this.byId("container"),
				bBusy = !oTileContainer.getBusy();

			oTileContainer.setBusy(bBusy);
			oEvent.getSource().setText(bBusy ? "Done" : "Busy state");
		},

		handleTileDelete : function (oEvent) {
			var oTile = oEvent.getParameter("tile");
			oEvent.getSource().removeTile(oTile);
		}

	});

});
