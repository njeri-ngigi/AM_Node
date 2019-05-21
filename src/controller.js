module.exports = {
  addCustomer: (req, res) => res.send({
    message: "new user added" }),

  getCustomer: (req, res) => res.send({
      message: "Here are all the customers, Mr. Smith!" })
}
