export function formatPrice(price){
	let [a,b] = price.toString().split('.')
	let res = '', c = 0

	for(let i = a.length-1; i>=0; i--){
		res = a[i] + res

		if(c++ === 2 && i){
			res = ' ' + res
			c = 0			
		}
	}

	if(b) res += '.' + b

	return res
}
