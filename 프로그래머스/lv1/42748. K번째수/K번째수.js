function solution(array, commands) {
  return commands.map((i) => {
    return array
      .slice(i[0] - 1, i[1])
      .sort((a, b) => a - b)
      .slice(i[2] - 1, i[2])[0];
  });
}