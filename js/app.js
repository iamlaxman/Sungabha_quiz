/**
 * Quiz Application - Main JavaScript
 * State-based navigation with no page reloads
 * Host-controlled, projector-friendly interface
 */

// ============================================
// STATE MANAGEMENT
// ============================================

const state = {
    // Current screen being displayed
    currentScreen: 'banner-screen',
    
    // Current round (1, 2, or 3)
    currentRound: 0,
    
    // Current subject for Round 1 & 2
    currentSubject: null,
    
    // Track used questions per subject (Round 1 & 2)
    usedQuestions: {
        round1: {
            physics: new Set(),
            chemistry: new Set(),
            biology: new Set(),
            mathematics: new Set()
        },
        round2: {
            visual: new Set()
        }
    },
    
    // Track completed subjects
    completedSubjects: {
        round1: new Set(),
        round2: new Set()
    },
    
    // Track used sets for Rapid Fire (Round 3)
    usedSets: new Set(),
    
    // Current set and question for Rapid Fire
    currentSet: null,
    currentQuestionIndex: 0,
    
    // Store current question data
    currentQuestion: null,
    
    // Prevent double clicks
    isNavigating: false
};

// Subject display names
const subjectNames = {
    physics: 'Physics',
    chemistry: 'Chemistry',
    biology: 'Biology',
    mathematics: 'Mathematics',
    visual: 'Visual Round'
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Show a specific screen by ID
 * @param {string} screenId - The ID of the screen to show
 */
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        state.currentScreen = screenId;
    }
    
    // Reset navigation lock
    state.isNavigating = false;
}

/**
 * Safe navigation handler with double-click prevention
 * @param {Function} callback - The navigation function to execute
 */
function safeNavigate(callback) {
    if (state.isNavigating) return;
    state.isNavigating = true;
    callback();
}

/**
 * Get the count of used questions for a subject
 * @param {number} round - Round number (1 or 2)
 * @param {string} subject - Subject key
 * @returns {number} Count of used questions
 */
function getUsedCount(round, subject) {
    const roundKey = `round${round}`;
    return state.usedQuestions[roundKey][subject].size;
}

/**
 * Get total questions for a subject
 * @param {number} round - Round number
 * @param {string} subject - Subject key
 * @returns {number} Total questions available
 */
function getTotalQuestions(round, subject) {
    const roundKey = `round${round}`;
    if (quizData[roundKey] && quizData[roundKey][subject]) {
        return quizData[roundKey][subject].length;
    }
    return 0;
}

/**
 * Check if all questions in a subject are used
 * @param {number} round - Round number
 * @param {string} subject - Subject key
 * @returns {boolean}
 */
function isSubjectComplete(round, subject) {
    return getUsedCount(round, subject) >= getTotalQuestions(round, subject);
}

/**
 * Check if all subjects in a round are complete
 * @param {number} round - Round number
 * @returns {boolean}
 */
function isRoundComplete(round) {
    const roundKey = `round${round}`;
    const subjects = Object.keys(quizData[roundKey]);
    return subjects.every(subject => isSubjectComplete(round, subject));
}

// ============================================
// SCREEN-SPECIFIC FUNCTIONS
// ============================================

// ----- Banner Screen -----
function initBannerScreen() {
    // Banner screen is static, just show it
}

// ----- Welcome Screen -----
function initWelcomeScreen() {
    // Welcome screen is static
}

// ----- Rules Screen -----
function initRulesScreen() {
    // Rules screen is static
}

// ----- Subject Selection Screen -----
function initSubjectSelectionScreen() {
    const container = document.getElementById('subject-buttons-container');
    container.innerHTML = '';
    
    const roundKey = `round${state.currentRound}`;
    const subjects = Object.keys(quizData[roundKey]);
    
    subjects.forEach(subject => {
        const btn = document.createElement('button');
        btn.className = 'btn subject-btn';
        btn.textContent = subjectNames[subject];
        
        // Check if subject is complete
        if (isSubjectComplete(state.currentRound, subject)) {
            btn.disabled = true;
            btn.classList.add('used');
            btn.textContent += ' ✓';
        } else {
            btn.onclick = () => safeNavigate(() => selectSubject(subject));
        }
        
        container.appendChild(btn);
    });
    
    // Update round title
    const roundTitle = document.getElementById('subject-round-title');
    roundTitle.textContent = `Round ${state.currentRound} - Select Subject`;
    
    // Update round navigation buttons
    const prevBtn = document.getElementById('prev-round-btn');
    const nextBtn = document.getElementById('next-round-btn-nav');
    
    // Show/hide Previous Round button
    if (state.currentRound === 1) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'inline-block';
    }
    
    // Show/hide Next Round button and update text
    if (state.currentRound === 3) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'inline-block';
        if (state.currentRound === 1) {
            nextBtn.textContent = 'Go to Round 2 →';
        } else if (state.currentRound === 2) {
            nextBtn.textContent = 'Go to Round 3 →';
        }
    }
}

