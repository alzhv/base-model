var nodesBasic = [
	// Central
	{id: 1, x : 1000, y : 1000, color: 'rgba(212,175,55,0.75)', widthConstraint: { minimum: 200 }},

	// Main circle
	{id: 2, x : 1000, y : 100, color: 'rgba(255,0,0,0.20)'},
	{id: 3, x : 100, y : 1000, color: 'rgba(255,0,0,0.20)'},
	{id: 4, x : 1000, y : 1900, color: 'rgba(255,0,0,0.20)'},
	{id: 5, x : 1900, y : 1000, color: 'rgba(255,0,0,0.20)'},

	// Main sqare
	{id: 6, x : 363.604, y : 363.604},
	{id: 7, x : 363.604, y : 1636.396},
	{id: 8, x : 1636.396, y : 1636.396},
	{id: 9, x : 1636.396, y : 363.604},
	{id: 10, x : 1000, y : 363.604},
	{id: 11, x : 363.604, y : 1000},
	{id: 12, x : 1000, y : 1636.396},
	{id: 13, x : 1636.396, y : 1000}
];

var nodesGreen = [
	// Green
	{id: 14, x : 575.736, y : 787.868},
	{id: 15, x : 618.162, y : 872.72},
	{id: 16, x : 681.802, y : 1000},
	{id: 17, x : 618.162, y : 1127.28},
	{id: 18, x : 575.736, y : 1212.132},
	{id: 19, x : 1424.264, y : 787.868},
	{id: 20, x : 1381.838, y : 872.72},
	{id: 21, x : 1318.198, y : 1000},
	{id: 22, x : 1381.838, y : 1127.28},
	{id: 23, x : 1424.264, y : 1212.132},
	{id: 24, x : 787.868, y : 575.736},
	{id: 25, x : 872.721, y : 618.162},
	{id: 26, x : 1000, y : 681.802},
	{id: 27, x : 1127.279, y : 618.162},
	{id: 28, x : 1212.132, y : 575.736},
	{id: 29, x : 787.868, y : 1424.264},
	{id: 30, x : 872.721, y : 1381.838},
	{id: 31, x : 1000, y : 1318.198},
	{id: 32, x : 1127.279, y : 1381.838},
	{id: 33, x : 1212.132, y : 1424.264},
	{id: 34, x : 681.802, y : 681.802},
	{id: 35, x : 787.868, y : 787.868},
	{id: 36, x : 1318.198, y : 1318.198},
	{id: 37, x : 1212.132, y : 1212.132},
	{id: 38, x : 1212.132, y : 787.868},
	{id: 39, x : 1318.198, y : 681.802},
	{id: 40, x : 787.868, y : 1212.132},
	{id: 41, x : 681.802, y : 1318.198},

	// Yellow
	{id: 42, x : 1000, y : 1120, color: { background: 'rgba(255,255,0,0.20)', border: 'rgba(255,255,0,0.90)' }},
	{id: 43, x : 1000, y : 880, color: { background: 'rgba(255,255,0,0.20)', border: 'rgba(255,255,0,0.90)' }},
	{id: 44, x : 1120, y : 1000, color: { background: 'rgba(255,255,0,0.20)', border: 'rgba(255,255,0,0.90)' }},
	{id: 45, x : 880, y : 1000, color: { background: 'rgba(255,255,0,0.20)', border: 'rgba(255,255,0,0.80)' }},
	{id: 46, x : 915.147, y : 915.147, color: { background: 'rgba(255,255,0,0.20)', border: 'rgba(255,255,0,0.90)' }},
	{id: 47, x : 915.147, y : 1084.853, color: { background: 'rgba(255,255,0,0.20)', border: 'rgba(255,255,0,0.90)' }},
	{id: 48, x : 1084.853, y : 915.147, color: { background: 'rgba(255,255,0,0.20)', border: 'rgba(255,255,0,0.90)' }},
	{id: 49, x : 1084.853, y : 1084.853, color: { background: 'rgba(255,255,0,0.20)', border: 'rgba(255,255,0,0.90)' }},
	{id: 50, x : 1000, y : 1000, color: { background: 'rgba(255,255,0,0.20)', border: 'rgba(255,255,0,0.90)' }}
];

