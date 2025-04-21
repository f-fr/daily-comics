function(page) {
    var regex = /<img[^>]*src\s*=\s*"(\bcomics\/[^"]+)"/;
    var match = regex.exec(page);
    return match[1];
}
