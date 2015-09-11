'use strict';
/*global Meteor, AutoForm, EJSON*/

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
				case 'edit':
					// Don't change the _id as minimongo doesn't like that
					var update = EJSON.clone(updateDoc);
					delete update.$set._id;

					// Do the edit
					this.collection.update(currentDoc._id, update);
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
