const GraphSearchTester = require('../../helpers/testing/graphs/GraphSearchTester');

const breadthFirstSearch = (root, id) => {
	if (!root) return undefined;

	const q = [];
	const visited = new Set();

	q.push(root);

	while (q.length) {
		const n = q.shift();

		if (n.id === id) return n;

		visited.add(n);

		for (const child of n.children) {
			if (!visited.has(child)) {
				q.push(child);
			}
		}
	}

	return undefined;
};

new GraphSearchTester(500, breadthFirstSearch);
