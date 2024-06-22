function addToCart() {
    var notification = document.getElementById("notification");
    notification.className = "notification show"; /* Add the 'show' class to display the notification */
    setTimeout(function(){ notification.className = "notification"; }, 3000); /* After 3 seconds, remove the 'show' class to hide the notification */
}
