//your JS code here. If required.
function secondHighest(arr) {
			
    let count=0
	for(let i=0 ; i<arr.length ; i++)
		{ let firstnumber=arr[0];
			if(firstnumber!==arr[i])
			{count=count+1}
		}
	if(arr==[] || arr.length<1 ||count > 0 )
	{
		return -Infinity;
	}else (
		let max = -Infinity;
  let secondMax = -Infinity;

  for (const value of arr) {
    const num = Number(value);
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax) {
      secondMax = num;
    }
  }

  return secondMax;
	)
			
		}

		function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i+1));
			}
			alert(secondHighest(arr));
		}
		Main();
