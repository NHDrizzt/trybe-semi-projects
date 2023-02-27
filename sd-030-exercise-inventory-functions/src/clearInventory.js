function clearInventory(inventory) {
  let index = 0;
  while (index < inventory.length) {
    console.log(inventory[index].quantity)
    if (inventory[index].quantity === 0) {
      inventory.splice(index, 1);
    } else {
      index += 1;
    }
  }
}

module.exports = clearInventory;