interface Domain {
    id: number;
    name: string;
  }

const urls: Domain[]  = [ 

{ id: 1, name: 'acusports.com' },
{ id: 2, name: 'goairforcefalcons.com' },
{ id: 3, name: 'gozips.com' },
{ id: 4, name: 'rolltide.com' },
{ id: 5, name: 'vmikeydets.com' },
{ id: 6, name: 'appstatesports.com' },
{ id: 7, name: 'arizonawildcats.com' },
// { id: 8, name: 'Arkansas at Little Rock Trojans' },
// { id: 9, name: 'Arkansas Razorbacks' },
// { id: 10, name: 'Arkansas State Red Wolves' },
// { id: 11, name: 'Army West Point Black Knights' },
// { id: 12, name: 'Ball State Cardinals' },
// { id: 13, name: 'Big Sky Conference' },
// { id: 14, name: 'Boise State Broncos' },
// { id: 15, name: 'Boston College Eagles' },
// { id: 16, name: 'Bowling Green Falcons' },
// { id: 17, name: 'Bradley Braves' },
// { id: 18, name: 'Brigham Young Cougars' },
// { id: 19, name: 'Brown Bears' },
// { id: 20, name: 'Bucknell Bison' },
// { id: 21, name: 'Buffalo Bulls' },
// { id: 22, name: 'Butler Bulldogs' },
// { id: 23, name: 'Cal Bears' },
// { id: 24, name: 'Cal Poly Mustangs' },
// { id: 25, name: 'Cal State Northridge Matadors' },
// { id: 26, name: 'Central Michigan Chippewas' },
// { id: 27, name: 'Charlotte 49ers' },
// { id: 28, name: 'Cincinnati Bearcats' },
// { id: 29, name: 'Colorado Buffaloes' },
// { id: 30, name: 'Colorado State Rams' },
// { id: 31, name: 'CSU Bakersfield Roadrunners' },
// { id: 32, name: 'Dartmouth Big Green' },
// { id: 33, name: 'Davidson Wildcats' },
// { id: 34, name: 'Delaware Blue Hens' },
// { id: 35, name: 'Drake Bulldogs & Drake Relays' },
// { id: 36, name: 'Drexel Dragons' },
// { id: 37, name: 'Duke Blue Devils' },
// { id: 38, name: 'Eastern Michigan Eagles' },
// { id: 39, name: 'Eastern Washington Eagles' },
// { id: 40, name: 'Elon Phoenix' },
// { id: 41, name: 'Evansville Purple Aces' },
// { id: 42, name: 'Florida Gators' },
// { id: 43, name: 'Florida State Seminoles' },
// { id: 44, name: 'Fresno State Bulldogs' },
// { id: 45, name: 'Georgia Bulldogs' },
// { id: 46, name: 'Georgia Southern Eagles' },
// { id: 47, name: 'Gonzaga Bulldogs' },
// { id: 48, name: 'Hawaii Rainbow Warriors & Rainbow Wahine' },
// { id: 49, name: 'Houston Cougars' },
// { id: 50, name: 'Idaho State Bengals' },
// { id: 51, name: 'Idaho Vandals' },
// { id: 52, name: 'Illinois Fighting Illini' },
// { id: 53, name: 'Illinois State Redbirds' },
// { id: 54, name: 'Indiana Hoosiers' },
// { id: 55, name: 'Iowa Hawkeyes' },
// { id: 56, name: 'Iowa State Cyclones' },
// { id: 57, name: 'James Madison Dukes' },
// { id: 58, name: 'Kansas Jayhawks' },
// { id: 59, name: 'Kansas State Wildcats' },
// { id: 60, name: 'Lehigh Mountain Hawks' },
// { id: 61, name: 'Long Beach State' },
// { id: 62, name: 'Louisiana at Monroe Warhawks' },
// { id: 63, name: 'Louisiana Ragin’ Cajuns' },
// { id: 64, name: 'Louisiana Tech Bulldogs' },
// { id: 65, name: 'Louisville Arena Sports and Entertainment' },
// { id: 66, name: 'Louisville Cardinals' },
// { id: 67, name: 'Loyola University Chicago Ramblers' },
// { id: 68, name: 'Marquette Golden Eagles' },
// { id: 69, name: 'Marshall Thundering Herd' },
// { id: 70, name: 'Massachusetts Amherst Minutemen' },
// { id: 71, name: 'Memphis Tigers' },
// { id: 72, name: 'Michigan Wolverines' },
// { id: 73, name: 'Middle Tennessee Blue Raiders' },
// { id: 74, name: 'Minnesota Golden Gophers' },
// { id: 75, name: 'Mississippi State Bulldogs' },
// { id: 76, name: 'Missouri State Bears' },
// { id: 77, name: 'Missouri Tigers' },
// { id: 78, name: 'Montana Grizzlies' },
// { id: 79, name: 'Montana State Bobcats' },
// { id: 80, name: 'NC State Wolfpack' },
// { id: 81, name: 'Nebraska Omaha Mavericks' },
// { id: 82, name: 'Nevada Wolf Pack' },
// { id: 83, name: 'New Hampshire Wildcats' },
// { id: 84, name: 'New Mexico State Aggies' },
// { id: 85, name: 'North Carolina Tar Heels' },
// { id: 86, name: 'North Dakota State Bison' },
// { id: 87, name: 'North Texas Mean Green' },
// { id: 88, name: 'Northern Arizona Lumberjacks' },
// { id: 89, name: 'Northern Illinois Huskies' },
// { id: 90, name: 'Northern Iowa Panthers' },
// { id: 91, name: 'Northern Kentucky Norse' },
// { id: 92, name: 'Northwestern Wildcats' },
// { id: 93, name: 'Ohio Bobcats' },
// { id: 94, name: 'Ohio State Buckeyes' },
// { id: 95, name: 'Ohio Valley Conference' },
// { id: 96, name: 'Oklahoma Sooners' },
// { id: 97, name: 'Oklahoma State Cowboys' },
// { id: 98, name: 'Ole Miss Rebels' },
// { id: 99, name: 'Oregon Ducks' },
// { id: 100, name: 'Oregon State Beavers' },
// { id: 101, name: 'Penn State Nittany Lions' },
// { id: 102, name: 'Pinnacle Bank Arena Sports Properties' },
// { id: 103, name: 'Princeton Tigers' },
// { id: 104, name: 'Providence Friars' },
// { id: 105, name: 'Providence Venues & Sports Properties' },
// { id: 106, name: 'Purdue Boilermakers' },
// { id: 107, name: 'Purdue Fort Wayne Mastodons' },
// { id: 108, name: 'Allstate Red River Rivalry' },
// { id: 109, name: 'Rhode Island Rams' },
// { id: 110, name: 'Rice Owls' },
// { id: 111, name: 'Rose Bowl Stadium' },
// { id: 112, name: 'Rutgers Scarlet Knights' },
// { id: 113, name: 'Saint Louis Billikens' },
// { id: 114, name: 'Saint Mary’s Gaels' },
// { id: 115, name: 'Seton Hall Pirates' },
// { id: 116, name: 'SMU Mustangs' },
// { id: 117, name: 'South Carolina Gamecocks' },
// { id: 118, name: 'South Dakota Coyotes' },
// { id: 119, name: 'South Dakota State Jackrabbits' },
// { id: 120, name: 'Southern Illinois Salukis' },
// { id: 121, name: 'Southern Miss Golden Eagles' },
// { id: 122, name: 'St. Cloud State Huskies' },
// { id: 123, name: 'St. John’s Red Storm' },
// { id: 124, name: 'St. Thomas Tommies' },
// { id: 125, name: 'Stanford Cardinal' },
// { id: 126, name: 'Stephen F. Austin Lumberjacks' },
// { id: 127, name: 'Syracuse Orange' },
// { id: 128, name: 'TCU Horned Frogs' },
// { id: 129, name: 'Temple Owls' },
// { id: 130, name: 'Tennessee Volunteers' },
// { id: 131, name: 'Texas A&M Aggies' },
// { id: 132, name: 'Texas Longhorns' },
// { id: 133, name: 'Texas State Bobcats' },
// { id: 134, name: 'Texas Tech Red Raiders' },
// { id: 135, name: 'Toledo Rockets' },
// { id: 136, name: 'Tulane Green Wave' },
// { id: 137, name: 'Tulsa Golden Hurricane' },
// { id: 138, name: 'UAB Blazers' },
// { id: 139, name: 'UC Davis Aggies' },
// { id: 140, name: 'UC Irvine Anteaters' },
// { id: 141, name: 'UC Riverside Highlanders' },
// { id: 142, name: 'UCLA Bruins' },
// { id: 143, name: 'UConn Huskies' },
// { id: 144, name: 'UNC Asheville Bulldogs' },
// { id: 145, name: 'UNC Greensboro Spartans' },
// { id: 146, name: 'UNLV Rebels' },
// { id: 147, name: 'USA Baseball' },
// { id: 148, name: 'UT Arlington Mavericks' },
// { id: 149, name: 'UT Chattanooga Mocs' },
// { id: 150, name: 'Utah State Aggies' },
// { id: 151, name: 'Utah Utes' },
// { id: 152, name: 'Vanderbilt Commodores' },
// { id: 153, name: 'VCU Rams' },
// { id: 154, name: 'Vermont Catamounts' },
// { id: 155, name: 'Virginia Tech Hokies' },
// { id: 156, name: 'Wake Forest Demon Deacons' },
// { id: 157, name: 'Washington Huskies' },
// { id: 158, name: 'Washington State Cougars' },
// { id: 159, name: 'Weber State Wildcats' },
// { id: 160, name: 'West Virginia University Mountaineers' },
// { id: 161, name: 'Western Kentucky Hilltoppers' },
// { id: 162, name: 'Wisconsin Badgers' },
// { id: 163, name: 'Wisconsin-Milwaukee Panthers' },
// { id: 164, name: 'Wyoming Cowboys' },
// { id: 165, name: 'Xavier Musketeer' },

]

export default urls;