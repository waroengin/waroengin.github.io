const generatedNameElement = document.getElementById("generatedName");
const generatedPhoneNumberElement = document.getElementById("generatedPhoneNumber");
const generatedAddressElement = document.getElementById("generatedAddress");
const generatedPostalCodeElement = document.getElementById("generatedPostalCode");
const generatedFormattedNumberElement = document.getElementById("generatedFormattedNumber");
const generatedBirthDateElement = document.getElementById("generatedBirthDate");

const generateButton = document.getElementById("generateButton");
const generatePhoneNumberButton = document.getElementById("generatePhoneNumberButton");
const generateAddressButton = document.getElementById("generateAddressButton");
const generatePostalCodeButton = document.getElementById("generatePostalCodeButton");
const generateFormattedNumberButton = document.getElementById("generateFormattedNumberButton");
const generateBirthDateButton = document.getElementById("generateBirthDateButton");

const copyButton = document.getElementById("copyButton");
const copyPhoneNumberButton = document.getElementById("copyPhoneNumberButton");
const copyAddressButton = document.getElementById("copyAddressButton");
const copyPostalCodeButton = document.getElementById("copyPostalCodeButton");
const copyFormattedNumberButton = document.getElementById("copyFormattedNumberButton");
const copyBirthDateButton = document.getElementById("copyBirthDateButton");

const firstNames = ["John", "Alice", "Bob", "Eva", "David"];
const lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown"];
const areaCodesSingapore = [""];
const streetNames = ["Jalan Raya", "Jalan Utama", "Jalan Besar", "Jalan Kecil", "Jalan Indah"];
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

function generateRandomPhoneNumber() {
  const randomAreaCode = areaCodesSingapore[Math.floor(Math.random() * areaCodesSingapore.length)];
  const randomNumberPart = Math.floor(Math.random() * Math.pow(10, 8));
  const phoneNumber = `${randomAreaCode}${randomNumberPart.toString().padStart(8, "0")}`;
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

function copyToClipboard(textElement, copyButton) {
  const textToCopy = textElement.textContent;
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  // Ganti ikon tombol menjadi "Check" untuk memberi tahu pengguna bahwa penyalinan berhasil
  copyButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  setTimeout(() => {
    copyButton.innerHTML = '<i class="fa-regular fa-copy"></i>';
  }, 1000);
}
  
  
  copyPhoneNumberButton.addEventListener("click", () => copyToClipboardWithoutCode(generatedPhoneNumberElement, copyPhoneNumberButton, "65"));
  copyFormattedNumberButton.addEventListener("click", () => copyToClipboardWithoutCode(generatedFormattedNumberElement, copyFormattedNumberButton, ""));

generateButton.addEventListener("click", generateRandomName);
generatePhoneNumberButton.addEventListener("click", generateRandomPhoneNumber);
generateAddressButton.addEventListener("click", generateRandomAddress);
generatePostalCodeButton.addEventListener("click", generateRandomPostalCode);
generateFormattedNumberButton.addEventListener("click", generateRandomFormattedNumber);
generateBirthDateButton.addEventListener("click", () => {
  const generatedBirthDate = generateRandomBirthDate();
  generatedBirthDateElement.textContent = generatedBirthDate;
});

copyButton.addEventListener("click", () => copyToClipboard(generatedNameElement, copyButton));
copyPhoneNumberButton.addEventListener("click", () => copyToClipboard(generatedPhoneNumberElement, copyPhoneNumberButton));
copyAddressButton.addEventListener("click", () => copyToClipboard(generatedAddressElement, copyAddressButton));
copyPostalCodeButton.addEventListener("click", () => copyToClipboard(generatedPostalCodeElement, copyPostalCodeButton));
copyFormattedNumberButton.addEventListener("click", () => copyToClipboard(generatedFormattedNumberElement, copyFormattedNumberButton));
copyBirthDateButton.addEventListener("click", () => copyToClipboard(generatedBirthDateElement, copyBirthDateButton));

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
