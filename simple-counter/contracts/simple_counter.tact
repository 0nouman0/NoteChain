message Add {
  amount: int as uint32;
}

contract SimpleCounter with Deployable {
  id: int as uint32;
  counter: int as uint32;
  public_address: int as uint256;

  init(id: int) {
    self.id = id;
    self.counter = 0;
    self.public_address = 0;
  }

  receive(msg: Add) {
    self.counter += msg.amount;
  }

  receive(public_address: int as uint256) {
    self.public_address = public_address;
  }

  get_counter() method_id {
    return self.counter;
  }
}
