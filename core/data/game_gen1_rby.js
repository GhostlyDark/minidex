const GENERATION=1;
const GAME_ID='rby';
const GAMES=[
	['Red','Rouge','Rot','Rosso','Rojo',,'红'],
	['Blue','Bleu','Blau','Blu','Azul',,'蓝'],
	['Yellow','Jaune','Gelb','Giallo','Amarillo',,'黄']
];
const REGIONAL_DEXES=[
	[['Kanto Pokédex',,'Kanto-Pokédex',,'Pokédex de Kanto',,'关都地区宝可梦'], (function(){var a=[];for(var i=1;i<=151;i++)a.push(i);return a})()]
];
const NATIONAL_DEX=false;
const MAX_NATIONAL=151;


const Icons={
	IMAGE:'../core/icons_3ds.png',
	WIDTH:1280,
	HEIGHT:960,
	IS_BIG:false,
	ICON_WIDTH:40,
	ICON_HEIGHT:30,

	ICONS:[0,1,2,3,5,6,7,10,11,12,14,15,16,17,18,19,21,22,23,25,27,29,30,31,32,33,47,49,51,53,54,55,56,57,58,59,60,61,63,65,66,67,68,69,70,71,72,73,74,75,76,78,80,82,84,85,86,87,88,89,90,91,92,93,94,95,97,98,99,100,101,102,103,104,105,107,109,111,112,113,114,116,117,118,119,120,121,122,123,125,127,128,129,130,131,133,134,135,136,137,138,139,140,141,143,144,146,147,148,149,150,151,152,153,154,155,157,158,159,160,161,162,163,164,165,166,167,168,170,171,172,174,175,176,178,179,180,181,182,183,184,185,186,188,189,190,191,192,193,194,195,198]
}