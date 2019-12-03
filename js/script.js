// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
				{
					clue: "Tipo de entrevista en la cual el reclutador realiza preguntas abiertas al candidato, pero siguiendo una guía para profundizar en los aspectos relevantes.",
					answer: "mixta",
					position: 3,
					orientation: "across",
					startx: 10,
					starty: 3
				},
				{
					clue: "Fase de la entrevista en la cual es necesario tocar puntos como experiencias de trabajo, estudios, entorno familia, intereses, méritos y limitantes personales.",
					answer: "desarrollo",
					position: 5,
					orientation: "down",
					startx: 8,
					starty: 6
				},
				{
					clue: "Tipo de entrevista que trata de reconocer las habilidades y aptitudes de los candidatos para su posterior adaptación al puesto de trabajo.",
					answer: "competencias",
					position: 6,
					orientation: "across",
					startx: 4,
					starty: 7
				},
				{
					clue: "Fase de la entrevista en la cual se busca reducir la ansiedad a través de una charla breve y no controversial.",
					answer: "rapport",
					position: 10,
					orientation: "across",
					startx: 4,
					starty: 15
				},
				{
					clue: "Tipo de entrevista en la cual un grupo de entrevistadores pertenecientes a la empresa, realizan la entrevista al mismo tiempo, a un único candidato.",
					answer: "panel",
					position: 9,
					orientation: "across",
					startx: 13,
					starty: 14
				},
			 	{
					clue: "Fase de la entrevista en la cual se abordan las expectativas del trabajo, porqué se interesó en la organización y cuál es su ocupación actual, entre otros temas.",
					answer: "apertura",
					position: 7,
					orientation: "down",
					startx: 14,
					starty: 7
				},
				{
					clue: "Tipo de entrevista un tanto controversial para algunos, donde las preguntas suelen ser bastante inesperadas a fin de sacar al candidato de su zona de confort.",
					answer: "millennial",
					position: 3,
					orientation: "down",
					startx: 10,
					starty: 3
				},
				{
					clue: "Tipo de entrevista que no deja margen a la improvisación, donde todo está programado y estudiado, incluyendo la secuencia de preguntas, tono de conversación, etc.",
					answer: "estructurada",
					position: 2,
					orientation: "down",
					startx: 4,
					starty: 2
				},
				{
					clue: "Tipo de entrevista en la cual el reclutador improvisa sin seguir ningún guion, lo cual permite que el candidato exponga sus capacidades comunicativas.",
					answer: "libre",
					position: 1,
					orientation: "down",
					startx: 6,
					starty: 1
				},
				{
					clue: "Fase de la entrevista en la cual es importante agradecer por la información, permitir que el candidato haga preguntas adicionales e informar cuándo y cómo se le informará el siguiente paso del proceso.",
					answer: "cierre",
					position: 4,
					orientation: "across",
					startx: 1,
					starty: 5
				},
				{
					clue: "Tipo de entrevista que busca evaluar la capacidad de reacción del candidato ante situaciones de estrés.",
					answer: "tension",
					position: 8,
					orientation: "across",
					startx: 14,
					starty: 11
				}
			]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
