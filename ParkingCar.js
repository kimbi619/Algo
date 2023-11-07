/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
    this.slots = [null, big, medium, small]; // Index 0 is not used
  };
  
  /** 
   * @param {number} carType
   * @return {boolean}
   */
  ParkingSystem.prototype.addCar = function(carType) {
    if (this.slots[carType] > 0) {
      this.slots[carType]--;
      return true;
    } else {
      return false;
    }
  };
  
  /** 
   * Your ParkingSystem object will be instantiated and called as such:
   * var obj = new ParkingSystem(big, medium, small)
   * var param_1 = obj.addCar(carType)
   */
  
  // Example usage:
  var obj = new ParkingSystem(1, 1, 0);
  console.log(obj.addCar(1)); // Output: true
  console.log(obj.addCar(2)); // Output: true
  console.log(obj.addCar(3)); // Output: false
  console.log(obj.addCar(1)); // Output: false