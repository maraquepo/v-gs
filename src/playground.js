const interval = setInterval(() => {
  console.log('I eat pie')
}, 2000)

setTimeout(() => {
  clearInterval(interval)
}, 12000)
