 // Initialize the array with player names, including Pratham and AnantLuftWaffe
const arr = ['ST3LiOS', 'IRONMAN_AG', 'D_DEVIL', 'ABHISHEK@04', 'STAR_LORD', 'BLASTERBD2', 'Pratham', 'AnantLuftWaffe'];

document.getElementById('shuffleButton').addEventListener('click', shuffleTeams);

function shuffleTeams() {
    let TEAM_A = [];
    let TEAM_B = [];

    // Ensure that either ST3LiOS and STAR_LORD are in the same team or STAR_LORD and BLASTERBD2 are in the same team.
    while (true) {
        TEAM_A = [];
        
        // Randomly assign players to TEAM_A until it has 4 members (adjusted for 8 total players)
        while (TEAM_A.length < 4) {
            let p = Math.floor(Math.random() * arr.length);
            if (!TEAM_A.includes(arr[p])) {
                TEAM_A.push(arr[p]);
            }
        }
        
        // Assign the remaining players to TEAM_B
        TEAM_B = arr.filter(player => !TEAM_A.includes(player));
        
        // Check if the condition is met
        if ((TEAM_A.includes('ST3LiOS') && TEAM_A.includes('STAR_LORD')) || 
            (TEAM_A.includes('STAR_LORD') && TEAM_A.includes('BLASTERBD2'))) {
            break; // Exit the loop if the condition is met
        }
    }

    // Display TEAM_A in the UI one by one
    const teamAList = document.getElementById('teamAList');
    teamAList.innerHTML = '';
    TEAM_A.forEach((player, index) => {
        setTimeout(() => {
            let li = document.createElement('li');
            li.textContent = player;
            li.classList.add('list-group-item');
            teamAList.appendChild(li);
        }, index * 500); // Delay each item by 500ms multiplied by its index
    });

    // Display TEAM_B in the UI one by one
    const teamBList = document.getElementById('teamBList');
    teamBList.innerHTML = '';
    TEAM_B.forEach((player, index) => {
        setTimeout(() => {
            let li = document.createElement('li');
            li.textContent = player;
            li.classList.add('list-group-item');
            teamBList.appendChild(li);
        }, (TEAM_A.length + index) * 500); // Delay each item by 500ms after TEAM_A items
    });
}
