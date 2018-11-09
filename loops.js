 for 
 (var i= 1; i<25; i++){
    it('adds `"I am ${i} strange loop${i === 0 ? \'\' : \'s\'}."` to an array 25 times', () => {
      const [array, t] = makeArray()
      const strangeArray = forLoop(array)
      const testArray = strangeArray.slice(array.length)

      let first = "I am 1 strange loop."
      let rest = "I am 24 strange loops."
    }
      console.log ('strangeArray'[11]);
      console.log(strangeArray[34]).to.equal(rest)
      console.log(strangeArray.length).to.equal(t + 25)
  
  
 
 
 
 
 
 
 let countdown = 100 ;
   while(countdown > 0){
      const spy = chai.spy.on(console, 'log')
      const n = Math.floor(Math.random() * 100)

      console.log(whileLoop(n));
      console.log(spy(n));

      console.log.reset()
    }
   describe('doWhileLoop(array)', () => {
    it('removes elements from `array` until `array` is empty or until `incrementVariable()` returns `false`', () => {
      const [array, t] = makeArray()
      const l = array.length

      const newArray = doWhileLoop(array)

      expect(newArray).to.have.length.of.at.most(l - 1)
    })
  })
})

