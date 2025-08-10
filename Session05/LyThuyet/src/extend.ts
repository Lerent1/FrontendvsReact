//Tinh ke thua
class animal{
    protected name: string;
    constructor(name: string){
        this.name = name;
    }
    sound(){
        return `tieng cuoi cua ${this.name}`
    }
}

class Thang extends animal{
}
class Loc extends animal{
}
const thang = new Thang("thang");
const loc = new Loc("loc");

console.log(thang.sound());
console.log(loc.sound());