function selectSubject(subject) {
    state.currentSubject = subject;
    showScreen('question-number-screen');
    initQuestionNumberScreen();
}

// ----- Question Number Selection Screen -----
function initQuestionNumberScreen() {
    const container = document.getElementById('question-number-grid');
    container.innerHTML = '';
    
    const roundKey = `round${state.currentRound}`;
    const totalQuestions = getTotalQuestions(state.currentRound, state.currentSubject);
    const used = state.usedQuestions[roundKey][state.currentSubject];
    
    // Update subject indicator
    document.getElementById('current-subject-indicator').textContent = 
        `${subjectNames[state.currentSubject]} - Select Question`;
    
    // Create buttons 1-20
    for (let i = 1; i <= totalQuestions; i++) {
        const btn = document.createElement('button');
        btn.className = 'btn number-btn';
        btn.textContent = i;
        
        if (used.has(i - 1)) { // 0-based index
            btn.disabled = true;
            btn.classList.add('used');
            btn.style.opacity = '0.3';
        } else {
            btn.onclick = () => safeNavigate(() => selectQuestion(i - 1));
        }
        
        container.appendChild(btn);
    }
}

function selectQuestion(questionIndex) {
    const roundKey = `round${state.currentRound}`;
    const questionData = quizData[roundKey][state.currentSubject][questionIndex];
    
    // Mark as used
    state.usedQuestions[roundKey][state.currentSubject].add(questionIndex);
    
    // Store current question
    state.currentQuestion = {
        index: questionIndex,
        data: questionData
    };
    
    showScreen('question-display-screen');
    initQuestionDisplayScreen();
}

// ----- Question Display Screen -----
function initQuestionDisplayScreen() {
    const subjectIndicator = document.getElementById('display-subject-indicator');
    const questionText = document.getElementById('display-question-text');
    const answerBox = document.getElementById('answer-box');
    const answerText = document.getElementById('display-answer-text');
    const showAnswerBtn = document.getElementById('show-answer-btn');
    const mediaContainer = document.getElementById('media-container');
    const questionImage = document.getElementById('question-image');
    const questionVideo = document.getElementById('question-video');
    
    subjectIndicator.textContent = subjectNames[state.currentSubject];
    questionText.textContent = state.currentQuestion.data.q;
    answerText.textContent = state.currentQuestion.data.a;
    
    // Handle media (images/videos) for Round 2
    const questionData = state.currentQuestion.data;
    if (questionData.type && questionData.src) {
        mediaContainer.style.display = 'block';
        
        if (questionData.type === 'image') {
            questionImage.src = questionData.src;
            questionImage.style.display = 'block';
            questionVideo.style.display = 'none';
            questionVideo.pause();
        } else if (questionData.type === 'video') {
            questionVideo.src = questionData.src;
            questionVideo.style.display = 'block';
            questionImage.style.display = 'none';
        }
    } else {
        // No media - hide container
        mediaContainer.style.display = 'none';
        questionImage.style.display = 'none';
        questionVideo.style.display = 'none';
        questionVideo.pause();
        questionImage.src = '';
        questionVideo.src = '';
    }
    
    // Hide answer initially
    answerBox.classList.remove('visible');
    showAnswerBtn.textContent = 'Show Answer';
    showAnswerBtn.onclick = toggleAnswer;
}

function toggleAnswer() {
    const answerBox = document.getElementById('answer-box');
    const showAnswerBtn = document.getElementById('show-answer-btn');
    
    if (answerBox.classList.contains('visible')) {
        answerBox.classList.remove('visible');
        showAnswerBtn.textContent = 'Show Answer';
    } else {
        answerBox.classList.add('visible');
        showAnswerBtn.textContent = 'Hide Answer';
    }
}

