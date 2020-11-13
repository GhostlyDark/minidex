const GENERATION=7;
const GAME_ID='sm';
const GAMES=[
	['Sun',,'Sonne',,'Sol'],
	['Moon',,'Mond',,'Luna']
];
const REGIONAL_DEXES=[
	[['Alola Pokédex',,'Alola-Pokédex',,'Pokédex de Alola'], [722,723,724,725,726,727,728,729,730,731,732,733,734,735,19,20,10,11,12,165,166,167,168,172,25,26,736,737,738,438,185,440,113,242,446,143,79,80,199,278,279,63,64,65,52,53,81,82,462,88,89,58,59,96,97,296,297,235,739,740,92,93,94,425,426,200,429,41,42,169,50,51,21,22,627,628,629,630,56,57,225,741,742,743,548,549,546,547,54,55,129,130,339,340,66,67,68,524,525,526,703,302,744,745,327,72,73,456,457,746,370,222,747,748,90,91,371,372,373,506,507,508,133,134,135,136,196,197,470,471,700,749,750,174,39,40,128,241,283,284,751,752,753,754,755,756,46,47,60,61,62,186,118,119,349,350,594,661,662,663,757,758,104,105,115,240,126,467,759,760,761,762,763,764,127,765,766,704,705,706,351,767,768,120,121,769,770,408,409,410,411,566,567,564,565,708,709,299,476,771,170,171,772,773,718,568,569,227,132,173,35,36,774,374,375,376,137,233,474,674,675,775,324,776,777,239,125,466,74,75,76,551,552,553,328,329,330,443,444,445,707,778,779,780,359,361,362,478,215,461,27,28,37,38,582,583,584,209,210,422,423,369,781,318,319,320,321,131,102,103,782,783,784,587,123,212,198,430,447,448,147,148,149,142,785,786,787,788,789,790,791,792,793,794,795,796,797,798,799,800,801,802]],
	['Extras', [69,111,116,152,155,158,183,220,288,315,363,397,404,468,497,500,503,534,542,543,574,578,599,604,607,610,633,658,679]]
];
const NATIONAL_DEX=true;
const MAX_NATIONAL=802;


const Icons={
	IMAGE:'../core/icons_3ds.png',
	WIDTH:1280,
	HEIGHT:960,
	IS_BIG:false,
	ICON_WIDTH:40,
	ICON_HEIGHT:30,

	ICONS:[0,1,2,3,5,6,7,10,11,12,14,15,16,17,18,19,21,22,23,25,27,29,30,31,32,33,47,49,51,53,54,55,56,57,58,59,60,61,63,65,66,67,68,69,70,71,72,73,74,75,76,78,80,82,84,85,86,87,88,89,90,91,92,93,94,95,97,98,99,100,101,102,103,104,105,107,109,111,112,113,114,116,117,118,119,120,121,122,123,125,127,128,129,130,131,133,134,135,136,137,138,139,140,141,143,144,146,147,148,149,150,151,152,153,154,155,157,158,159,160,161,162,163,164,165,166,167,168,170,171,172,174,175,176,178,179,180,181,182,183,184,185,186,188,189,190,191,192,193,194,195,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,221,222,223,224,225,226,227,228,229,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,278,279,280,281,282,283,284,286,287,288,289,291,292,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,330,331,332,333,334,335,337,338,339,341,342,343,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,389,391,392,393,395,396,398,399,401,402,403,404,405,406,407,408,409,411,412,413,414,416,417,418,419,420,421,422,423,424,425,426,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,448,449,450,452,453,454,455,456,458,459,460,462,463,464,465,466,467,468,469,470,471,472,474,475,476,478,479,480,481,483,485,487,489,491,492,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,524,527,528,529,530,531,532,533,534,536,538,540,541,542,543,544,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,564,565,566,568,569,570,571,572,573,574,575,576,577,578,579,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,597,598,599,600,606,607,608,609,610,611,612,613,615,616,617,618,619,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,651,652,653,654,655,656,657,658,659,660,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,682,683,684,685,686,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,721,725,726,727,728,729,730,732,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750,751,752,753,754,755,756,757,758,759,760,761,762,763,764,765,766,767,768,769,770,771,772,773,774,775,776,777,778,779,780,781,783,785,786,787,789,792,794,796,797,798,799,800,801,802,803,804,805,807,808,809,810,811,812,813,814,834,835,837,842,848,853,854,855,856,857,867,868,870,871,872,874,875,876,877,878,879,880,881,882,883,884,885,886,887,888,889,890,891,892,893,894,895,896,897,898,899,900,901,902,903,904,905,906,907,908,910,911,914,916,918,919,920,921,922,923,924,925,926,927,928,929,930,931,932,933,934,935,936,937,938,942,943,944,945,948,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,975,976,977,985,986,987,988,989,990,991,992,993,994,995,996,997,998,999,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1014,1016]
}