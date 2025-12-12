/* ====== BASE STYLES ====== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f0f9f0;
    color: #1a3c27;
    line-height: 1.6;
    background-image: 
        radial-gradient(circle at 10% 20%, rgba(76, 175, 80, 0.05) 0%, transparent 20%),
        radial-gradient(circle at 90% 80%, rgba(56, 142, 60, 0.05) 0%, transparent 20%);
    min-height: 100vh;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
}

/* ====== HEADER ====== */
header {
    background: linear-gradient(135deg, #1b5e20 0%, #388e3c 100%);
    color: white;
    padding: 30px 0;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    text-align: center;
    position: relative;
    overflow: hidden;
}

header h1 {
    font-size: 2.8rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

header p {
    font-size: 1.3rem;
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
}

.university-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.2);
    padding: 15px;
    border-radius: 50%;
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
}

/* ====== NAVIGATION ====== */
nav {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.nav-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    list-style: none;
}

.nav-links a {
    color: #2e7d32;
    text-decoration: none;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 30px;
    transition: all 0.3s ease;
    border: 2px solid #c8e6c9;
}

.nav-links a:hover {
    background-color: #2e7d32;
    color: white;
    transform: translateY(-3px);
}

/* ====== BIOLOGY ANIMATION ====== */
.biology-animation {
    height: 200px;
    background: linear-gradient(180deg, #1a3c34 0%, #0d281c 100%);
    border-radius: 15px;
    margin: 30px 0;
    position: relative;
    overflow: hidden;
}

.cell-animation {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    animation: cell-pulse 4s infinite alternate;
}

.dna-helix {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
}

.dna-strand {
    position: absolute;
    width: 3px;
    height: 100%;
    background-color: #4fc3f7;
    left: 50%;
    transform: translateX(-50%);
    animation: dna-rotate 15s infinite linear;
}

.dna-base {
    position: absolute;
    width: 20px;
    height: 3px;
    background-color: #ff4081;
    left: 50%;
    transform: translateX(-50%);
}

.microscope {
    position: absolute;
    bottom: 20px;
    right: 50px;
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.3);
    animation: microscope-focus 5s infinite alternate;
}

/* ====== CONTENT TOGGLE ====== */
.content-toggle {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    gap: 20px;
}

.toggle-btn {
    background-color: white;
    color: #2e7d32;
    border: 2px solid #2e7d32;
    padding: 12px 25px;
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
}

.toggle-btn:hover {
    background-color: #e8f5e9;
    transform: translateY(-3px);
}

.toggle-btn.active {
    background-color: #2e7d32;
    color: white;
    box-shadow: 0 5px 15px rgba(46, 125, 50, 0.3);
}

/* ====== CONTENT SECTIONS ====== */
.content-section {
    display: none;
}

.content-section.active {
    display: block;
    animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ====== TITLES ====== */
.section-main-title {
    color: #1b5e20;
    margin: 30px 0 20px;
    text-align: center;
    font-size: 2.2rem;
}

.section-title {
    color: #1b5e20;
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.8rem;
}

.section-subtitle {
    text-align: center;
    color: #4a4a4a;
    margin-bottom: 30px;
}

/* ====== PRACTICALS GRID ====== */
.practicals-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
    margin-bottom: 40px;
}

.practical-card {
    background-color: white;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.4s ease;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.practical-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.practical-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #4caf50, #2e7d32);
}

.practical-icon {
    width: 80px;
    height: 80px;
    background-color: #e8f5e9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 2.2rem;
    color: #2e7d32;
    transition: all 0.3s ease;
}

.practical-card:hover .practical-icon {
    background-color: #2e7d32;
    color: white;
    transform: rotate(15deg) scale(1.1);
}

.practical-card h3 {
    color: #1b5e20;
    margin-bottom: 10px;
    font-size: 1.5rem;
}

.practical-card p {
    color: #4a4a4a;
    font-size: 0.95rem;
    margin-bottom: 20px;
}

.card-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.view-btn, .quiz-btn {
    display: inline-block;
    padding: 10px 15px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
}

.view-btn {
    background-color: #4caf50;
    color: white;
}

.quiz-btn {
    background-color: #2196f3;
    color: white;
}

.view-btn:hover, .quiz-btn:hover {
    transform: scale(1.05);
}

.view-btn:hover {
    background-color: #2e7d32;
}

.quiz-btn:hover {
    background-color: #1976d2;
}

