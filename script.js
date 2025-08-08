const types = ["Risposta Multipla", "Domande aperte", "Video", "Immagini"];
const categories = ["Serie Tv e film", "Posti da vedere", "VIP", "Animatori"];

const questions = [
  // Serie Tv e film
  [
    // Risposta Multipla
    [
      { question: "Quale sport pratica Amaia nella serie Tv 'Olympo'?", answers: ["Nuoto sincronizzato", "Atletica leggera", "Danza sportiva", "Ginnastica artistica"], correct: 0 },
      { question: "Qual è il nome del protagonista interpretato da Leonardo Pieraccioni nel film 'Il Ciclone'?", answers: ["Massimo", "Osvaldo", "Libero", "Levante"], correct: 3 },
      { question: "Qual è la destinazione finale del viaggio nel film 3 uomini ed una gamba?", answers: ["Gela", "Pizzo Calabro", "Gallipoli", "Non avevano una destinazione precisa"], correct: 2 },
      { question: "Qual è il colore caratteristico della Meth nella serie Tv 'Breaking Bad'?", answers: ["Nero","Giallo","Verde","Blu"], correct: 3 }
    ],
    // Domande aperte
    [
      { question: "Chi è la prima figlia dei Bridgerton?", answers: [], correct: "Daphne" },
      { question: "Quante gemme compongono il guanto dell'infinito?", answers: [], correct: "6" },
      { question: "Chi distrugge l'anello del potere?", answers: [], correct: "Gollum" },
      { question: "Quanti sono i partecipanti nella prima stagione di Squid Game?", answers: [], correct: "456" }
    ],
    // Video
    [
      { question: "Come si chiamano i personaggi interpretati in questa scena? Nome e cognome", videoUrl: "src/video1.mp4", answers: [], correct: "" },
      { question: "Canta la prossima strofa della canzone", videoUrl: "src/video2.mp4", answers: [], correct: "" },
      { question: "Come continua questa scena", videoUrl: "src/video3.mp4", answers: [], correct: "" },
      { question: "Che cos'è la roulette indiana", videoUrl: "src/video4.mp4", answers: [], correct: "" }
    ],
    // Immagini
    [
      { question: "Come si chiama questo personaggio del trono di spade'?", imageUrl: "src/img1.jpg", answers: [], correct: "Il re della Notte" },
      { question: "Che cosa rappresenta questo simbolo e di quali parti di compone?", imageUrl: "src/img2.jpg", answers: [], correct: "Doni della morte: bacchetta di sambuco, pietra della resurrezione e mantello dell'invisibilità" },
      { question: "Quali sono almeno 2 nomi di questo personaggio di stranger things?", imageUrl: "src/img3.jpg", answers: [], correct: "Vecna, 001, henry" },
      { question: "Come si chiama questo infetto nella serie The last of us", imageUrl: "src/img4.jpg", answers: [], correct: "Clicker" }
    ]
  ],
  // Posti da vedere
  [
    // Risposta Multipla
    [
      { question: "In quale paese è vietato tirare lo sciaquone dopo le 22:00?", answers: ["Finlandia", "Portogallo", "Islanda", "Svizzera"], correct: 3 },
      { question: "In quale paese dimenticare il compleanno della propria moglie può portare a gravi conseguenze legali?", answers: ["Samoa", "SudAfrica", "Norvegia", "Turchia"], correct: 0 },
      { question: "In quale paese è vietato cantare my way al karaoke?", answers: ["Indonesia", "Messico", "China", "Filippine"], correct: 3 },
      { question: "In quale stato degli Stati Uniti è illegale baciare una donna in pubblico se si hanno i baffi?", answers: ["Wyoming", "Iowa", "Ohio", "Nebraska"], correct: 1 }
    ],
    // Domande aperte
    [
      { question: "Dove si trova il tempio dei topi?", answers: [], correct: "India" },
      { question: "DOve si trova l'isola dei conigli?", answers: [], correct: "Sicilia/Giappone" },
      { question: "Dove si trova Pig Beach, spiaggia abitata dai maiali?", answers: [], correct: "Thailandia" },
      { question: "Cji sono gli abitanti di Queimada Grande?", answers: [], correct: "I serpenti" }
    ],
    // Video
    [
      { question: "Dove si trova questa famosa altalena?", videoUrl: "src/video20.mp4", answers: [], correct: "Bali" },
      { question: "Come si chiama e dove si trova questo posto?", videoUrl: "src/video21.mp4", answers: [], correct: "Caletta, Lerici" },
      { question: "In quale paese si trova questo parco naturale?", videoUrl: "src/video22.mp4", answers: [], correct: "Brasile" },
      { question: "Come si chiama e dove si trova questo famosissimo posto?", videoUrl: "src/video23.mp4", answers: [], correct: "Cocoricò, Rimini" }
    ],
    // Immagini
    [
      { question: "Dove si trova il famoso Cristo degli Abissi? (regione o città)", imageUrl: "src/img20.jpg", answers: [], correct: "Liguria, Portofino, Camogli" },
      { question: "Dove si trova il famoso parco dei mostri? (regione o città)", imageUrl: "src/img21.jpg", answers: [], correct: "Lazio, Bomarzo" },
      { question: "Dove si trova questa bellissima piazza affacciata sul mare? (regione o città)", imageUrl: "src/img22.jpg", answers: [], correct: "Sicilia, Marzamemi" },
      { question: "Dove si trova il bellissimo parco dei Tarocchi? (regione o città)", imageUrl: "src/img23.jpg", answers: [], correct: "Toscana, Capalbio" }
    ]
  ],
  // VIP
  [
    // Risposta Multipla
    [
      { question: "Quanti figli hanno in comune Angelina Jolie e Brad Pitt?", answers: ["6", "4", "3", "1"], correct: 0 },
      { question: "Come si chiama lo scandalo in cui è stato coinvolto Fabrizio Corona", answers: ["Vallettopoli", "Tangentopoli", "Monopoli", "Paperopoli"], correct: 0 },
      { question: "Chi ha spoilerato il nome del figlio di ultimo?", answers: ["Ultimo", "Roberto Vecchioni", "Antonello Venditti", "Non si sa ancora"], correct: 2 },
      { question: "Qual'è il vero nome di Gue Pequeno?", answers: ["Fabio Rizzo", "Emiliano Giambelli", "Emanuele Palumbo", "Cosimo Fini"], correct: 3 }
    ],
    // Domande aperte
    [
      { question: "Come si chiama il documentario di Ilary Blasi uscito su Netflix?", answers: [], correct: "Unica" },
      { question: "Chi è il creatore del marchio Rare Beauty", answers: [], correct: "Selena Gomez" },
      { question: "Chi è la persona più seguita su instagram?", answers: [], correct: "Cristiano Ronaldo" },
      { question: "Qual è la canzone con cui ha sfondato Anna Pepe?", answers: [], correct: "Bando" }
    ],
    // Video
    [
      { question: "Chi è quello che stappa la birra con i denti in questo videoclip di Alfa?", videoUrl: "src/video6.mp4", answers: [], correct: "" },
      { question: "Di che marca è questa borsetta?", videoUrl: "src/video7.mp4", answers: [], correct: "" },
      { question: "Come finisce questo video", videoUrl: "src/video9.mp4", answers: [], correct: "" },
      { question: "Chi sono i protagonisti di questo video?", videoUrl: "src/video10.mp4", answers: [], correct: "" }
    ],
    // Immagini
    [
      { question: "Chi è?", imageUrl: "src/img6.jpg", answers: [], correct: "Laura Pausini" },
      { question: "Chi è?", imageUrl: "src/img8.jpg", answers: [], correct: "Belen Rodriguez" },
      { question: "Chi è?", imageUrl: "src/img9.jpg", answers: [], correct: "Emma Marrone" },
      { question: "Chi è?", imageUrl: "src/img10.jpg", answers: [], correct: "Stefano de Martino" }
    ]
  ],
  // Animatori
  
];

