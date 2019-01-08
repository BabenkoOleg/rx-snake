class Cat {
  constructor(public name: string) { }

  public sayMeow() {
    console.log('Meow!');
  }
}

const cat = new Cat('Cheshire');
cat.sayMeow();
