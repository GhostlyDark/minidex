/* [name], type, category (0=PHYSICAL,1=SPECIAL,2=STATUS), pp, power, accuracy */const MOVES=[,[["Pound","Écras&#39;Face","Pfund","Libbra","Destructor","はたく"],0,0,35,40,100],
[["Karate Chop","Poing-Karaté","Karateschlag","Colpokarate","Golpe Karate","からてチョップ"],0,0,25,50,100],
[["Double Slap","Torgnoles","Duplexhieb","Doppiasberla","Doble Bofetón","おうふくビンタ"],0,0,10,15,85],
[["Comet Punch","Poing Comète","Kometenhieb","Cometapugno","Puño Cometa","れんぞくパンチ"],0,0,15,18,85],
[["Mega Punch","Ultimapoing","Megahieb","Megapugno","Megapuño","メガトンパンチ"],0,0,20,80,85],
[["Pay Day","Jackpot","Zahltag","Giornopaga","Día de Pago","ネコにこばん"],0,0,20,40,100],
[["Fire Punch","Poing de Feu","Feuerschlag","Fuocopugno","Puño Fuego","ほのおのパンチ"],9,1,15,75,100],
[["Ice Punch","Poing-Glace","Eishieb","Gelopugno","Puño Hielo","れいとうパンチ"],14,1,15,75,100],
[["Thunder Punch","Poing-Éclair","Donnerschlag","Tuonopugno","Puño Trueno","かみなりパンチ"],12,1,15,75,100],
[["Scratch","Griffe","Kratzer","Graffio","Arañazo","ひっかく"],0,0,35,40,100],
[["Vise Grip","Force Poigne","Klammer","Presa","Agarre","はさむ"],0,0,30,55,100],
[["Guillotine","Guillotine","Guillotine","Ghigliottina","Guillotina","ハサミギロチン"],0,0,5,0,0],
[["Razor Wind","Coupe-Vent","Klingensturm","Ventagliente","Viento Cortante","かまいたち"],0,0,10,80,75],
[["Swords Dance","Danse-Lames","Schwerttanz","Danzaspada","Danza Espada","つるぎのまい"],0,2,30,0,0],
[["Cut","Coupe","Zerschneider","Taglio","Corte","いあいぎり"],0,0,30,50,95],
[["Gust","Tornade","Windstoß","Raffica","Tornado","かぜおこし"],0,0,35,40,100],
[["Wing Attack","Cru-Aile","Flügelschlag","Attacco d&#39;Ala","Ataque Ala","つばさでうつ"],2,0,35,35,100],
[["Whirlwind","Cyclone","Wirbelwind","Turbine","Remolino","ふきとばし"],0,2,20,0,85],
[["Fly","Vol","Fliegen","Volo","Vuelo","そらをとぶ"],2,0,15,70,95],
[["Bind","Étreinte","Klammergriff","Legatutto","Atadura","しめつける"],0,0,20,15,75],
[["Slam","Souplesse","Slam","Schianto","Portazo","たたきつける"],0,0,20,80,75],
[["Vine Whip","Fouet Lianes","Rankenhieb","Frustata","Látigo Cepa","つるのムチ"],11,1,10,35,100],
[["Stomp","Écrasement","Stampfer","Pestone","Pisotón","ふみつけ"],0,0,20,65,100],
[["Double Kick","Double Pied","Doppelkick","Doppiocalcio","Doble Patada","にどげり"],1,0,30,30,100],
[["Mega Kick","Ultimawashi","Megakick","Megacalcio","Megapatada","メガトンキック"],0,0,5,120,75],
[["Jump Kick","Pied Sauté","Sprungkick","Calciosalto","Patada Salto","とびげり"],1,0,25,70,95],
[["Rolling Kick","Mawashi Geri","Fegekick","Calciorullo","Patada Giro","まわしげり"],1,0,15,60,85],
[["Sand Attack","Jet de Sable","Sandwirbel","Turbosabbia","Ataque Arena","すなかけ"],0,2,15,0,100],
[["Headbutt","Coup d&#39;Boule","Kopfnuss","Bottintesta","Golpe Cabeza","ずつき"],0,0,15,70,100],
[["Horn Attack","Koud&#39;Korne","Hornattacke","Incornata","Cornada","つのでつく"],0,0,25,65,100],
[["Fury Attack","Furie","Furienschlag","Furia","Ataque Furia","みだれづき"],0,0,20,15,85],
[["Horn Drill","Empal&#39;Korne","Hornbohrer","Perforcorno","Perforador","つのドリル"],0,0,5,0,0],
[["Tackle","Charge","Tackle","Azione","Placaje","たいあたり"],0,0,35,35,95],
[["Body Slam","Plaquage","Bodyslam","Body Slam","Golpe Cuerpo","のしかかり"],0,0,15,85,100],
[["Wrap","Ligotage","Wickel","Avvolgibotta","Repetición","まきつく"],0,0,20,15,85],
[["Take Down","Bélier","Bodycheck","Riduttore","Derribo","とっしん"],0,0,20,90,85],
[["Thrash","Mania","Fuchtler","Colpo","Golpe","あばれる"],0,0,20,90,100],
[["Double-Edge","Damoclès","Risikotackle","Sdoppiatore","Doble Filo","すてみタックル"],0,0,15,100,100],
[["Tail Whip","Mimi-Queue","Rutenschlag","Colpocoda","Látigo","しっぽをふる"],0,2,30,0,100],
[["Poison Sting","Dard-Venin","Giftstachel","Velenospina","Picotazo Ven","どくばり"],3,0,35,15,100],
[["Twineedle","Double-Dard","Duonadel","Doppio Ago","Doble Ataque","ダブルニードル"],6,0,20,25,100],
[["Pin Missile","Dard-Nuée","Nadelrakete","Missilspillo","Pin Misil","ミサイルばり"],6,0,20,14,85],
[["Leer","Groz&#39;Yeux","Silberblick","Fulmisguardo","Malicioso","にらみつける"],0,2,30,0,100],
[["Bite","Morsure","Biss","Morso","Mordisco","かみつく"],0,0,25,60,100],
[["Growl","Rugissement","Heuler","Ruggito","Gruñido","なきごえ"],0,2,40,0,100],
[["Roar","Hurlement","Brüller","Boato","Rugido","ほえる"],0,2,20,0,100],
[["Sing","Berceuse","Gesang","Canto","Canto","うたう"],0,2,15,0,55],
[["Supersonic","Ultrason","Superschall","Supersuono","Supersónico","ちょうおんぱ"],0,2,20,0,55],
[["Sonic Boom","Sonicboom","Ultraschall","Sonicboom","Bomba Sónica","ソニックブーム"],0,0,20,0,90],
[["Disable","Entrave","Aussetzer","Inibitore","Anulación","かなしばり"],0,2,20,0,55],
[["Acid","Acide","Säure","Acido","Ácido","ようかいえき"],3,0,30,40,100],
[["Ember","Flammèche","Glut","Braciere","Ascuas","ひのこ"],9,1,25,40,100],
[["Flamethrower","Lance-Flammes","Flammenwurf","Lanciafiamme","Lanzallamas","かえんほうしゃ"],9,1,15,95,100],
[["Mist","Brume","Weißnebel","Nebbia","Neblina","しろいきり"],14,2,30,0,0],
[["Water Gun","Pistolet à O","Aquaknarre","Pistolacqua","Pistola Agua","みずでっぽう"],10,1,25,40,100],
[["Hydro Pump","Hydrocanon","Hydropumpe","Idropompa","Hidrobomba","ハイドロポンプ"],10,1,5,120,80],
[["Surf","Surf","Surfer","Surf","Surf","なみのり"],10,1,15,95,100],
[["Ice Beam","Laser Glace","Eisstrahl","Geloraggio","Rayo Hielo","れいとうビーム"],14,1,10,95,100],
[["Blizzard","Blizzard","Blizzard","Bora","Ventisca","ふぶき"],14,1,5,120,90],
[["Psybeam","Rafale Psy","Psystrahl","Psicoraggio","Psicorrayo","サイケこうせん"],13,1,20,65,100],
[["Bubble Beam","Bulles d&#39;O","Blubbstrahl","Bollaraggio","Rayo Burbuja","バブルこうせん"],10,1,20,65,100],
[["Aurora Beam","Onde Boréale","Aurorastrahl","Raggiaurora","Rayo Aurora","オーロラビーム"],14,1,20,65,100],
[["Hyper Beam","Ultralaser","Hyperstrahl","Iper Raggio","Hiperrayo","はかいこうせん"],0,0,5,150,90],
[["Peck","Picpic","Schnabel","Beccata","Picotazo","つつく"],2,0,35,35,100],
[["Drill Peck","Bec Vrille","Bohrschnabel","Perforbecco","Pico Taladro","ドリルくちばし"],2,0,20,80,100],
[["Submission","Sacrifice","Überroller","Sottomissione","Sumisión","じごくぐるま"],1,0,25,80,80],
[["Low Kick","Balayage","Fußkick","Colpo Basso","Patada Baja","けたぐり"],1,0,20,50,90],
[["Counter","Riposte","Konter","Contatore","Contador","カウンター"],1,0,20,0,100],
[["Seismic Toss","Frappe Atlas","Geowurf","Movim. Sismico","Mov. Sísmico","ちきゅうなげ"],1,0,20,0,100],
[["Strength","Force","Stärke","Forza","Fuerza","かいりき"],0,0,15,80,100],
[["Absorb","Vol-Vie","Absorber","Assorbimento","Absorber","すいとる"],11,1,20,20,100],
[["Mega Drain","Méga-Sangsue","Megasauger","Megassorbimento","Megaagotar","メガドレイン"],11,1,10,40,100],
[["Leech Seed","Vampigraine","Egelsamen","Parassiseme","Drenadoras","やどりぎのタネ"],11,2,10,0,90],
[["Growth","Croissance","Wachstum","Crescita","Desarrollo","せいちょう"],0,2,40,0,0],
[["Razor Leaf","Tranch&#39;Herbe","Rasierblatt","Foglielama","Hoja Afilada","はっぱカッター"],11,1,25,55,95],
[["Solar Beam","Lance-Soleil","Solarstrahl","Solarraggio","Rayo Solar","ソーラービーム"],11,1,10,120,100],
[["Poison Powder","Poudre Toxik","Giftpuder","Velenpolvere","Polvo Veneno","どくのこな"],3,2,35,0,75],
[["Stun Spore","Para-Spore","Stachelspore","Paralizzante","Paralizador","しびれごな"],11,2,30,0,75],
[["Sleep Powder","Poudre Dodo","Schlafpuder","Sonnifero","Somnífero","ねむりごな"],11,2,15,0,75],
[["Petal Dance","Danse-Fleur","Blättertanz","Petalodanza","Danza Pétalo","はなびらのまい"],11,1,20,70,100],
[["String Shot","Sécrétion","Fadenschuss","Millebave","Disp. Demora","いとをはく"],6,2,40,0,95],
[["Dragon Rage","Draco-Rage","Drachenwut","Ira di Drago","Furia Dragón","りゅうのいかり"],15,1,10,0,100],
[["Fire Spin","Danse Flamme","Feuerwirbel","Turbofuoco","Giro Fuego","ほのおのうず"],9,1,15,15,70],
[["Thunder Shock","Éclair","Donnerschock","Tuonoshock","Impactrueno","でんきショック"],12,1,30,40,100],
[["Thunderbolt","Tonnerre","Donnerblitz","Fulmine","Rayo","１０まんボルト"],12,1,15,95,100],
[["Thunder Wave","Cage-Éclair","Donnerwelle","Tuononda","Onda Trueno","でんじは"],12,2,20,0,100],
[["Thunder","Fatal-Foudre","Donner","Tuono","Trueno","かみなり"],12,1,10,120,70],
[["Rock Throw","Jet-Pierres","Steinwurf","Sassata","Lanzarrocas","いわおとし"],5,0,15,50,65],
[["Earthquake","Séisme","Erdbeben","Terremoto","Terremoto","じしん"],4,0,10,100,100],
[["Fissure","Abîme","Geofissur","Abisso","Fisura","じわれ"],4,0,5,0,0],
[["Dig","Tunnel","Schaufler","Fossa","Excavar","あなをほる"],4,0,10,100,100],
[["Toxic","Toxik","Toxin","Tossina","Tóxico","どくどく"],3,2,10,0,85],
[["Confusion","Choc Mental","Konfusion","Confusione","Confusión","ねんりき"],13,1,25,50,100],
[["Psychic","Psyko","Psychokinese","Psichico","Psíquico","サイコキネシス"],13,1,10,90,100],
[["Hypnosis","Hypnose","Hypnose","Ipnosi","Hipnosis","さいみんじゅつ"],13,2,20,0,60],
[["Meditate","Yoga","Meditation","Meditazione","Meditación","ヨガのポーズ"],13,2,40,0,0],
[["Agility","Hâte","Agilität","Agilità","Agilidad","こうそくいどう"],13,2,30,0,0],
[["Quick Attack","Vive-attaque","Ruckzuckhieb","Attacco Rapido","Ataque Rápido","でんこうせっか"],0,0,30,40,100],
[["Rage","Frénésie","Raserei","Ira","Furia","いかり"],0,0,20,20,100],
[["Teleport","Téléport","Teleport","Teletrasporto","Teletransporte","テレポート"],13,2,20,0,0],
[["Night Shade","Ténèbres","Nachtnebel","Ombra Notturna","Tinieblas","ナイトヘッド"],7,0,15,0,100],
[["Mimic","Copie","Mimikry","Mimica","Mimético","ものまね"],0,2,10,0,100],
[["Screech","Grincement","Kreideschrei","Stridio","Chirrido","いやなおと"],0,2,40,0,85],
[["Double Team","Reflet","Doppelteam","Doppioteam","Doble Equipo","かげぶんしん"],0,2,15,0,0],
[["Recover","Soin","Genesung","Ripresa","Recuperación","じこさいせい"],0,2,20,0,0],
[["Harden","Armure","Härtner","Rafforzatore","Fortaleza","かたくなる"],0,2,30,0,0],
[["Minimize","Lilliput","Komprimator","Minimizzato","Reducción","ちいさくなる"],0,2,20,0,0],
[["Smokescreen","Brouillard","Rauchwolke","Muro di Fumo","Pantalla Humo","えんまく"],0,2,20,0,100],
[["Confuse Ray","Onde Folie","Konfustrahl","Stordiraggio","Rayo Confuso","あやしいひかり"],7,2,10,0,100],
[["Withdraw","Repli","Panzerschutz","Ritirata","Refugio","からにこもる"],10,2,40,0,0],
[["Defense Curl","Boul&#39;Armure","Einigler","Ricciolscudo","Rizo Defensa","まるくなる"],0,2,40,0,0],
[["Barrier","Bouclier","Barriere","Barriera","Barrera","バリアー"],13,2,30,0,0],
[["Light Screen","Mur Lumière","Lichtschild","Schermoluce","Pantalla Luz","ひかりのかべ"],13,2,30,0,0],
[["Haze","Buée Noire","Dunkelnebel","Nube","Niebla","くろいきり"],14,2,30,0,0],
[["Reflect","Protection","Reflektor","Riflesso","Reflejo","リフレクター"],13,2,20,0,0],
[["Focus Energy","Puissance","Energiefokus","Energy Conc.","Foco Energía","きあいだめ"],0,2,30,0,0],
[["Bide","Patience","Geduld","Pazienza","Venganza","がまん"],0,0,10,0,0],
[["Metronome","Métronome","Metronom","Metronomo","Metrónomo","ゆびをふる"],0,2,10,0,0],
[["Mirror Move","Mimique","Spiegeltrick","Speculmossa","Mov. Espejo","オウムがえし"],2,2,20,0,0],
[["Self-Destruct","Destruction","Finale","Autodistruz.","Autodestruc","じばく"],0,0,5,130,100],
[["Egg Bomb","Bomb&#39;Œuf","Eierbombe","Uovobomba","Bomba Huevo","タマゴばくだん"],0,0,10,100,75],
[["Lick","Léchouille","Schlecker","Leccata","Lengüetazo","したでなめる"],7,0,30,20,100],
[["Smog","Purédpois","Smog","Smog","Polución","スモッグ"],3,0,20,20,70],
[["Sludge","Détritus","Schlammbad","Fango","Residuos","ヘドロこうげき"],3,0,20,65,100],
[["Bone Club","Massd&#39;Os","Knochenkeule","Ossoclava","Hueso Palo","ホネこんぼう"],4,0,20,65,85],
[["Fire Blast","Déflagration","Feuersturm","Fuocobomba","Llamarada","だいもんじ"],9,1,5,120,85],
[["Waterfall","Cascade","Kaskade","Cascata","Cascada","たきのぼり"],10,1,15,80,100],
[["Clamp","Claquoir","Schnapper","Tenaglia","Tenaza","からではさむ"],10,1,10,35,75],
[["Swift","Météores","Sternschauer","Comete","Rapidez","スピードスター"],0,0,20,60,0],
[["Skull Bash","Coud&#39;Krâne","Schädelwumme","Capocciata","Cabezazo","ロケットずつき"],0,0,15,100,100],
[["Spike Cannon","Picanon","Dornkanone","Sparalance","Clavo Cañón","とげキャノン"],0,0,15,20,100],
[["Constrict","Constriction","Umklammerung","Limitazione","Restricción","からみつく"],0,0,35,10,100],
[["Amnesia","Amnésie","Amnesie","Amnesia","Amnesia","ドわすれ"],13,2,20,0,0],
[["Kinesis","Télékinésie","Psykraft","Cinèsi","Kinético","スプーンまげ"],13,2,15,0,80],
[["Soft-Boiled","E-Coque","Weichei","Covauova","Amortiguador","タマゴうみ"],0,2,10,0,0],
[["High Jump Kick","Pied Voltige","Turmkick","Calcinvolo","Pat. Salto Alta","とびひざげり"],1,0,20,85,90],
[["Glare","Intimidation","Giftblick","Bagliore","Deslumbrar","へびにらみ"],0,2,30,0,75],
[["Dream Eater","Dévorêve","Traumfresser","Mangiasogni","Come Sueños","ゆめくい"],13,1,15,100,100],
[["Poison Gas","Gaz Toxik","Giftwolke","Velenogas","Gas Venenoso","どくガス"],3,2,40,0,55],
[["Barrage","Pilonnage","Stakkato","Attacco Pioggia","Presa","たまなげ"],0,0,20,15,85],
[["Leech Life","Vampirisme","Blutsauger","Sanguisuga","Chupavidas","きゅうけつ"],6,0,15,20,100],
[["Lovely Kiss","Grobisou","Todeskuss","Demonbacio","Beso Amoroso","あくまのキッス"],0,2,10,0,75],
[["Sky Attack","Piqué","Himmelsfeger","Aeroattacco","Ataque Aéreo","ゴッドバード"],2,0,5,120,90],
[["Transform","Morphing","Wandler","Trasformazione","Transformación","へんしん"],0,2,10,0,0],
[["Bubble","Écume","Blubber","Bolla","Burbuja","あわ"],10,1,30,20,100],
[["Dizzy Punch","Uppercut","Irrschlag","Stordipugno","Puño Mareo","ピヨピヨパンチ"],0,0,10,70,100],
[["Spore","Spore","Pilzspore","Spora","Espora","キノコのほうし"],11,2,15,0,100],
[["Flash","Flash","Blitz","Flash","Destello","フラッシュ"],0,2,20,0,70],
[["Psywave","Vague Psy","Psywelle","Psiconda","Psicoonda","サイコウェーブ"],13,1,15,0,80],
[["Splash","Trempette","Platscher","Splash","Salpicadura","はねる"],0,2,40,0,0],
[["Acid Armor","Acidarmure","Säurepanzer","Scudo Acido","Armadura Ácida","とける"],3,2,40,0,0],
[["Crabhammer","Pince-Masse","Krabbhammer","Martellata","Martillazo","クラブハンマー"],10,1,10,90,85],
[["Explosion","Explosion","Explosion","Esplosione","Explosión","だいばくはつ"],0,0,5,170,100],
[["Fury Swipes","Combo-Griffe","Kratzfurie","Sfuriate","Golpes Furia","みだれひっかき"],0,0,15,18,80],
[["Bonemerang","Osmerang","Knochmerang","Ossomerang","Huesomerang","ホネブーメラン"],4,0,10,50,90],
[["Rest","Repos","Erholung","Riposo","Descanso","ねむる"],13,2,10,0,0],
[["Rock Slide","Éboulement","Steinhagel","Frana","Avalancha","いわなだれ"],5,0,10,75,90],
[["Hyper Fang","Croc de Mort","Hyperzahn","Iperzanna","Hipercolmillo","ひっさつまえば"],0,0,15,80,90],
[["Sharpen","Affûtage","Schärfer","Affilatore","Afilar","かくばる"],0,2,30,0,0],
[["Conversion","Adaptation","Umwandlung","Conversione","Conversión","テクスチャー"],0,2,30,0,0],
[["Tri Attack","Triplattaque","Triplette","Tripletta","Triataque","トライアタック"],0,0,10,80,100],
[["Super Fang","Croc Fatal","Superzahn","Superzanna","Superdiente","いかりのまえば"],0,0,10,0,90],
[["Slash","Tranche","Schlitzer","Lacerazione","Cuchillada","きりさく"],0,0,20,70,100],
[["Substitute","Clonage","Delegator","Sostituto","Sustituto","みがわり"],0,2,10,0,0],
[["Struggle","Lutte","Verzweifler","Scontro","Combate","わるあがき"],0,0,10,50,100]
];
const LEARNSET_GAMES=GAMES;
const LEARNSET_GAMES_ID=GAME_ID;
const TMs=[,5,13,14,18,25,92,32,34,36,38,61,55,58,59,63,6,66,68,69,99,72,76,82,85,87,89,90,91,94,100,102,104,115,117,118,120,121,126,129,130,135,138,143,156,86,149,153,157,161,164];
const HMs=[,15,19,57,70,148];

