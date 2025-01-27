const hashGenerator = function generateNumericId(name, description, date) {
  const salt = generateRandomSalt(8); // Generate a random salt of 8 characters
  const str = name + description + date + salt;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % 1000000; // Get the last 6 digits
};

function generateRandomSalt(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let salt = "";
  for (let i = 0; i < length; i++) {
    salt += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return salt;
}

export { hashGenerator };