/* ====== CONTENT BOXES ====== */
.content-box {
    background-color: white;
    border-radius: 15px;
    padding: 30px;
    margin: 40px 0;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.feature-card {
    background-color: #f1f8e9;
    padding: 20px;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h4 {
    color: #558b2f;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.feature-icon {
    font-size: 2.5rem;
    color: #2e7d32;
    margin-bottom: 10px;
    text-align: center;
}

/* ====== QUIZ SECTION ====== */
.quiz-section {
    background-color: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.labs-nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
}

.lab-btn {
    background-color: white;
    color: #2e7d32;
    border: 2px solid #4caf50;
    padding: 10px 18px;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.lab-btn:hover {
    background-color: #4caf50;
    color: white;
    transform: translateY(-3px);
}

.lab-btn.active {
    background-color: #2e7d32;
    color: white;
    box-shadow: 0 5px 10px rgba(52, 152, 219, 0.3);
}

.lab-content {
    display: none;
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 25px;
    margin-bottom: 30px;
    border-left: 4px solid #4caf50;
}

.lab-content.active {
    display: block;
}

.lab-title {
    color: #1b5e20;
    font-size: 1.8rem;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 3px solid #4caf50;
    display: flex;
    align-items: center;
    gap: 10px;
}

.lab-description {
    background-color: #e8f5e9;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 25px;
    font-style: italic;
    border-left: 4px solid #1abc9c;
}

/* ====== QUESTION STYLES ====== */
.question-section {
    margin-bottom: 30px;
}

.question-card {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    border-left: 4px solid #3498db;
    transition: transform 0.3s ease;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.question-card:hover {
    transform: translateX(5px);
}

.question-text {
    font-weight: 600;
    margin-bottom: 15px;
    font-size: 1.1rem;
    color: #2c3e50;
}

.options {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    background-color: #f8f9fa;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 2px solid transparent;
}

.option:hover {
    background-color: #e8f4fc;
    border-color: #3498db;
}

.option.selected {
    background-color: #d6eaf8;
    border-color: #3498db;
}

.option.correct {
    background-color: #d5f4e6;
    border-color: #27ae60;
}

.option.incorrect {
    background-color: #fadbd8;
    border-color: #e74c3c;
}

.option-letter {
    background-color: #4caf50;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.option.selected .option-letter {
    background-color: #2e7d32;
}

/* ====== FILL IN BLANKS ====== */
.blank-input {
    padding: 8px 12px;
    border: 2px solid #ddd;
    border-radius: 5px;
    width: 200px;
    font-size: 1rem;
    margin: 0 5px;
}

.blank-input:focus {
    outline: none;
    border-color: #4caf50;
}

.blank-input.correct {
    border-color: #27ae60;
    background-color: #d5f4e6;
}

.blank-input.incorrect {
    border-color: #e74c3c;
    background-color: #fadbd8;
}

/* ====== TRUE/FALSE ====== */
.true-false-options {
    display: flex;
    gap: 20px;
    margin-top: 10px;
}

.true-false-btn {
    padding: 10px 25px;
    border: 2px solid #4caf50;
    border-radius: 8px;
    background-color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.true-false-btn:hover {
    background-color: #e8f5e9;
}

.true-false-btn.selected {
    background-color: #4caf50;
    color: white;
}

.true-false-btn.correct {
    background-color: #27ae60;
    color: white;
    border-color: #27ae60;
}

.true-false-btn.incorrect {
    background-color: #e74c3c;
    color: white;
    border-color: #e74c3c;
}

/* ====== ACTION BUTTONS ====== */
.action-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.btn {
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.check-btn {
    background-color: #1abc9c;
    color: white;
}

.check-btn:hover {
    background-color: #16a085;
    transform: translateY(-3px);
}

.reset-btn {
    background-color: #f8f9fa;
    color: #2c3e50;
    border: 2px solid #ddd;
}

.reset-btn:hover {
    background-color: #e0e0e0;
}

/* ====== SCORE BOARD ====== */
.score-board {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    text-align: center;
    margin-top: 30px;
    border-top: 5px solid #1abc9c;
}

.score-title {
    color: #1b5e20;
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.score-display {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2e7d32;
    margin-bottom: 10px;
}

.score-details {
    color: #7f8c8d;
    font-size: 1rem;
}

.progress-bar {
    height: 10px;
    background-color: #ecf0f1;
    border-radius: 5px;
    margin: 15px 0;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background-color: #1abc9c;
    width: 0%;
    transition: width 0.5s ease;
}

/* ====== FEEDBACK ====== */
.feedback {
    padding: 15px;
    border-radius: 8px;
    margin-top: 15px;
    display: none;
}

.feedback.correct {
    background-color: #d5f4e6;
    color: #27ae60;
    border-left: 4px solid #27ae60;
}

.feedback.incorrect {
    background-color: #fadbd8;
    color: #e74c3c;
    border-left: 4px solid #e74c3c;
}

.feedback.show {
    display: block;
    animation: fadeIn 0.5s ease;
}

.feedback-icon {
    margin-right: 10px;
}

/* ====== SUMMARY SECTION ====== */
.summary-section {
    background-color: white;
    border-radius: 15px;
    padding: 30px;
    margin: 40px 0;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    text-align: center;
    border-left: 5px solid #ff9800;
    border-right: 5px solid #ff9800;
}

.summary-title {
    color: #e65100;
    font-size: 1.8rem;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.summary-description {
    color: #4a4a4a;
    margin-bottom: 25px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
}

.drive-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: linear-gradient(135deg, #4285F4 0%, #0F9D58 100%);
    color: white;
    padding: 15px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(66, 133, 244, 0.3);
}

.drive-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(66, 133, 244, 0.4);
    background: linear-gradient(135deg, #3367D6 0%, #0B8043 100%);
}

.drive-btn i {
    font-size: 1.3rem;
}

.summary-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 25px;
    font-size: 1.8rem;
    color: #4285F4;
}

.summary-icons i {
    transition: all 0.3s ease;
}

.summary-icons i:hover {
    transform: translateY(-5px) scale(1.1);
}

.fa-file-pdf { color: #FF3D00; }
.fa-file-word { color: #2B579A; }
.fa-file-powerpoint { color: #D24726; }
.fa-file-excel { color: #217346; }
.fa-file-image { color: #4CAF50; }

/* ====== NOTICE BOX ====== */
.notice-box {
    background-color: #FFF8E1;
    border-left: 4px solid #FFC107;
    padding: 15px 20px;
    margin-top: 20px;
    border-radius: 5px;
    text-align: left;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.notice-title {
    color: #FF8F00;
    font-weight: 600;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 8px;
}

/* ====== FOOTER ====== */
footer {
    text-align: center;
    padding: 30px;
    margin-top: 50px;
    border-top: 1px solid #c8e6c9;
    color: #2e7d32;
    font-size: 0.95rem;
    background-color: white;
    border-radius: 10px;
}

.footer-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
    font-size: 1.8rem;
    color: #4caf50;
}

.footer-icons i {
    transition: all 0.3s ease;
}

.footer-icons i:hover {
    color: #2e7d32;
    transform: translateY(-5px);
}

/* ====== ANIMATIONS ====== */
@keyframes cell-pulse {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
    100% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
}

@keyframes dna-rotate {
    0% { transform: translateX(-50%) rotate(0deg); }
    100% { transform: translateX(-50%) rotate(360deg); }
}

@keyframes microscope-focus {
    0% { transform: scale(1); opacity: 0.3; }
    100% { transform: scale(1.1); opacity: 0.7; }
}

/* ====== LOADING ANIMATION ====== */
.loading-cell {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    z-index: 1000;
}

.loading-cell div {
    position: absolute;
    border: 4px solid #4caf50;
    opacity: 1;
    border-radius: 50%;
    animation: loading-cell 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.loading-cell div:nth-child(2) {
    animation-delay: -0.5s;
}

@keyframes loading-cell {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
}

/* ====== BACK TO TOP ====== */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #4caf50;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background-color: #2e7d32;
    transform: translateY(-5px);
}

/* ====== RESPONSIVE DESIGN ====== */
@media (max-width: 992px) {
    .practicals-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
}

@media (max-width: 768px) {
    header h1 {
        font-size: 2.2rem;
    }
    
    .university-badge {
        position: relative;
        top: 0;
        right: 0;
        margin: 15px auto;
    }
    
    .nav-links {
        flex-direction: column;
        align-items: center;
    }
    
    .nav-links a {
        width: 80%;
        text-align: center;
    }
    
    .practicals-grid {
        grid-template-columns: 1fr;
    }
    
    .content-toggle {
        flex-direction: column;
        align-items: center;
    }
    
    .toggle-btn {
        width: 100%;
        justify-content: center;
    }
    
    .labs-nav {
        flex-direction: column;
        align-items: center;
    }
    
    .lab-btn {
        width: 100%;
        justify-content: center;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
    
    .action-buttons {
        flex-direction: column;
        gap: 10px;
    }
    
    .btn {
        width: 100%;
        justify-content: center;
    }
    
    .true-false-options {
        flex-direction: column;
    }
    
    .blank-input {
        width: 100%;
        margin: 10px 0;
    }
    
    .card-buttons {
        flex-direction: column;
        gap: 10px;
    }
    
    .view-btn, .quiz-btn {
        width: 100%;
        text-align: center;
    }
    
    .drive-btn {
        padding: 12px 20px;
        font-size: 1rem;
    }
    
    .summary-title {
        font-size: 1.5rem;
        flex-direction: column;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 10px;
    }
    
    header {
        padding: 20px 0;
    }
    
    header h1 {
        font-size: 1.8rem;
    }
    
    .section-main-title {
        font-size: 1.6rem;
    }
    
    .section-title {
        font-size: 1.4rem;
    }
}