// calculate-results.js - Calculate and display results (FIXED CAPITALIZATION)

// Viewing type definitions with refined descriptions and film recommendations
const viewingTypes = {
  1: {
    name: "The\nCurious\nExplorer",
    summary: "You Represent Diverse Viewing Patterns: Seeking Films Beyond Canon, Balancing Perspectives.",
    description: "Your viewing patterns reflect genuine curiosity about cinema in its fullest sense. You've moved beyond the narrow corridors of 'essential viewing' lists to engage with films across gender, geography, and genre without hierarchical judgment. You recognize that the canonical 'greats' exist within a specific cultural and industrial context—one that systematically elevated certain voices while restricting access for others. Your knowledge spans eras and traditions because you understand that film history is larger than any single narrative. You're equally comfortable discussing Wong Kar-wai and Claire Denis, recognizing technical mastery in service of story rather than as credential. This breadth doesn't make you dilettantish—it makes you literate in the actual scope of cinema as a global art form.",
    recommendations: [
      { title: "Atlantics", year: 2019, director: "Mati Diop", reason: "contemporary african cinema blending genre and social commentary" },
      { title: "In the Mood for Love", year: 2000, director: "Wong Kar-wai", reason: "masterclass in visual storytelling and emotional restraint" },
      { title: "Burning", year: 2018, director: "Lee Chang-dong", reason: "korean psychological thriller that resists easy interpretation" }
    ]
  },
  2: {
    name: "The\nAware\nEnthusiast",
    summary: "You're Conscious Of Patterns And Actively Working To Expand Your Viewing.",
    description: "You're in the most interesting position: aware enough to recognize the limitations of your current knowledge, engaged enough to actively address them. You still engage deeply with canonical works—The Godfather hasn't stopped being formally brilliant—but you now see these films within their context rather than as definitive statements about cinema itself. Some gaps remain in your knowledge, particularly around women directors and non-western traditions, but your awareness means you're already course-correcting. You're moving from passive consumption shaped by algorithms and critical consensus toward deliberate, curious engagement. This transition isn't always comfortable—it requires acknowledging that what felt like comprehensive knowledge was actually quite narrow—but it's generative. You're building toward genuine cinematic literacy rather than credentialism.",
    recommendations: [
      { title: "Portrait of a Lady on Fire", year: 2019, director: "Céline Sciamma", reason: "intimate period piece that centers female perspective and desire" },
      { title: "The Handmaiden", year: 2016, director: "Park Chan-wook", reason: "psychological thriller that plays with genre and gender expectations" },
      { title: "Shoplifters", year: 2018, director: "Hirokazu Kore-eda", reason: "quiet family drama from japanese master working outside western traditions" }
    ]
  },
  3: {
    name: "The\nBalanced\nCinephile",
    summary: "You Appreciate Canon While Maintaining Balanced Awareness And Genre Openness.",
    description: "You've achieved what many cinephiles claim but few embody: genuine balance. You can discuss Kubrick's formal precision and Kelly Reichardt's patient minimalism with equal enthusiasm because you understand they're working toward different ends within the same medium. You know the canonical works—you should, they're canonical for reasons—but you don't mistake familiarity with those works for comprehensive knowledge. You engage openly across genres without the dismissive hierarchies that plague film discourse, recognizing that a well-made romantic comedy requires as much craft as a Bergman chamber piece. Technical mastery matters to you, but in service of storytelling rather than as gatekeeping credential. You've internalized that decades of structural inequality shaped whose films got made, distributed, and remembered. This awareness doesn't diminish your love for the films you know—it contextualizes them.",
    recommendations: [
      { title: "Certain Women", year: 2016, director: "Kelly Reichardt", reason: "patient, observant ensemble piece about women's interior lives in montana" },
      { title: "The Before Trilogy", year: "1995-2013", director: "Richard Linklater", reason: "spanning decades, proves popular romance can be intellectually rigorous" },
      { title: "Jeanne Dielman, 23 quai du Commerce, 1080 Bruxelles", year: 1975, director: "Chantal Akerman", reason: "radical feminist masterwork that demands patience and rewards attention" }
    ]
  },
  4: {
    name: "The\nCanonical\nEnthusiast",
    summary: "Your Film Knowledge Centers On Widely-Recognized Classics And Canonical Works.",
    description: "Your film knowledge follows well-worn paths: the Sight & Sound list, Criterion releases, films that appear in university courses and 'essential viewing' guides. This isn't inherently problematic—you've built substantial knowledge about formally accomplished, culturally influential works. The Godfather remains a masterclass in cinematic storytelling regardless of how many film bros cite it. But this concentration reflects something larger than personal taste: it mirrors decades of industry practice that gave certain filmmakers resources, distribution, and critical attention while systematically limiting others. Your gaps aren't random—they cluster around women directors, non-western cinema, and stories outside dominant cultural narratives. You likely emphasize technical mastery and auteur theory, valuable frameworks that can become restrictive when treated as the only measures of worth. The challenge isn't abandoning what you know—it's recognizing these works exist within a much larger cinema landscape.",
    recommendations: [
      { title: "Daughters of the Dust", year: 1991, director: "Julie Dash", reason: "lyrical masterwork by first black woman to get theatrical release—often overlooked" },
      { title: "The Piano", year: 1993, director: "Jane Campion", reason: "from the only woman to win palme d'or twice, complex period piece about female agency" },
      { title: "Yi Yi", year: 2000, director: "Edward Yang", reason: "taiwanese epic that deserves place alongside any western family drama" }
    ]
  },
  5: {
    name: "The\nTechnical\nPurist",
    summary: "You Value Films Through Technical Achievement—Cinematography, Craft, And Execution.",
    description: "You approach film primarily through craft: Roger Deakins' cinematography, aspect ratio choices, whether something 'should' be seen in IMAX. You've built impressive technical knowledge—you understand how films are made at a granular level. This expertise is real and valuable. The problem emerges when technical mastery becomes the primary or sole criterion for evaluation, overshadowing emotional resonance, thematic complexity, or cultural significance. 'Well-shot' becomes shorthand for 'good,' while films that prioritize other elements get dismissed as technically inferior. This framework tends to concentrate your knowledge around celebrated auteurs (predominantly male) whose work emphasizes visual style. You might struggle to engage with films that are formally unconventional or that prioritize performance over cinematography. Technical knowledge can serve as gatekeeping—'you haven't really seen it unless you've seen it on 35mm'—positioning you as arbiter of legitimate engagement. Craft matters, but it's means rather than end.",
    recommendations: [
      { title: "Stories We Tell", year: 2012, director: "Sarah Polley", reason: "documentary that prioritizes emotional truth over technical perfection" },
      { title: "Moonlight", year: 2016, director: "Barry Jenkins", reason: "stunning cinematography serving character and intimacy rather than spectacle" },
      { title: "First Cow", year: 2019, director: "Kelly Reichardt", reason: "shot in 4:3, proves technical choices serve story rather than showcase" }
    ]
  },
  6: {
    name: "The\nConcentrated\nViewer",
    summary: "Your Viewing Shows Significant Concentration In Specific Films And Filmmakers.",
    description: "Your viewing patterns reveal significant concentration: heavily weighted toward male directors, male-protagonist stories dealing with violence or corruption, clear hierarchies between 'serious' and 'lesser' genres. This isn't personal moral failure—it reflects decades of industry practice that systematically elevated certain voices while limiting others' access to resources, distribution, and critical attention. But the result is substantial gaps in your knowledge. You might struggle to name five women directors or discuss films outside a particular cultural and generic framework. Romantic comedies get dismissed as 'not real cinema' while the fifteenth gritty crime drama receives serious analysis. You've developed real expertise within a narrow band, but mistake that depth for breadth. The concentration is self-reinforcing: algorithms recommend what you already watch, critics discuss what they assume you know, friends share similar patterns. Breaking out requires active effort—not abandoning what you love, but recognizing it represents a fraction of cinema's possibilities.",
    recommendations: [
      { title: "Beau Travail", year: 1999, director: "Claire Denis", reason: "french master working with male subjects in ways that might feel familiar yet revelatory" },
      { title: "Do the Right Thing", year: 1989, director: "Spike Lee", reason: "formally innovative, politically urgent—expands notion of what 'serious' cinema includes" },
      { title: "The Farewell", year: 2019, director: "Lulu Wang", reason: "family drama proving 'smaller' stories contain as much complexity as any prestige epic" }
    ]
  },
  7: {
    name: "The Echo\nChamber\nDweller",
    summary: "Your Knowledge Exists Within An Extremely Narrow Band Of Cinema.",
    description: "Your film knowledge exists within an echo chamber that feels comprehensive from inside but represents a tiny fraction of global cinema. You've developed deep expertise in specific areas—particular directors (Nolan, Tarantino, Fincher), certain genres (crime, sci-fi, 'mindfuck' films), technical approaches that signal 'seriousness.' This expertise is real. You can discuss these films with sophistication and genuine insight. But this knowledge exists within a severely restricted framework that excludes vast territories of filmmaking. Women directors remain largely unknown. Non-western cinema is 'foreign' rather than simply cinema. Genres like romance or comedy get dismissed entirely. You likely use technical knowledge as credential and gatekeeping—'well, actually' becomes conversation starter. This concentration isn't accidental: it's been shaped by decades of algorithmic recommendations, marketing decisions, and critical discourse that centered certain voices while marginalizing others. The challenge is recognizing what feels like definitive film knowledge is actually a curated selection constantly reinforcing itself.",
    recommendations: [
      { title: "Persepolis", year: 2007, director: "Marjane Satrapi & Vincent Paronnaud", reason: "animated memoir proving animation isn't children's medium—expands formal possibilities" },
      { title: "A Separation", year: 2011, director: "Asghar Farhadi", reason: "iranian drama as morally complex as any western film, challenges 'foreign' designation" },
      { title: "Lady Bird", year: 2017, director: "Greta Gerwig", reason: "coming-of-age story with formal sophistication, proves 'smaller' films contain multitudes" }
    ]
  },
  8: {
    name: "The\nConcentrated\nConnoisseur",
    summary: "You Show The Most Concentrated Viewing Patterns Across All Dimensions.",
    description: "You represent the most concentrated viewing pattern across all measured dimensions: extremely narrow canonical focus, heavily male-dominated director knowledge, rigid technical gatekeeping, severe genre hierarchies, and minimal awareness of these patterns. Your film expertise is genuine—you've built substantial knowledge within your chosen framework. You can discourse at length about Christopher Nolan's manipulation of time, debate Fincher versus Villeneuve, analyze aspect ratios and cinematographic techniques. This knowledge is real. But it exists within the narrowest possible band, one you've mistaken for the entirety of cinema. You likely cannot name five women directors. Non-western cinema remains largely unknown. Entire genres get dismissed as unserious. Technical knowledge functions as credential and barrier—only certain viewing conditions count as legitimate engagement. This is the viewing pattern that exemplifies what gets called 'film bro' culture, not because your taste is wrong, but because you've confused a curated selection with the whole art form while using that knowledge as gatekeeping. Cinema is vast. What you know is real, but it's a fraction of what exists.",
    recommendations: [
      { title: "Cléo from 5 to 7", year: 1962, director: "Agnès Varda", reason: "french new wave pioneer you've probably overlooked—formally inventive, emotionally direct" },
      { title: "Toni Erdmann", year: 2016, director: "Maren Ade", reason: "german comedy-drama proving genre boundaries are artificial and limiting" },
      { title: "Parasite", year: 2019, director: "Bong Joon-ho", reason: "if you only know this from awards buzz, actually watch it—genre-defying masterwork" }
    ]
  }
};
// calculate-results.js - Calculate and display results


