//priority map test script

map = [
	["Empty", "Empty", "Empty"],
	["Empty", "Player", "Empty"],
	["Empty", "Empty", "Empty"]
];

buildPriorityMap(1, 1);

priorityMap; //passed

map = [
	["Empty", "Empty", "Empty", "Empty"],
	["Empty", "Player", "Tree0", "Empty"],
	["Empty", "Empty", "Empty", "Empty"],
	["Empty", "Empty", "Empty", "Empty"]
];

buildPriorityMap(1, 1);

priorityMap; //passed

map = [
	["Empty", "Empty", "Tree0", "Empty"],
	["Tree0", "Player", "Tree0", "Empty"],
	["Empty", "Empty", "Tree0", "Empty"],
	["Tree0", "Empty", "Empty", "Empty"]
];

buildPriorityMap(1, 1);

priorityMap; //passed

map = [
	["Tree0", "Tree0", "Tree0", "Empty", "Tree0", "Tree0", "Tree0"],
	["Tree0", "Player", "Empty", "Empty", "Empty", "Tree0", "Tree0"],
	["Tree0", "Empty", "Tree0", "Empty", "Empty", "Tree0", "Tree0"],
	["Tree0", "Empty", "Tree0", "Empty", "Empty", "Empty", "Tree0"],
	["Tree0", "Empty", "Tree0", "Tree0", "Tree0", "Empty", "Tree0"],
	["Tree0", "Empty", "Tree0", "Empty", "Tree0", "Empty", "Tree0"],
	["Tree0", "Tree0", "Tree0", "Empty", "Tree0", "Tree0", "Tree0"]
];

buildPriorityMap(1, 1);

priorityMap; //passed

map = [
	["Tree0", "Tree0", "Tree0", "Tree0", "Tree0"],
	["Empty", "Empty", "Empty", "Player", "Empty"],
	["Tree0", "Empty", "Empty", "Empty", "Tree0"],
	["Tree0", "Empty", "Empty", "Empty", "Tree0"],
	["Tree0", "Tree0", "Tree0", "Tree0", "Tree0"]
];

buildPriorityMap(1, 1);

priorityMap; //passed