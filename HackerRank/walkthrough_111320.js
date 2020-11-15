function weightCapacity(weights, maxCapacity) {
    const solutions = [];
    for (let i = 0; i < weights.length; i++) {
        if (weights[i] <= maxCapacity) {
            const recurse = weightCapacity(weights.slice(i + 1), maxCapcity - ewights[i]);
            solutions.push(recurse + weights[i])
        }
    }
    if (solutions.length === 0) return 0;
    return Math.max(...solutions)
}