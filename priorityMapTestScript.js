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
	["Tree0", "Empty", "Empty", "Player", "Empty", "Tree0", "Tree0"],
	["Tree0", "Empty", "Tree0", "Empty", "Empty", "Tree0", "Tree0"],
	["Tree0", "Empty", "Tree0", "Empty", "Empty", "Empty", "Tree0"],
	["Tree0", "Empty", "Tree0", "Tree0", "Tree0", "Empty", "Tree0"],
	["Tree0", "Tree0", "Tree0", "Empty", "Tree0", "Tree0", "Tree0"],
];

buildPriorityMap(1, 1);

for (let i = 0; i < priorityMap.length; i++)
{
	for (let j = 0; j < priorityMap.length; j++)
	{
		if (isNaN(parseInt(priorityMap[i][j])))
		{
			priorityMap[i][j] = -1;
		}
	}
}

priorityMap; //failed!