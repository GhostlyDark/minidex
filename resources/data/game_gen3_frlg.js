const GENERATION=3;
const GAME_ID='frlg';
const GAMES=[
	['Fire Red',,,,'Rojo Fuego'],
	['Leaf Green',,,,'Verde Hoja']
];
const REGIONAL_DEXES=[
	[['Kanto Pokédex',,,,'Pokédex de Kanto'],(function(){var a=[];for(var i=1;i<=151;i++)a.push(i);return a})()],
	[['Sevii Islands',,,,'Islas Sete'], [161,165,167,175,177,179,183,187,190,193,194,198,200,201,202,204,206,211,213,214,215,216,218,219,220,223,225,226,227,228,231,234,235,243,244,245,246,249,250,386]]
];
const NATIONAL_DEX=true;
const MAX_NATIONAL=386;


const Icons={
	IMAGE:'../resources/icons_3ds.png',
	WIDTH:1280,
	HEIGHT:960,
	IS_BIG:false,
	ICON_WIDTH:40,
	ICON_HEIGHT:30,

	ICONS:[0,1,2,3,5,6,7,10,11,12,14,15,16,17,18,19,21,22,23,25,27,29,30,31,32,33,47,49,51,53,54,55,56,57,58,59,60,61,63,65,66,67,68,69,70,71,72,73,74,75,76,78,80,82,84,85,86,87,88,89,90,91,92,93,94,95,97,98,99,100,101,102,103,104,105,107,109,111,112,113,114,116,117,118,119,120,121,122,123,125,127,128,129,130,131,133,134,135,136,137,138,139,140,141,143,144,146,147,148,149,150,151,152,153,154,155,157,158,159,160,161,162,163,164,165,166,167,168,170,171,172,174,175,176,178,179,180,181,182,183,184,185,186,188,189,190,191,192,193,194,195,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,221,222,223,224,225,226,227,228,229,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,278,279,280,281,282,283,284,286,287,288,289,291,292,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,330,331,332,333,334,335,337,338,339,341,342,343,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,389,391,392,393,395,396,398,399,401,402,403,404,405,406,407,408,409,411,412,413,414,416,417,418,419,420,421,422,423,424,425,426,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,448,449,450,452,453,454,455,456,458,459,460,462,463,464,465,466,467,468,469,470,471,472,474,475,476,478,479,480,481,483,485,487,489,491,492]
}