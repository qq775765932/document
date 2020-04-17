import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

interface personModel {
  name: string;
  nickName: string;
  property: object;
}

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.less']
})
export class ObjectComponent implements OnInit {

  first: personModel = {
    name: '桐谷和人',
    nickName: '黑衣剑士',
    property: () => {
      return `刀剑神域男主，利用可以利用的一切资源，人们之间的差距不过是情报量的不足`;
    }
  }
  second: personModel = {
    name: '比企谷八幡',
    nickName: '大老师',
    property: () => {
      console.log(`我的青春恋爱物语果然有问题，解决问题的本身就是让问题不存在，以自爆的方式让别人不受到伤害`);
    }
  }
  third: personModel = {
    name: '安艺伦也',
    nickName: '伦理君',
    property: () => {
      return `路人女主的养成方法，动漫圈大佬，游戏制作人，有一定的业内资源，为目标努力的真正御宅族`;
    }
  }
  testCreate = '';
  testAssgin = '';
  constructor(
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.doCreate();
    this.doAssgin();
    this.doProxy();
    this.others();
  }

  doCreate() {
    let copy = Object.create(this.first);
    copy.nickName = `星王`;
    this.testCreate = `
      原始： ${this.first.nickName} || 现在： ${copy.nickName}
      ---->重新指向新路径
    `;
  }

  doAssgin() {
    const copy = Object.assign({}, this.first, this.second, this, this.third);
    copy.nickName = 'elili的青梅竹马';
    this.testAssgin = `合并，指向指定目标 ----->${this.third.nickName}，${copy.nickName}：${copy.property()}`;
  }

  doProxy() {
    // 在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截
    const proxy = new Proxy({ name: '' }, {
      get: (target, propkey) => {
        return 2333;
      },
      set: (target, propkey, value) => {
        target[propkey] = value;
        return true;
      },
      construct: () => { return {} },
      apply: () => { }
    });
    console.log(proxy.name); // 33
  }

  others() {
    // hasOwnProperty
    const resultOne = Object.prototype.hasOwnProperty.call(this.first, 'nickName'); // true
    // indexof
    const resultTwo = this.first.nickName.indexOf('黑衣'); // 0
    // includes es6
    const resultThree = this.first.nickName.includes('剑士'); // true
    // repeat es6 
    const resultfour = '路爷'.repeat(3); // '路爷路爷路爷'
    // trim es6
    const resultfive = ' 大 天 造化掌 '.trim(); // '大 天 造化掌'
    // ... es6
    const arr1 = [1, 2];
    const arr2 = [2, 3];
    const arr3 = [3, 4];
    const arr = [...arr1, ...arr2, ...arr3]; // [1, 2, 2, 3, 3, 4]
    const resultsix = { ...this.first, ...arr } // {0: 1, 1: 2, 2: 2, 3: 3, 4: 3, 5: 4, name: "桐谷和人", nickName: "黑衣剑士", property: ƒ}
  }

}
