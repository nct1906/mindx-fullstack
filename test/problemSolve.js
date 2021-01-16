//1
let arr1 = [1, 2, "a"]
let arr2 = [1, 2, '5', "b", 'a']
const mergeArr = function (arr1, arr2) {
    let newArr = arr1
    for (let item of arr2) {
        if (arr1.includes(item)) {
            continue
        } else {
            newArr.push(item)
        }
    }
    return newArr
}
console.log(mergeArr(arr1, arr2))

//2
class Team {
    constructor(name, points, GD) {
        this.name = name
        this.points = points
        this.GD = GD
        this.rank = 1
    }
}
const arsenal = new Team('Arsenal', 88, 39)
const chelsea = new Team('Chelsea', 75, 39)
const manU = new Team('Manchester United', 88, 55)
const liverpool = new Team('Liverpool', 88, 39)
const teamList = [arsenal, chelsea, manU, liverpool]
const sortTeam = function (list) {
    for (let team of list) {
        for (let l = 0; l < list.length; l++) {
            if (team.name !== list[l].name && team.points < list[l].points) {
                team.rank = team.rank + 1
            } else if (team.name !== list[l].name && team.points === list[l].points) {
                if (team.GD > list[l].GD) {
                    team.rank = team.rank + 1
                } else if (team.GD === list[l].GD) {
                    team.rank = team.name[0] < list[l].name ? team.rank : team.rank + 1
                }
            }
        }
        console.log(team.rank, team.points, team.GD, team.name)
    }
}
sortTeam(teamList)