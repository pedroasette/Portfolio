async function update() {
    let input = document.querySelector('input');
    let make = input.value;
    if (make.length > 2) {
        const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make}?format=json`);
        const data = await res.json();
        
    
        const table = document.querySelector('tbody');
        table.innerHTML = "";
        for (let i = 0; i < data.Count; i++) {
            let info = data.Results[i];
            let html = `<tr><td>${info.Make_Name}</td><td>${info.Model_Name}</td></tr>`
            table.innerHTML += html;
    }

    }

  }

  // Bind update to input change with a 300ms debounce
  let updateTimeout
  document.querySelector('input').addEventListener('input', () => {
    clearTimeout(updateTimeout)
    updateTimeout = setTimeout(update, 300)
  })