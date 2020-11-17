function sanefPasswordSubmit (){
    let sanefPassword = document.getElementById('sanefPassword');
    let sanefPasswordtest ='autoroutes'
    
    if (sanefPassword.value === 'autoroutes') {
    alert ("Mes missions au sein du Groupe SANEF étaient les suivantes : J'étais en charge de l'exploitation des tunnels de Roissy (95), Saint Germain en Laye (78), Hardelot (62) et Gometz (91). Je devais effectuer les fermetures d'urgence de ces ouvrages en cas de détection de pannes techniques, d'incendie, de véhicules roulant à contresens entre autres. De ce fait, j'étais en charge de la sécurité des agents sur le terrain et des clients. Je contrôlais également la cohérence des informations trafic notamment lors des situations de crise. Je consolidais ces informations par le biais d'alertes trafic, de synthèses trafic, de messages sur les réseaux sociaux (Twitter, WAZE, application sanef mobile), de la radio d'autoroute 107.7 FM. J'étais l'interlocuteur privilégié de la direction du Groupe, des autorités zonales (préfectures, gendarmeries...) ou centrales (ministéres,...), des clients, de certains médias (journaux locaux, France 2...). Par ailleurs, j'analysais les données trafic et je réalisais des rapports remis à la Direction des Infrastructures de Transport. Ce travail était posté en 3x8.");
    }
    else {
      alert ('Le mot de passe est incorrect');
    } 
 }

function sncfPasswordSubmit (){
    let sncfPassword = document.getElementById('sncfPassword');
    let sncfPasswordtest ='trains'
        
    if (sncfPassword.value === 'trains') {
    alert ("Mes missions pour la SNCF étaient les suivantes : J'assurais la gestion du trafic ferroviaire dans un poste d'aiguillage notamment dans les gares de Lens (62), Béthune (62) et Pont à Vendin (62). Je déclenchais les mesures d'urgence en cas d'incident grave. Je garantissais la maintenance et l'entretien des systèmes d'aiguillage. J'y ai également débuté une formation d'agent de circulation. Ce travail était posté en 3x8.");
    }
    else {
    alert ('Le mot de passe est incorrect');
    } 
}

function formationPasswordSubmit (){
    let formationPassword = document.getElementById('formationPassword');
    let formationPasswordtest ='formation'
        
    if (formationPassword.value === 'formation') {
    alert ("Mes missions au CFPPA de Sains du Nord furent les suivantes : J'assurais la gestion pédagogique et administrative d'une formation intitulée CS Tourisme. J'encadrais l'équipe éducative et je réalisais les planning. J'organisais les sessions d'examens et j'ai préparé le recrutement des élèves de la session suivante. J'étais formateur auprès d'un groupe d'adultes et leur enseignais la méthodologie de projet et la sociologie du monde rural. Je les ai suivi dans la mise en place de leur projet professionnel et leur ai rendu visite lors de leur stage. J'ai commencé à étudier la faisabilité de la création d'un centre de formation transfrontalier en coopération avec la société 'Inialité' basé à Hirson (02) dans le cadre du développement du territoire en matière de formation notamment dans le domaine du tourisme.");    
    }
    else {
    alert ('Le mot de passe est incorrect');
    } 
}

function educationPasswordSubmit (){
    let educationPassword = document.getElementById('educationPassword');
    let educationPasswordtest ='éducation'
        
    if (educationPassword.value === 'éducation') {
    alert ("Mes missions étaient les suivantes : J'ai été assistant d'éducation au Lycée Saint Dominique de Béthune (62) et dans les Collèges Saint Vaast de Béthune (62) et Bernard Chochoy de Norrent Fontes (62). J'étais en charge de la surveillance des élèves durant les permanences, les récréations, les repas. J'assurais également leur sécurité à l'extérieur de ces établissements scolaires (passage piétons, acccompagnement lors des cross...)");  
    }
    else {
        alert ('Le mot de passe est incorrect');
    } 
}

function teacherPasswordSubmit (){
    let teacherPassword = document.getElementById('teacherPassword');
    let teacherPasswordtest ='professeur'
        
    if (teacherPassword.value === 'professeur') {
    alert ("Mes missions au Collège Villars étaient les suivantes : Je travaillais auprès des sections SEGPA. J'enseignais l'horticulture aux 4èmes/3èmes et l'informatique aux 6èmes/5èmes en favorisant les travaux pratiques");  
    }
    else {
        alert ('Le mot de passe est incorrect');
    } 
}

function factoryPasswordSubmit (){
    let factoryPassword = document.getElementById('factoryPassword');
    let factoryPasswordtest ='usine'
        
    if (factoryPassword.value === 'usine') {
    alert ("Mes missions pour Arcelor Mittal (anciennement Sollac) étaient les suivantes : J'étais employé en tant que vacancier durant les étés 1999, 2000, 2003 et 2004. J'étais chargé de remettre en état de production les poches servant à la fusion de l'acier dans le secteur des hauts fourneaux de l'usine. Ce travail était posté en 3x8.");
    }
    else {
        alert ('Le mot de passe est incorrect');
    } 
}
function officePasswordSubmit (){
    let officePassword = document.getElementById('officePassword');
    let officePasswordtest ='tourisme'
        
    if (officePassword.value === 'tourisme') {
    alert ("Mes missions à l'Office de tourisme d'Aire sur la Lys étaient les suivantes : J'assurais la tenue de l'Office de Tourisme (Accueil des touristes, Secrétariat...). J'animais des événements lors de salons ou de fêtes (Salon Tourissima à Lille, Brocante, Marché de Noël...). J'ai mis en place des partenariats avec les acteurs locaux et j'ai créé des supports de communication (dépliants, plaquettes...). J'ai rédigé un mémoire sur la problématique 'Comment attirer plus de touristes sur la ville d'Aire sur la Lys ?'. A la suite de mon stage, je suis resté membre bénévole jusqu'en 2009.");
    }
    else {
        alert ('Le mot de passe est incorrect');
    } 
}
function cityPasswordSubmit (){
    let cityPassword = document.getElementById('cityPassword');
    let cityPasswordtest ='randonnée'
        
    if (cityPassword.value === 'randonnée') {
    alert ("Lors de ce stage à la Communauté de Communes Artois Flandres, j'avais pour mission de créer et de réhabiliter des sentiers de randonnée. Pour cela, j'ai réalisé un diagnostic de territoire et fait des demandes de subventions.");
    }
    else {
        alert ('Le mot de passe est incorrect');
    } 
}
function handicapPasswordSubmit (){
    let handicapPassword = document.getElementById('handicapPassword');
    let handicapPasswordtest ='handicap'
        
    if (handicapPassword.value === 'handicap') {
    alert ("Durant mon stage au CAT d'Isbergues, j'encadrais un groupe d'adultes handicapés dans différentes activités (maçonnerie, entretien des espaces verts, menuiserie, conditionnement). J'animais des activités sportives ou culturelles (VTT, football, visite de Clairmarais...).");
    }
    else {
        alert ('Le mot de passe est incorrect');
    } 
}
