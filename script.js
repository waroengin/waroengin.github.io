

const generatedNameElement = document.getElementById("generatedName");
const generatedFirstNameElement = document.getElementById("generatedFirstName");
const generatedLastNameElement = document.getElementById("generatedLastName");
const generatedPhoneNumberElement = document.getElementById("generatedPhoneNumber");
const generatedAddressElement = document.getElementById("generatedAddress");
const generatedPostalCodeElement = document.getElementById("generatedPostalCode");
const generatedFormattedNumberElement = document.getElementById("generatedFormattedNumber");
const generatedBirthDateElement = document.getElementById("generatedBirthDate");
const generatedPassElement = document.getElementById("generatedPass");

const generateButton = document.getElementById("generateButton");
const generatePhoneNumberButton = document.getElementById("generatePhoneNumberButton");
const generateAddressButton = document.getElementById("generateAddressButton");
const generatePostalCodeButton = document.getElementById("generatePostalCodeButton");
const generateFormattedNumberButton = document.getElementById("generateFormattedNumberButton");
const generateBirthDateButton = document.getElementById("generateBirthDateButton");
const generatePassButton = document.getElementById("generatePassButtom");
const copyPwButton = document.getElementById("copyPw");

// const copyButton = document.getElementById("copyButton");
// const copyPhoneNumberButton = document.getElementById("copyPhoneNumberButton");
// const copyAddressButton = document.getElementById("copyAddressButton");
// const copyPostalCodeButton = document.getElementById("copyPostalCodeButton");
// const copyFormattedNumberButton = document.getElementById("copyFormattedNumberButton");
// const copyBirthDateButton = document.getElementById("copyBirthDateButton");

const firstNames = [
  "John", "Alice", "Bob", "Eva", "David", "Sarah", "Michael", "Emily", "Daniel", "Olivia",
  "William", "Ava", "James", "Sophia", "Alexander", "Mia", "Benjamin", "Isabella", "Ethan", "Charlotte",
  "Liam", "Amelia", "Henry", "Harper", "Emma", "Daniel", "Luna", "Jackson", "Lucas", "Sebastian", "Mateo",
  "Noah", "Grace", "Logan", "Chloe", "Caleb", "Lily", "Jayden", "Zoe", "Elijah", "Layla",
  "Mason", "Nora", "Jack", "Riley", "Luke", "Ella", "Carter", "Aria", "Owen", "Scarlett",
  "Aiden", "Madison", "Evelyn", "Cameron", "Abigail", "Eli", "Penelope", "Hudson", "Leah", "Hunter",
  "Sofia", "Samuel", "Victoria", "Wyatt", "Avery", "Grayson", "Grace", "Leo", "Aubrey", "Gabriel",
  "Brooklyn", "Julian", "Skylar", "Isaac", "Zoey", "Lincoln", "Addison", "Nathan", "Eleanor",
  "Ezekiel", "Paisley", "Jaxon", "Ellie", "Asher", "Kinsley", "Xavier", "Hailey", "Santiago", "Hazel",
  "Cole", "Lucy", "Matias", "Nova", "Leo", "Aurora", "Jesse", "Emilia", "Max", "Bella",
  "Leo", "Chloe", "Alexander", "Zoe", "Mia", "Oliver", "Lily", "Ethan", "Ava", "Liam",
  "Sophia", "Lucas", "Isabella", "Jackson", "Amelia", "Aiden", "Mia", "Sebastian", "Evelyn"
  // Tambahkan nama-nama lainnya di sini
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor",
  "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson",
  "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "King", "Wright", "Scott",
  "Adams", "Baker", "Carter", "Cook", "Cooper", "Evans", "Gray", "Green", "Hill", "Hughes",
  "Jenkins", "Kelly", "Morgan", "Murphy", "Parker", "Reed", "Russell", "Stewart", "Turner", "Ward",
  "Bell", "Cruz", "Diaz", "Edwards", "Flores", "Gomez", "Howard", "Khan", "Lopez",
  "Murray", "Nguyen", "Owens", "Perez", "Quinn", "Reyes", "Sanchez", "Noz", "Vargas",
  "Watson", "Zim", "Bennett", "Campbell", "Dixon", "Foster", "Hender", "Irwin", "Keller", "Lawson", "Mith", "Nelson", "Son"
];

