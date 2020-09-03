console.log("Hello");

function arr(number)
{
	var ar= [];
	for (var i = 0; i < number; i++)
	{
		ar.push(i);
	}
	console.log(ar);
	return ar;
}

function nacelo(number,delitel1,delitel2)
{
	if (number % delitel1 == 0 && number % delitel2 == 0)
    {
      console.log("true");
      return true;
    }
  else
    {
      console.log("false");
      return false;
    }
}

var array = arr(5);
array = arr(9);

var proverka = nacelo(9,3,1);
var proverka = nacelo(5,3,1);



function capitalize(word)
{
  if(word.length >10)
  {
    console.log("Строка содержит больше 10 символов");
    return ;
  }
  var i = word[0];
 word = word.replace(i, i.toUpperCase());
 
  console.log(word);

}
capitalize('hiiiii');
capitalize('hiiiiiiiiiiiiiiiiiii');
console.log('Done');