
describe("isDeepEqual", function() {
    it("фунция", function() {
        return assert.equal(typeof isDeepEqual , "function");
    });
    it("возвращает true/false", function() {
        return assert.equal(typeof isDeepEqual("", "") , "boolean");
    });
    it("распознает одинаковые строки", function() {
        return assert.equal(isDeepEqual("мама", "мама") , true);
    });
    it("распознает разные строки", function() {
        return assert.equal(isDeepEqual("мама", "папа") , false);
    });

    it("распознаем разные массивы", function() {
        return assert.equal(isDeepEqual([1, 4, 2], [1, 2, 4]) , false);
    });
    it("распознает одинаковые массивы", function() {
        return assert.equal(isDeepEqual([1, 2, 4, 3], [1, 2, 4, 3]) , true);
    });
    it("распознает массивы разной длинны", function() {
        return assert.equal(isDeepEqual([1, 2, 5], [1, 2, 5, 7]) , false);
    });

    let a = {prop1: 1, list: [1, 2, 3], o: {x: 2}};
    let b = { list: [1, 2, 3], o: { x: 2 } };
    it("распознает разные объекты", function() {
        return assert.equal(isDeepEqual(a, b) , false);
    });

    it("распознает одинаковые объекты", function() {
        b.prop1 = 1;
        return assert.equal(isDeepEqual(a, b) , true);
    });

    it("распознает разные объекты", function() {
        var a = { a: 1, b: 3, c: 2 };
        var b = { a: 1, b: 4, c: 2 };
        return assert.equal(isDeepEqual(a, b) , false);
    });

    it("распознает вложенные объекты", function() {
        var a = { a: 1, b: { x: 5 }, c: 2 };
        var b = { a: 1, b: { x: 5 }, c: 2 };
        return assert.equal(isDeepEqual(a, b) , true);
    });

    it("распознает числа", function() {
        var a = 1;
        var b = 1.0;
        return assert.equal(isDeepEqual(a, b) , true);
    });

    it("распознает разные числа", function() {
        let a = 1;
        let b = 2;
        return assert.equal(isDeepEqual(a, b) , false);
    });

    it("Может работать с NaN", function() {
        let a = { NaN: NaN };
        let b = { NaN: NaN };

        assert.equal(isDeepEqual(NaN, NaN) , true);
        assert.equal(isDeepEqual(a, b) , true);
    });

    it("Moжет работать с рекурсивными ссылками", function() {
        var a = {
            prop: 1
        };
        a.a = a;
        var b = {
            prop: 1
        };
        b.a = b;
        assert.equal(isDeepEqual(a, b) , true);
    });
});

describe("Singletone", function() {
    it("конструктор", function() {
        assert.equal(typeof new Singletone() , "object");
        //assert.equal(new Singletone() instanceof Singletone , true);//FIXME: что не так с этим, в консоле это работает
    });
    it("синглтон", function() {
        assert.equal(new Singletone() , new Singletone());
    });
});

describe("User / PreUser", function() {
    it("конструкторы", function() {
        var u = new User();
        assert.equal(typeof User , "function");
        assert.equal(typeof PreUser , "function");
        assert.equal(new User() instanceof User,true);
        assert.equal(new PreUser() instanceof PreUser, true);
    });
    it("разные конструкторы", function() {
        //assert.equal(User !== PreUser);
    });
    it("создают правильное дерево наследования", function() {
        var u = new User();
        assert.equal(u instanceof User, true);
        assert.equal(u instanceof Array, true);
        assert.equal(u instanceof PreUser, true);
    });
});

describe("getCounter", function() {
    it("проверка корректности работы", function() {
        var c = getCounter(5);
        assert.equal(c.log(),5);
        c.add(4);
        assert.equal(c.log(),9);
        c.add(3);
        assert.equal(c.log(),12);
        c.reset();
        assert.equal(c.log(),0);
        c.add(8);
        assert.equal(c.log(),8);
    });
});

describe("calculate", function() {
    it("считает примеры", function() {
        assert.equal(calculate("+")(1)(2) , 3);
        assert.equal(calculate("*")(4)(2) , 8);
        assert.equal(calculate("/")(9)(3) , 3);
        assert.equal(calculate("-")(8)(7) , 1);
    });
});

describe("конструктор, который всегда конструктор", function() {////FIXME: что не так с этим, в консоле это работает
    it("проверка корректности работы", function() {
        var u= UserConstructor();
        //assert.equal(u instanceof UserConstructor , true);
    });
});



