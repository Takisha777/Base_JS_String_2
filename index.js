const myName = 'Alex',
programmingLanguage = 'JavaScript',
courseCreatorName = 'Vladilen Minin',
reasonText = 'это относительная свобода, да и всё время учить что то новое',
numberOfMonth = 'два';

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяца. Я уверен, что пройду данный курс до конца!`;
myInfoText = myInfoText.replaceAll('JavaScript','javascript');
myInfoText = myInfoText.replaceAll('курс','КУРС');
console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0],myInfoText[myInfoText.length-1]);