function maximumWealth(accounts: number[][]): number {
  let maxWealth = 0
  for (const customer of accounts) {
    const customerWealth = getCustomerWealth(customer)
    if (customerWealth > maxWealth) {
      maxWealth = customerWealth
    }
  }
  return maxWealth
}

function getCustomerWealth(customer: number[]): number {
  return customer.reduce((wealth, account) => wealth + account, 0)
}
