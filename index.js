var myPlayers = 
{
    Player1: "Sub-Zero",
    Player2: "a-Jax",
    Player3: "Johnny Cage"
};

function activatePlayers(selectPlayer)
{
    if (myPlayers.hasOwnProperty(selectPlayer))
    {
        return myPlayers[selectPlayer];
    }
    else
    {
        return "Player Not Found"
    }
}

console.log(activatePlayers("Player3"));