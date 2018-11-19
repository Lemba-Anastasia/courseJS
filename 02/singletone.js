Singletone = (function () {
    var instance;
    instance = {};
    return function () {
        return instance;
    }
}());