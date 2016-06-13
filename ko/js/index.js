var Demo = function() {
	var self = this;
	self.User = {
		title: "test knockout js",
		address: "beijing"
	};
	self.Level = {
		tt: [10, 20, 30, 40, 50]
	};
	self.SaleDetail = ko.observableArray([{
		id: 1,
		memo: '2005-01,消费购买了水壶'
	}, {
		id: 2,
		memo: '2006-03,消费购买了手机'
	}, {
		id: 3,
		memo: '2006-10,消费购买了手机'
	}]);

	for (var i = 0; i < 5; i++) {
		self.SaleDetail.push({
			id: i + 4,
			memo: '2005-01,消费购买了水壶'
		})
	}
	self.remove = function() {
		self.SaleDetail.remove(this);
	}
}

var shopData = {
	data: []
};
for (var i = 0; i < 5; i++) {
	var j = {};
	j.title = "ZJT股份有限公司" + i;
	j.content = ["生产", "加工", "销售", "包装", "采购"][parseInt(Math.random() * 5)];
	j.time = "星期" + ["一", "二", "三", "四", "五", "六", "七"][parseInt(Math.random() * 7)];
	j.status = ["审阅中", "已批准", "未提交"][i % 3];
	j.imgsrc = "img/s" + (i % 9 + 2) + ".png";
	shopData.data.push(j);
}

function tt() {
	this.list = ko.observable(shopData);
	this.lt = ko.observable(new Demo());
}
var availableMeals = [{
	mealName: 'Standard',
	description: 'Dry crusts of bread',
	extraCost: 0
}, {
	mealName: 'Premium',
	description: 'Fresh bread with cheese',
	extraCost: 9.95
}, {
	mealName: 'Deluxe',
	description: 'Caviar and vintage Dr Pepper',
	extraCost: 18.50
}];
var model = new tt();
model.availableMeals = ko.observableArray(availableMeals);
model.chosenMeal = ko.observable(availableMeals[0]);

var myItems = function (){
	return {
		count: 7
	}
}
// 或者 model.myItems = ko.observable({count:7});
function formatPrice(price) {
	return price == 0 ? "Free" : "$" + price.toFixed(2);
}
ko.applyBindings(model);