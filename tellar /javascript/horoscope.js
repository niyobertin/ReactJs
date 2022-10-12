const getHoroscope = () => {
    const userName = document.getElementById("yourname").value;
    const day = parseInt(document.getElementById("days").value);
    const month = parseInt(document.getElementById("months").value);
    const birth_year = parseInt(document.getElementById("birthYear").value);
    const horoscopeSign = document.getElementById("sign");
    const horoscopeAnimalSign = document.getElementById("animal");
    const daterange = document.getElementById("daterange");
    const userYears = document.getElementById("yearOfBirth");
    const greating = document.getElementById("userhoroscope");
    const currentYear = new Date().getFullYear();
    const userYear = currentYear - birth_year;
    let horoscope = 0

    if ((day >= 21 && month === 3) || (day <= 19 && month === 4)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your horoscope</h3>`;
        horoscopeSign.innerHTML = `Horoscope sign : <b>ARIES</b>`;
        HoroscopeAnimalSign.innerHTML = `Your animal sign : <b>Montain Sheep</b>`
        daterange.innerHTML = `You have born between  born between : 21/03 and 19/04`;
        userYears.innerHTML = `Your age : <b> ${userYear}`;
    } else if ((day >= 20 && month === 4) || (day <= 20 && month === 5)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your horoscope</h3>`;
        horoscopeSign.innerHTML = `Horoscope sign : <b>TARUS</b>`;
        horoscopeAnimalSign.innerHTML = `Your animal sign : <b>Bull</b>`
        daterange.innerHTML = `You have born between <b> 20/04 and 20/05`;
        userYears.innerHTML = `Your age : <b> ${userYear}`;
    } else if ((day >= 21 && month === 5) || (day <= 21 && month === 6)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your horoscope</h3>`;
        horoscopeSign.innerHTML = `Horoscope sign : <b>GERMINI</b>`;
        horoscopeAnimalSign.innerHTML = `Your animal sign : <b>Deer</b>`
        daterange.innerHTML = `You have born between <b> 21/05 and 21/06`;
        userYears.innerHTML = `Your age :<b> ${userYear}`;
    } else if ((day >= 22 && month === 6) || (day <= 22 && month === 7)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your horoscope</h3>`;
        horoscopeSign.innerHTML = `Horoscope sign : <b>CANCER</b>`;
        horoscopeAnimalSign.innerHTML = `Your animal sign : <b>Crab or Elephent OR Rabbit</b>`
        daterange.innerHTML = `You have born between <b> 22/03 and 22/04`;
        userYears.innerHTML = `Your age : <b> ${userYear}`;
    } else if ((day >= 23 && month === 7) || (day <= 23 && month === 8)) {

        greating.innerHTML = `<h3>Hello ${userName}, this is your horoscope</h3>`;
        horoscopeSign.innerHTML = `Horoscope sign : <b>LEO</b>`;
        horoscopeAnimalSign.innerHTML = `Your animal sign : <b>The Lion</b>`
        daterange.innerHTML = `You have born between  born  :<b> 23/07 and 23/08`;
        userYears.innerHTML = `Your age :<b> ${userYear}`;
    } else if ((day >= 24 && month === 8) || (day <= 22 && month === 9)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your horoscope</h3>`;
        horoscopeSign.innerHTML = `Horoscope sign : <b>VIRUGO</b>`;
        horoscopeAnimalSign.innerHTML = `Your animal sign : <b>Bees</b>`
        daterange.innerHTML = `You have born between <b> 24/08 and 22/09`;
        userYears.innerHTML = `Your age : <b> ${userYear}`;
    } else if ((day >= 24 && month === 89) || (day <= 22 && month === 10)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your horoscope</h3>`;
        horoscopeSign.innerHTML = `Horoscope sign : <b>LOBRA</b>`;
        horoscopeAnimalSign.innerHTML = `Your animal sign : <b>Grey wolfe</b>`
        daterange.innerHTML = `You  have born between <b> 24/09 and 22/10`;
        userYears.innerHTML = `Your age : <b> ${userYear}`;
    } else if ((day >= 23 && month === 10) || (day <= 21 && month === 11)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your horoscope</h3>`;
        horoscopeSign.innerHTML = `Horoscope sign : <b>SCROPION</b>`;
        horoscopeAnimalSign.innerHTML = `Your animal sign : <b>Scropion</b>`
        daterange.innerHTML = `You have born between <b> 23/10 and 21/11`;
        userYears.innerHTML = `Your age : <b> ${userYear}`;
    } else if ((day >= 22 && month === 11) || (day <= 21 && month === 12)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your horoscope</h3>`;
        horoscopeSign.innerHTML = `Horoscope sign : <b>SAGUTTAEIUS</b>`;
        horoscopeAnimalSign.innerHTML = `Your animal sign : <b>Seal</b>`
        daterange.innerHTML = `You  have born between <b> 22/11 and 21/12`;
        userYears.innerHTML = `Your age : <b> ${userYear}`;
    } else if ((day >= 22 && month === 12) || (day <= 20 && month === 1)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your horoscope</h3>`;
        horoscopeSign.innerHTML = `Horoscope sign : <b>CAPRICORN</b>`;
        horoscopeAnimalSign.innerHTML = `Your animal sign : <b>Goat or Crocodile</b>`
        daterange.innerHTML = `You have born between <b> 22/12 and 20/01`;
        userYears.innerHTML = `Your age : <b> ${userYear}`;
    } else if ((day >= 21 && month === 1) || (day <= 19 && month === 2)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your horoscope</h3>`;
        horoscopeSign.innerHTML = `Horoscope sign : <b>AQUARIUS</b>`;
        horoscopeAnimalSign.innerHTML = `Your animal sign : <b>Dolphin and Zebra</b>`
        daterange.innerHTML = `You  have born between <b> 21/01 and 19/02`;
        userYears.innerHTML = `Your age :<b> ${userYear}`;
    } else if ((day >= 20 && month === 2) || (day <= 20 && month === 3)) {
        greating.innerHTML = `<h3>Hello ${userName}, this is your horoscope</h3>`;
        horoscopeSign.innerHTML = `Horoscope sign : <b>PISES</b>`;
        horoscopeAnimalSign.innerHTML = `Your animal sign : <b>Fish and Camereon</b>`
        daterange.innerHTML = `You  have born between <b> 20/02 and 20/03`;
        userYears.innerHTML = `Your age :<b> ${userYear}`;
    } else {
        horoscopeSign.style.color = "red";
        horoscopeSign.innerHTML = `Providede birth date is incorrect, <i>Try again</i>`;
    }
}

