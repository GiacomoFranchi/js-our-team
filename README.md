# ESERCIZIO
## Descrizione:
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

**MILESTONE 0:**
Creare l’array di oggetti con le informazioni fornite.
**MILESTONE 1:**
Stampare su console le informazioni di nome, ruolo e la stringa della foto
**MILESTONE 2:**
Stampare le stesse informazioni su DOM sottoforma di stringhe
**BONUS 1:**
Trasformare la stringa foto in una immagine effettiva
**BONUS 2:**
Organizzare i singoli membri in card/schede.

## Svolgimento
**Raccolta dati:**
1. Creare un array di objects contenente nome ruolo e immagine di ogni membro del team
2. creare una variabile row collegata alla classe row in HTML

**Logica del programma:**
1. Creare un ciclo for con i = 0 e i < della lunghezza dell'array.
2. Associare alla variabile curMember gli objects contenuti nell'array
3. Associare a teamMemb la srtinga contenente la struttura HTML della card che vogliamo ottenere.
4. Associare a:
    - img la stinga di contenente il link dell'immagine "imgMember"
    - h5 la stringa contenente il nome "nome"
    - p la stinga contenente il ruolo "ruolo"

## Output
Associare a row in HTML la variabile teemMemb così da visualizzare le card in pagina