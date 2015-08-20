'use strict';
/*global Meteor, AutoForm*/

if (Meteor.isClient) {
	/**
	 * Offline functionality as suggested in open AF issue @ https://goo.gl/hRAIsp
	 * * Form resets without waiting for server
	 * * For use with grounddb
	 */
	AutoForm.addHooks(null, {
		onSubmit: function(insertDoc, updateDoc, currentDoc) {
			// All forms should have groundType if we have an offline application
			if (!this.formAttributes.groundType) {
				console.log('Missing groundType on form definition');
				return false;
			}

			// Address types of forms we help
			switch (this.formAttributes.groundType) {
				case 'insert':
					this.collection.insert(insertDoc);
					break;
				default:
					console.log(
						'Invalid value for groundType:' + this.formAttributes.groundType
					);
			}

			// We're done
			this.done();
			return false;
		}
	});
}
