function solution(todo_list, finished) {
    var answer = [];
    return todo_list.filter((i, idx) => finished[idx] === false);
}