const spinner2 = () => {
  const spinnerChar = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
  let delay = 100;
  for (const index in spinnerChar) {
    setTimeout(() => {
      index < spinnerChar.length - 1 ?
        process.stdout.write(`\r${spinnerChar[index]}   `)
        :
        process.stdout.write(`\r${spinnerChar[index]}   ` + '\n');
    }, delay);
    delay += 200;
  }
};

spinner2();