// Dimension labels
const dimensionLabels = {
  C: "High Canon Concentration",
  E: "Low Canon Concentration",
  D: "Dominant Recognition",
  B: "Balanced Recognition",
  T: "Technical Emphasis",
  H: "Holistic Appreciation",
  S: "Stratified Genre Hierarchy",
  O: "Open Genre Engagement"
};

// Load answers from localStorage
const answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');

// Calculate scores based on quiz answers
function calculateScores() {
  const scores = {
    C: 0, // Canonical (max 25)
    D: 0, // Dominant (max 30)
    T: 0, // Technical (max 25)
    S: 0  // Stratified (max 20)
  };

  // Process each answer
  Object.keys(answers).forEach(questionNum => {
    const answer = answers[questionNum];
    const qNum = parseInt(questionNum);
    
    // Question-specific scoring logic
    switch(qNum) {
      case 1:
        if (answer == 3) scores.T += 6;
        break;
        
      case 2:
        if (answer == 0) scores.C += 5;
        else if (answer == 1) scores.C += 5;
        else if (answer == 2) scores.C += 4;
        break;
        
      case 3:
        if (answer == 0) scores.C += 5;
        else if (answer == 1) scores.C += 4;
        else if (answer == 3) scores.C += 5;
        break;
        
      case 4: // Women directors validation
        if (answer && typeof answer === 'object' && answer.validation) {
          // Fewer valid directors = higher D score (indicates gap in knowledge)
          const validCount = answer.validation.count || 0;
          if (validCount === 0) {
            scores.D += 10; // No valid directors named
          } else if (validCount === 1) {
            scores.D += 8;
          } else if (validCount === 2) {
            scores.D += 6;
          } else if (validCount === 3) {
            scores.D += 4;
          } else if (validCount === 4) {
            scores.D += 2;
          }
          // 5+ valid = 0 points (good knowledge)
        } else {
          // If they just typed text without validation or skipped
          scores.D += 8;
        }
        break;
        
      case 5: // Films NOT on Top 250 validation
        if (answer && typeof answer === 'object' && answer.validation) {
          const onTopList = answer.validation.onTopList || 0;
          const validCount = answer.validation.validCount || 0;
          
          if (onTopList > 0) {
            // They named films that ARE on top 250 = higher canonical score
            scores.C += Math.min(onTopList * 2, 5);
          } else if (validCount === 0) {
            // Named nothing recognizable
            scores.C += 3;
          } else {
            // Successfully named films not on list = lower score (good!)
            scores.C += Math.max(0, 5 - validCount);
          }
        } else {
          // Default if no validation
          scores.C += 3;
        }
        break;
        
      case 6:
        if (Array.isArray(answer)) {
          // Values 0-7 are male directors, 8-14 are women directors
          const maleCount = answer.filter(v => parseInt(v) <= 7).length;
          const femaleCount = answer.filter(v => parseInt(v) >= 8 && parseInt(v) <= 14).length;
          
          if (maleCount > 0 && femaleCount === 0) {
            scores.D += 8; // Only know male directors
          } else if (maleCount > femaleCount * 2) {
            scores.D += 6; // Significantly more male directors
          } else if (maleCount > femaleCount) {
            scores.D += 4; // Somewhat more male directors
          }
          // Balanced or more women = 0 points
        }
        break;
        
      case 7:
        if (answer == 0) scores.T += 6;
        break;
        
      case 8:
        if (answer == 0) scores.T += 5;
        else if (answer == 1) scores.T += 6;
        else if (answer == 2) scores.T += 6;
        break;
        
      case 9:
        if (answer == 0) scores.T += 5;
        else if (answer == 1) scores.T += 2;
        break;
        
      case 10:
        if (answer == 0 || answer == 1 || answer == 2) scores.C += 4;
        break;
        
      case 11:
        if (answer == 0) scores.S += 6;
        else if (answer == 1) scores.S += 2;
        else if (answer == 3) scores.S -= 2;
        break;
        
      case 12:
        if (answer == 0) {
          scores.D += 4;
          scores.S += 4;
        } else if (answer == 1) {
          scores.T += 3;
          scores.S += 2;
        }
        break;
        
      case 13:
        if (answer == 0) scores.T += 3;
        else if (answer == 1) scores.T += 2;
        else if (answer == 3) scores.T -= 1;
        break;
        
      case 14:
        if (answer == 0) scores.T += 2;
        else if (answer == 1) scores.C += 2;
        break;
        
      case 15:
        if (answer == 0) {
          scores.C += 3;
          scores.S += 2;
        } else if (answer == 1) {
          scores.C += 2;
          scores.S += 2;
        } else if (answer == 3) {
          scores.C -= 1;
        }
        break;
        
      case 16:
        if (answer == 0) {
          scores.C += 3;
          scores.T += 3;
        } else if (answer == 1 || answer == 2) {
          scores.C += 3;
        }
        break;
        
      case 17:
        if (Array.isArray(answer)) {
          // Values 0-17 are canonical films, 18-19 are more diverse
          answer.forEach(val => {
            const v = parseInt(val);
            if (v >= 0 && v <= 17) {
              scores.C += 2;
            }
          });
        }
        break;
    }
  });

  // Ensure scores don't go below 0
  scores.C = Math.max(0, scores.C);
  scores.D = Math.max(0, scores.D);
  scores.T = Math.max(0, scores.T);
  scores.S = Math.max(0, scores.S);

  return scores;
}

