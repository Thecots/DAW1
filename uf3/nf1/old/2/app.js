// var langs =
// [['Afrikaans',       ['af-ZA']],
//  ['Bahasa Indonesia',['id-ID']],
//  ['Bahasa Melayu',   ['ms-MY']],
//  ['Català',          ['ca-ES']],
//  ['Čeština',         ['cs-CZ']],
//  ['Deutsch',         ['de-DE']],
//  ['English',         ['en-AU', 'Australia'],
//                      ['en-CA', 'Canada'],
//                      ['en-IN', 'India'],
//                      ['en-NZ', 'New Zealand'],
//                      ['en-ZA', 'South Africa'],
//                      ['en-GB', 'United Kingdom'],
//                      ['en-US', 'United States']],
//  ['Español',         ['es-AR', 'Argentina'],
//                      ['es-BO', 'Bolivia'],
//                      ['es-CL', 'Chile'],
//                      ['es-CO', 'Colombia'],
//                      ['es-CR', 'Costa Rica'],
//                      ['es-EC', 'Ecuador'],
//                      ['es-SV', 'El Salvador'],
//                      ['es-ES', 'España'],
//                      ['es-US', 'Estados Unidos'],
//                      ['es-GT', 'Guatemala'],
//                      ['es-HN', 'Honduras'],
//                      ['es-MX', 'México'],
//                      ['es-NI', 'Nicaragua'],
//                      ['es-PA', 'Panamá'],
//                      ['es-PY', 'Paraguay'],
//                      ['es-PE', 'Perú'],
//                      ['es-PR', 'Puerto Rico'],
//                      ['es-DO', 'República Dominicana'],
//                      ['es-UY', 'Uruguay'],
//                      ['es-VE', 'Venezuela']],
//  ['Euskara',         ['eu-ES']],
//  ['Français',        ['fr-FR']],
//  ['Galego',          ['gl-ES']],
//  ['Hrvatski',        ['hr_HR']],
//  ['IsiZulu',         ['zu-ZA']],
//  ['Íslenska',        ['is-IS']],
//  ['Italiano',        ['it-IT', 'Italia'],
//                      ['it-CH', 'Svizzera']],
//  ['Magyar',          ['hu-HU']],
//  ['Nederlands',      ['nl-NL']],
//  ['Norsk bokmål',    ['nb-NO']],
//  ['Polski',          ['pl-PL']],
//  ['Português',       ['pt-BR', 'Brasil'],
//                      ['pt-PT', 'Portugal']],
//  ['Română',          ['ro-RO']],
//  ['Slovenčina',      ['sk-SK']],
//  ['Suomi',           ['fi-FI']],
//  ['Svenska',         ['sv-SE']],
//  ['Türkçe',          ['tr-TR']],
//  ['български',       ['bg-BG']],
//  ['Pусский',         ['ru-RU']],
//  ['Српски',          ['sr-RS']],
//  ['한국어',            ['ko-KR']],
//  ['中文',             ['cmn-Hans-CN', '普通话 (中国大陆)'],
//                      ['cmn-Hans-HK', '普通话 (香港)'],
//                      ['cmn-Hant-TW', '中文 (台灣)'],
//                      ['yue-Hant-HK', '粵語 (香港)']],
//  ['日本語',           ['ja-JP']],
//  ['Lingua latīna',   ['la']]];


  $(document).ready(function(){
    for(var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voiceSelect").appendChild(option);
    }
  });

$('.es-btn').click(function(){
  $('.usa').css('display',' none');
  $('.cat').css('display',' none');
  $('.esp').css('display',' block');
});
$('.usa-btn').click(function(){
  $('.esp').css('display',' none');
  $('.cat').css('display',' none');
  $('.usa').css('display',' block');
});
$('.cat-btn').click(function(){
  $('.esp').css('display',' none');
  $('.usa').css('display',' none');
  $('.cat').css('display',' block');
});

/* ESP */

$('.s-esp').click(function(){
  var msg = new SpeechSynthesisUtterance("El director Martin Scorsese ha tractat el dramàtic terreny de delicte als Estats Units des de múltiples angles, però amb EL LLOP DE WALL STREET treu el cap a l'abisme sumint-se en el món de la varietat delictiva més contemporània: les altes finances. El resultat és un viatge èpic a el cor de la embriaguesa produïda per la cobdícia, l'adrenalina, el sexe, les drogues i la producció constant de diners fàcil.");
  msg.lang = "es-ES";
  var voices = window.speechSynthesis.getVoices();
  window.speechSynthesis.speak(msg);

});


$('.s-usa').click(function(){
  var msg = new SpeechSynthesisUtterance("Director Martin Scorsese has dealt with America's dramatic crime scene from multiple angles, but with THE WOLF OF WALL STREET he peers into the abyss and plunges into the world of the most contemporary variety of crime: high finance. The result is an epic journey into the heart of the intoxication produced by greed, adrenaline, sex, drugs and the constant production of easy money.");

  var speech = new SpeechSynthesisUtterance(text);
  var voices = window.speechSynthesis.getVoices();
  for (var i=0; i<voices.length; i++) {
      if(voices[i].lang=='en-US') {
          break;
      } 
  }
  speech.voice = voices[i];
  window.speechSynthesis.speak(speech); 
});


$('.s-cat').click(function(){
  var msg = new SpeechSynthesisUtterance("El director Martin Scorsese ha tractat el dramàtic terreny de delicte als Estats Units des de múltiples angles, però amb EL LLOP DE WALL STREET treu el cap a l'abisme sumint-se en el món de la varietat delictiva més contemporània: les altes finances. El resultat és un viatge èpic a el cor de la embriaguesa produïda per la cobdícia, l'adrenalina, el sexe, les drogues i la producció constant de diners fàcil.");
  msg.lang = "ca-ES";
  window.speechSynthesis.speak(msg);
});


