const questions = [
    {
        question: "Qual é a principal função de um processador em um computador?",
        answers: ["Armazenar dados", "Executar instruções", "Armazenar energia", "Fornecer conectividade de rede"],
        correctAnswer: 1
    },
    {
        question: "O que significa a sigla 'BIOS' em informática?",
        answers: ["Base Input/Output System", "Binary Internal Operating System", "Basic Integrated Operating System", "Binary Input/Output Standard"],
        correctAnswer: 0
    },
    {
        question: "Qual é a função da memória RAM em um computador?",
        answers: ["Armazenar permanentemente os dados", "Armazenar dados temporários para acesso rápido", "Executar programas", "Fornecer energia ao computador"],
        correctAnswer: 1
    },
    {
        question: "Quando se deve limpar os componentes internos de um computador?",
        answers: ["Sempre que houver acúmulo de poeira", "Uma vez por ano", "Nunca", "Quando o computador começar a falhar"],
        correctAnswer: 0
    },
    {
        question: "Qual é a principal razão para o computador travar?",
        answers: ["Falta de espaço no disco rígido", "Excesso de memória RAM", "Baixa taxa de download", "Temperatura interna alta"],
        correctAnswer: 3
    },
    {
        question: "Qual componente do computador é responsável por gerar a imagem na tela?",
        answers: ["Placa-mãe", "Placa de vídeo", "Memória RAM", "Processador"],
        correctAnswer: 1
    },
    {
        question: "O que é necessário para instalar um novo sistema operacional em um computador?",
        answers: ["Somente o processador", "Uma boa conexão com a internet", "Um dispositivo de instalação como CD/DVD ou pen drive", "Memória RAM com mais de 8GB"],
        correctAnswer: 2
    },
    {
        question: "Como você pode proteger um computador contra vírus?",
        answers: ["Desconectando da internet", "Usando um antivírus", "Desinstalando todos os programas", "Instalando mais memória RAM"],
        correctAnswer: 1
    },
    {
        question: "O que é necessário para aumentar a velocidade de um computador?",
        answers: ["Trocar o processador por um mais rápido", "Aumentar a memória RAM", "Instalar mais ventiladores", "Trocar o monitor"],
        correctAnswer: 1
    },
    {
        question: "O que significa o termo 'overclocking'?",
        answers: ["Aumento da capacidade de armazenamento", "Aumento da frequência do processador", "Aumento da memória RAM", "Aumento da capacidade gráfica"],
        correctAnswer: 1
    },
    {
        question: "O que é a placa-mãe de um computador?",
        answers: ["A peça que armazena os dados", "A peça que conecta todos os componentes internos", "O componente responsável pela imagem", "A peça que armazena a energia"],
        correctAnswer: 1
    },
    {
        question: "Qual é o propósito do cooler em um computador?",
        answers: ["Armazenar dados", "Proteger contra vírus", "Controlar a temperatura do processador", "Aumentar a velocidade de processamento"],
        correctAnswer: 2
    },
    {
        question: "O que é um 'SSD'?",
        answers: ["Disco rígido com movimento", "Dispositivo de armazenamento de estado sólido", "Fonte de alimentação do computador", "Placa gráfica de alto desempenho"],
        correctAnswer: 1
    },
    {
        question: "Qual tipo de cabo conecta a placa-mãe ao processador?",
        answers: ["Cabo SATA", "Cabo VGA", "Cabo de alimentação", "Soquete de CPU"],
        correctAnswer: 3
    },
    {
        question: "O que pode causar o superaquecimento do computador?",
        answers: ["Excesso de poeira", "Uso de programas pesados", "Falta de ventilação", "Todas as alternativas anteriores"],
        correctAnswer: 3
    },
    {
        question: "O que é o formato ATX em uma placa-mãe?",
        answers: ["Tamanho de disco rígido", "Padrão de design para placas-mãe", "Modelo de processador", "Tipo de memória RAM"],
        correctAnswer: 1
    },
    {
        question: "O que é a função 'defrag' no sistema operacional?",
        answers: ["Reiniciar o sistema", "Compactar arquivos", "Organizar os dados no disco rígido", "Instalar atualizações"],
        correctAnswer: 2
    },
    {
        question: "Qual é o principal objetivo de um antivírus?",
        answers: ["Melhorar a velocidade do computador", "Prevenir ataques de hackers", "Proteger contra malware e vírus", "Aumentar a memória RAM"],
        correctAnswer: 2
    },
    {
        question: "Para que serve a função 'reset' em um computador?",
        answers: ["Reiniciar o computador", "Apagar arquivos temporários", "Formatar o disco rígido", "Instalar drivers"],
        correctAnswer: 0
    },
    {
        question: "Qual é o sistema operacional mais utilizado no mundo?",
        answers: ["Mac OS", "Linux", "Windows", "Android"],
        correctAnswer: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 180;
let countdownInterval;
let blinkInterval;
const timerElement = document.getElementById('timer');
const questionText = document.getElementById('question-text');
const answerButtons = document.querySelectorAll('.answer-btn');
const finishScreen = document.getElementById('finish');
const resultScreen = document.getElementById('result');

function startQuiz() {
    startTimer();
    loadQuestion();
}

function startTimer() {
    countdownInterval = setInterval(() => {
        timer--;
        timerElement.textContent = `${timer} segundos restantes`;

        if (timer <= 10 && !document.body.classList.contains('blink')) {
            document.body.classList.add('blink');
        }

        if (timer <= 0) {
            clearInterval(countdownInterval);

            // Exibe a imagem de tempo esgotado
            const questionImageElement = document.getElementById('question-image');
            questionImageElement.src = '../images/tempoesgotado.png';

            // Exibe a tela de finalização de quiz
            finishScreen.style.display = 'block';
            document.getElementById('question-container').style.display = 'none';

            // Adiciona um botão para voltar ao index.html
            const backButton = document.createElement('button');
            backButton.textContent = 'Reiniciar Quiz';
            backButton.classList.add('answer-btn'); // Aplica a classe de estilização existente
            backButton.onclick = () => {
                window.location.href = '../index.html'; // Redireciona para o index.html
            };

            // Adiciona o botão à tela de finalização
            finishScreen.appendChild(backButton);
        }
    }, 1000);
}

const questionImages = [
    '../images/processador.webp',   // Imagem para a primeira pergunta
    '../images/bios.jpg',          // Imagem para a segunda pergunta
    '../images/memoria-ram.jfif',   // Imagem para a terceira pergunta
    '../images/limpeza.jfif',       // Imagem para a quarta pergunta
    '../images/computador-travando.jfif', // Imagem para a quinta pergunta
    '../images/placa-video.jfif',   // Imagem para a sexta pergunta
    '../images/instalar-os.webp',   // Imagem para a sétima pergunta
    '../images/proteger-virus.jfif',// Imagem para a oitava pergunta
    '../images/aumentar-velocidade.jfif', // Imagem para a nona pergunta
    '../images/overclocking.jfif',  // Imagem para a décima pergunta
    '../images/placa-mae.jfif',     // Imagem para a décima primeira pergunta
    '../images/cooler.jfif',        // Imagem para a décima segunda pergunta
    '../images/ssd.jfif',           // Imagem para a décima terceira pergunta
    '../images/cabo-cpu.jfif',      // Imagem para a décima quarta pergunta
    '../images/superaquecimento.jfif', // Imagem para a décima quinta pergunta
    '../images/atx.jfif',           // Imagem para a décima sexta pergunta
    '../images/defrag.jfif',        // Imagem para a décima sétima pergunta
    '../images/antivirus.jfif',     // Imagem para a décima oitava pergunta
    '../images/reset.png',         // Imagem para a décima nona pergunta
    '../images/sistema-operacional.jfif', // Imagem para a vigésima pergunta
    '../images/parabens.webp'
];

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];

        // Atualiza o número da pergunta
        const questionNumberElement = document.getElementById('question-number');
        questionNumberElement.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;

        // Carrega a pergunta e as respostas
        questionText.textContent = question.question;
        answerButtons.forEach((btn, index) => {
            btn.textContent = question.answers[index];
            btn.onclick = () => handleAnswer(index);
        });

        // Atualiza a imagem da pergunta
        const questionImageElement = document.getElementById('question-image');
        questionImageElement.src = questionImages[currentQuestionIndex];
    } else {
        clearInterval(countdownInterval);

        // Exibe a tela de resultado
        resultScreen.style.display = 'block';
        document.getElementById('question-container').style.display = 'none';

        // Remove a imagem da tela de resultados
        const questionImageElement = document.getElementById('question-image');
        questionImageElement.style.display = 'none'; // Oculta a imagem

        // Exibe a mensagem com o número de acertos
        const resultMessage = document.createElement('div');
        resultMessage.classList.add('result-message');

        // Mensagem com base no número de acertos
        if (score === 20) {
            resultMessage.textContent = `Parabéns, você é um verdadeiro técnico!!! Acertou ${score} de ${questions.length} questões.`;
        } else if (score >= 13) {
            resultMessage.textContent = `Muito bem!! Acertou ${score} de ${questions.length} questões.`;
        } else {
            resultMessage.textContent = `Você precisa estudar mais!! Acertou ${score} de ${questions.length} questões.`;
        }

        // Adiciona a mensagem ao espaço onde estava a imagem
        const questionImageContainer = document.querySelector('.question-image');
        questionImageContainer.innerHTML = ''; // Limpa o conteúdo anterior
        questionImageContainer.appendChild(resultMessage);

        // Adiciona um botão para voltar ao index.html
        const backButton = document.createElement('button');
        backButton.textContent = 'Reiniciar Quiz';
        backButton.classList.add('answer-btn'); // Aplica a classe de estilização existente
        backButton.style.marginTop = '20px'; // Adiciona um espaçamento entre o texto de resultado e o botão
        backButton.onclick = () => {
            window.location.href = '../index.html'; // Redireciona para o index.html
        };

        // Adiciona o botão à tela de resultado
        resultScreen.appendChild(backButton);
    }
}

function handleAnswer(index) {
    const question = questions[currentQuestionIndex];
    if (index === question.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

startQuiz();