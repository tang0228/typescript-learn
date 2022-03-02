class User {
    constructor(name, _age) {
        this.name = name;
        this._age = _age;
        this.gender = '男';
        this._canPublishNum = 3;
        this._curPublishNum = 1;
        this.id = Math.random();
    }
    set age(value) {
        if (value < 0) {
            this._age = 0;
        }
        else if (value > 200) {
            this._age = 200;
        }
        else {
            this._age = value;
        }
    }
    get age() {
        return Math.floor(this._age);
    }
    publish(title) {
        if (this._curPublishNum < this._canPublishNum) {
            console.log("发布一篇文章" + title);
            this._curPublishNum++;
        }
        else {
            console.log("文字发布上限");
        }
    }
}
const u = new User('tyq', 12);
u.pid = "123123213";
u.publish('123');
u.publish('123');
u.publish('123');
u.publish('123');
u.publish('123');
u.publish('123');
u.publish('123');
u.age = 123;
console.log(u.age);