/*
	l: levelup
		[moveIndex, level (all), , level (yellow exclusive)]
	m: machine
	s: special (stadium pikachu surf)
	-
	3: yellow exclusive
*/
var LEARNSETS=[,
{//Bulbasaur
l:[[33,1],[45,1],[73,7],[22,13],[77,20],[75,27],[74,34],[79,41],[76,48]],
m:[14,92,34,36,38,99,72,76,102,104,115,117,156,164,15]
},{//Ivysaur
l:[[33,1],[45,1],[73,1],[73,7],[22,13],[77,22],[75,30],[74,38],[79,46],[76,54]],
m:[14,92,34,36,38,99,72,76,102,104,115,117,156,164,15]
},{//Venusaur
l:[[22,1],[33,1],[45,1],[73,1],[73,7],[22,13],[77,22],[75,30],[74,43],[79,55],[76,65]],
m:[14,92,34,36,38,63,99,72,76,102,104,115,117,156,164,15]
},{//Charmander
l:[[10,1],[45,1],[52,9],[43,15],[99,22],[163,30],[53,38],[83,46]],
m:[5,14,25,92,34,36,38,66,68,69,99,82,91,102,104,115,117,126,129,130,156,164,15,70]
},{//Charmeleon
l:[[10,1],[45,1],[52,1],[52,9],[43,15],[99,24],[163,33],[53,42],[83,56]],
m:[5,14,25,92,34,36,38,66,68,69,99,82,91,102,104,115,117,126,129,130,156,164,15,70]
},{//Charizard
l:[[10,1],[43,1],[45,1],[52,1],[52,9],[43,15],[99,24],[163,36],[53,46],[83,55]],
m:[5,14,25,92,34,36,38,63,66,68,69,99,82,89,90,91,102,104,115,117,126,129,130,156,164,15,70],
m3:[19]
},{//Squirtle
l:[[33,1],[39,1],[145,8],[55,15],[44,22],[110,28],[130,35],[56,42]],
m:[5,25,92,34,36,38,61,55,58,59,66,68,69,99,91,102,104,115,117,130,156,164,57,70]
},{//Wartortle
l:[[33,1],[39,1],[145,1],[145,8],[55,15],[44,24],[110,31],[130,39],[56,47]],
m:[5,25,92,34,36,38,61,55,58,59,66,68,69,99,91,102,104,115,117,130,156,164,57,70]
},{//Blastoise
l:[[33,1],[39,1],[55,1],[145,1],[145,8],[55,15],[44,24],[110,31],[130,42],[56,52]],
m:[5,25,92,34,36,38,61,55,58,59,63,66,68,69,99,89,90,91,102,104,115,117,130,156,164,57,70]
},{//Caterpie
l:[[33,1],[81,1]]
},{//Metapod
l:[[106,1,,7]]
},{//Butterfree
l:[[93,1,,10],[93,12],[77,15,,13],[78,16,,14],[79,17,,15],[48,21,,18],[18,26,,23],[16,,,28],[60,32,,34]],
m:[13,18,92,36,38,63,99,72,76,94,100,102,104,115,117,129,156,149,164],
m3:[148]
},{//Weedle
l:[[40,1],[81,1]]
},{//Kakuna
l:[[106,1]]
},{//Beedrill
l:[[31,1],[31,12],[116,16],[41,20],[99,25],[42,30],[97,35]],
m:[14,92,36,38,63,99,72,102,104,115,117,129,130,156,164,15]
},{//Pidgey
l:[[16,1],[28,5],[98,12],[18,19],[17,28],[97,36],[119,44]],
m:[13,18,92,36,38,99,102,104,115,117,129,143,156,164,19]
},{//Pidgeotto
l:[[16,1],[28,1],[28,5],[98,12],[18,21],[17,31],[97,40],[119,49]],
m:[13,18,92,36,38,99,102,104,115,117,129,143,156,164,19]
},{//Pidgeot
l:[[16,1],[28,1],[98,1],[28,5],[98,12],[18,21],[17,31],[97,44],[119,54]],
m:[13,18,92,36,38,63,99,102,104,115,117,129,143,156,164,19]
},{//Rattata
l:[[33,1],[39,1],[98,7],[158,14],[116,23],[162,34]],
m:[92,34,36,38,61,55,59,99,85,87,91,102,104,117,129,130,156,164]
},{//Raticate
l:[[33,1],[39,1],[98,1],[98,7],[158,14],[116,27],[162,41]],
m:[92,34,36,38,61,55,58,59,63,99,85,87,91,102,104,117,129,130,156,164]
},{//Spearow
l:[[45,1],[64,1],[43,9],[31,15],[119,22],[65,29],[97,36]],
m:[13,18,92,36,38,99,102,104,117,129,143,156,164,19]
},{//Fearow
l:[[43,1],[45,1],[64,1],[43,9],[31,15],[119,25],[65,34],[97,43]],
m:[13,18,92,36,38,63,99,102,104,117,129,143,156,164,19]
},{//Ekans
l:[[35,1],[43,1],[40,10],[44,17],[137,24],[103,31],[51,38]],
m:[92,34,36,38,99,72,89,90,91,102,104,117,130,156,157,164,70]
},{//Arbok
l:[[35,1],[40,1],[43,1],[40,10],[44,17],[137,27],[103,36],[51,47]],
m:[92,34,36,38,63,99,72,89,90,91,102,104,117,130,156,157,164,70]
},{//Pikachu
l:[[45,1],[84,1],[39,,,6],[86,9,,8],[104,,,15],[98,16,,11],[21,,,20],[129,26],[85,,,26],[97,33],[87,43,,41],[113,,,50]],
m:[5,25,92,34,36,38,6,66,69,99,85,87,102,104,115,117,129,130,156,86,164,148],
s:[57]
},{//Raichu
l:[[45,1],[84,1],[86,1]],
m:[5,25,92,34,36,38,63,6,66,69,99,85,87,102,104,115,117,129,130,156,86,164,148]
},{//Sandshrew
l:[[10,1],[28,10],[163,17],[40,24],[129,31],[154,38]],
m:[14,92,34,36,38,66,69,99,89,90,91,102,104,117,129,130,156,157,164,15,70]
},{//Sandslash
l:[[10,1],[28,1],[28,10],[163,17],[40,27],[129,36],[154,47]],
m:[14,92,34,36,38,63,66,69,99,89,90,91,102,104,117,129,130,156,157,164,15,70]
},{//Nidoran♀
l:[[33,1],[45,1],[10,8],[40,14,,17],[39,21,,23],[44,29,,30],[154,36,,38],[24,43,,12]],
m:[92,34,36,38,59,99,85,87,102,104,115,117,130,156,164]
},{//Nidorina
l:[[10,1,,8],[33,1],[45,1],[10,8],[40,14,,19],[39,23,,27],[44,32,,36],[154,41,,46],[24,50,,12]],
m:[92,32,34,36,38,61,55,58,59,99,85,87,102,104,115,117,130,156,164]
},{//Nidoqueen
l:[[10,1,,8],[33,1],[34,1,,23],[39,1],[10,8],[24,,,12],[40,14],[34,23]],
m:[5,25,92,32,34,36,38,61,55,58,59,63,6,66,68,69,99,85,87,89,90,102,104,115,117,126,130,156,157,164,57,70]
},{//Nidoran♂
l:[[33,1],[43,1],[30,8],[40,14,,17],[116,21,,23],[31,29,,30],[32,36,,38],[24,43,,12]],
m:[92,32,34,36,38,59,99,85,87,102,104,115,117,130,156,164]
},{//Nidorino
l:[[30,1,,8],[33,1],[43,1],[30,8],[40,14,,19],[116,23,,27],[31,32,,36],[32,41,,46],[24,50,,12]],
m:[92,32,34,36,38,61,55,58,59,99,85,87,102,104,115,117,130,156,164]
},{//Nidoking
l:[[30,1,,8],[33,1],[37,1,,23],[40,1],[30,8],[24,,,12],[40,14],[37,23]],
m:[5,25,92,32,34,36,38,61,55,58,59,63,6,66,68,69,99,85,87,89,90,102,104,115,117,126,130,156,157,164,57,70]
},{//Clefairy
l:[[1,1],[45,1],[47,13],[3,18],[107,24],[118,31],[111,39],[113,48]],
m:[5,25,92,34,36,38,61,55,58,59,66,68,69,99,76,85,87,94,100,102,104,115,117,118,126,130,156,86,149,161,164,70,148]
},{//Clefable
l:[[3,1],[47,1],[107,1],[118,1]],
m:[5,25,92,34,36,38,61,55,58,59,63,66,68,69,99,76,85,87,94,100,102,104,115,117,118,126,130,156,86,149,161,164,70,148]
},{//Vulpix
l:[[39,1],[52,1],[98,16],[46,21],[109,28],[53,35],[83,42]],
m:[92,34,36,38,99,91,102,104,115,117,126,129,130,156,164]
},{//Ninetales
l:[[39,1],[46,1],[52,1],[98,1]],
m:[92,34,36,38,63,99,91,102,104,115,117,126,129,130,156,164]
},{//Jigglypuff
l:[[47,1],[1,9],[50,14],[111,19],[3,24],[156,29],[34,34],[38,39]],
m:[5,25,92,34,36,38,61,55,58,59,66,68,69,99,76,85,87,94,100,102,104,115,117,126,130,156,86,149,161,164,70,148]
},{//Wigglytuff
l:[[3,1],[47,1],[50,1],[111,1]],
m:[5,25,92,34,36,38,61,55,58,59,63,66,68,69,99,76,85,87,94,100,102,104,115,117,126,130,156,86,149,161,164,70,148]
},{//Zubat
l:[[141,1],[48,10],[44,15],[109,21],[17,28],[114,36]],
m:[13,18,92,36,38,99,72,102,104,117,129,156,164]
},{//Golbat
l:[[44,1],[103,1],[141,1],[48,10],[44,15],[109,21],[17,32],[114,43]],
m:[13,18,92,36,38,63,99,72,102,104,117,129,156,164]
},{//Oddish
l:[[71,1],[77,15],[78,17],[79,19],[51,24],[80,33],[76,46]],
m:[14,92,36,38,99,72,76,102,104,115,117,156,164,15]
},{//Gloom
l:[[71,1],[77,1],[78,1],[77,15],[78,17],[79,19],[51,28],[80,38],[76,52]],
m:[14,92,36,38,99,72,76,102,104,115,117,156,164,15]
},{//Vileplume
l:[[51,1],[78,1],[79,1],[80,1],[77,15],[78,17],[79,19]],
m:[14,92,34,36,38,63,99,72,76,102,104,115,117,156,164,15]
},{//Paras
l:[[10,1],[78,13],[141,20],[147,27],[163,34],[74,41]],
m:[14,92,34,36,38,99,72,76,91,102,104,115,117,130,156,164,15]
},{//Parasect
l:[[10,1],[78,1],[141,1],[78,13],[141,20],[147,30],[163,39],[74,48]],
m:[14,92,34,36,38,63,99,72,76,91,102,104,115,117,130,156,164,15]
},{//Venonat
l:[[33,1],[50,1],[48,,,11],[93,,,19],[77,24,,22],[141,27],[78,30],[60,35],[79,38],[94,43]],
m:[92,36,38,99,72,76,94,102,104,115,117,156,149,164],
m3:[148]
},{//Venomoth
l:[[33,1],[50,1],[77,1,,22],[141,1,,27],[48,,,1],[93,,,1],[77,24],[141,27],[78,30],[60,38],[79,43],[94,50]],
m:[13,18,92,36,38,63,99,72,76,94,100,102,104,115,117,129,156,149,164],
m3:[148]
},{//Diglett
l:[[10,1],[45,15],[91,19],[28,24],[163,31],[89,40]],
m:[92,34,36,38,99,89,90,91,102,104,117,156,157,164],
m3:[15]
},{//Dugtrio
l:[[10,1],[45,1],[91,1],[45,15],[91,19],[28,24],[163,35],[89,47]],
m:[92,34,36,38,63,99,89,90,91,102,104,117,156,157,164],
m3:[15]
},{//Meowth
l:[[10,1],[45,1],[44,12],[6,17],[103,24],[154,33],[163,44]],
m:[92,34,36,38,61,55,6,99,85,87,102,104,117,129,130,156,164]
},{//Persian
l:[[10,1],[44,1],[45,1],[103,1],[44,12],[6,17],[103,24],[154,37],[163,51]],
m:[92,34,36,38,61,55,63,6,99,85,87,102,104,117,129,130,156,164]
},{//Psyduck
l:[[10,1],[39,28],[50,31],[93,36],[154,43],[56,52]],
m:[5,25,92,34,36,38,61,55,58,59,6,66,68,69,99,91,102,104,117,129,130,156,164,57,70]
},{//Golduck
l:[[10,1],[39,1],[50,1],[39,28],[50,31],[93,39],[154,48],[56,59]],
m:[5,25,92,34,36,38,61,55,58,59,63,6,66,68,69,99,91,102,104,117,129,130,156,164,57,70]
},{//Mankey
l:[[10,1],[43,1],[67,,,9],[2,15],[154,21],[116,27],[69,33],[37,39],[103,,,45]],
m:[5,25,92,34,36,38,6,66,68,69,99,85,87,91,102,104,117,118,129,130,156,157,164,70]
},{//Primeape
l:[[2,1,,15],[10,1],[43,1],[154,1,,21],[67,,,9],[2,15],[154,21],[116,27],[99,,,28],[69,37],[103,,,45],[37,46]],
m:[5,25,92,34,36,38,63,6,66,68,69,99,85,87,91,102,104,117,118,129,130,156,157,164,70]
},{//Growlithe
l:[[44,1],[46,1],[52,18],[43,23],[36,30],[97,39],[53,50]],
m:[92,34,36,38,99,82,91,102,104,115,117,126,129,130,156,164]
},{//Arcanine
l:[[36,1],[43,1],[46,1],[52,1]],
m:[92,34,36,38,63,99,82,91,100,102,104,115,117,126,129,130,156,164]
},{//Poliwag
l:[[145,1],[95,16],[55,19],[3,25],[34,31],[133,38],[56,45]],
m:[92,34,36,38,61,55,58,59,99,94,102,104,117,130,156,149,164,57]
},{//Poliwhirl
l:[[55,1],[95,1],[145,1],[95,16],[55,19],[3,26],[34,33],[133,41],[56,49]],
m:[5,25,92,34,36,38,61,55,58,59,66,68,69,99,89,90,94,102,104,117,118,130,156,149,164,57,70]
},{//Poliwrath
l:[[3,1],[34,1],[55,1],[95,1],[95,16],[55,19]],
m:[5,25,92,34,36,38,61,55,58,59,63,66,68,69,99,89,90,94,102,104,117,118,130,156,149,164,57,70]
},{//Abra
l:[[100,1]],
m:[5,25,92,34,36,38,66,68,69,99,94,100,102,104,115,117,118,130,156,86,149,161,164,148]
},{//Kadabra
l:[[50,1,,20],[93,1,,16],[100,1],[134,,,1],[93,16],[50,20],[60,27],[105,31],[94,38],[115,42]],
m:[5,25,92,34,36,38,66,68,69,99,91,94,100,102,104,115,117,118,130,156,86,149,161,164,148]
},{//Alakazam
l:[[50,1,,20],[93,1,,16],[100,1],[134,,,1],[93,16],[50,20],[60,27],[105,31],[94,38],[115,42]],
m:[5,25,92,34,36,38,63,66,68,69,99,91,94,100,102,104,115,117,118,130,156,86,149,161,164,148]
},{//Machop
l:[[2,1],[67,20],[43,25],[116,32],[69,39],[66,46]],
m:[5,25,92,34,36,38,66,68,69,99,89,90,91,102,104,117,118,126,130,156,157,164,70]
},{//Machoke
l:[[2,1],[43,1],[67,1],[67,20],[43,25],[116,36],[69,44],[66,52]],
m:[5,25,92,34,36,38,66,68,69,99,89,90,91,102,104,117,118,126,130,156,157,164,70]
},{//Machamp
l:[[2,1],[43,1],[67,1],[67,20],[43,25],[116,36],[69,44],[66,52]],
m:[5,25,92,34,36,38,63,66,68,69,99,89,90,91,102,104,117,118,126,130,156,157,164,70]
},{//Bellsprout
l:[[22,1],[74,1],[35,13],[77,15],[79,18],[78,21],[51,26],[75,33],[21,42]],
m:[14,92,36,38,99,72,76,102,104,115,117,156,164,15]
},{//Weepinbell
l:[[22,1],[35,1],[74,1],[35,13],[77,15],[79,18],[78,23],[51,29],[75,38],[21,49]],
m:[14,92,36,38,99,72,76,102,104,115,117,156,164,15]
},{//Victreebel
l:[[51,1],[75,1],[78,1],[79,1],[35,13],[77,15],[79,18]],
m:[14,92,34,36,38,63,99,72,76,102,104,115,117,156,164,15]
},{//Tentacool
l:[[51,1],[48,7],[35,13],[40,18],[55,22],[132,27],[112,33],[103,40],[56,48]],
m:[14,92,36,38,61,55,58,59,99,72,102,104,115,117,130,156,164,15,57]
},{//Tentacruel
l:[[35,1],[48,1],[51,1],[48,7],[35,13],[40,18],[55,22],[132,27],[112,35],[103,43],[56,50]],
m:[14,92,36,38,61,55,58,59,63,99,72,102,104,115,117,130,156,164,15,57]
},{//Geodude
l:[[33,1],[111,11],[88,16],[120,21],[106,26],[89,31],[153,36]],
m:[5,92,34,36,38,66,68,69,99,89,90,91,102,104,117,118,120,126,156,153,157,164,70]
},{//Graveler
l:[[33,1],[111,1],[111,11],[88,16],[120,21],[106,29],[89,36],[153,43]],
m:[5,92,34,36,38,66,68,69,99,89,90,91,102,104,117,118,120,126,156,153,157,164,70]
},{//Golem
l:[[33,1],[111,1],[111,11],[88,16],[120,21],[106,29],[89,36],[153,43]],
m:[5,25,92,34,36,38,63,66,68,69,99,89,90,91,102,104,117,118,120,126,156,153,157,164,70]
},{//Ponyta
l:[[52,1],[39,30],[23,32],[45,35],[83,39],[36,43],[97,48]],
m:[92,32,34,36,38,99,102,104,115,117,126,129,130,156,164]
},{//Rapidash
l:[[23,1],[39,1],[45,1],[52,1],[39,30],[23,32],[45,35],[83,39],[36,47],[97,55]],
m:[92,32,34,36,38,63,99,102,104,115,117,126,129,130,156,164]
},{//Slowpoke
l:[[93,1],[50,18],[29,22],[45,27],[55,33],[133,40],[94,48]],
m:[92,34,36,38,61,55,58,59,6,99,89,90,91,94,100,102,104,115,117,126,129,130,156,86,149,161,164,57,70,148]
},{//Slowbro
l:[[29,1],[50,1],[93,1],[50,18],[29,22],[45,27],[55,33],[110,37],[133,44],[94,55]],
m:[5,25,92,34,36,38,61,55,58,59,63,6,66,68,69,99,89,90,91,94,100,102,104,115,117,126,129,130,156,86,149,161,164,57,70,148]
},{//Magnemite
l:[[33,1],[49,21],[84,25],[48,29],[86,35],[129,41],[103,47]],
m:[92,36,38,99,85,87,100,102,104,115,117,129,156,86,164,148]
},{//Magneton
l:[[33,1],[49,1],[84,1],[49,21],[84,25],[48,29],[86,38],[129,46],[103,54]],
m:[92,36,38,63,99,85,87,100,102,104,115,117,129,156,86,164,148]
},{//Farfetch'd
l:[[28,1],[64,1],[43,7],[31,15],[14,23],[97,31],[163,39]],
m:[13,14,18,92,34,36,38,99,102,104,115,117,129,130,156,164,15,19]
},{//Doduo
l:[[64,1],[45,20],[31,24],[65,30],[99,36],[161,40],[97,44]],
m:[18,92,34,36,38,99,102,104,115,117,130,143,156,161,164,19]
},{//Dodrio
l:[[31,1],[45,1],[64,1],[45,20],[31,24],[65,30],[99,39],[161,45],[97,51]],
m:[18,92,34,36,38,63,99,102,104,115,117,130,143,156,161,164,19]
},{//Seel
l:[[29,1],[45,30],[62,35],[156,40],[36,45],[58,50]],
m:[92,32,34,36,38,61,55,58,59,6,99,102,104,117,130,156,164,57,70]
},{//Dewgong
l:[[29,1],[45,1],[62,1],[45,30],[62,35],[156,44],[36,50],[58,56]],
m:[92,32,34,36,38,61,55,58,59,63,6,99,102,104,117,130,156,164,57,70]
},{//Grimer
l:[[1,1],[50,1],[139,30],[107,33],[124,37],[106,42],[103,48],[151,55]],
m:[92,34,99,72,85,87,102,104,117,120,126,156,153,164]
},{//Muk
l:[[1,1],[50,1],[139,1],[139,30],[107,33],[124,37],[106,45],[103,53],[151,60]],
m:[92,34,63,99,72,85,87,102,104,117,120,126,156,153,164]
},{//Shellder
l:[[33,1],[110,1],[48,18],[128,23],[62,30],[43,39],[58,50]],
m:[92,36,38,61,55,58,59,99,100,102,104,115,117,120,129,156,153,161,164,57]
},{//Cloyster
l:[[48,1],[62,1],[110,1],[128,1],[131,50]],
m:[92,36,38,61,55,58,59,63,99,100,102,104,115,117,120,129,156,153,161,164,57]
},{//Gastly
l:[[101,1],[109,1],[122,1],[95,27],[138,35]],
m:[92,99,72,85,87,94,102,104,117,120,138,156,149,153,164]
},{//Haunter
l:[[101,1],[109,1],[122,1],[95,29],[138,38]],
m:[92,99,72,85,87,94,102,104,117,120,138,156,149,153,164]
},{//Gengar
l:[[101,1],[109,1],[122,1],[95,29],[138,38]],
m:[5,25,92,34,36,38,63,66,68,69,99,72,85,87,94,102,104,117,118,120,130,138,156,149,153,164,70]
},{//Onix
l:[[33,1],[103,1],[20,15],[88,19],[99,25],[21,33],[106,43]],
m:[92,34,36,38,99,89,90,91,102,104,117,120,130,156,153,157,164,70]
},{//Drowzee
l:[[1,1],[95,1],[50,12],[93,17],[29,24],[139,29],[94,32],[96,37]],
m:[5,25,92,34,36,38,66,68,69,99,94,100,102,104,115,117,118,130,138,156,86,149,161,164,148]
},{//Hypno
l:[[1,1],[50,1],[93,1],[95,1],[50,12],[93,17],[29,24],[139,33],[94,37],[96,43]],
m:[5,25,92,34,36,38,63,66,68,69,99,94,100,102,104,115,117,118,130,138,156,86,149,161,164,148]
},{//Krabby
l:[[43,1],[145,1],[11,20],[12,25],[23,30],[152,35],[106,40]],
m:[14,92,34,36,38,61,55,58,59,99,102,104,117,156,164,15,57,70]
},{//Kingler
l:[[11,1],[43,1],[145,1],[11,20],[12,25],[23,34],[152,42],[106,49]],
m:[14,92,34,36,38,61,55,58,59,63,99,102,104,117,156,164,15,57,70]
},{//Voltorb
l:[[33,1],[103,1],[49,17],[120,22],[113,29],[129,36],[153,43]],
m:[92,36,99,85,87,100,102,104,115,117,120,129,156,86,153,164,148]
},{//Electrode
l:[[33,1],[49,1],[103,1],[49,17],[120,22],[113,29],[129,40],[153,50]],
m:[92,36,63,99,85,87,100,102,104,115,117,120,129,130,156,86,153,164,148]
},{//Exeggcute
l:[[95,1],[140,1],[115,25],[73,28],[78,32],[77,37],[76,42],[79,48]],
m:[92,36,38,99,94,100,102,104,115,117,120,121,156,149,153,164]
},{//Exeggutor
l:[[95,1],[140,1],[23,28]],
m:[92,36,38,63,99,72,76,94,100,102,104,115,117,120,121,156,149,153,164,70]
},{//Cubone
l:[[45,1],[125,1,,10],[39,,,13],[29,,,18],[43,25],[116,31],[37,38],[155,43],[99,46]],
m:[5,25,92,34,36,38,61,55,58,59,66,68,69,99,89,90,91,102,104,117,126,130,156,164,70]
},{//Marowak
l:[[43,1,,25],[45,1],[116,1,,33],[125,1,,10],[39,,,13],[29,,,18],[43,25],[116,33],[37,41],[155,48],[99,55]],
m:[5,25,92,34,36,38,61,55,58,59,63,66,68,69,99,89,90,91,102,104,117,126,130,156,164,70]
},{//Hitmonlee
l:[[24,1],[96,1],[27,33],[26,38],[116,43],[136,48],[25,53]],
m:[5,25,92,34,36,38,66,68,69,99,102,104,117,118,129,130,156,164,70]
},{//Hitmonchan
l:[[4,1],[97,1],[7,33],[8,38],[9,43],[5,48],[68,53]],
m:[5,25,92,34,36,38,66,68,69,99,102,104,117,118,129,130,156,164,70]
},{//Lickitung
l:[[35,1],[48,1],[23,7],[50,15],[111,23],[21,31],[103,39]],
m:[5,14,25,92,34,36,38,61,55,58,59,63,66,68,69,99,85,87,89,90,102,104,117,126,130,156,164,15,57,70]
},{//Koffing
l:[[33,1],[123,1],[124,32],[108,37],[120,40],[114,45],[153,48]],
m:[92,99,85,87,102,104,117,120,126,156,153,164]
},{//Weezing
l:[[33,1],[123,1],[124,1],[124,32],[108,39],[120,43],[114,49],[153,53]],
m:[92,63,99,85,87,102,104,117,120,126,156,153,164]
},{//Rhyhorn
l:[[30,1],[23,30,,1],[39,35,,1],[31,40,,1],[32,45],[43,50],[36,55]],
m:[92,32,34,36,38,99,85,87,89,90,91,102,104,117,126,130,156,157,164,70]
},{//Rhydon
l:[[23,1,,30],[30,1],[31,1,,40],[39,1,,35],[23,30],[39,35],[31,40],[32,48],[43,55],[36,64]],
m:[5,25,92,32,34,36,38,61,55,58,59,63,6,66,68,69,99,85,87,89,90,91,102,104,117,126,130,156,157,164,57,70]
},{//Chansey
l:[[1,1],[3,1,,12],[39,,,1],[47,24],[45,30],[107,38],[111,44],[113,48],[38,54]],
m:[5,25,92,34,36,38,61,55,58,59,63,66,68,69,99,76,85,87,94,100,102,104,115,117,118,121,126,130,135,156,86,149,161,164,70,148]
},{//Tangela
l:[[20,1,,24],[132,1],[71,29,,27],[22,,,29],[77,32],[78,36],[79,39],[21,45],[74,49,,48]],
m:[14,92,34,36,38,63,99,72,76,102,104,117,130,156,164,15]
},{//Kangaskhan
l:[[4,1],[99,1],[44,26],[39,31],[5,36],[43,41],[146,46]],
m:[5,25,92,34,36,38,61,55,58,59,63,66,68,69,99,85,87,89,90,102,104,117,126,130,156,157,164,57,70]
},{//Horsea
l:[[145,1],[108,19],[43,24],[55,30],[97,37],[56,45]],
m:[92,36,38,61,55,58,59,99,102,104,117,129,130,156,164,57]
},{//Seadra
l:[[108,1],[145,1],[108,19],[43,24],[55,30],[97,41],[56,52]],
m:[92,36,38,61,55,58,59,63,99,102,104,117,129,130,156,164,57]
},{//Goldeen
l:[[39,1],[64,1],[48,19],[30,24],[31,30],[127,37],[32,45],[97,54]],
m:[92,32,36,38,61,55,58,59,99,102,104,117,129,130,156,164,57]
},{//Seaking
l:[[39,1],[48,1],[64,1],[48,19],[30,24],[31,30],[127,39],[32,48],[97,54]],
m:[92,32,36,38,61,55,58,59,63,99,102,104,117,129,130,156,164,57]
},{//Staryu
l:[[33,1],[55,17],[106,22],[105,27],[129,32],[107,37],[113,42],[56,47]],
m:[92,36,38,61,55,58,59,99,85,87,94,100,102,104,115,117,129,130,156,86,149,161,164,57,148]
},{//Starmie
l:[[33,1],[55,1],[106,1]],
m:[92,36,38,61,55,58,59,63,99,85,87,94,100,102,104,115,117,129,130,156,86,149,161,164,57,148]
},{//Mr. Mime
l:[[93,1],[112,1],[93,15],[113,23],[3,31],[96,39],[164,47]],
m:[5,25,92,34,36,38,63,66,68,69,99,76,85,87,94,100,102,104,115,117,118,130,156,86,149,164,148]
},{//Scyther
l:[[98,1],[43,17],[116,20],[104,24],[163,29],[14,35],[97,42],[17,,,50]],
m:[14,92,36,38,63,99,102,104,117,129,130,156,164,15]
},{//Jynx
l:[[1,1],[142,1],[122,18],[3,23],[8,31],[34,39],[37,47],[59,58]],
m:[5,25,92,34,36,38,61,55,58,59,63,66,68,69,99,94,100,102,104,115,117,118,130,156,149,164]
},{//Electabuzz
l:[[43,1],[98,1],[84,34],[103,37],[9,42],[113,49],[87,54]],
m:[5,25,92,34,36,38,63,66,68,69,99,85,87,94,100,102,104,115,117,118,129,130,156,86,149,164,70,148]
},{//Magmar
l:[[52,1],[43,36],[109,39],[7,43],[108,48],[123,52],[53,55]],
m:[5,25,92,34,36,38,63,66,68,69,99,94,100,102,104,117,118,126,130,156,149,164,70]
},{//Pinsir
l:[[11,1],[20,,,21],[69,25],[12,30],[116,36],[106,43],[163,49],[14,54]],
m:[14,92,34,36,38,63,66,69,99,102,104,117,156,164,15,70]
},{//Tauros
l:[[33,1],[23,21],[39,28],[43,35],[99,44],[36,51]],
m:[92,32,34,36,38,58,59,63,99,85,87,89,90,102,104,117,126,130,156,164,70]
},{//Magikarp
l:[[150,1],[33,15]]
},{//Gyarados
l:[[43,1,,32],[44,1,,20],[56,1,,41],[82,1,,25],[33,,,1],[44,20],[82,25],[43,32],[56,41],[63,52]],
m:[92,34,36,38,61,55,58,59,63,99,82,85,87,102,104,115,117,126,130,156,164,57,70]
},{//Lapras
l:[[45,1],[55,1],[47,16],[54,20],[34,25],[109,31],[58,38],[56,46]],
m:[92,32,34,36,38,61,55,58,59,63,99,76,82,85,87,94,102,104,115,117,130,156,149,164,57,70]
},{//Ditto
l:[[144,1]]
},{//Eevee
l:[[28,1,,8],[33,1],[45,,,16],[98,27,,23],[39,31,,1],[116,,,36],[44,37,,30],[36,45,,42]],
m:[92,34,36,38,99,102,104,115,117,129,130,156,164]
},{//Vaporeon
l:[[28,1,,8],[33,1],[55,1,,16],[98,1,,23],[98,27],[55,31],[62,,,36],[39,37,,1],[44,40,,30],[151,42,,47],[114,44,,42],[54,48,,42],[56,54,,52]],
m:[92,34,36,38,61,55,58,59,63,99,102,104,115,117,129,130,156,164,57]
},{//Jolteon
l:[[28,1,,8],[33,1],[84,1,,16],[98,1,,23],[98,27],[84,31],[39,37,,1],[86,40,,42],[24,42,,30],[97,44,,47],[42,48,,36],[87,54,,52]],
m:[92,34,36,38,63,99,85,87,102,104,115,117,129,130,156,86,164,148]
},{//Flareon
l:[[28,1,,8],[33,1],[52,1,,16],[98,1,,23],[98,27],[52,31],[39,37,,1],[44,40,,30],[43,42,,47],[123,,,42],[83,44,,36],[99,48],[53,54,,52]],
m:[92,34,36,38,63,99,102,104,115,117,126,129,130,156,164]
},{//Porygon
l:[[33,1],[159,1],[160,1],[60,23],[105,28],[97,35],[161,42]],
m:[92,36,38,58,59,63,99,85,87,94,100,102,104,115,117,129,130,156,86,149,161,164,148]
},{//Omanyte
l:[[55,1],[110,1],[30,34],[43,39],[131,46],[56,53]],
m:[92,34,36,38,61,55,58,59,99,102,104,115,117,156,164,57]
},{//Omastar
l:[[30,1],[55,1],[110,1],[30,34],[43,39],[131,44],[56,49]],
m:[92,32,34,36,38,61,55,58,59,63,66,69,99,102,104,115,117,130,156,164,57]
},{//Kabuto
l:[[10,1],[106,1],[71,34],[163,39],[43,44],[56,49]],
m:[92,34,36,38,61,55,58,59,99,102,104,115,117,156,164,57]
},{//Kabutops
l:[[10,1],[71,1],[106,1],[71,34],[163,39],[43,46],[56,53]],
m:[13,14,25,92,34,36,38,61,55,58,59,63,66,69,99,102,104,115,117,130,156,164,57],
m3:[15]
},{//Aerodactyl
l:[[17,1],[97,1],[48,33],[44,38],[36,45],[63,54]],
m:[13,18,92,36,38,63,99,82,102,104,115,117,126,129,143,156,164,19]
},{//Snorlax
l:[[29,1],[133,1],[156,1],[34,35],[106,41],[38,48],[63,56]],
m:[5,25,92,34,36,38,61,55,58,59,63,6,66,68,69,99,76,85,87,89,90,94,102,104,115,117,118,120,126,130,156,149,157,164,57,70]
},{//Articuno
l:[[58,1],[64,1],[59,51],[97,55],[54,60]],
m:[13,18,92,36,38,61,55,58,59,63,99,102,104,115,117,129,143,156,164,19]
},{//Zapdos
l:[[65,1],[84,1],[87,51],[97,55],[113,60]],
m:[13,18,92,36,38,63,99,85,87,102,104,115,117,129,143,156,86,164,19,148]
},{//Moltres
l:[[64,1],[83,1],[43,51],[97,55],[143,60]],
m:[13,18,92,36,38,63,99,102,104,115,117,126,129,143,156,164,19]
},{//Dratini
l:[[35,1],[43,1],[86,10],[97,20],[21,30],[82,40],[63,50]],
m:[92,34,36,38,61,55,58,59,99,82,85,87,102,104,115,117,126,129,130,156,86,164,57]
},{//Dragonair
l:[[35,1],[43,1],[86,1],[86,10],[97,20],[21,35],[82,45],[63,55]],
m:[92,32,34,36,38,61,55,58,59,99,82,85,87,102,104,115,117,126,129,130,156,86,164,57]
},{//Dragonite
l:[[35,1],[43,1],[86,1],[97,1],[86,10],[97,20],[21,35],[82,45],[63,60]],
m:[13,92,32,34,36,38,61,55,58,59,63,99,82,85,87,102,104,115,117,126,129,130,156,86,164,57,70]
},{//Mewtwo
l:[[50,1],[93,1],[94,1],[129,1],[112,63],[94,66],[105,70],[54,75],[133,81]],
m:[5,25,92,34,36,38,61,55,58,59,63,6,66,68,69,99,76,85,87,94,100,102,104,115,117,118,120,126,130,156,86,149,161,164,70,148]
},{//Mew
l:[[1,1],[144,10],[5,20],[118,30],[94,40]],
m:[5,13,14,18,25,92,32,34,36,38,61,55,58,59,63,6,66,68,69,99,72,76,82,85,87,89,90,91,94,100,102,104,115,117,118,120,121,126,129,130,135,138,143,156,86,149,153,157,161,164,15,19,57,70,148]
}];