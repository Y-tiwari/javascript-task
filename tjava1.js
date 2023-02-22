const container = document.getElementById('container');
		for (let i = 1; i <= 1000; i++) {
			const number = document.createElement('div');
			number.className = 'number';
			number.textContent = i;
			if (i % 2 === 0) {
				number.classList.add('even');
			} else {
				number.classList.add('odd');
			}
			if (isPrime(i)) {
				number.classList.add('prime');
			}
			container.appendChild(number);
		}

		function isPrime(num) {
			if (num <= 1) {
				return false;
			}
			for (let i = 2; i <= Math.sqrt(num); i++) {
				if (num % i === 0) {
					return false;
				}
			}
			return true;
		}