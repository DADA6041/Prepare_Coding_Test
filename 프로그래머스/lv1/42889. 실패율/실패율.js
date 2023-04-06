function solution(N, stages) {
    let fail = [];
    let users = stages.length

    for (let i = 1; i <= N; i++){
        let reach = stages.filter((user) => user === i).length
        let percent = reach / users
        fail.push({stage : i, percent})
        users -= reach
    }
    fail.sort((a, b) => {
        if(a.percent < b.percent) return 1;
        if(a.percent > b.percent) return -1;
        if(a.percent === b.percent) return 0;
    })
    return fail.map(object => object.stage);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3])