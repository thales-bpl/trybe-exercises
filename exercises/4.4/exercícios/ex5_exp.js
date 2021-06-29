let info = {
    personagem: ['Margarida', 'Tio Patinhas', 'Pato Donald', 'Mickey', 'Pateta'],
    origem: ['Pato Donald', "Christmas on Bear Mountain, Dell's Four Color Comics #178", 'The Adventures of Mickey Mouse', 'Steamboat Willie', "Mickey's Revue"],
    nota: ['Namorada do personagem principal nos quadrinhos do Pato Donald', "O último MacPatinhas", 'Personagem principal', 'Muito amigo do pato rabugento', 'Outro amigo da turma'],
    recorrente: ['Sim', "Sim", 'Sim', 'Sim', 'Sim'],
};

for (let key in info) {
    let listKey = '';
    for (index = 0; index < info[key].length; index += 1) {
        listKey += (info[key][index]);
        if (index < (info[key].length - 2)) {
            listKey += '; ';
        } else if (index < (info[key].length - 1)) {    
            listKey += ' e ';
        } else {
            listKey += '.';
        }
        if ((info[key][index]) === (info[key][info[key].length - index])) {
            listKey = "Todos " + info[key][index] + '.';
        }     
    }  
    console.log(listKey);
}
