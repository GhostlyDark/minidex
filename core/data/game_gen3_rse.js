const GENERATION=3;
const GAME_ID='rse';
const GAMES=[
	['Ruby',,'Rubin',,'Rubí'],
	['Sapphire',,'Saphir',,'Zafiro'],
	['Emerald',,'Smaragd',,'Esmeralda']
];
const REGIONAL_DEXES=[
	[['Hoenn Pokédex',,'Hoenn-Pokédex',,'Pokédex de Hoenn'], [252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,63,64,65,290,291,292,293,294,295,296,297,118,119,129,130,298,183,184,74,75,76,299,300,301,41,42,169,72,73,302,303,304,305,306,66,67,68,307,308,309,310,311,312,81,82,100,101,313,314,43,44,45,182,84,85,315,316,317,318,319,320,321,322,323,218,219,324,88,89,109,110,325,326,27,28,327,227,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,174,39,40,349,350,351,120,121,352,353,354,355,356,357,358,359,37,38,172,25,26,54,55,360,202,177,178,203,231,232,127,214,111,112,361,362,363,364,365,366,367,368,369,222,170,171,370,116,117,230,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386]],
	[['Emerald extras',,'Smaragd-Extras',,'Extras de Esmeralda'], [52,132,151,152,155,158,163,165,167,179,185,190,191,194,195,204,207,209,213,216,223,224,228,234,235,241,249,250]]
];
const NATIONAL_DEX=true;
const MAX_NATIONAL=386;


const Icons={
	IMAGE:'../core/icons_3ds.png',
	WIDTH:1280,
	HEIGHT:960,
	IS_BIG:false,
	ICON_WIDTH:40,
	ICON_HEIGHT:30,

	ICONS:[0,1,2,3,5,6,7,10,11,12,14,15,16,17,18,19,21,22,23,25,27,29,30,31,32,33,47,49,51,53,54,55,56,57,58,59,60,61,63,65,66,67,68,69,70,71,72,73,74,75,76,78,80,82,84,85,86,87,88,89,90,91,92,93,94,95,97,98,99,100,101,102,103,104,105,107,109,111,112,113,114,116,117,118,119,120,121,122,123,125,127,128,129,130,131,133,134,135,136,137,138,139,140,141,143,144,146,147,148,149,150,151,152,153,154,155,157,158,159,160,161,162,163,164,165,166,167,168,170,171,172,174,175,176,178,179,180,181,182,183,184,185,186,188,189,190,191,192,193,194,195,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,221,222,223,224,225,226,227,228,229,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,278,279,280,281,282,283,284,286,287,288,289,291,292,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,330,331,332,333,334,335,337,338,339,341,342,343,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,389,391,392,393,395,396,398,399,401,402,403,404,405,406,407,408,409,411,412,413,414,416,417,418,419,420,421,422,423,424,425,426,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,448,449,450,452,453,454,455,456,458,459,460,462,463,464,465,466,467,468,469,470,471,472,474,475,476,478,479,480,481,483,485,487,489,491,492]
}