const streetNames = [
  "Sunset Boulevard", "Maple Avenue", "Pine Lane", "Oak Drive", "Cedar Court", "Birch Road", "Willow Street", "Rose Lane", "River Avenue", "Lake Drive",
  "Meadow Lane", "Grove Street", "Park Avenue", "Hill Road", "Valley Boulevard", "Forest Lane", "Beach Drive", "Harbor Avenue", "Sky Lane", "Canyon Road",
  "Lagoon Street", "Ocean Boulevard", "Breeze Lane", "Bluff Drive", "View Avenue", "Ridge Lane", "Vine Street", "Blossom Lane", "Cliff Road", "Mist Avenue",
  "Dew Lane", "Dune Road", "Fern Street", "Flower Lane", "Glen Avenue", "Haven Road", "Island Lane", "Marsh Street", "Orchard Avenue", "Pond Lane",
  "Quarry Road", "Rock Street", "Shore Avenue", "Stream Lane", "Timber Road", "Woods Street", "Trail Avenue", "Fountain Lane", "Brook Road", "Creek Street",
  "Dell Lane", "Knoll Road", "Moor Street", "Spring Lane", "Star Road", "Sunrise Street", "Twilight Lane", "Vista Road", "Whisper Street", "Wildflower Lane",
  "Blossom Avenue", "Meadow Road", "Creek Lane", "Harbor Street", "Lake Lane", "Pine Street", "River Road", "Sky Street", "Sunset Lane", "View Road",
  "Bluff Avenue", "Birch Lane", "Rose Court", "Lake Boulevard", "Grove Lane", "Forest Drive", "Beach Avenue", "Harbor Lane", "Canyon Lane", "Ocean Drive",
  "Breeze Avenue", "Mist Lane", "Dew Street", "Flower Street", "Haven Avenue", "Orchard Drive", "Quarry Lane", "Shore Road", "Timber Lane", "Trail Avenue"
  // Tambahkan nama jalan tambahan di sini
];



const areaCodesSingapore = [""];
const numberRange = { min: 1, max: 999 };
const postalCodeRange = { min: 100000, max: 999999 };
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


function generateRandomName() {
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const randomName = `${randomFirstName} ${randomLastName}`;
  generatedNameElement.textContent = randomName;
}

function generateRandomName() {
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
  generatedFirstNameElement.textContent = randomFirstName;
  generatedLastNameElement.textContent = randomLastName;
}


function generateRandomPhoneNumber() {
  const validAreaCodes = ["3", "6", "8", "9"];
  const randomAreaCode = validAreaCodes[Math.floor(Math.random() * validAreaCodes.length)];
  const randomNumberPart = Math.floor(Math.random() * Math.pow(10, 7));
  const phoneNumber = `${randomAreaCode}${randomNumberPart.toString().padStart(7, "0")}`;
  generatedPhoneNumberElement.textContent = phoneNumber;
}

function generateRandomAddress() {
  const randomStreetName = streetNames[Math.floor(Math.random() * streetNames.length)];
  const randomNumber = Math.floor(Math.random() * (numberRange.max - numberRange.min + 1)) + numberRange.min;
  const randomChar1 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const randomChar2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const address = `${randomNumber} ${randomChar1}${randomChar2} ${randomStreetName}`;
  generatedAddressElement.textContent = address;
}

function generateRandomPostalCode() {
  const randomPostalCode = Math.floor(Math.random() * (postalCodeRange.max - postalCodeRange.min + 1)) + postalCodeRange.min;
  generatedPostalCodeElement.textContent = randomPostalCode.toString();
}

function generateRandomDigit() {
  return Math.floor(Math.random() * 10);
}

function generateRandomFormattedNumber() {
  const formattedNumber = `${generateRandomDigit()}${generateRandomDigit()}${generateRandomDigit()}-` +
                          `${generateRandomDigit()}${generateRandomDigit()}-` +
                          `${generateRandomDigit()}${generateRandomDigit()}${generateRandomDigit()}`;
  generatedFormattedNumberElement.textContent = formattedNumber;
}

