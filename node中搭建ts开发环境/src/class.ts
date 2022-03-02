class User {
    readonly id: number | string
    // name: string
    // _age: number
    pid?: string
    gender: '男' | '女' = '男'
    private _canPublishNum: number = 3
    private _curPublishNum: number = 1
    constructor(public name: string, private _age: number) {
        this.id = Math.random();
    }

    set age(value: number) {
        if(value < 0) {
            this._age = 0;
        } else if(value > 200) {
            this._age = 200;
        } else {
            this._age = value;
        }
    }

    get age() {
        return Math.floor(this._age);
    }
    

    public publish(title: string) {
        if(this._curPublishNum < this._canPublishNum) {
            console.log("发布一篇文章" + title);
            this._curPublishNum++;
        } else {
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
u.age =123;
console.log(u.age)

