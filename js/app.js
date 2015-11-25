// An example Backbone application contributed by
// [Jérôme Gravel-Niquet](http://jgn.me/). This demo uses a simple
// [LocalStorage adapter](backbone-localstorage.html)
// to persist Backbone models within your browser.

// Load the application once the DOM is ready, using `jQuery.ready`:
$(function(){

	// Create our global collection of **Todos**.
	var Todos = new TodoList;

	// Finally, we kick things off by creating the **App**.
 	var App = new AppView({collection: Todos});
});