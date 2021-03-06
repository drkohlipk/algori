const GraphSearchTester = require('../../helpers/testing/graphs/GraphSearchTester');

const DFS = (root, id, visited = new Set()) => {
	if (!root) return undefined;
	if (root.id === id) return root;

	visited.add(root);

	let n = undefined;

	for (const child of root.children) {
		if (!visited.has(child)) n = DFS(child, id, visited);
		if (n) break;
	}

	return n;
};

new GraphSearchTester(DFS);