var nodesPurple = [
	{id: 51, x : 1000, y : 627.21},
	{id: 52, x : 736.4, y : 736.4},
	{id: 53, x : 472.79, y : 845.58},
	{id: 54, x : 550, y : 813.6},
	{id: 55, x : 529.83, y : 764.92},
	{id: 56, x : 507.77, y : 711.66},
	{id: 57, x : 472.79, y : 627.21},
	{id: 58, x : 627.21, y : 472.79},
	{id: 59, x : 711.66, y : 507.77},
	{id: 60, x : 764.92, y : 529.83},
	{id: 61, x : 813.6, y : 550},
	{id: 62, x : 845.58, y : 472.79},
	{id: 63, x : 627.21, y : 627.21},
	{id: 64, x : 627.21, y : 1000},
	{id: 65, x : 1000, y : 1372.79},
	{id: 66, x : 1372.79, y : 1000},
	{id: 67, x : 1186.4, y : 550},
	{id: 68, x : 813.6, y : 1450},
	{id: 69, x : 1186.4, y : 1450},
	{id: 70, x : 764.92, y : 1470.17},
	{id: 71, x : 1235.08, y : 529.83},
	{id: 72, x : 1235.08, y : 1470.17},
	{id: 73, x : 711.66, y : 1492.23},
	{id: 74, x : 1288.34, y : 507.77},
	{id: 75, x : 1288.34, y : 1492.23},
	{id: 76, x : 627.21, y : 1527.21},
	{id: 77, x : 1372.79, y : 472.79},
	{id: 78, x : 1372.79, y : 1527.21},
	{id: 79, x : 472.79, y : 1372.79},
	{id: 80, x : 1527.21, y : 627.21},
	{id: 81, x : 1527.21, y : 1372.79},
	{id: 82, x : 507.77, y : 1288.34},
	{id: 83, x : 1492.23, y : 711.66},
	{id: 84, x : 1492.23, y : 1288.34},
	{id: 85, x : 529.83, y : 1235.08},
	{id: 86, x : 1470.17, y : 764.92},
	{id: 87, x : 1470.17, y : 1235.08},
	{id: 88, x : 550, y : 1186.4},
	{id: 89, x : 1450, y : 813.6},
	{id: 90, x : 1450, y : 1186.4},
	{id: 91, x : 845.58, y : 1527.21},
	{id: 92, x : 1154.42, y : 472.79},
	{id: 93, x : 1154.42, y : 1527.21},
	{id: 94, x : 472.79, y : 1154.42},
	{id: 95, x : 1527.21, y : 845.58},
	{id: 96, x : 1527.21, y : 1154.42},
	{id: 97, x : 736.4, y : 1263.6},
	{id: 98, x : 1263.6, y : 736.4},
	{id: 99, x : 1263.6, y : 1263.6},
	{id: 100, x : 627.21, y : 1372.79},
	{id: 101, x : 1372.79, y : 627.21},
	{id: 102, x : 1372.79, y : 1372.79}
];

