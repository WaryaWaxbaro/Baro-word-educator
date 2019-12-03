export const lessThanTen = data => {
  let maxItems = 12;
  let items = [];
  while(items.length < maxItems){
    let ran = Math.floor(Math.random() * data.length);
    if(!items.includes(data[ran])){
      items.push(data[ran]);
    }
  }

  return items;
};