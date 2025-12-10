// quiz.js - Quiz functionality with optional validation

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const optionsList = document.getElementById("optionsList");
const questionText = document.getElementById("questionText");
const totalSteps = document.getElementById("totalSteps");

let currentQuestion = 1;
let selectedAnswer = null;
let answers = {};

totalSteps.textContent = questions.length;

// Normalize text for comparison
function normalizeText(text) {
  return text.toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters
    .replace(/\s+/g, ' '); // Normalize spaces
}

// Validate women directors
function validateDirectors(input) {
  const entries = input.split(',').map(e => normalizeText(e)).filter(e => e.length > 0);
  const validCount = entries.filter(entry => {
    return womenDirectors.some(director => {
      const normalizedDirector = normalizeText(director);
      return normalizedDirector.includes(entry) || entry.includes(normalizedDirector);
    });
  }).length;
  
  return {
    valid: validCount >= 3,
    count: validCount,
    total: entries.length,
    score: Math.min(validCount * 2, 10)
  };
}

// Validate films NOT on IMDb Top 250
function validateFilms(input) {
  const entries = input.split(',').map(e => normalizeText(e)).filter(e => e.length > 0);
  
  let validCount = 0;
  let onTopList = 0;
  
  entries.forEach(entry => {
    const isOnTop250 = imdbTop250Films.some(film => {
      const normalizedFilm = normalizeText(film);
      return normalizedFilm.includes(entry) || entry.includes(normalizedFilm);
    });
    
    if (isOnTop250) {
      onTopList++;
    } else if (entry.length > 2) {
      validCount++;
    }
  });
  
  return {
    valid: validCount >= 3 && onTopList === 0,
    validCount: validCount,
    onTopList: onTopList,
    total: entries.length,
    score: onTopList > 0 ? 5 : Math.max(0, 5 - validCount)
  };
}

// Create validation feedback element (only shows positive feedback)
function createValidationFeedback(result, type) {
  const feedback = document.createElement('div');
  feedback.className = 'validation-feedback';
  feedback.style.cssText = `
    margin-top: 12px;
    padding: 12px;
    border-radius: 4px;
    font-size: 0.9rem;
    line-height: 1.4;
    background: #d4edda;
    color: #155724;
  `;
  
  if (type === 'directors') {
    if (result.count > 0) {
      feedback.textContent = `✓ ${result.count} valid women director${result.count > 1 ? 's' : ''} recognized`;
      return feedback;
    }
  } else if (type === 'films') {
    if (result.validCount > 0) {
      feedback.textContent = `✓ ${result.validCount} film${result.validCount > 1 ? 's' : ''} not on IMDb Top 250 recognized`;
      return feedback;
    }
  }
  
  return null;
}

