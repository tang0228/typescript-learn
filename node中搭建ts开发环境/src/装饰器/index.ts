
type constructor = new () => object;

function classDesc(name: string) {
    return function(target: constructor) {
        console.log(name, target);
    }

}

function propDesc(name: string) {
    return function(target: any, propName: string) {
        console.log(target, propName)
    }
}

@classDesc('用户')
class UserObj {
    @propDesc('账号')
    static loginId: string;

    @propDesc('密码')
    loginPwd: string;
}



const a = new UserObj();
