namespace casting { 
  let idade: any = 25;
  (idade as number).toFixed();


  //conversao de tipo

  let nome: string = 35 as unknown as string
  console.log(typeof nome)

}
