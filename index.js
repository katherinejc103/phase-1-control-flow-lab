function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!';
  } else if 
    (distance <= 2500 && distance > 400) {
    return 'I will gladly take your thirty bucks.';
  } else { 
    return 'No can do.';
}}
function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {   
  switch(tip) {  
  case generousTip:
    console.log('Thank you so much.');
  break;
  case notAsGenerousTip:
    console.log('Thank you.');
  break;
  default:
  console.log('Bye.');
}}