var edgesBasic = [
	// 1
	{from: 1, to: 2},
	{from: 1, to: 3},
	{from: 1, to: 4},
	{from: 1, to: 5},
	{from: 1, to: 6},
	{from: 1, to: 7},
	{from: 1, to: 8},
	{from: 1, to: 9},
	{from: 1, to: 10},
	{from: 1, to: 11},
	{from: 1, to: 12},
	{from: 1, to: 13},

	// 2
	{from: 2, to: 3},
	{from: 2, to: 4},
	{from: 2, to: 5},
	{from: 2, to: 6},
	{from: 2, to: 7},
	{from: 2, to: 8},
	{from: 2, to: 9},
	{from: 2, to: 10},
	{from: 2, to: 11},
	{from: 2, to: 12},
	{from: 2, to: 13},

	// 3
	{from: 3, to: 4},
	{from: 3, to: 5},
	{from: 3, to: 6},
	{from: 3, to: 7},
	{from: 3, to: 8},
	{from: 3, to: 9},
	{from: 3, to: 10},
	{from: 3, to: 11},
	{from: 3, to: 12},
	{from: 3, to: 13},

	// 4
	{from: 4, to: 5},
	{from: 4, to: 6},
	{from: 4, to: 7},
	{from: 4, to: 8},
	{from: 4, to: 9},
	{from: 4, to: 10},
	{from: 4, to: 11},
	{from: 4, to: 12},
	{from: 4, to: 13},

	// 5
	{from: 5, to: 6},
	{from: 5, to: 7},
	{from: 5, to: 8},
	{from: 5, to: 9},
	{from: 5, to: 10},
	{from: 5, to: 11},
	{from: 5, to: 12},
	{from: 5, to: 13},

	// 6
	{from: 6, to: 7},
	{from: 6, to: 8},
	{from: 6, to: 9},
	{from: 6, to: 10},
	{from: 6, to: 11},
	{from: 6, to: 12},
	{from: 6, to: 13},

	// 7
	{from: 7, to: 8},
	{from: 7, to: 9},
	{from: 7, to: 10},
	{from: 7, to: 11},
	{from: 7, to: 12},
	{from: 7, to: 13},

	// 8
	{from: 8, to: 9},
	{from: 8, to: 10},
	{from: 8, to: 11},
	{from: 8, to: 12},
	{from: 8, to: 13},

	// 9
	{from: 9, to: 10},
	{from: 9, to: 11},
	{from: 9, to: 12},
	{from: 9, to: 13},

	// 10
	{from: 10, to: 11},
	{from: 10, to: 12},
	{from: 10, to: 13},

	// 11
	{from: 11, to: 12},
	{from: 11, to: 13},

	// 12
	{from: 12, to: 13}

	// 13
	// none
];

