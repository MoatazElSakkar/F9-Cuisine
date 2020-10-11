var palette_names = ['Rare black truffle', 'Bouillabaisse'];
var prices = [230, 150];
//an array to keep track of order before checkout
var order_data = [0, 0];
var serving = /** @class */ (function () {
    function serving(itemID, count) {
        this.ID = itemID;
        this.count = count;
    }
    serving.prototype.getName = function () {
        return palette_names[this.ID];
    };
    serving.prototype.calculatePrice = function () {
        return prices[this.ID] * this.count;
    };
    serving.prototype.getID = function () {
        return this.ID;
    };
    serving.prototype.increment = function () {
        this.count++;
    };
    return serving;
}());
var order = /** @class */ (function () {
    function order() {
        this.servings = [];
    }
    order.prototype.addServing = function (input) {
        this.servings.push(input);
    };
    order.prototype.calculate_total = function () {
        var Total = 0;
        this.servings.forEach(function (serving) {
            Total += serving.calculatePrice();
        });
        return Total;
    };
    return order;
}());
var cart;
//Page input event based initializer
function initialize() {
}
function CheckOut() {
    var cart = new order();
    cart.addServing(new serving(0, parseInt(document.getElementById("0").value)));
    cart.addServing(new serving(1, parseInt(document.getElementById("1").value)));
    var total = cart.calculate_total();
    document.getElementById("Total_val").innerText = total.toString() + "€";
    alert(total);
}
//# sourceMappingURL=checkout.js.map