// Function to render current question
function renderQuestion() {
  const q = questions[currentQuestion - 1];
  
  questionText.textContent = q.text;
  optionsList.innerHTML = '';

  if (q.type === 'text') {
    // Text input question
    const container = document.createElement('div');
    container.style.width = '100%';
    
    const textInput = document.createElement('textarea');
    textInput.id = 'textAnswer';
    textInput.className = 'text-input';
    textInput.placeholder = q.placeholder;
    textInput.style.cssText = `
      width: 100%;
      max-width: 600px;
      min-height: 100px;
      padding: 16px;
      background: transparent;
      border: 1px solid #fff;
      color: #fff;
      font-family: var(--option-font);
      font-size: 1rem;
      line-height: 1.5;
      resize: vertical;
    `;
    
    // Help text (optional, gentler guidance)
    if (q.helpText) {
      const helpText = document.createElement('div');
      helpText.style.cssText = `
        margin-top: 8px;
        font-size: 0.85rem;
        color: #999;
        font-style: italic;
      `;
      helpText.textContent = q.helpText;
      container.appendChild(helpText);
    }
    
    // Restore previous answer if exists
    if (answers[currentQuestion]) {
      if (typeof answers[currentQuestion] === 'object') {
        textInput.value = answers[currentQuestion].text || '';
      } else {
        textInput.value = answers[currentQuestion];
      }
      nextBtn.classList.add('active');
    }
    
    // Validation on input (optional positive feedback only)
    let validationFeedback = null;
    textInput.addEventListener('input', (e) => {
      const value = e.target.value;
      
      // Remove old feedback
      if (validationFeedback) {
        validationFeedback.remove();
        validationFeedback = null;
      }
      
      // Always enable next button if there's any text
      if (value.trim().length > 0) {
        nextBtn.classList.add('active');
        
        // Optional: Show positive validation if they got it right
        if (q.validation) {
          let result;
          
          if (q.validation === 'directors') {
            result = validateDirectors(value);
          } else if (q.validation === 'films') {
            result = validateFilms(value);
          }
          
          // Only show feedback if they got some right
          const feedback = createValidationFeedback(result, q.validation);
          if (feedback) {
            validationFeedback = feedback;
            container.appendChild(validationFeedback);
          }
          
          // Store result for scoring
          selectedAnswer = {
            text: value,
            validation: result
          };
        } else {
          selectedAnswer = value;
        }
      } else {
        nextBtn.classList.remove('active');
        selectedAnswer = null;
      }
    });
    
    container.insertBefore(textInput, container.firstChild);
    optionsList.appendChild(container);
    
  } else if (q.type === 'multiple') {
    // Multiple select question
    q.options.forEach(option => {
      const optionDiv = document.createElement('div');
      optionDiv.className = 'option-item';
      optionDiv.dataset.value = option.value;
      
      if (q.limit) {
        optionDiv.addEventListener('click', function() {
          const selected = optionsList.querySelectorAll('.option-item.selected');
          
          if (this.classList.contains('selected')) {
            this.classList.remove('selected');
          } else {
            if (selected.length < q.limit) {
              this.classList.add('selected');
            }
          }
          
          const nowSelected = optionsList.querySelectorAll('.option-item.selected');
          if (nowSelected.length === q.limit) {
            nextBtn.classList.add('active');
            selectedAnswer = Array.from(nowSelected).map(el => el.dataset.value);
          } else {
            nextBtn.classList.remove('active');
          }
        });
      } else {
        optionDiv.addEventListener('click', function() {
          this.classList.toggle('selected');
          
          const nowSelected = optionsList.querySelectorAll('.option-item.selected');
          if (nowSelected.length > 0) {
            nextBtn.classList.add('active');
            selectedAnswer = Array.from(nowSelected).map(el => el.dataset.value);
          } else {
            nextBtn.classList.remove('active');
          }
        });
      }
      
      optionDiv.innerHTML = `
        <div class="option-circle"></div>
        <div class="option-text">${option.text}</div>
      `;
      
      optionsList.appendChild(optionDiv);
    });
    
  } else {
    // Standard single-select question
    q.options.forEach(option => {
      const optionDiv = document.createElement('div');
      optionDiv.className = 'option-item';
      optionDiv.dataset.value = option.value;
      
      optionDiv.innerHTML = `
        <div class="option-circle"></div>
        <div class="option-text">${option.text}</div>
      `;
      
      optionsList.appendChild(optionDiv);
    });
  }

  // Restore previous answer if navigating back
  if (answers[currentQuestion] && q.type !== 'text') {
    if (Array.isArray(answers[currentQuestion])) {
      answers[currentQuestion].forEach(val => {
        const option = optionsList.querySelector(`[data-value="${val}"]`);
        if (option) option.classList.add('selected');
      });
      nextBtn.classList.add('active');
    } else {
      const option = optionsList.querySelector(`[data-value="${answers[currentQuestion]}"]`);
      if (option) {
        option.classList.add('selected');
        nextBtn.classList.add('active');
      }
    }
  }
}

// Update button visibility
function updateButtons() {
  if (currentQuestion === 1) {
    prevBtn.classList.add("hidden");
  } else {
    prevBtn.classList.remove("hidden");
  }

  if (currentQuestion === questions.length) {
    nextBtn.innerHTML = 'SEE RESULTS <span class="btn-arrow-box">→</span>';
  } else {
    nextBtn.innerHTML = 'NEXT QUESTION <span class="btn-arrow-box">→</span>';
  }
}

// Handle option selection (for standard questions)
optionsList.addEventListener("click", (e) => {
  const optionItem = e.target.closest(".option-item");
  if (!optionItem) return;

  const currentQ = questions[currentQuestion - 1];
  
  if (!currentQ.type || (!currentQ.type.includes('multiple') && !currentQ.type.includes('text'))) {
    document.querySelectorAll(".option-item").forEach(item => {
      item.classList.remove("selected");
    });
    optionItem.classList.add("selected");
    selectedAnswer = optionItem.dataset.value;
    nextBtn.classList.add("active");
  }
});

// Handle next question
nextBtn.addEventListener("click", () => {
  if (!nextBtn.classList.contains("active")) return;

  answers[currentQuestion] = selectedAnswer;
  console.log(`Question ${currentQuestion}: Answer`, selectedAnswer);

  if (currentQuestion === questions.length) {
    console.log("All answers:", answers);
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
    window.location.href = "results.html";
    return;
  }

  currentQuestion++;
  document.getElementById("currentStep").textContent = currentQuestion;
  const progressPercent = (currentQuestion / questions.length) * 100;
  document.getElementById("progressBar").style.width = progressPercent + "%";

  selectedAnswer = null;
  nextBtn.classList.remove("active");
  updateButtons();
  renderQuestion();
});

// Handle previous question
prevBtn.addEventListener("click", () => {
  if (currentQuestion === 1) return;

  currentQuestion--;
  document.getElementById("currentStep").textContent = currentQuestion;
  const progressPercent = (currentQuestion / questions.length) * 100;
  document.getElementById("progressBar").style.width = progressPercent + "%";

  updateButtons();
  renderQuestion();

  if (answers[currentQuestion]) {
    selectedAnswer = answers[currentQuestion];
    nextBtn.classList.add('active');
  } else {
    selectedAnswer = null;
    nextBtn.classList.remove('active');
  }
});

updateButtons();
renderQuestion();