function generateRandomTwoDigitNumber(max) {
  return Math.floor(Math.random() * max).toString().padStart(2, "0");
}

function generateRandomBirthDate() {
    const randomDay = generateRandomTwoDigitNumber(28); // Adding 1 to ensure day is not 00
    const randomMonth = generateRandomTwoDigitNumber(12); // Adding 1 to ensure month is not 00
    const randomYear = generateRandomNumberInRange(1990, 2000); // Generate year between 1990 and 2000
    const birthDate = `${randomDay}-${randomMonth}-${randomYear}`;
    return birthDate;
  }
  
  function generateRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const regenerateAllButton = document.getElementById("regenerateAllButton");

  function regenerateAll() {
    generateRandomName();
    generateRandomPhoneNumber();
    generateRandomAddress();
    generateRandomPostalCode();
    generateRandomFormattedNumber();
    const generatedBirthDate = generateRandomBirthDate();
    generatedBirthDateElement.textContent = generatedBirthDate;
  }
  
  regenerateAllButton.addEventListener("click", regenerateAll);

generateButton.addEventListener("click", generateRandomName);
generatePhoneNumberButton.addEventListener("click", generateRandomPhoneNumber);
generateAddressButton.addEventListener("click", generateRandomAddress);
generatePostalCodeButton.addEventListener("click", generateRandomPostalCode);
generateFormattedNumberButton.addEventListener("click", generateRandomFormattedNumber);
generateBirthDateButton.addEventListener("click", () => {
  const generatedBirthDate = generateRandomBirthDate();
  generatedBirthDateElement.textContent = generatedBirthDate;
});

copyPwButton.addEventListener("click", () => {
  const textToCopy = "Kamikaze123";
  copyTextToClipboard(textToCopy);
});


// Menambahkan event listener untuk menyalin teks saat elemen di klik
generatedFirstNameElement.addEventListener("click", function() {
  copyTextToClipboard(generatedFirstNameElement.textContent);
});

generatedLastNameElement.addEventListener("click", function() {
  copyTextToClipboard(generatedLastNameElement.textContent);
});
generatedBirthDateElement.addEventListener("click", function() {
  copyTextToClipboard(generatedBirthDateElement.textContent);
});
generatedPhoneNumberElement.addEventListener("click", function() {
  copyTextToClipboard(generatedPhoneNumberElement.textContent);
});
generatedAddressElement.addEventListener("click", function() {
  copyTextToClipboard(generatedAddressElement.textContent);
});
generatedPostalCodeElement.addEventListener("click", function() {
  copyTextToClipboard(generatedPostalCodeElement.textContent);
});
generatedFormattedNumberElement.addEventListener("click", function() {
  copyTextToClipboard(generatedFormattedNumberElement.textContent);
});

// Fungsi untuk menyalin teks ke clipboard
function copyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}

// Panggil fungsi-fungsi generator secara otomatis saat halaman dimuat
window.addEventListener("DOMContentLoaded", () => {
  generateRandomName();
  generateRandomPhoneNumber();
  generateRandomAddress();
  generateRandomPostalCode();
  generateRandomFormattedNumber();
  const generatedBirthDate = generateRandomBirthDate();
  generatedBirthDateElement.textContent = generatedBirthDate;
});

async function fetchUserInfo() {
  try {
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();

    const ip = data.ip;
    document.getElementById('ip').textContent = ip;

    const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
    const locationData = await locationResponse.json();

    const location = `${locationData.city}, ${locationData.region}`;
    document.getElementById('location').textContent = location;
    document.getElementById('country').textContent = locationData.country_name;
    document.getElementById('timezone').textContent = locationData.timezone;
    document.getElementById('countryCode').textContent = locationData.country_code;
    document.getElementById('currency').textContent = locationData.currency;
    document.getElementById('userAgent').textContent = navigator.userAgent;

    function updateCurrentTime() {
      const currentTime = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'};
      const formattedTime = new Intl.DateTimeFormat('id-ID', options).format(currentTime);
      document.getElementById('currentTime').textContent = formattedTime;
    }

    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);

  } catch (error) {
    console.error('Error fetching user information:', error);
  }
}

fetchUserInfo();