const animatoriQuestions = [
  { question: "A quanti concerti è stata la Sharon quest'anno fino ad ora?", correct: "4" },
  { question: "Quale sport ha praticato Simone per 14 anni?", correct: "Break dance" },
  { question: "Quanti tatuaggi ha Marco?", correct: "20" },
  { question: "Dove si è laureato Tonelli in triennale?", correct: "Genova" },
  { question: "Qual è stato l'ultimo lavoro di Enrico?", correct: "Miscelatore di vernici" },
  { question: "Come si chiama il cane di Lele?", correct: "Ettore" },
  { question: "Come si chiamava il posto in cui si svolgevano i campi estivi prima di Cassego?", correct: "Belpiano" },
  { question: "Come si chiamavano i pesci rossi di Enrico?", correct: "Sushi e Sashimi" },
  { question: "Come si chiama la sorella della Chiara", correct: "Cecilia" },
  { question: "Quale lavoro svolge attualmente Marco Spinetta, storico animatore di Cassego?", correct: "Radiologo interventista" }
];

let selectedGroup = 0;
const groupPoints = [0, 0, 0];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.group-box').forEach((box, idx) => {
    box.addEventListener('click', () => {
      document.querySelectorAll('.group-box').forEach(b => b.classList.remove('selected'));
      box.classList.add('selected');
      selectedGroup = idx;
    });
  });
  document.querySelectorAll('.group-box')[0].classList.add('selected');
});

