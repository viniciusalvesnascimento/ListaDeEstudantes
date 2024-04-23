let students = [
  
    {
      name: "Vinicius",
      NotaPrimeiraProva: 65, 
      NotaSegundaProva: 85 ,
    },
  
    {
      name: "Joyce",
      NotaPrimeiraProva: 75, 
      NotaSegundaProva: 80,
    },
  
    {
      name: "Aline" ,
      NotaPrimeiraProva: 50,
      NotaSegundaProva: 44,
    },
  
    {
      name: "Bruno",
      NotaPrimeiraProva: 45,
      NotaSegundaProva: 25,
    },
  
    {
      name: "Jose", 
      NotaPrimeiraProva: 57, 
      NotaSegundaProva: 59
    },
  ]
  
  let mediaApproval = 80
  function media(aluno) {
    return ` 
    ${aluno.NotaPrimeiraProva + aluno.NotaSegundaProva / 2}
    ` 
  }
  
  
  for(let aluno of students) {
    let message = media(aluno) 
    alert (message >= mediaApproval?`Parabéns ${aluno.name}, você foi aprovado(a) no concurso com uma média de\n ${message}VOCÊ É FERA`
    :`Não foi dessa vez ${aluno.name}, mais continue tentando.\nLEMBRE-SE DESISTIR NÃO É UMA OPÇÃO!`)
  }
  
       
      