function backToQuestionNumbers() {
    safeNavigate(() => {
        // Check if subject is now complete
        if (isSubjectComplete(state.currentRound, state.currentSubject)) {
            state.completedSubjects[`round${state.currentRound}`].add(state.currentSubject);
            console.log(`Subject ${state.currentSubject} complete`);
        }
        
        // Check if round is complete
        const roundComplete = isRoundComplete(state.currentRound);
        console.log(`Round ${state.currentRound} complete: ${roundComplete}`);
        
        if (roundComplete) {
            showRoundCompletion();
        } else {
            showScreen('question-number-screen');
            initQuestionNumberScreen();
        }
    });
}

// ----- Round Completion Screen -----
function showRoundCompletion() {
    const title = document.getElementById('completion-title');
    const message = document.getElementById('completion-message');
    const nextBtn = document.getElementById('next-round-btn');
    
    title.textContent = `Round ${state.currentRound} Complete!`;
    message.textContent = 'All subjects and questions have been completed.';
    
    // Remove any existing event listeners by cloning and replacing
    const newBtn = nextBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(newBtn, nextBtn);
    
    // Determine next action
    if (state.currentRound < 3) {
        newBtn.textContent = `Start Round ${state.currentRound + 1}`;
        newBtn.addEventListener('click', () => safeNavigate(startNextRound));
    } else {
        newBtn.textContent = 'Finish Quiz';
        newBtn.addEventListener('click', () => safeNavigate(showFinalScreen));
    }
    
    showScreen('round-completion-screen');
}

function startNextRound() {
    state.currentRound++;
    console.log(`Starting Round ${state.currentRound}`);
    
    if (state.currentRound === 2) {
        console.log('Loading Round 2 - Visual Round');
        showScreen('subject-selection-screen');
        initSubjectSelectionScreen();
    } else if (state.currentRound === 3) {
        console.log('Loading Round 3 - Rapid Fire');
        showScreen('rapid-fire-rules-screen');
    }
}

// ----- Rapid Fire Rules Screen -----
function initRapidFireRulesScreen() {
    // Static content
}

// ----- Rapid Fire Set Selection Screen -----
function initRapidFireSetScreen() {
    const container = document.getElementById('set-grid');
    container.innerHTML = '';
    
    for (let i = 1; i <= 9; i++) {
        const btn = document.createElement('button');
        btn.className = 'btn set-btn';
        btn.textContent = `Set ${i}`;
        
        if (state.usedSets.has(i - 1)) { // 0-based index
            btn.disabled = true;
            btn.classList.add('used');
            btn.style.opacity = '0.3';
        } else {
            btn.onclick = () => safeNavigate(() => selectSet(i - 1));
        }
        
        container.appendChild(btn);
    }
}

function selectSet(setIndex) {
    state.usedSets.add(setIndex);
    state.currentSet = setIndex;
    state.currentQuestionIndex = 0;
    
    showScreen('rapid-fire-question-screen');
    initRapidFireQuestionScreen();
}

// ----- Rapid Fire Question Screen -----
function initRapidFireQuestionScreen() {
    const progress = document.getElementById('rapid-fire-progress');
    const questionText = document.getElementById('rapid-fire-question-text');
    const nextBtn = document.getElementById('rapid-fire-next-btn');
    
    const questions = quizData.rapidFire[state.currentSet];
    const currentQ = questions[state.currentQuestionIndex];
    
    console.log(`Rapid Fire - Set ${state.currentSet + 1}, Question ${state.currentQuestionIndex + 1}`);
    
    progress.textContent = `Question ${state.currentQuestionIndex + 1} of 5`;
    questionText.textContent = currentQ.q;
    
    // Clone button to remove old event listeners
    const newBtn = nextBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(newBtn, nextBtn);
    
    if (state.currentQuestionIndex < 4) {
        newBtn.textContent = 'Next Question';
        newBtn.addEventListener('click', () => safeNavigate(nextRapidFireQuestion));
    } else {
        newBtn.textContent = 'Show Answers';
        newBtn.addEventListener('click', () => safeNavigate(showRapidFireReview));
    }
}

function nextRapidFireQuestion() {
    console.log(`Moving to question ${state.currentQuestionIndex + 2}`);
    state.currentQuestionIndex++;
    initRapidFireQuestionScreen();
    // Reset navigation lock since we're not changing screens
    state.isNavigating = false;
}