var edgesGreen = [
	// Green
	// 14
	{from: 14, to: 6},
	{from: 14, to: 10},
	{from: 14, to: 11},
	{from: 14, to: 12},

	// 15
	{from: 15, to: 6},
	{from: 15, to: 9},
	{from: 15, to: 11},
	{from: 15, to: 12},

	// 16
	{from: 16, to: 6},
	{from: 16, to: 7},
	{from: 16, to: 10},
	{from: 16, to: 11},
	{from: 16, to: 12},
	{from: 16, to: 13},

	// 17
	{from: 17, to: 7},
	{from: 17, to: 8},
	{from: 17, to: 10},
	{from: 17, to: 11},

	// 18
	{from: 18, to: 7},
	{from: 18, to: 10},
	{from: 18, to: 11},
	{from: 18, to: 12},

	// 19
	{from: 19, to: 9},
	{from: 19, to: 10},
	{from: 19, to: 12},
	{from: 19, to: 13},

	// 20
	{from: 20, to: 6},
	{from: 20, to: 9},
	{from: 20, to: 12},
	{from: 20, to: 13},

	// 21
	{from: 21, to: 8},
	{from: 21, to: 9},
	{from: 21, to: 10},
	{from: 21, to: 11},
	{from: 21, to: 12},
	{from: 21, to: 13},

	// 22
	{from: 22, to: 7},
	{from: 22, to: 8},
	{from: 22, to: 10},
	{from: 22, to: 13},

	// 23
	{from: 23, to: 8},
	{from: 23, to: 10},
	{from: 23, to: 12},
	{from: 23, to: 13},

	// 24
	{from: 24, to: 6},
	{from: 24, to: 10},
	{from: 24, to: 11},
	{from: 24, to: 13},

	// 25
	{from: 25, to: 6},
	{from: 25, to: 7},
	{from: 25, to: 10},
	{from: 25, to: 13},

	// 26
	{from: 26, to: 6},
	{from: 26, to: 9},
	{from: 26, to: 10},
	{from: 26, to: 11},
	{from: 26, to: 12},
	{from: 26, to: 13},

	// 27
	{from: 27, to: 8},
	{from: 27, to: 9},
	{from: 27, to: 10},
	{from: 27, to: 11},

	// 28
	{from: 28, to: 9},
	{from: 28, to: 10},
	{from: 28, to: 11},
	{from: 28, to: 13},

	// 29
	{from: 29, to: 7},
	{from: 29, to: 11},
	{from: 29, to: 12},
	{from: 29, to: 13},

	// 30
	{from: 30, to: 6},
	{from: 30, to: 7},
	{from: 30, to: 12},
	{from: 30, to: 13},

	// 31
	{from: 31, to: 7},
	{from: 31, to: 8},
	{from: 31, to: 10},
	{from: 31, to: 11},
	{from: 31, to: 12},
	{from: 31, to: 13},

	// 32
	{from: 32, to: 8},
	{from: 32, to: 9},
	{from: 32, to: 11},
	{from: 32, to: 12},

	// 33
	{from: 33, to: 8},
	{from: 33, to: 11},
	{from: 33, to: 12},
	{from: 33, to: 13},

	// 34
	{from: 34, to: 6},
	{from: 34, to: 8},
	{from: 34, to: 10},
	{from: 34, to: 11},

	// 35
	{from: 35, to: 6},
	{from: 35, to: 7},
	{from: 35, to: 8},
	{from: 35, to: 9},
	{from: 35, to: 11},
	{from: 35, to: 10},

	// 36
	{from: 36, to: 6},
	{from: 36, to: 8},
	{from: 36, to: 12},
	{from: 36, to: 13},

	// 37
	{from: 37, to: 6},
	{from: 37, to: 7},
	{from: 37, to: 8},
	{from: 37, to: 9},
	{from: 37, to: 12},
	{from: 37, to: 13},

	// 38
	{from: 38, to: 6},
	{from: 38, to: 7},
	{from: 38, to: 8},
	{from: 38, to: 9},
	{from: 38, to: 10},
	{from: 38, to: 13},

	// 39
	{from: 39, to: 7},
	{from: 39, to: 9},
	{from: 39, to: 10},
	{from: 39, to: 13},

	// 40
	{from: 40, to: 6},
	{from: 40, to: 7},
	{from: 40, to: 8},
	{from: 40, to: 9},
	{from: 40, to: 11},
	{from: 40, to: 12},

	// 41
	{from: 41, to: 7},
	{from: 41, to: 9},
	{from: 41, to: 11},
	{from: 41, to: 12},
	
	// Yellow
	// 42
	{from: 42, to: 1},
	{from: 42, to: 50},
	{from: 42, to: 12},
	{from: 42, to: 4},
	
	// 43
	{from: 43, to: 1},
	{from: 43, to: 50},
	{from: 43, to: 10},
	{from: 43, to: 2},
	
	// 44
	{from: 44, to: 1},
	{from: 44, to: 50},
	{from: 44, to: 13},
	{from: 44, to: 5},
	
	// 45
	{from: 45, to: 1},
	{from: 45, to: 50},
	{from: 45, to: 11},
	{from: 45, to: 3},
	
	// 46
	{from: 46, to: 1},
	{from: 46, to: 50},
	{from: 46, to: 6},
	
	// 47
	{from: 47, to: 1},
	{from: 47, to: 50},
	{from: 47, to: 7},
	
	// 48
	{from: 48, to: 1},
	{from: 48, to: 50},
	{from: 48, to: 9},
	
	// 49
	{from: 49, to: 1},
	{from: 49, to: 50},
	{from: 49, to: 8}
	
	// 50
	// none
];

