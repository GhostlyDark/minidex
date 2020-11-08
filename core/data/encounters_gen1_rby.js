const R=1<<0;
const B=1<<1;
const Y=1<<2;
const RB=R|B;
const RY=R|Y;
const BY=B|Y;

const LOCATIONS=[
{
	name:['Pallet Town','Bourg Palette','Alabastia','Biancavilla','Pueblo Paleta'],encounters:[
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[60,RB,'fish_super',50],
		[72,RB,'fish_super',50],
		[72,Y,'fish_super',40],
		[120,Y,'fish_super',60],
		[1,RB,'starter'],
		[4,RB,'starter'],
		[7,RB,'starter'],
		[25,Y,'starter']
	]
},{
	name:['Route 1',,,'Percorso 1','Ruta 1'],encounters:[
		[16,RB,'grass',55],
		[16,Y,'grass',70],
		[19,RB,'grass',45],
		[19,Y,'grass',30]
	]
},{
	name:['Viridian City','Jadielle','Vertania City','Smeraldopoli','Ciudad Verde'],encounters:[
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[60,RB,'fish_super',50],
		[60,Y,'fish_super',100],
		[72,RB,'fish_super',50]
	]
},{
	name:['Route 2',,,'Percorso 2','Ruta 2'],encounters:[
		[10,B,'grass',15],
		[13,R,'grass',15],
		[16,RB,'grass',40],
		[16,Y,'grass',30],
		[19,RB,'grass',45],
		[19,Y,'grass',40],
		[29,Y,'grass',15],
		[32,Y,'grass',15],
		[122,RB,['trade',63]],
		[122,Y,['trade',35]]
	]
},{
	name:['Viridian Forest','Canada','Vertania Wald','Bosco Smeraldo','Bosque Verde'],encounters:[
		[10,R,'grass',5],
		[10,B,'grass',50],
		[10,Y,'grass',55],
		[11,R,'grass',5],
		[11,B,'grass',35],
		[11,Y,'grass',20],
		[13,R,'grass',50],
		[13,B,'grass',5],
		[14,R,'grass',35],
		[14,B,'grass',5],
		[16,Y,'grass',24],
		[17,Y,'grass',1],
		[25,RB,'grass',5]
	]
},{
	name:['Route 3',,,'Percorso 3','Ruta 3'],encounters:[
		[16,RB,'grass',50],
		[19,Y,'grass',15],
		[21,RB,'grass',40],
		[21,Y,'grass',55],
		[27,Y,'grass',15],
		[39,RB,'grass',10],
		[56,Y,'grass',15]
	]
},{
	name:['Mt. Moon',,'Mondberg','Monte Luna'],encounters:[
		{group:'1f',encounters:[
			[27,Y,'cave',4],
			[35,,'cave',1],
			[41,RB,'cave',79],
			[41,Y,'cave',75],
			[46,RB,'cave',5],
			[74,RB,'cave',15],
			[74,Y,'cave',20]
		]},
		{group:'b1f',encounters:[
			[35,RB,'cave',4],
			[35,Y,'cave',5],
			[41,RB,'cave',60],
			[41,Y,'cave',65],
			[46,,'cave',10],
			[74,RB,'cave',26],
			[74,Y,'cave',20]
		]},
		{group:'b2f',encounters:[
			[35,RB,'cave',6],
			[35,Y,'cave',10],
			[41,RB,'cave',54],
			[41,Y,'cave',60],
			[46,,'cave',15],
			[74,RB,'cave',25],
			[74,Y,'cave',15]
		]}
	]
},{
	name:['Route 4',,,'Percorso 4','Ruta 4'],encounters:[
		[19,RB,'grass',45],
		[19,Y,'grass',15],
		[21,RB,'grass',35],
		[21,Y,'grass',55],
		[23,R,'grass',25],
		[27,B,'grass',25],
		[27,Y,'grass',15],
		[56,Y,'grass',15],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[54,RB,'fish_super',33],
		[98,RB,'fish_super',33],
		[118,RB,'fish_super',33],
		[118,Y,'fish_super',90],
		[119,Y,'fish_super',10],
		[129,,'gift']
	]
},{
	name:['Cerulean City',,'Azuria City','Celestopoli','Ciudad Celeste'],encounters:[
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[54,RB,'fish_super',33],
		[98,RB,'fish_super',33],
		[118,RB,'fish_super',33],
		[118,Y,'fish_super',70],
		[119,Y,'fish_super',30],
		[1,Y,'gift'],
		[124,RB,['trade',61]]
	]
},{
	name:['Route 24',,,'Percorso 24','Ruta 24'],encounters:[
		[10,B,'grass',25],
		[11,B,'grass',15],
		[13,R,'grass',25],
		[14,R,'grass',15],
		[16,RB,'grass',20],
		[16,Y,'grass',29],
		[17,Y,'grass',1],
		[43,R,'grass',25],
		[43,Y,'grass',35],
		[48,Y,'grass',10],
		[63,RB,'grass',15],
		[69,BY,'grass',25],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[54,RB,'fish_super',33],
		[98,RB,'fish_super',33],
		[118,RB,'fish_super',33],
		[118,Y,'fish_super',90],
		[119,Y,'fish_super',10],
		[4,Y,'gift'],
		[151,,'glitch']
	]
},{
	name:['Route 25',,,'Percorso 25','Ruta 25'],encounters:[
		[10,R,'grass',1],
		[10,B,'grass',25],
		[11,R,'grass',4],
		[11,B,'grass',15],
		[13,R,'grass',25],
		[13,B,'grass',1],
		[14,R,'grass',15],
		[14,B,'grass',4],
		[16,RB,'grass',15],
		[16,Y,'grass',29],
		[17,Y,'grass',1],
		[43,R,'grass',25],
		[43,Y,'grass',35],
		[48,Y,'grass',10],
		[63,RB,'grass',15],
		[69,BY,'grass',25],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[54,RB,'fish_super',33],
		[98,RB,'fish_super',33],
		[98,Y,'fish_super',70],
		[99,Y,'fish_super',30],
		[118,RB,'fish_super',33]
	]
},{
	name:['Route 5',,,'Percorso 5','Ruta 5'],encounters:[
		[16,RB,'grass',35],
		[16,Y,'grass',45],
		[17,Y,'grass',5],
		[19,Y,'grass',25],
		[39,Y,'grass',10],
		[43,R,'grass',40],
		[52,B,'grass',25],
		[56,R,'grass',25],
		[63,Y,'grass',15],
		[69,B,'grass',40]
	]
},{
	name:['Route 6',,,'Percorso 6','Ruta 6'],encounters:[
		[16,RB,'grass',35],
		[16,Y,'grass',45],
		[17,Y,'grass',5],
		[19,Y,'grass',25],
		[39,Y,'grass',10],
		[43,R,'grass',40],
		[52,B,'grass',25],
		[56,R,'grass',25],
		[63,Y,'grass',15],
		[69,B,'grass',40],
		[54,Y,'surf',95],
		[55,Y,'surf',5],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[90,RB,'fish_super',50],
		[98,RB,'fish_super',50],
		[118,Y,'fish_super',100]
	]
},{
	name:['Underground Path (Routes 5-6)','Souterrain (Routes 5-6)','Tunnelpfad (Routes 5-6)','Via Sotterranea (Percorsos 5-6)','Vía Subterránea (Rutas 5-6)'],encounters:[
		[29,RB,['trade',32]],
		[67,Y,['trade',104]]
	]
},{
	name:['Vermilion City','Carmin sur Mer','Orania City','Aranciopoli','Ciudad Carmín'],encounters:[
		[7,Y,'gift'],
		[83,RB,['trade',21]],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[90,RB,'fish_super',50],
		[98,RB,'fish_super',50],
		{group:'city',encounters:[
			[72,Y,'fish_super',90],
			[116,Y,'fish_super',10]
		]},
		{group:'harbor',encounters:[
			[72,Y,'fish_super',70],
			[90,Y,'fish_super',10],
			[120,Y,'fish_super',20]
		]}
	]
},{
	name:['Route 11',,,'Percorso 11','Ruta 11'],encounters:[
		[16,Y,'grass',40],
		[17,Y,'grass',10],
		[19,Y,'grass',25],
		[20,Y,'grass',1],
		[21,RB,'grass',30],
		[23,R,'grass',45],
		[27,B,'grass',45],
		[96,RB,'grass',25],
		[96,Y,'grass',24],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[72,Y,'fish_super',90],
		[90,RB,'fish_super',50],
		[98,RB,'fish_super',50],
		[116,Y,'fish_super',10],
		[30,RB,['trade',33]],
		[51,Y,['trade',108]]
	]
},{
	name:['Diglett\'s Cave','Cave Taupiqueur','Digdas Höhle','Grotta Diglett','Cueva Diglett'],encounters:[
		[50,,'cave',95],
		[51,,'cave',5]
	]
},{
	name:['Route 9',,,'Percorso 9','Ruta 9'],encounters:[
		[19,RB,'grass',45],
		[19,Y,'grass',15],
		[20,Y,'grass',4],
		[21,RB,'grass',30],
		[21,Y,'grass',10],
		[22,Y,'grass',1],
		[23,R,'grass',25],
		[27,B,'grass',25],
		[29,Y,'grass',35],
		[30,Y,'grass',5],
		[32,Y,'grass',25],
		[33,Y,'grass',5]
	]
},{
	name:['Rock Tunnel','Grotte','Felstunnel','Tunnel Roccioso','Túnel Roca'],encounters:[
		[66,RB,'cave',15],
		{group:'1f',encounters:[
			[41,,'cave',55],
			[74,RB,'cave',25],
			[74,Y,'cave',35],
			[66,Y,'cave',10],
			[95,RB,'cave',5]
		]},
		{group:'b1f',encounters:[
			[41,RB,'cave',50],
			[41,Y,'cave',45],
			[66,Y,'cave',20],
			[74,RB,'cave',26],
			[74,Y,'cave',25],
			[95,RB,'cave',9],
			[95,Y,'cave',10]
		]}
	]
},{
	name:['Route 10',,,'Percorso 10','Ruta 10'],encounters:[
		[19,Y,'grass',15],
		[20,Y,'grass',5],
		[21,RB,'grass',30],
		[23,R,'grass',25],
		[27,B,'grass',25],
		[29,Y,'grass',10],
		[32,Y,'grass',10],
		[66,Y,'grass',5],
		[81,Y,'grass',55],
		[100,RB,'grass',45],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[61,RB,'fish_super',50],
		[79,RB,'fish_super',50],
		[98,Y,'fish_super',70],
		[99,Y,'fish_super',10],
		[116,Y,'fish_super',20]
	]
},{
	name:['Route 8',,,'Percorso 8','Ruta 8'],encounters:[
		[16,RB,'grass',35],
		[16,Y,'grass',40],
		[17,Y,'grass',10],
		[19,Y,'grass',15],
		[23,R,'grass',20],
		[27,B,'grass',20],
		[37,B,'grass',20],
		[39,Y,'grass',10],
		[52,B,'grass',25],
		[56,R,'grass',25],
		[58,R,'grass',20],
		[63,Y,'grass',20],
		[64,Y,'grass',5],
		[151,,'glitch']
	]
},{
	name:['Route 7',,,'Percorso 7','Ruta 7'],encounters:[
		[16,RB,'grass',35],
		[16,Y,'grass',40],
		[17,Y,'grass',10],
		[19,Y,'grass',15],
		[37,B,'grass',10],
		[39,Y,'grass',10],
		[43,R,'grass',25],
		[52,B,'grass',30],
		[56,R,'grass',30],
		[58,R,'grass',10],
		[63,Y,'grass',25],
		[69,B,'grass',25]
	]
},{
	name:['Celadon City','Céladopole','Prismania City','Azzurropoli','Ciudad Azulona'],encounters:[
		[133,,'gift'],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[61,RB,'fish_super',50],
		[79,RB,'fish_super',50],
		[118,Y,'fish_super',100],
		{group:['Game Corner','Casino','Prismania','Casinò','Casino'],encounters:[
			[63,,'gift'],
			[35,RB,'gift'],
			[30,R,'gift'],
			[33,B,'gift'],
			[37,Y,'gift'],
			[40,Y,'gift'],
			[147,RB,'gift'],
			[123,RY,'gift'],
			[127,BY,'gift'],
			[137,,'gift']
		]}
	]
},{
	name:['Pokémon Tower','Tour Pokémon','Pokémon-Turm','Torre Pokémon','Torre Pokémon'],encounters:[
		[105,,'interact'],
		{group:'3f',encounters:[
			[92,RB,'walk',90],
			[92,Y,'walk',95],
			[93,RB,'walk',1],
			[93,Y,'walk',5],
			[104,RB,'walk',9]
		]},
		{group:'4f',encounters:[
			[92,RB,'walk',86],
			[92,Y,'walk',95],
			[93,,'walk',5],
			[104,RB,'walk',9]
		]},
		{group:'5f',encounters:[
			[92,RB,'walk',86],
			[92,Y,'walk',90],
			[93,,'walk',5],
			[104,RB,'walk',9],
			[104,Y,'walk',5]
		]},
		{group:'6f',encounters:[
			[92,RB,'walk',85],
			[92,Y,'walk',90],
			[93,RB,'walk',6],
			[93,Y,'walk',5],
			[104,RB,'walk',9],
			[104,Y,'walk',5]
		]},
		{group:'7f',encounters:[
			[92,RB,'walk',75],
			[92,Y,'walk',90],
			[93,RB,'walk',15],
			[93,Y,'walk',5],
			[104,RB,'walk',10],
			[104,Y,'walk',5]
		]}
	]
},{
	name:['Saffron City',,'Saffronia City','Zafferanopoli','Ciudad Azafrán'],encounters:[
		[106,,'gift'],
		[107,,'gift']
	]
},{
	name:['Silph Co.','Sylphe SARL',,'Sliph SpA','Silph S.A.'],encounters:[
		[131,,'gift']
	]
},{
	name:['Route 12',,,'Percorso 12','Ruta 12'],encounters:[
		[16,RB,'grass',35],
		[16,Y,'grass',15],
		[17,Y,'grass',10],
		[43,R,'grass',40],
		[43,Y,'grass',35],
		[44,RY,'grass',5],
		[48,RB,'grass',20],
		[69,B,'grass',40],
		[69,Y,'grass',25],
		[70,BY,'grass',5],
		[83,Y,'grass',5],
		[79,Y,'surf',95],
		[80,Y,'surf',5],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[72,RB,'fish_super',25],
		[98,RB,'fish_super',25],
		[116,Y,'fish_super',70],
		[117,Y,'fish_super',30],
		[118,RB,'fish_super',25],
		[129,RB,'fish_super',25],
		[143,,'interact']
	]
},{
	name:['Route 13',,,'Percorso 13','Ruta 13'],encounters:[
		[16,RB,'grass',30],
		[16,Y,'grass',10],
		[17,Y,'grass',15],
		[43,R,'grass',40],
		[43,Y,'grass',35],
		[44,RY,'grass',5],
		[48,RB,'grass',20],
		[69,B,'grass',40],
		[69,Y,'grass',25],
		[70,BY,'grass',5],
		[83,Y,'grass',5],
		[132,RB,'grass',5],
		[79,Y,'surf',95],
		[80,Y,'surf',5],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[72,RB,'fish_super',25],
		[72,Y,'fish_super',20],
		[98,RB,'fish_super',25],
		[118,RB,'fish_super',25],
		[129,RB,'fish_super',25],
		[116,Y,'fish_super',70],
		[117,Y,'fish_super',10]
	]
},{
	name:['Route 14',,,'Percorso 14','Ruta 14'],encounters:[
		[16,RB,'grass',15],
		[17,RB,'grass',5],
		[17,Y,'grass',10],
		[43,R,'grass',40],
		[43,Y,'grass',35],
		[44,RY,'grass',5],
		[48,RB,'grass',20],
		[48,Y,'grass',19],
		[49,Y,'grass',1],
		[69,B,'grass',40],
		[69,Y,'grass',25],
		[70,BY,'grass',5],
		[132,RB,'grass',15],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50]
	]
},{
	name:['Route 15',,,'Percorso 15','Ruta 15'],encounters:[
		[16,RB,'grass',15],
		[17,RB,'grass',5],
		[17,Y,'grass',10],
		[43,R,'grass',40],
		[43,Y,'grass',35],
		[44,RY,'grass',5],
		[48,RB,'grass',20],
		[48,Y,'grass',19],
		[49,Y,'grass',1],
		[69,B,'grass',40],
		[69,Y,'grass',25],
		[70,BY,'grass',5],
		[132,RB,'grass',15]
	]
},{
	name:['Fuchsia City','Parmanie','Fuchsania City','Fucsiapoli','Ciudad Fucsia'],encounters:[
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[98,RB,'fish_super',25],
		[118,RB,'fish_super',25],
		[119,RB,'fish_super',25],
		[129,RB,'fish_super',25],
		[129,Y,'fish_super',90],
		[130,Y,'fish_super',10]
	]
},{
	name:['Safari Zone',,'Safarizone','Zona Safari','Zona Safari'],encounters:[
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[54,RB,'fish_super',25],
		[79,RB,'fish_super',25],
		[98,RB,'fish_super',25],
		[147,RB,'fish_super',25],
		{group:['Center Area (hub)',,,,'Area central (hub)'],encounters:[
			[29,B,'grass',25],
			[29,Y,'grass',15],
			[30,R,'grass',5],
			[30,B,'grass',10],
			[32,RY,'grass',25],
			[33,RB,'grass',5],
			[33,Y,'grass',10],
			[46,Y,'grass',5],
			[47,RB,'grass',5],
			[47,Y,'grass',15],
			[48,RB,'grass',15],
			[102,RB,'grass',20],
			[102,Y,'grass',15],
			[111,RB,'grass',15],
			[111,Y,'grass',10],
			[113,,'grass',1],
			[114,Y,'grass',4],
			[123,R,'grass',4],
			[127,B,'grass',4],
			[129,Y,'fish_super',70],
			[147,Y,'fish_super',20],
			[148,Y,'fish_super',10]
		]},
		{group:['Center Area (east)',,,,'Area central (este)'],encounters:[
			[29,R,'grass',5],
			[29,BY,'grass',25],
			[30,BY,'grass',10],
			[32,R,'grass',25],
			[32,B,'grass',5],
			[32,Y,'grass',15],
			[33,R,'grass',10],
			[46,RB,'grass',15],
			[47,RB,'grass',5],
			[84,RB,'grass',15],
			[102,,'grass',20],
			[104,Y,'grass',10],
			[105,Y,'grass',5],
			[113,Y,'grass',4],
			[115,RB,'grass',4],
			[123,RY,'grass',1],
			[127,B,'grass',1],
			[128,Y,'grass',10],
			[129,Y,'fish_super',90],
			[147,Y,'fish_super',10]
		]},
		{group:['Area 2',,,,'Área 2'],encounters:[
			[29,B,'grass',25],
			[29,Y,'grass',15],
			[30,R,'grass',5],
			[30,BY,'grass',10],
			[32,RY,'grass',25],
			[33,R,'grass',10],
			[33,B,'grass',5],
			[46,RB,'grass',15],
			[49,RB,'grass',5],
			[102,RB,'grass',20],
			[102,Y,'grass',15],
			[104,Y,'grass',5],
			[111,RB,'grass',15],
			[111,Y,'grass',10],
			[113,RB,'grass',4],
			[115,Y,'grass',15],
			[123,Y,'grass',4],
			[127,Y,'grass',1],
			[128,RB,'grass',1],
			[129,Y,'fish_super',90],
			[147,Y,'fish_super',10]
		]},
		{group:['Area 3',,,,'Área 3'],encounters:[
			[29,R,'grass',5],
			[29,B,'grass',25],
			[29,Y,'grass',15],
			[30,B,'grass',10],
			[32,RY,'grass',25],
			[32,B,'grass',5],
			[33,RY,'grass',10],
			[48,RB,'grass',15],
			[49,RB,'grass',5],
			[84,RB,'grass',15],
			[102,,'grass',20],
			[104,Y,'grass',10],
			[105,Y,'grass',5],
			[114,Y,'grass',1],
			[115,RB,'grass',1],
			[127,Y,'grass',4],
			[128,RB,'grass',4],
			[128,Y,'grass',10],
			[129,Y,'fish_super',90],
			[147,Y,'fish_super',10]
		]}
	]
},{
	name:['Route 18',,,'Percorso 18','Ruta 18'],encounters:[
		[19,Y,'grass',25],
		[20,RB,'grass',20],
		[20,Y,'grass',5],
		[21,RB,'grass',40],
		[21,Y,'grass',30],
		[22,RB,'grass',15],
		[22,Y,'grass',5],
		[84,RB,'grass',25],
		[84,Y,'grass',35],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[72,RB,'fish_super',25],
		[72,Y,'fish_super',40],
		[90,Y,'fish_super',60],
		[98,RB,'fish_super',25],
		[118,RB,'fish_super',25],
		[129,RB,'fish_super',25],
		[108,RB,['trade',80]],
		[47,Y,['trade',114]]
	]
},{
	name:['Route 17',,'Radweg','Pista Ciclabile','Camino de bicis'],encounters:[
		[20,RB,'grass',30],
		[21,RB,'grass',40],
		[22,RB,'grass',5],
		[22,Y,'grass',20],
		[77,Y,'grass',24],
		[84,RB,'grass',25],
		[84,Y,'grass',55],
		[85,Y,'grass',1],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[72,RB,'fish_super',25],
		[72,Y,'fish_super',70],
		[90,Y,'fish_super',30],
		[98,RB,'fish_super',25],
		[118,RB,'fish_super',25],
		[129,RB,'fish_super',25]
	]
},{
	name:['Route 16',,,'Percorso 16','Ruta 16'],encounters:[
		[19,RB,'grass',30],
		[19,Y,'grass',25],
		[20,,'grass',5],
		[21,RB,'grass',40],
		[21,Y,'grass',30],
		[22,Y,'grass',5],
		[84,RB,'grass',25],
		[84,Y,'grass',35],
		[143,,'interact']
	]
},{
	name:['Power Plant',,'Kraftwerk','Centrale Elettrica','Central Energía'],encounters:[
		[25,RB,'walk',25],
		[26,B,'walk',5],
		[81,RB,'walk',25],
		[81,Y,'walk',40],
		[82,RB,'walk',10],
		[82,Y,'walk',20],
		[88,Y,'walk',15],
		[89,Y,'walk',5],
		[100,RB,'walk',35],
		[100,Y,'walk',20],
		[125,R,'walk',5],
		[100,,'interact'],
		[101,,'interact'],
		[145,,'interact']
	]
},{
	name:['Route 19',,,'Percorso 19','Ruta 19'],encounters:[
		[72,,'surf',100],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[72,Y,'fish_super',60],
		[73,Y,'fish_super',10],
		[90,RB,'fish_super',25],
		[116,RB,'fish_super',25],
		[118,RB,'fish_super',25],
		[120,RB,'fish_super',25],
		[120,Y,'fish_super',30]
	]
},{
	name:['Seafoam Islands','Îles Écume','Seeschauminseln','Isole Spumarine','Islas Espuma'],encounters:[
		{group:'1f',encounters:[
			[41,RB,'cave',10],
			[41,Y,'cave',50],
			[42,,'cave',5],
			[54,R,'cave',5],
			[54,B,'cave',15],
			[55,R,'cave',1],
			[79,RY,'cave',15],
			[79,B,'cave',5],
			[80,B,'cave',1],
			[86,RB,'cave',25],
			[90,R,'cave',19],
			[98,B,'cave',20],
			[98,Y,'cave',30],
			[116,R,'cave',20],
			[120,B,'cave',19]
		]},
		{group:'b1f',encounters:[
			[41,Y,'cave',45],
			[42,Y,'cave',10],
			[54,B,'cave',15],
			[79,R,'cave',15],
			[79,Y,'cave',10],
			[86,RB,'cave',15],
			[86,Y,'cave',5],
			[87,RB,'cave',4],
			[90,R,'cave',15],
			[90,B,'cave',25],
			[98,BY,'cave',25],
			[99,B,'cave',1],
			[99,Y,'cave',5],
			[116,R,'cave',25],
			[117,R,'cave',1],
			[120,R,'cave',25],
			[120,B,'cave',15]
		]},
		{group:'b2f',encounters:[
			[41,Y,'cave',40],
			[42,RB,'cave',4],
			[42,Y,'cave',15],
			[54,B,'cave',25],
			[55,B,'cave',1],
			[79,R,'cave',25],
			[79,Y,'cave',4],
			[80,RY,'cave',1],
			[86,RB,'cave',40],
			[86,Y,'cave',10],
			[90,R,'cave',5],
			[90,B,'cave',10],
			[98,B,'cave',15],
			[98,Y,'cave',20],
			[99,Y,'cave',10],
			[116,R,'cave',15],
			[120,R,'cave',10],
			[120,B,'cave',5]
		]},
		{group:'b3f',encounters:[
			[41,Y,'cave',25],
			[42,Y,'cave',25],
			[54,B,'cave',40],
			[79,R,'cave',40],
			[86,RB,'cave',25],
			[86,Y,'cave',15],
			[87,RB,'cave',1],
			[87,Y,'cave',5],
			[90,R,'cave',15],
			[98,B,'cave',15],
			[98,Y,'cave',20],
			[99,B,'cave',4],
			[99,Y,'cave',10],
			[116,R,'cave',15],
			[117,R,'cave',4],
			[120,B,'cave',15],
			[72,Y,'surf',70],
			[120,Y,'surf',30],
			[129,,'fish_old',100],
			[60,,'fish_good',50],
			[118,,'fish_good',50],
			[90,RB,'fish_super',25],
			[98,Y,'fish_super',40],
			[99,Y,'fish_super',20],
			[116,RB,'fish_super',25],
			[118,RB,'fish_super',25],
			[120,RB,'fish_super',25],
			[120,Y,'fish_super',40]
		]},
		{group:'b4f',encounters:[
			[41,Y,'cave',20],
			[42,RB,'cave',1],
			[42,Y,'cave',30],
			[54,B,'cave',15],
			[55,B,'cave',4],
			[79,R,'cave',15],
			[80,R,'cave',4],
			[86,RB,'cave',15],
			[86,Y,'cave',20],
			[87,Y,'cave',5],
			[90,R,'cave',25],
			[98,B,'cave',40],
			[98,Y,'cave',15],
			[99,Y,'cave',10],
			[116,R,'cave',40],
			[120,B,'cave',25],
			[72,Y,'surf',70],
			[120,Y,'surf',30],
			[129,,'fish_old',100],
			[60,,'fish_good',50],
			[118,,'fish_good',50],
			[90,RB,'fish_super',25],
			[98,Y,'fish_super',40],
			[99,Y,'fish_super',20],
			[116,RB,'fish_super',25],
			[118,RB,'fish_super',25],
			[120,RB,'fish_super',25],
			[120,Y,'fish_super',40],
			[144,,'interact']
		]}
	]
},{
	name:['Route 20',,,'Percorso 20','Ruta 20'],encounters:[
		[72,,'surf',100],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[72,Y,'fish_super',40],
		[73,Y,'fish_super',40],
		[90,RB,'fish_super',25],
		[116,RB,'fish_super',25],
		[118,RB,'fish_super',25],
		[120,RB,'fish_super',25],
		[120,Y,'fish_super',20]
	]
},{
	name:['Cinnabar Island','Cramois\'île','Zinnoberinsel','Isola Cannella','Isla Canela'],encounters:[
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[72,Y,'fish_super',40],
		[90,RB,'fish_super',25],
		[116,RB,'fish_super',25],
		[118,RB,'fish_super',25],
		[120,RB,'fish_super',25],
		[120,Y,'fish_super',60],
		{group:['Pokémon Lab','Laboratoire Pokémon','Pokémon-Labor','Laboratorio Pokémon','Laboratorio Pokémon'],encounters:[
			[138,,'revive_fossil'],
			[140,,'revive_fossil'],
			[142,,'revive_fossil'],
			[86,RB,['trade',77]],
			[87,Y,['trade',58]],
			[89,Y,['trade',115]],
			[101,RB,['trade',26]],
			[112,Y,['trade',55]],
			[114,RB,['trade',48]]
		]}
	]
},{
	name:['Pokémon Mansion',,'Pokémon-Haus','Villa Pokémon','Mansión Pokémon'],encounters:[
		[88,R,'walk',5],
		[89,R,'walk',1],
		[109,B,'walk',5],
		[110,B,'walk',1],
		{group:'1f',encounters:[
			[19,Y,'walk',35],
			[20,Y,'walk',25],
			[37,B,'walk',10],
			[58,R,'walk',10],
			[58,Y,'walk',20],
			[77,RB,'walk',40],
			[88,B,'walk',40],
			[88,Y,'walk',20],
			[89,B,'walk',4],
			[109,R,'walk',40],
			[110,R,'walk',4]
		]},
		{group:'2f',encounters:[
			[19,Y,'walk',35],
			[20,Y,'walk',25],
			[37,B,'walk',25],
			[58,R,'walk',25],
			[77,RB,'walk',25],
			[88,B,'walk',40],
			[88,Y,'walk',35],
			[89,B,'walk',4],
			[89,Y,'walk',5],
			[109,R,'walk',40],
			[110,R,'walk',4]
		]},
		{group:'3f',encounters:[
			[19,Y,'walk',35],
			[20,Y,'walk',25],
			[37,B,'walk',15],
			[58,R,'walk',15],
			[77,R,'walk',24],
			[77,B,'walk',14],
			[88,B,'walk',40],
			[88,Y,'walk',35],
			[89,B,'walk',15],
			[89,Y,'walk',5],
			[109,R,'walk',40],
			[110,R,'walk',15],
			[126,B,'walk',10]
		]},
		{group:'b1f',encounters:[
			[20,Y,'walk',40],
			[37,B,'walk',15],
			[58,R,'walk',15],
			[77,RB,'walk',15],
			[88,B,'walk',50],
			[88,Y,'walk',40],
			[89,BY,'walk',10],
			[109,R,'walk',50],
			[110,R,'walk',14],
			[126,B,'walk',4],
			[132,Y,'walk',10]
		]}
	]
},{
	name:['Route 21',,,'Percorso 21','Ruta 21'],encounters:[
		[16,RB,'grass',25],
		[16,Y,'grass',60],
		[17,RB,'grass',15],
		[17,Y,'grass',10],
		[19,RB,'grass',35],
		[19,Y,'grass',25],
		[20,RB,'grass',15],
		[20,Y,'grass',5],
		[114,RB,'grass',10],
		[72,,'surf',100],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[72,Y,'fish_super',60],
		[73,Y,'fish_super',10],
		[90,RB,'fish_super',25],
		[116,RB,'fish_super',25],
		[118,RB,'fish_super',25],
		[120,RB,'fish_super',25],
		[120,Y,'fish_super',30]
	]
},{
	name:['Route 22',,,'Percorso 22','Ruta 22'],encounters:[
		[19,RB,'grass',50],
		[19,Y,'grass',10],
		[21,,'grass',10],
		[29,R,'grass',5],
		[29,B,'grass',35],
		[29,Y,'grass',25],
		[32,RY,'grass',35],
		[32,B,'grass',5],
		[56,Y,'grass',20],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[60,RB,'fish_super',50],
		[60,Y,'fish_super',90],
		[61,Y,'fish_super',10],
		[118,RB,'fish_super',50]
	]
},{
	name:['Route 23',,,'Percorso 23','Ruta 23'],encounters:[
		[21,RB,'grass',15],
		[22,RB,'grass',25],
		[22,Y,'grass',15],
		[23,R,'grass',25],
		[24,R,'grass',5],
		[27,B,'grass',25],
		[28,B,'grass',5],
		[30,Y,'grass',25],
		[33,Y,'grass',35],
		[56,Y,'grass',20],
		[57,Y,'grass',5],
		[132,RB,'grass',30],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[60,Y,'fish_super',70],
		[61,Y,'fish_super',30],
		[80,RB,'fish_super',25],
		[99,RB,'fish_super',25],
		[117,RB,'fish_super',25],
		[119,RB,'fish_super',25]
	]
},{
	name:['Victory Road','Route Victoire','Siegesstraße','Via Vittoria','Calle Victoria'],encounters:[
		[41,RB,'cave',15],
		[42,RB,'cave',5],
		[66,RB,'cave',25],
		[74,RB,'cave',15],
		[95,Y,'cave',10],
		{group:'1f',encounters:[
			[41,Y,'cave',20],
			[67,RB,'cave',4],
			[74,Y,'cave',65],
			[75,,'cave',5],
			[95,RB,'cave',30],
			[105,RB,'cave',1]
		]},
		{group:'2f',encounters:[
			[41,Y,'cave',10],
			[42,Y,'cave',10],
			[67,,'cave',5],
			[74,Y,'cave',55],
			[75,RB,'cave',1],
			[75,Y,'cave',10],
			[95,RB,'cave',30],
			[105,RB,'cave',4],
			[146,,'interact']
		]},
		{group:'3f',encounters:[
			[42,Y,'cave',15],
			[49,RB,'cave',10],
			[67,RB,'cave',5],
			[67,Y,'cave',10],
			[74,Y,'cave',50],
			[75,RB,'cave',5],
			[75,Y,'cave',15],
			[95,RB,'cave',20]
		]}
	]
},{
	name:['Indigo Plateau','Plateau Indigo',,'Altopiano Blu','Meseta Añil'],encounters:[
		[129,,'fish_old',100],
		[118,,'fish_good',50],
		[60,,'fish_good',50]
	]
},{
	name:['Cerulean Cave','Canada','Geheimdungeon','Grotta Ignota','Mazmorra Rara'],encounters:[
		[42,Y,'cave',40],
		[75,Y,'cave',15],
		[129,,'fish_old',100],
		[60,,'fish_good',50],
		[118,,'fish_good',50],
		[80,RB,'fish_super',25],
		[99,RB,'fish_super',25],
		[117,RB,'fish_super',25],
		[118,Y,'fish_super',40],
		[119,RB,'fish_super',25],
		[119,Y,'fish_super',60],
		{group:'1f',encounters:[
			[24,R,'cave',10],
			[26,RB,'cave',4],
			[28,BY,'cave',10],
			[42,RB,'cave',25],
			[44,Y,'cave',10],
			[47,,'cave',5],
			[49,RB,'cave',10],
			[49,Y,'cave',5],
			[64,RB,'cave',5],
			[70,Y,'cave',10],
			[82,RB,'cave',15],
			[85,RB,'cave',10],
			[97,RB,'cave',15],
			[132,RB,'cave',1],
			[132,Y,'cave',5]
		]},
		{group:'2f',encounters:[
			[28,Y,'cave',10],
			[40,RB,'cave',5],
			[44,Y,'cave',5],
			[49,RB,'cave',15],
			[64,RB,'cave',15],
			[70,Y,'cave',5],
			[85,RB,'cave',25],
			[101,RB,'cave',10],
			[105,RB,'cave',10],
			[111,Y,'cave',10],
			[112,RB,'cave',10],
			[112,Y,'cave',5],
			[113,RB,'cave',5],
			[132,RB,'cave',5],
			[132,Y,'cave',10]
		]},
		{group:'b1f',encounters:[
			[24,R,'cave',5],
			[26,RB,'cave',10],
			[28,B,'cave',5],
			[47,RB,'cave',10],
			[101,RB,'cave',15],
			[105,RB,'cave',15],
			[108,Y,'cave',5],
			[111,Y,'cave',10],
			[112,RB,'cave',25],
			[112,Y,'cave',10],
			[113,RB,'cave',10],
			[113,Y,'cave',5],
			[132,RB,'cave',10],
			[132,Y,'cave',15],
			[150,,'interact']
		]}
	]
}
];