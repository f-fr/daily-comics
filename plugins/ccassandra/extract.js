function(page) {
    var regex = /&lt;img src="(https:[^"]+)"/;
    var match = regex.exec(page);
    return match[1];
}
