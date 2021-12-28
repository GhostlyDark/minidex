function el(e){return document.getElementById(e)}
function addEvent(e,v,f){e.addEventListener(v,f,false)}
function stopPropagation(e){if(typeof e.stopPropagation!=='undefined')e.stopPropagation();else e.cancelBubble=true}

const GAMES=[
	['Red / Blue / Yellow','Rouge / Bleu / Jaune','Rot / Blau / Gelb','Rosso / Blu / Giallo','Rojo / Azul / Amarillo',,'红／绿／蓝'],
	['Gold / Silver / Crystal','Or / Argent / Cristal','Gold / Silber / Kristall','Oro / Argento / Cristallo','Oro / Plata / Cristal',,'金／银／水晶'],
	['Ruby / Sapphire / Emerald','Rubis / Saphir / Émeraude','Rubin / Saphir / Smaragd','Rubino / Zaffiro / Smeraldo','Rubí / Zafiro / Esmeralda',,'红宝石／蓝宝石'],
	['Fire Red / Leaf Green','Rouge Feu / Vert Feuille','Feuerrot / Blattgrün','Rosso Fuoco / Verde Foglia','Rojo Fuego / Verde Hoja',,'火红／叶绿'],
	['Diamond / Pearl / Platinum','Diamant / Perle / Platine','Diamant / Perl / Platin','Diamante / Perla / Platino','Diamante / Perla / Platino',,'钻石／珍珠'],
	['HeartGold / SoulSilver',,,,,,'心金／魂银'],
	['Black / White','Noir / Blanc','Schwarz / Weiß','Nero / Bianco','Negro / Blanco',,'黑／白'],
	['Black 2 / White 2','Noir 2 / Blanc 2','Schwarz 2 / Weiß 2','Nero 2 / Bianco 2','Negro 2 / Blanco 2',,'黑 2／白 2'],
	['X / Y'],
	['Omega Ruby / Alpha Sapphire','Rubis Oméga / Saphir Alpha','Omega Rubin / Alpha Saphir','Rubino Omega / Zaffiro Alpha','Rubí Omega / Zafiro Alfa',,'欧米伽红宝石／阿尔法蓝宝石'],
	['Sun / Moon','Soleil / Lune','Sonne / Mond','Sole / Luna','Sol / Luna',,'太阳／月亮'],
	['Ultra Sun / Ultra Moon','Ultra-Soleil / Ultra-Lune','Ultra Sonne / Ultra Mond','Ultra Sole / Ultra Luna','Ultra Sol / Ultra Luna',,'究极之日／究极之月'],
	['Let\'s go!'],
	['Sword / Shield','Épée / Bouclier','Schwert / Schild','Spada / Scudo','Espada / Escudo',,'剑／盾'],
	['Brilliant Diamond / Shining Pearl','Diamant Étincelant / Perle Scintillante','Strahlender Diamant / Leuchtende Perle','Diamante Lucente / Perla Splendente','Diamante Brillante / Perla Reluciente',,'晶灿钻石／明亮珍珠']
];

function setLanguage(l){
	MinidexSettings.lang=l;

	var lis=document.getElementById('games').children;
	for(var i=0; i<lis.length; i++)
		lis[i].children[0].children[1].innerHTML=GAMES[i][l] || GAMES[i][0];

	for(var i=0; i<7; i++)
		document.getElementById('description-'+i).style.display=l===i?'block':'none';
}
var MinidexSettings=(function(){
	var IS_STORAGE_AVAILABLE=typeof(Storage)!=='undefined';

	var defaultLanguage=0;
	var userLang=(navigator.language || navigator.userLanguage).substr(0,2);
	if(userLang==='fr')
		defaultLanguage=1;
	else if(userLang==='de')
		defaultLanguage=2;
	else if(userLang==='it')
		defaultLanguage=3;
	else if(userLang==='es')
		defaultLanguage=4;
	else if(userLang==='jp')
		defaultLanguage=5;
	else if(userLang==='zh')
		defaultLanguage=6;

	return{
		/* default settings */
		lang:defaultLanguage,

		save:function(){
			if(IS_STORAGE_AVAILABLE){
				localStorage.setItem('minidex', JSON.stringify({lang:this.lang,donateWarning:this.donateWarning}));
			}
		},
		load:function(){
			if(IS_STORAGE_AVAILABLE && localStorage.getItem('minidex')){
				var loadedSettings=JSON.parse(localStorage.getItem('minidex'));

				if(typeof loadedSettings.lang==='number' && loadedSettings.lang>=0 && loadedSettings.lang<=6)
					this.lang=loadedSettings.lang;
			}
		},
		checkUnknownLanguage:function(){
			return IS_STORAGE_AVAILABLE && !localStorage.getItem('minidex') && defaultLanguage===0;
		}
	}
}());


window.addEventListener('load', function(evt){
	/* startup, load settings */
	MinidexSettings.load();
	el('select-language').value=MinidexSettings.lang;
	setLanguage(MinidexSettings.lang);

	addEvent(el('select-language'), 'change', function(evt){
		setLanguage(this.selectedIndex);
		MinidexSettings.save();
	});
}, false);
if(location.origin != 'file://')navigator.serviceWorker.register('_cache_service_worker.js')