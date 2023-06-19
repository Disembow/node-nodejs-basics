const parseArgs = () =>
  console.log(
    process.argv
      .slice(2)
      .map((e, i, a) => ((i + 1) % 2 === 0 ? `${a[i - 1]} is ${e}` : ''))
      .filter((e) => e !== '')
      .join(', ')
  );

parseArgs();
