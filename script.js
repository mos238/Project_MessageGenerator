// List of possible zodiac signs
const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
    "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ];
  
  // List of possible predictions
  const predictions = [
    "Today will bring you unexpected joy.",
    "Challenges are on the horizon, but you have the strength to overcome them.",
    "Now is a great time to focus on your relationships.",
    "A financial opportunity is coming your way soon.",
    "Take some time to care for your emotional well-being.",
    "New adventures are in your near future.",
    "Stay cautious about new business deals.",
    "A person from your past may resurface.",
    "It's a good time to pursue creative projects.",
    "You'll receive good news about a goal you've been working on.",
    "Love is in the air! Be open to new connections.",
    "Today, focus on self-reflection and growth."
  ];
  
  // List of lucky numbers
  const luckyNumbers = [
    "7, 13, 22",
    "3, 8, 19",
    "5, 11, 28",
    "6, 14, 25",
    "2, 9, 21",
    "1, 12, 20",
    "4, 15, 27",
    "10, 18, 24",
    "8, 16, 23"
  ];
  
  // List of random advice
  const randomAdvice = [
    "Stay positive and good things will happen.",
    "Trust your instincts.",
    "Sometimes the best action is no action.",
    "Focus on what truly matters to you.",
    "Don't let small obstacles discourage you.",
    "Remember, every day is a new opportunity.",
    "Be kind to yourself and others.",
    "Take a deep breath, everything will be fine.",
    "Your potential is limitless, embrace it."
  ];
  
  // Function to generate random messages
  function generateMessage() {
    const randomZodiac = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    const randomLuckyNumber = luckyNumbers[Math.floor(Math.random() * luckyNumbers.length)];
    const randomAdviceMsg = randomAdvice[Math.floor(Math.random() * randomAdvice.length)];
  
    const message = `
      Your Zodiac sign: ${randomZodiac}<br>
      Prediction: ${randomPrediction}<br>
      Lucky numbers: ${randomLuckyNumber}<br>
      Advice: ${randomAdviceMsg}
    `;
  
    document.getElementById('message').innerHTML = message;
  }
  
  // Generate a message when the page first loads
  generateMessage();
  