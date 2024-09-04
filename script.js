 // Initialize the array with player names
const arr = ['ST3LiOS', 'IRONMAN_AG', 'D_DEVIL', 'ABHISHEK@04OP', 'STAR_LORD', 'BLASTERBD2'];

document.getElementById('shuffleButton').addEventListener('click', shuffleTeams);

function shuffleTeams() {
    // Initialize TEAM_A as an empty array
    let TEAM_A = [];

    // Loop until TEAM_A has 3 members
    while (TEAM_A.length != 3) {
        // Generate a random index between 0 and 5
        let p = Math.floor(Math.random() * arr.length);

        // Check if the randomly chosen player is not already in TEAM_A
        if (!TEAM_A.includes(arr[p])) {
            // If not, add the player to TEAM_A
            TEAM_A.push(arr[p]);
        }
    }

    // Initialize TEAM_B with members not in TEAM_A
    let TEAM_B = arr.filter(player => !TEAM_A.includes(player));

    // Display TEAM_A in the UI
    const teamAList = document.getElementById('teamAList');
    teamAList.innerHTML = '';
    TEAM_A.forEach(player => {
        let li = document.createElement('li');
        li.textContent = player;
        li.classList.add('list-group-item');
        teamAList.appendChild(li);
    });

    // Display TEAM_B in the UI
    const teamBList = document.getElementById('teamBList');
    teamBList.innerHTML = '';
    TEAM_B.forEach(player => {
        let li = document.createElement('li');
        li.textContent = player;
        li.classList.add('list-group-item');
        teamBList.appendChild(li);
    });
}
