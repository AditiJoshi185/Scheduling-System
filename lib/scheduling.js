let Stack = require('./stack');

function checkDependency(tasks, dependencies) {
	let result = [], dependencyObj = {}, ranObj = {};
	if(!tasks.length){
		return result;
	}
	dependencies.forEach(ele => {
		let arr = ele.split('=>');
		arr[0] = arr[0].trim();
		arr[1] = arr[1].trim();
		if (dependencyObj[arr[0]]) {
			dependencyObj[arr[0]].push(arr[1]);
		}
		if (!dependencyObj[arr[0]]) {
			dependencyObj[arr[0]] = [arr[1]];
		}
	});
	let visitedStack  = new Stack();
	for (let itr of tasks) {
		let visitedObj = {};
		if (!ranObj[itr]) {
			visitedStack.push(itr);
		}
		while (visitedStack.length()) {
			let ele = visitedStack.peek();
			let dep = dependencyObj[ele] && dependencyObj[ele].shift();
			if (dep && !ranObj[dep]) {
				visitedObj[ele] = ele;
				visitedStack.push(dep);
			}
			else {
				result.push(ele);
				visitedStack.pop();
				ranObj[ele] = ele;
				visitedObj[ele] = undefined;
			}
		}
	}
	if(result.length == tasks.length){
		return result;
	}
	return 'Error - cyclic dependency'
}
exports.checkDependency = checkDependency;