// ----- Rapid Fire Review Screen -----
function initRapidFireReviewScreen() {
    const container = document.getElementById('rapid-fire-review-container');
    container.innerHTML = '';
    
    const questions = quizData.rapidFire[state.currentSet];
    
    questions.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'review-item';
        item.innerHTML = `
            <div class="review-question">${index + 1}. ${q.q}</div>
            <div class="review-answer">Answer: ${q.a}</div>
        `;
        container.appendChild(item);
    });
    
    // Update continue button
    const continueBtn = document.getElementById('rapid-fire-continue-btn');
    if (state.usedSets.size >= 9) {
        continueBtn.textContent = 'Finish Quiz';
        continueBtn.onclick = () => safeNavigate(showFinalScreen);
    } else {
        continueBtn.textContent = 'Back to Sets';
        continueBtn.onclick = () => safeNavigate(() => {
            showScreen('rapid-fire-set-screen');
            initRapidFireSetScreen();
        });
    }
}

function showRapidFireReview() {
    showScreen('rapid-fire-review-screen');
    initRapidFireReviewScreen();
}

// ----- Author Screen -----
function showAuthorScreen() {
    showScreen('author-screen');
}

function continueToFinal() {
    safeNavigate(() => {
        showScreen('final-screen');
    });
}

// ----- Final Screen -----
function showFinalScreen() {
    showScreen('final-screen');
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

function startQuiz() {
    safeNavigate(() => {
        showScreen('welcome-screen');
    });
}

function viewRules() {
    safeNavigate(() => {
        showScreen('rules-screen');
    });
}

function startRound1() {
    safeNavigate(() => {
        state.currentRound = 1;
        showScreen('subject-selection-screen');
        initSubjectSelectionScreen();
    });
}

function goToNextRound() {
    safeNavigate(() => {
        if (state.currentRound < 3) {
            state.currentRound++;
            if (state.currentRound === 3) {
                showScreen('rapid-fire-rules-screen');
            } else {
                showScreen('subject-selection-screen');
                initSubjectSelectionScreen();
            }
        }
    });
}

function goToPrevRound() {
    safeNavigate(() => {
        if (state.currentRound > 1) {
            state.currentRound--;
            showScreen('subject-selection-screen');
            initSubjectSelectionScreen();
        }
    });
}

function startRapidFire() {
    safeNavigate(() => {
        state.currentRound = 3;
        showScreen('rapid-fire-set-screen');
        initRapidFireSetScreen();
    });
}

function backToSubjects() {
    safeNavigate(() => {
        showScreen('subject-selection-screen');
        initSubjectSelectionScreen();
    });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // Space or Enter to activate focused buttons
    if (e.key === 'Enter' || e.key === ' ') {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.classList.contains('btn') && !activeElement.disabled) {
            e.preventDefault();
            activeElement.click();
        }
    }
    
    // Escape to go back (where applicable)
    if (e.key === 'Escape') {
        if (state.currentScreen === 'question-display-screen') {
            backToQuestionNumbers();
        } else if (state.currentScreen === 'question-number-screen') {
            backToSubjects();
        }
    }
});

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize first screen
    showScreen('banner-screen');
    
    // Attach global event listeners
    document.getElementById('start-btn').addEventListener('click', startQuiz);
    document.getElementById('view-rules-btn').addEventListener('click', viewRules);
    document.getElementById('start-round1-btn').addEventListener('click', startRound1);
    document.getElementById('back-to-subjects-btn').addEventListener('click', backToSubjects);
    document.getElementById('start-rapid-fire-btn').addEventListener('click', startRapidFire);
    document.getElementById('back-to-round2-btn').addEventListener('click', goToPrevRound);
    document.getElementById('prev-round-btn').addEventListener('click', goToPrevRound);
    document.getElementById('next-round-btn-nav').addEventListener('click', goToNextRound);
    document.getElementById('end-quiz-btn').addEventListener('click', showAuthorScreen);
    document.getElementById('author-continue-btn').addEventListener('click', continueToFinal);
    
    console.log('Quiz Application Loaded - Ready for offline use');
});

// Prevent accidental page refresh/navigation
window.addEventListener('beforeunload', (e) => {
    if (state.currentRound > 0) {
        e.preventDefault();
        e.returnValue = 'Quiz progress will be lost. Are you sure?';
    }
});
