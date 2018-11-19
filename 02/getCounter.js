function getCounter(count) {
    var c = count;
    return {
        add: function(addingNum) { c = c + addingNum; },
        reset: function() { c = 0; },
        log: function() { return c; }
    }
};

