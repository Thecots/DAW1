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
  var utterance = "El director Martin Scorsese ha tratado el dramático terreno del delito en Estados Unidos desde múltiples ángulos, pero con EL LOBO DE WALL STREET se asoma al abismo sumiéndose en el mundo de la variedad delictiva más contemporánea";
  var speech = new SpeechSynthesisUtterance(utterance);
  var voices = window.speechSynthesis.getVoices();
  for (var i=0; i<voices.length; i++) {
      if(voices[i].lang=='es-ES') {
        console.log(i+" - "+voices[i].name+" "+voices[i].lang);
        speech.voice = voices[i];
        window.speechSynthesis.speak(speech);
        break;
      } 
  }

});

$('.s-usa').click(function(){
  var utterance = "Director Martin Scorsese has dealt with America's dramatic crime scene from multiple angles, but with THE WOLF OF WALL STREET he peers into the abyss and plunges into the world of the most contemporary variety of crime.";
  var speech = new SpeechSynthesisUtterance(utterance);
  var voices = window.speechSynthesis.getVoices();
  for (var i=0; i<voices.length; i++) {
      if(voices[i].lang=='en-US') {
        console.log(i+" - "+voices[i].name+" "+voices[i].lang);
        speech.voice = voices[1];
        window.speechSynthesis.speak(speech);
        break;
      } 
  }
 
});

$('.s-cat').click(function(){
  var utterance = "Il regista Martin Scorsese ha affrontato la drammatica scena del crimine negli Stati Uniti da più angolazioni, ma con THE WOLF OF WALL STREET affonda la testa nell'abisso immergendosi nel mondo della varietà criminale più contemporanea";
  var speech = new SpeechSynthesisUtterance(utterance);
  var voices = window.speechSynthesis.getVoices();
  for (var i=0; i<voices.length; i++) {
    console.log(i+" - "+voices[i].name+" "+voices[i].lang);
      if(voices[i].lang=='it-IT') {
        speech.voice = voices[i];
        window.speechSynthesis.speak(speech);
          break;
      } 

  }

});



