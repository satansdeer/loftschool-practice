import * as someVar from './importExport'



function* gen() {
  let a = 10;
  const x = yield a;
  console.log(x)
  return undefined;
}

const iter = gen();

iter.next(1)


/// Template strings

function logText(text){
    console.log(text)
}

logText("Hello string")

logText`Hello string`

/// Import / Expot