/*
describe("bind", function() {
    var func;
    var obj;
    var counter;
    var originalBind;
    beforeEach(function() {
        counter = 0;
        func = function(val) {
            counter++;
            return [val, this.name];
        };
        obj = {
            name: "Some dummy context"
        };
        var originalBind = Function.prototype.bind;
    });
    afterEach(function() {
        Function.prototype.bind = originalBind;
    });
    it("функция", function() {
        assert.equal(typeof bind , "function");
    });
    it("Возвращает фукнцию", function() {
        assert.equal(typeof bind(function() {}, {}) , "function");
        assert.equal(typeof bind(function() {}, null) , "function");
    });
    it("Результат вызывает оригинальную фукнцию", function() {
        assert.equal(counter , 0);
        let binded = bind(func, {});
        binded();
        assert.equal(counter , 1);
        binded();
        assert.equal(counter , 2);
    });
    it("Вызывает с правильным контекстом", function() {
        var context = { dummy: "context" };
        const binded = bind(function() {
            assert.equal(this , context);
        }, context);
        binded();
    });
    it("Пробрасывает параметры контекстом", function() {
        bind(function() {
            assert.equal(arguments.length , 0);
        }, {})();
        bind(function() {
            assert.equal(arguments.length , 1);
            assert.equal(arguments[0] , 1);
        }, {})(1);
        bind(function() {
            assert.equal(arguments.length , 3);
            assert.equal(arguments[0] , 1);
            assert.equal(arguments[1] , 2);
            assert.equal(arguments[2] , "три");
        }, {})(1, 2, "три");
    });
});

describe(".myBind", function() {
    var func;
    var obj;
    var counter;
    var originalBind = Function.prototype.bind;
    beforeEach(function() {
        counter = 0;
        Function.prototype.bind = null;
        func = function(val) {
            counter++;
            return [val, this.name];
        };
        obj = {
            name: "Some dummy context"
        };
    });
    afterEach(function() {
        Function.prototype.bind = originalBind;
    });
    it("функция", function() {
        assert.equal(typeof func.myBind , "function");
    });
    it("Возвращает фукнцию", function() {
        assert.equal(typeof function() {}.myBind({}) , "function");
        assert.equal(typeof function() {}.myBind(null) , "function");
    });
    it("не использует встроенный .bind", function() {
        assert.equal(func.myBind.toString().indexOf(".bind") < 0);
    });
    it("Результат вызывает оригинальную фукнцию", function() {
        assert.equal(counter , 0);
        let binded = func.myBind({});
        binded();
        assert.equal(counter , 1);
        binded();
        assert.equal(counter , 2);
    });
    it("Вызывает с правильным контекстом", function() {
        var context = { dummy: "context" };
        const binded = function() {
            assert.equal(this , context);
        }.myBind(context);
        binded();
    });
    it("Пробрасывает параметры контекстом", function() {
        (function() {
            assert.equal(arguments.length , 0);
        }.myBind({})());
        (function() {
            assert.equal(arguments.length , 1);
            assert.equal(arguments[0] , 1);
        }.myBind({})(1));
        (function() {
            assert.equal(arguments.length , 3);
            assert.equal(arguments[0] , 1);
            assert.equal(arguments[1] , 2);
            assert.equal(arguments[2] , "три");
        }.myBind({})(1, 2, "три"));
    });
});


describe("ForceContructor", function() {
    it("работает как конструктор и сохраняет параметры в объекте", function() {
        var a = Math.random();
        var c = Math.random();
        var o = new ForceContructor(a, undefined, c);
        assert.equal(typeof o , "object");
        assert.equal(o instanceof ForceContructor);
        assert.equal(o.a , a);
        assert.equal("b" in o);
        assert.equal(o.b , undefined);
        assert.equal(o.c , c);
    });
    it("работает как конструктор без new", function() {
        var a = Math.random();
        var c = Math.random();
        var o = ForceContructor(a, undefined, c);
        var o2 = new ForceContructor(a, undefined, c);
        var o3 = ForceContructor(a, undefined, c);
        assert.equal(typeof o , "object");
        assert.equal(o instanceof ForceContructor , true);
        assert.equal(o.a , a);
        assert.equal("b" in o);
        assert.equal(o.b , undefined);
        assert.equal(o.c , c);
        assert.equal(o !== o2);
        assert.equal(o !== o3);
        assert.equal(o2 !== o3);
    });
});

describe("sum", function() {
    it("функция", function() {
        assert.equal(typeof sum , "function");
    });
    it("по-умолчанию инициализируется нулем", function() {
        assert.equal(+sum() , 0);
    });
    it("инициализируется числом", function() {
        assert.equal(+sum(5) , 5);
    });
    it("складывает числа", function() {
        var s = sum(1);
        assert.equal(+s(2) , 3);
        assert.equal(+s(3) , 4);
        assert.equal(+s(95) , 96);
    });
    it("складывает числа последовательно", function() {
        assert.equal(+sum(1)(2) , 3);
        assert.equal(+sum(5)(7)(9) , 21);

        var s = sum();
        for (var i = 0; i < 15; i++) {
            s = s(1);
        }
        assert.equal(+s(1) , 16);
    });
    it("добавляет 0 по-умолчанию", function() {
        assert.equal(+sum(4)() , 4);
        assert.equal(+sum(7)()(2) , 9);
    });
    it("сумматоры независимые", function() {
        var s1 = sum(1);
        var s12 = s1(2);
        var s15 = s1(5);
        var s152 = s15(2);
        var s159 = s15(9);
        var s10 = s1();
        assert.equal(+s1 , 1);
        assert.equal(+s12 , 3);
        assert.equal(+s15 , 6);
        assert.equal(+s152 , 8);
        assert.equal(+s159 , 15);
        assert.equal(+s10 , 1);
    });
    it("может отработать много раз", function() {
        var s = sum();
        for (var i = 0; i < 999; i++) {
            s = s(1);
        }
        assert.equal(+s() , 999);
    });
});

describe("curry", function() {
    it("добавить тесты", function() {
        assert.equal(false , true);
    });
});*/