var edgesPurple = [
	// 51
	{from: 51, to: 5},
	{from: 51, to: 6},
	{from: 51, to: 3},
	{from: 51, to: 10},
	{from: 51, to: 12},
	{from: 51, to: 9},
	{from: 51, to: 2},
	{from: 51, to: 1},
	{from: 51, to: 4},
	
	// 52
	{from: 52, to: 2},
	{from: 52, to: 7},
	{from: 52, to: 3},
	{from: 52, to: 9},
	{from: 52, to: 1},
	{from: 52, to: 6},
	{from: 52, to: 8},
	
	// 53
	{from: 53, to: 3},
	{from: 53, to: 9},
	{from: 53, to: 2},
	{from: 53, to: 11},
	
	// 54
	{from: 54, to: 3},
	{from: 54, to: 9},
	{from: 54, to: 6},
	{from: 54, to: 4},
	
	// 55
	{from: 55, to: 2},
	{from: 55, to: 11},
	{from: 55, to: 6},
	{from: 55, to: 4},
	
	// 56
	{from: 56, to: 3},
	{from: 56, to: 10},
	{from: 56, to: 6},
	{from: 56, to: 4},
	
	// 57
	{from: 57, to: 3},
	{from: 57, to: 2},
	{from: 57, to: 6},
	{from: 57, to: 4},
	
	// 58
	{from: 58, to: 3},
	{from: 58, to: 2},
	{from: 58, to: 6},
	{from: 58, to: 5},
	
	// 59
	{from: 59, to: 2},
	{from: 59, to: 11},
	{from: 59, to: 6},
	{from: 59, to: 5},
	
	// 60
	{from: 60, to: 3},
	{from: 60, to: 10},
	{from: 60, to: 6},
	{from: 60, to: 5},
	
	// 61
	{from: 61, to: 2},
	{from: 61, to: 7},
	{from: 61, to: 6},
	{from: 61, to: 5},
	
	// 62
	{from: 62, to: 2},
	{from: 62, to: 7},
	{from: 62, to: 3},
	{from: 62, to: 10},
	
	// 63
	{from: 63, to: 3},
	{from: 63, to: 10},
	{from: 63, to: 2},
	{from: 63, to: 11},
	
	// 64
	{from: 64, to: 3},
	{from: 64, to: 11},
	{from: 64, to: 13},
	{from: 64, to: 5},
	{from: 64, to: 1},
	{from: 64, to: 2},
	{from: 64, to: 7},
	{from: 64, to: 6},
	{from: 64, to: 4},
	
	// 65
	{from: 65, to: 4},
	{from: 65, to: 12},
	{from: 65, to: 10},
	{from: 65, to: 2},
	{from: 65, to: 1},
	{from: 65, to: 7},
	{from: 65, to: 5},
	{from: 65, to: 8},
	{from: 65, to: 3},
	
	// 66
	{from: 66, to: 3},
	{from: 66, to: 11},
	{from: 66, to: 13},
	{from: 66, to: 5},
	{from: 66, to: 1},
	{from: 66, to: 2},
	{from: 66, to: 8},
	{from: 66, to: 4},
	{from: 66, to: 9},
	
	// 67
	{from: 67, to: 3},
	{from: 67, to: 9},
	{from: 67, to: 2},
	{from: 67, to: 8},
	
	// 68
	{from: 68, to: 6},
	{from: 68, to: 4},
	{from: 68, to: 5},
	{from: 68, to: 7},
	
	// 69
	{from: 69, to: 3},
	{from: 69, to: 8},
	{from: 69, to: 4},
	{from: 69, to: 9},
	
	// 70
	{from: 70, to: 3},
	{from: 70, to: 12},
	{from: 70, to: 5},
	{from: 70, to: 7},
	
	// 71
	{from: 71, to: 3},
	{from: 71, to: 9},
	{from: 71, to: 5},
	{from: 71, to: 10},
	
	// 72
	{from: 72, to: 3},
	{from: 72, to: 8},
	{from: 72, to: 5},
	{from: 72, to: 12},
	
	// 73
	{from: 73, to: 5},
	{from: 73, to: 7},
	{from: 73, to: 4},
	{from: 73, to: 11},
	
	// 74
	{from: 74, to: 2},
	{from: 74, to: 13},
	{from: 74, to: 3},
	{from: 74, to: 9},
	
	// 75
	{from: 75, to: 3},
	{from: 75, to: 8},
	{from: 75, to: 4},
	{from: 75, to: 13},
	
	// 76
	{from: 76, to: 3},
	{from: 76, to: 4},
	{from: 76, to: 5},
	{from: 76, to: 7},
	
	// 77
	{from: 77, to: 3},
	{from: 77, to: 9},
	{from: 77, to: 2},
	{from: 77, to: 5},
	
	// 78
	{from: 78, to: 3},
	{from: 78, to: 8},
	{from: 78, to: 4},
	{from: 78, to: 5},
	
	// 79
	{from: 79, to: 2},
	{from: 79, to: 7},
	{from: 79, to: 3},
	{from: 79, to: 4},
	
	// 80
	{from: 80, to: 4},
	{from: 80, to: 9},
	{from: 80, to: 2},
	{from: 80, to: 5},
	
	// 81
	{from: 81, to: 2},
	{from: 81, to: 8},
	{from: 81, to: 4},
	{from: 81, to: 5},
	
	// 82
	{from: 82, to: 2},
	{from: 82, to: 7},
	{from: 82, to: 3},
	{from: 82, to: 12},
	
	// 83
	{from: 83, to: 4},
	{from: 83, to: 9},
	{from: 83, to: 5},
	{from: 83, to: 10},
	
	// 84
	{from: 84, to: 2},
	{from: 84, to: 8},
	{from: 84, to: 5},
	{from: 84, to: 12},
	
	// 85
	{from: 85, to: 2},
	{from: 85, to: 7},
	{from: 85, to: 4},
	{from: 85, to: 11},
	
	// 86
	{from: 86, to: 2},
	{from: 86, to: 13},
	{from: 86, to: 4},
	{from: 86, to: 9},
	
	// 87
	{from: 87, to: 2},
	{from: 87, to: 8},
	{from: 87, to: 4},
	{from: 87, to: 13},
	
	// 88
	{from: 88, to: 2},
	{from: 88, to: 7},
	{from: 88, to: 3},
	{from: 88, to: 8},
	
	// 89
	{from: 89, to: 4},
	{from: 89, to: 9},
	{from: 89, to: 5},
	{from: 89, to: 6},
	
	// 90
	{from: 90, to: 2},
	{from: 90, to: 8},
	{from: 90, to: 5},
	{from: 90, to: 7},
	
	// 91
	{from: 91, to: 3},
	{from: 91, to: 12},
	{from: 91, to: 4},
	{from: 91, to: 6},
	
	// 92
	{from: 92, to: 2},
	{from: 92, to: 8},
	{from: 92, to: 5},
	{from: 92, to: 10},
	
	// 93
	{from: 93, to: 4},
	{from: 93, to: 9},
	{from: 93, to: 5},
	{from: 93, to: 12},
	
	// 94
	{from: 94, to: 3},
	{from: 94, to: 8},
	{from: 94, to: 4},
	{from: 94, to: 11},
	
	// 95
	{from: 95, to: 2},
	{from: 95, to: 13},
	{from: 95, to: 5},
	{from: 95, to: 6},
	
	// 96
	{from: 96, to: 4},
	{from: 96, to: 13},
	{from: 96, to: 5},
	{from: 96, to: 7},
	
	// 97
	{from: 97, to: 6},
	{from: 97, to: 4},
	{from: 97, to: 3},
	{from: 97, to: 8},
	{from: 97, to: 1},
	{from: 97, to: 7},
	{from: 97, to: 9},
	
	// 98
	{from: 98, to: 6},
	{from: 98, to: 5},
	{from: 98, to: 2},
	{from: 98, to: 8},
	{from: 98, to: 1},
	{from: 98, to: 7},
	{from: 98, to: 9},
	
	// 99
	{from: 99, to: 4},
	{from: 99, to: 9},
	{from: 99, to: 5},
	{from: 99, to: 7},
	{from: 99, to: 1},
	{from: 99, to: 6},
	{from: 99, to: 8},
	
	// 100
	{from: 100, to: 3},
	{from: 100, to: 12},
	{from: 100, to: 4},
	{from: 100, to: 11},
	
	// 101
	{from: 101, to: 2},
	{from: 101, to: 13},
	{from: 101, to: 5},
	{from: 101, to: 10},
	
	// 102
	{from: 102, to: 4},
	{from: 102, to: 13},
	{from: 102, to: 5},
	{from: 102, to: 12}
];