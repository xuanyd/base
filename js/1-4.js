function Person(name, age){
		this.name = name;
		this.age = age;
	}
	Person.prototype =  {
		getName: function (){
			return this.name;
		},
		getAge: function (){
			return this.age;
		}
	};

	var alice = new Person('Alice', 93);
	var bill = new Person('Bill', 30);
	Person.prototype.getGreeting = function() {
		return 'Hi' + this.getName() + '!';
	}

	alice.displayGreeting = function() {
		alert(this.getGreeting());
	}

	console.log(alice);
	console.log(bill);