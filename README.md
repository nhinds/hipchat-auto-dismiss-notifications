# Hipchat Auto Dismiss Notifications

Hipchat uses `window.Notification` if available and attempts to call the
`window.Notification.cancel` method when the tab is focussed. This method
does not exist in chrome, which has a `close` method instead, resulting in
an error "Uncaught TypeError: Object #<Notification> has no method 'cancel'".
This extension patches the Notification object to alias `cancel` to `close`.

## Copyright

Copyright (c) 2013 Darrin Holst and Nicholas Hinds. See LICENSE for details.


