async function sendCrazyFrogSong(scriptText){
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)

    const lines = scriptText.split(' ');
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line + '\n');
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 300);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

sendCrazyFrogSong(`
Ring ding ding daa baa

Baa aramba baa bom baa barooumba

Wh-wha-what's going on-on? Ding, ding This is the Crazy Frog Ding, ding Bem, bem! Ring ding ding ding ding ding Ring ding ding ding bem bem bem Ring ding ding ding ding ding Ring ding ding ding baa baa Ring ding ding ding ding ding Ring ding ding ding bem bem bem Ring ding ding ding ding ding

This is the Crazy Frog Breakdown! Ding, ding Br-br-break it, br-break it Dum dum dumda dum dum dum Dum dum dumda dum dum dum Dum dum dumda dum dum dum Bem, bem!

Dum dum dumda dum dum dum Dum dum dumda dum dum dum Dum dum dumda dum dum dum This is the Crazy Frog A ram me ma bra ba bra bra rim bran Dran drra ma mababa baabeeeaaaaaaa! Ding, ding This is the Crazy Frog Ding, ding Da, da Ring ding ding ding ding ding Ring ding ding ding bem bem bem Ring ding ding ding ding ding Ring ding ding ding baa baa Ring ding ding ding ding ding Ring ding ding ding bem bem bem Ring ding ding ding ding ding This is the Crazy Frog Ding, ding Br-br-break it, br-break it Dum dum dumda dum dum dum Dum dum dumda dum dum dum Dum dum dumda dum dum dum

Bem, bem! Dum dum dumda dum dum dum Dum dum dumda dum dum dum Dum dum dumda dum dum dum This is the Crazy Frog Bem, bem!
`).then(e => console.log(`${e} Mensagens enviadas`).catch(console.error));