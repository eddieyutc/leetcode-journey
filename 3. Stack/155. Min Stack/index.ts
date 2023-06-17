class MinStack {
  contents = [] as number[]
  mins = [] as number[]
  constructor() {}

  push(val: number): void {
    this.contents.push(val)
    if (this.mins.length === 0 || val <= this.mins[this.mins.length - 1]) {
      this.mins.push(val)
    }
  }

  pop(): void {
    const val = this.contents.pop()
    if (val === this.mins[this.mins.length - 1]) {
      this.mins.pop()
    }
  }

  top(): number {
    return this.contents[this.contents.length - 1]
  }

  getMin(): number {
    return this.mins[this.mins.length - 1]
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
