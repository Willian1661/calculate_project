let memory = ""
let memory2 = []
function calculatorProcess(content,visor) {
       if (content == "C") {
              memory = ""
              memory2 = []
              return;
       }
       if (content == "=") {
          if (memory2.includes("+")) {
              let result = Number(memory2[0]) + Number(memory2[2])
              
              visor(String(result))
          }
       }
       memory += content
       memory2.push(content)
       visor(memory)
return console.log(memory2);
}

module.exports = calculatorProcess