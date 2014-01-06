if (!window.Notification.prototype.cancel) {
	window.Notification.prototype.cancel = window.Notification.prototype.close;
}