buildTable();
buildAnimatoriTable();

function buildTable() {
  const tbody = document.querySelector('#questionTable tbody');
  tbody.innerHTML = '';
  for (let row = 0; row < 4; row++) {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.className = 'type-label align-middle';
    th.textContent = types[row];
    tr.appendChild(th);

    for (let col = 0; col < 3; col++) { // Only 3 columns
      const td = document.createElement('td');
      td.className = 'p-0';
      const cellDiv = document.createElement('div');
      cellDiv.className = 'cell-questions';
      for (let q = 0; q < 4; q++) {
        const mini = document.createElement('div');
        mini.className = 'question-mini';
        mini.textContent = `Q${q + 1}`;
        mini.dataset.row = row;
        mini.dataset.col = col;
        mini.dataset.q = q;
        mini.addEventListener('click', (e) => {
          e.stopPropagation();
          openModal(mini, row, col, q);
        });
        cellDiv.appendChild(mini);
      }
      td.appendChild(cellDiv);
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}



let currentMini = null;
let currentRow = null;
let currentCol = null;
let currentQIndex = null;
const modal = new bootstrap.Modal(document.getElementById('questionModal'));

document.getElementById('questionModal').addEventListener('hide.bs.modal', () => {
  const video = document.getElementById('questionVideo');
  if (video) {
    video.pause();
    video.currentTime = 0;
    video.src = "";
  }
});

function openModal(mini, row, col, qIndex) {
  // SAFETY: get the question object safely
  const q = questions[col] && questions[col][row] && questions[col][row][qIndex];
    console.log('openModal', { row, col, qIndex, q }); // Debug log

  if (!q) return; // If question is missing, do nothing

  currentMini = mini;
  currentRow = row;
  currentCol = col;
  currentQIndex = qIndex;
  const modalButtons = document.getElementById('modalButtons');

  let mediaHtml = "";
  if (q.videoUrl) {
    mediaHtml = `<video id="questionVideo" src="${q.videoUrl}" controls autoplay style="width:100vw; height:70vh; border-radius:1rem; box-shadow:0 4px 32px #0d6efd22; object-fit:contain;"></video>`;
  } else if (q.imageUrl) {
    mediaHtml = `<img src="${q.imageUrl}" alt="Question image" style="max-width:90vw; max-height:60vh; border-radius:1rem; box-shadow:0 4px 32px #0d6efd22;">`;
  }

  modalButtons.innerHTML = `
    <div class="fullscreen-question d-flex flex-column align-items-center justify-content-center" style="min-height:70vh;">
      <div class="big-question">${q.question}</div>
      ${mediaHtml}
      <div id="timer" class="fs-4 text-danger mt-3"></div>
    </div>
  `;
  modal.show();

  if (q.videoUrl) {
    const video = document.getElementById('questionVideo');
    let timerStarted = false;
    video.addEventListener('pause', () => {
      if (!timerStarted) {
        showAnswers(q);
        startTimer(15);
        timerStarted = true;
      }
    });
  } else {
    setTimeout(() => {
      showAnswers(q);
      startTimer(15);
    }, 3000);
  }
}

function showAnswers(q) {
  const modalButtons = document.getElementById('modalButtons');
  let html = `<div class="big-question mb-3">${q.question}</div>`;

  if (q.videoUrl) {
    html += `<video src="${q.videoUrl}" controls style="width:100vw; height:35vh; border-radius:1rem; box-shadow:0 4px 32px #0d6efd22; object-fit:contain;"></video>`;
  } else if (q.imageUrl) {
    html += `<img src="${q.imageUrl}" alt="Question image" style="max-width:90vw; max-height:40vh; border-radius:1rem; box-shadow:0 4px 32px #0d6efd22;">`;
  }

  html += `<div id="timer" class="fs-4 text-danger mt-3"></div>`;

  if (!q.answers || q.answers.length === 0 || q.answers.every(a => !a) || q.answers.length === 4 && q.answers.every(a => a === "A" || a === "B" || a === "C" || a === "D")) {
    html += `<button id="showOpenAnswer" class="btn btn-lg btn-warning m-2 px-4">Mostra risposta</button>
             <div id="openAnswerArea" class="mt-4"></div>`;
    modalButtons.innerHTML = html;
    startTimer(15);
    document.getElementById('showOpenAnswer').onclick = () => {
      const answerText = q.correct ? `<div class="big-answer mb-3"><strong>Risposta corretta:</strong> ${q.correct}</div>` : "";
      document.getElementById('openAnswerArea').innerHTML = `
        ${answerText}
        <button class="btn btn-success m-2 px-4" id="openCorrect">Corretto</button>
        <button class="btn btn-danger m-2 px-4" id="openWrong">Sbagliato</button>
      `;
      document.getElementById('showOpenAnswer').disabled = true;
      stopTimer();
      document.getElementById('openCorrect').onclick = () => {
        selectAnswer('open-correct');
        stopTimer();
      };
      document.getElementById('openWrong').onclick = () => {
        selectAnswer('open-wrong');
        stopTimer();
      };
    };
    return;
  }

  modalButtons.innerHTML = html;
  q.answers.forEach((answer, idx) => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-lg btn-outline-primary m-2 px-4';
    btn.textContent = answer;
    btn.onclick = () => {
      selectAnswer(idx);
      stopTimer();
    };
    modalButtons.appendChild(btn);
  });
  startTimer(15);
}

let timerInterval = null;
let timeLeft = 15;

function startTimer(duration) {
  timeLeft = duration;
  const timerDiv = document.getElementById('timer');
  if (timerDiv) timerDiv.textContent = `⏳ ${timeLeft}`;
  stopTimer();
  timerInterval = setInterval(() => {
    timeLeft--;
    if (timerDiv) timerDiv.textContent = `⏳ ${timeLeft}`;
    if (timeLeft <= 0) {
      stopTimer();
      if (timerDiv) timerDiv.textContent = "⏰ Tempo scaduto!";
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function selectAnswer(selectedIdx) {
  let q;
  // If Animatori modal is open, use animatoriQuestions
  if (currentCol === null && currentRow === null) {
    q = animatoriQuestions[currentQIndex];
  } else {
    q = questions[currentCol][currentRow][currentQIndex];
  }
  currentMini.textContent = selectedGroup + 1;
  currentMini.classList.remove('correct-answer', 'wrong-answer');
  if (selectedIdx === 'open-correct' || selectedIdx === q.correct) {
    currentMini.classList.add('correct-answer');
    groupPoints[selectedGroup] += 1;
    document.getElementById(`group-points-${selectedGroup}`).textContent = groupPoints[selectedGroup];
  } else {
    currentMini.classList.add('wrong-answer');
  }
  modal.hide();
  const groupBoxes = document.querySelectorAll('.group-box');
  groupBoxes[selectedGroup].classList.remove('selected');
  selectedGroup = (selectedGroup + 1) % groupBoxes.length;
  groupBoxes[selectedGroup].classList.add('selected');
}

function buildAnimatoriTable() {
  const tbody = document.querySelector('#animatoriTable tbody');
  tbody.innerHTML = '';
  let qIndex = 0;
  for (let row = 0; row < 5; row++) {
    const tr = document.createElement('tr');
    for (let col = 0; col < 2; col++) {
  const td = document.createElement('td');
  td.className = 'p-0 align-middle';
  if (qIndex < animatoriQuestions.length) {
    const mini = document.createElement('div');
    mini.className = 'question-mini';
    mini.textContent = "Q" + (qIndex + 1);
    // Capture the current value of qIndex
    const thisIndex = qIndex;
    mini.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log('Animatori cell clicked:', { qIndex: thisIndex, question: animatoriQuestions[thisIndex] });
      openAnimatoriModal(mini, thisIndex);
    });
    td.appendChild(mini);
    qIndex++;
  }
  tr.appendChild(td); // Always append the cell, even if empty
}
    tbody.appendChild(tr);
  }
}

function openAnimatoriModal(mini, qIndex) {
  const q = animatoriQuestions[qIndex];
  console.log('openAnimatoriModal called:', { mini, qIndex, q });
  if (!q) return;
  currentMini = mini;
  currentQIndex = qIndex;
  currentCol = null;
  currentRow = null;
  const modalButtons = document.getElementById('modalButtons');
  modalButtons.innerHTML = `
    <div class="fullscreen-question d-flex flex-column align-items-center justify-content-center" style="min-height:70vh;">
      <div class="big-question">${q.question}</div>
      <div id="timer" class="fs-4 text-danger mt-3"></div>
      <button id="showOpenAnswer" class="btn btn-lg btn-warning m-2 px-4">Mostra risposta</button>
      <div id="openAnswerArea" class="mt-4"></div>
    </div>
  `;
  modal.show();
  startTimer(30);
  document.getElementById('showOpenAnswer').onclick = () => {
    console.log('Show open answer clicked for Animatori:', { q });
    const answerText = q.correct ? `<div class="big-answer mb-3"><strong>Risposta corretta:</strong> ${q.correct}</div>` : "";
    document.getElementById('openAnswerArea').innerHTML = `
      ${answerText}
      <button class="btn btn-success m-2 px-4" id="openCorrect">Corretto</button>
      <button class="btn btn-danger m-2 px-4" id="openWrong">Sbagliato</button>
    `;
    document.getElementById('showOpenAnswer').disabled = true;
    stopTimer();
    document.getElementById('openCorrect').onclick = () => {
      console.log('Animatori marked correct:', { qIndex });
      selectAnswer('open-correct');
      stopTimer();
    };
    document.getElementById('openWrong').onclick = () => {
      console.log('Animatori marked wrong:', { qIndex });
      selectAnswer('open-wrong');
      stopTimer();
    };
  };
}