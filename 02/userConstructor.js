UserConstructor = (function () {
    return function () {
        return Object.create(User.prototype);
    }
}());