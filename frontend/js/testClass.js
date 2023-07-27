// 1) зрабіць змены у ветцы devVlad
// 2) зрабіць push origin devVlad
// 3) зрабіць P in dev
// 4)Merge in Dev
// 5)git pull
// 6) git chechout -b devVlad(n)
// !!!!!npm istall

// const animal = {
//   name: 'Animal',
//   age: 14,
//   hasTail: true
// };
class Animal {
  static type = 'AnimaL';
  constructor (options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }

  voice () {
    console.log('I am animal!');
    console.log(this.age);
  }
}

const animal = new Animal({
  name: 'Animal',
  age: 45,
  hasTail: false
});

class Cat extends Animal {
  constructor (options) {
    // super(options);
    this.color = options.color;
    console.log(this);
  }

  voice () {
    super.voice();
    console.log('I am cat');
    console.log(this.age);
  }

  get catInfo () {
    return this.age * 2;
  }

  set catInfo (newAge) {
    this.age = newAge;
  }
}
const cat = new Cat({
  name: 'Pussi',
  color: 'red',
  age: 3
}
);
class Component {
  constructor (selector) {
    this.$el = document.querySelector(selector);
  }

  hide () {
    this.$el.style.display = 'none';
  }

  show () {
    this.$el.style.display = 'block';
  }
}

class Box extends Component {
  constructor (options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + 'px';
    this.$el.style.background = options.color;
  }
}
const box1 = new Box({
  selector: '#box1',
  size: 100,
  color: 'red'
}
);
class Round extends Box {
  constructor (options) {
    super(options);
    this.$el.style.borderRadius = '50%';
  }
}
const c = new Round({
  selector: '#r',
  size: 100,
  color: 'red'
}
);

5 * 2 + 7 * 2;
10 * 2 + 6 * 2;
3 * 2 + 4 * 2;

function pir (b, c) {
  return c * 3 + b * 2;
}
pir(5, 7);
function pir2 (figure) {
  return figure.height * 2 + figure.width * 2;
}
const myPar = {
  height: 5,
  width: 7
};
pir(myPar.height, myPar.width);
pir2(myPar);
pir2({
  height: 100,
  width: 100
});
// class Task {
//   constructor (selector) {
//     this.$el = document.querySelector(selector);
//   }

//   hide () {
//     this.$el.style.display = 'none';
//   }

//   show () {
//     this.$el.style.display = 'block';
//   }
// }

// class TaskList extends Task {
//   constructor (options) {
//     super(options.selector);
//     this.$el.style.width = this.$el.style.height = options.size + 'px';
//     this.$el.style.background = options.color;
//   }
// }
// const TaskList1 = new TaskList({
//   selector: '#box1',
//   size: 200,
//   color: 'red'
// });
