const team ={
    _players:[
        {firstName:'bebo',lastName:'sebo',age:0.5}
    ],
    _games:[
        {opponent:'malaXalo',teamPoints:98,opponentPoints:47}
    ],
    addPlayer(newFirstName,newLastName,newAge){
        let player = { firstName: newFirstName,lastName:newLastName,age:newAge};
        this._players.push(player)
    },
    addGame(newOpponent,newTeamPoints,newOpponentPoints){
        let game = {opponent:newOpponent,teamPoints:newTeamPoints,opponentPoints:newOpponentPoints}
        this._games.push(game)
    }
}
team.addGame('semo',4,3)
team.addPlayer('rexo','sexo',4)
console.log(team);