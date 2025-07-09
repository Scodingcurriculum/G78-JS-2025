let votes = {
        Politician1: 0,
        Politician2: 0,
        Politician3: 0,
        Politician4: 0
    };

    function submitVote() {
        const voteSelection = document.getElementById("vote").value;

        if (voteSelection === "") {
            alert("Please select a politician to vote for.");
        } else {
            votes[voteSelection]++;
            displayResults();
        }
    }

    function calculatePercentages() {
        const totalVotes = votes.Politician1 + votes.Politician2 + votes.Politician3 + votes.Politician4;
        return {
            Politician1: (votes.Politician1 / totalVotes) * 100,
            Politician2: (votes.Politician2 / totalVotes) * 100,
            Politician3: (votes.Politician3 / totalVotes) * 100,
            Politician4: (votes.Politician4 / totalVotes) * 100
        };
    }

    function displayResults() {
        document.getElementById("results").style.display = "block";
        const percentages = calculatePercentages();

        document.getElementById("politician1-bar").style.width = percentages.Politician1 + "%";
        document.getElementById("politician2-bar").style.width = percentages.Politician2 + "%";
        document.getElementById("politician3-bar").style.width = percentages.Politician3 + "%";
        document.getElementById("politician4-bar").style.width = percentages.Politician4 + "%";

        document.getElementById("politician1-bar").textContent = "Politician1: " + Math.round(percentages.Politician1) + "%";
        document.getElementById("politician2-bar").textContent = "Politician2: " + Math.round(percentages.Politician2) + "%";
        document.getElementById("politician3-bar").textContent = "Politician3: " + Math.round(percentages.Politician3) + "%";
        document.getElementById("politician4-bar").textContent = "Politician4: " + Math.round(percentages.Politician4) + "%";

        findMaxMin(); //Additional
    }

//Additional activity   
function findMaxMin() {
        let maxVotePolitician = '';
        let minVotePolitician = '';
        let maxVotes = -1;
        let minVotes = Infinity;

        for (const politician in votes) {
            if (votes[politician] > maxVotes) {
                maxVotes = votes[politician];
                maxVotePolitician = politician;
            }
            if (votes[politician] < minVotes) {
                minVotes = votes[politician];
                minVotePolitician = politician;
            }
        }

        const maxMinResult = `<p><strong>Most Voted: ${maxVotePolitician} with ${maxVotes} votes</strong></p>
                              <p><strong>Least Voted: ${minVotePolitician} with ${minVotes} votes</strong></p>`;
        document.getElementById("max-min").innerHTML = maxMinResult;
    }