// Determine viewing type
function determineViewingType(scores) {
  const totalScore = (
    (scores.C / 25) * 25 +
    (scores.D / 30) * 30 +
    (scores.T / 25) * 25 +
    (scores.S / 20) * 20
  );

  if (totalScore <= 25) return 1;
  if (totalScore <= 40) return 2;
  if (totalScore <= 50) return 3;
  if (totalScore <= 65) return 4;
  if (totalScore <= 75) return 5;
  if (totalScore <= 85) return 6;
  if (totalScore <= 95) return 7;
  return 8;
}

// Constrain slider position to keep circle within bounds
function constrainSliderPosition(percent) {
  return Math.max(2, Math.min(98, percent));
}

// Display results
function displayResults() {
  const scores = calculateScores();
  const typeNumber = determineViewingType(scores);
  const type = viewingTypes[typeNumber];

  console.log('Calculated scores:', scores);
  console.log('Type number:', typeNumber);

  // Update type card
  document.getElementById('typeName').textContent = type.name;
  document.getElementById('typeSummary').textContent = type.summary;
  
  // Build description with recommendations
  let fullDescription = type.description + "\n\n" + "Films to explore:\n";
  type.recommendations.forEach((rec, index) => {
    fullDescription += `${index + 1}. ${rec.title} (${rec.year}) directed by ${rec.director} — ${rec.reason}\n`;
  });
  
  document.getElementById('detailedDescription').textContent = fullDescription;

  // Update dimension sliders with constrained positions
  const dim1Percent = constrainSliderPosition((scores.C / 25) * 100);
  const dim1Label = scores.C > 12 ? dimensionLabels.C : dimensionLabels.E;
  document.getElementById('marker1').style.left = dim1Percent + '%';
  document.getElementById('label1').textContent = dim1Label;

  const dim2Percent = constrainSliderPosition((scores.D / 30) * 100);
  const dim2Label = scores.D > 15 ? dimensionLabels.D : dimensionLabels.B;
  document.getElementById('marker2').style.left = dim2Percent + '%';
  document.getElementById('label2').textContent = dim2Label;

  const dim3Percent = constrainSliderPosition((scores.T / 25) * 100);
  const dim3Label = scores.T > 12 ? dimensionLabels.T : dimensionLabels.H;
  document.getElementById('marker3').style.left = dim3Percent + '%';
  document.getElementById('label3').textContent = dim3Label;

  const dim4Percent = constrainSliderPosition(Math.max(0, (scores.S / 20) * 100));
  const dim4Label = scores.S > 10 ? dimensionLabels.S : dimensionLabels.O;
  document.getElementById('marker4').style.left = dim4Percent + '%';
  document.getElementById('label4').textContent = dim4Label;
}

// Initialize on page load
displayResults();