import "reflect-metadata";
import { IsNotEmpty, Max, Min, validate } from "class-validator";

class RegUser {
    @IsNotEmpty({message: "loginId不能为空"})
    loginId: string;

    loginPwd: string;

    @Min(0, { message: "年龄最小值是0"})
    @Max(100, { message: "年龄最大值是100"})
    age: number;

    sex: "男" | "女"
}

const u = new RegUser();

u.age = 10001;



validate(u).then(error => {
    console.log(error)
})