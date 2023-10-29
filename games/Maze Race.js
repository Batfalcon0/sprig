/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started
*/

const player = "p"
const block = "b"
const player2 = "o"
const goala = "g"
const goalb = "h"
const cement = "c"
const goalp1 = "1"
const goalp2 = "2"
const box1 = "w"
const box2 = "z"
const goalpb1 = "3"
const goalpb2 = "4"
setLegend(
  [ player, bitmap`
...D4D4DD4DDD...
..DDDDDDDDDDDD..
..D4DDD4DD4DD4..
..DDDDDDDDDDDD..
..D4D4DDD4DD4D..
...DDDDD4DDDD...
......CCCC......
......CCCC......
......CCCC......
......CCCC......
......CCCC......
.....CCCCCC.....
...CCCCCCCCCC...
..CCCCCCCCCCCC..
..CCCCCCCCCCCC..
................` ],
  [ block, bitmap`
00000L00000L0000
00000L00000L0000
LLLLLLLLLLLLLLLL
00L00000L00000L0
00L00000L00000L0
LLLLLLLLLLLLLLLL
00000L00000L0000
00000L00000L0000
LLLLLLLLLLLLLLLL
00L00000L00000L0
00L00000L00000L0
LLLLLLLLLLLLLLLL
00000L00000L0000
00000L00000L0000
LLLLLLLLLLLLLLLL
00L00000L00000L0`],
  [ player2, bitmap`
................
................
................
...000..........
..02220.........
..022220........
..022220........
.0222220000.....
022222222220....
0222222222220...
02222222222220..
022220222222220.
022020222022220.
.02020202020220.
..000000000000..
................` ],
   [ goala, bitmap` 
33..............
333.............
.333............
..333...........
...333..........
....333.........
.....333........
......333.......
.......333......
........333.....
.........333....
..........333...
...........333..
............333.
.............333
..............33`],
  [goalb, bitmap`
..............33
.............333
............333.
...........333..
..........333...
.........333....
........333.....
.......333......
......333.......
.....333........
....333.........
...333..........
..333...........
.333............
333.............
33..............`],
  [cement, bitmap`
11111L111L111111
11L1111111111L11
111111L111111111
111L11111L1L1111
11111L11111111L1
11L11LL1L1111111
111L111L1111111L
111LL11L1L1L1111
11L111111L1LL111
1111L1L111L1L11L
1111111111L1111L
1111111111111111
111L11LL1LL11LL1
11L111LLL1111111
111111L111111111
11111111111L1111`],
  [goalp1, bitmap`
0002220002220000
0002220002220000
0002220002220000
2220002220002222
2220002220002222
2220002220002222
0002220002220000
0002220002220000
0002220002220000
2220002220002222
2220002220002222
2220002220002222
0002220002220000
0002220002220000
0002220002220000
0002220002220000`],
  [goalp2, bitmap`
................
2220002220002222
2220002220002222
2220002220002222
0002220002220000
0002220002220000
0002220002220000
2220002220002222
2220002220002222
2220002220002222
0002220002220000
0002220002220000
0002220002220000
2220002220002222
2220002220002222
2220002220002222
2220002220002222`],
  [box1, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLL10000001LLLL
LLLL01000010LLLL
LLLL00100100LLLL
LLLL00011000LLLL
LLLL00011000LLLL
LLLL00100100LLLL
LLLL01000010LLLL
LLLL10000001LLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [box2, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
00002LLLLLL20000
0000L2LLLL2L0000
0000LL2LL2LL0000
0000LLL22LLL0000
0000LLL22LLL0000
0000LL2LL2LL0000
0000L2LLLL2L0000
00002LLLLLL20000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [goalpb1, bitmap`
0000000000000000
000LLLL000000000
000LLLL0110LLLL0
000LLLL0110LLLL0
000LLLL0110LLLL0
000LLLL000000000
0000000000000000
011000LLLLL00000
011000LLLLL01110
000000LLLLL01110
000000LLLLL01110
011110LLLLL01110
0111100000001110
0111100000001110
0111100000000000
0000000000000000`],
  [goalpb2, bitmap`
1111111111111111
111LLLL110000011
111LLLL110000011
111LLLL110000011
111LLLL111111111
111LLLL1111LL111
11111111111LL111
11111111011LL111
11111111111LL111
10011LLLL1111111
10011LLLL1000011
10011LLLL1000011
10011LLLL1000011
10011LLLL1000011
1111111111000011
1111111111111111`]
  
)
setBackground(cement)

setSolids(
  [block,
player,
  player2,
  box1,
  box2])

setPushables({
  [ player ]: [ box1 ],
  [ player2 ]: [ box2 ]  
})
let level = 0
const levels = [
  map`
...........bb1hghgbo
.....bbbbb.bbbbbbhb.
.bgbhghghg.bb.......
.bhbgbbbbb.bb.bbbbbb
.bwghgh3bb.bb.bbbbbb
.ghbbbbbbb.bb.......
.bghghbbbghbbbbbbbb.
.bbbbbbbbhgbbbghghb.
.......bb.bbbbbbbgh.
bbbbbb.bb.bb4hghhzb.
bbbbbb.bb.bbbbbgbgb.
.......bb.ghghghbhb.
.bgbbbbbb.bbbbb.....
pbhghg2bb...........`
]

setMap(levels[level])


onInput("s", () => {
  getFirst(player).y += 1})
onInput("w", () => {
  getFirst(player).y -= 1})
onInput("a", () => {
  getFirst(player).x -= 1})
onInput("d", () => {
  getFirst(player).x += 1})

onInput("k", () => {
  getFirst(player2).y += 1})
onInput("i", () => {
  getFirst(player2).y -= 1})
onInput("j", () => {
  getFirst(player2).x -= 1})
onInput("l", () => {
  getFirst(player2).x += 1})

afterInput(() => {
   const numberCovered = tilesWith(goalp1, player).length;
  const targetNumber = tilesWith(goalp1).length;
  
   const numberCovered3 = tilesWith(goalpb1, box1).length;
  const targetNumber3 = tilesWith(goalpb1).length;
  if (numberCovered === targetNumber
     && numberCovered3 === targetNumber3) {
    addText("Player 1 Wins", { 
  x: 5,
  y: 4,
  color: color`2`
})
  
  }
   const numberCovered2 = tilesWith(goalp2, player2).length;
  const targetNumber2 = tilesWith(goalp2).length;
  
 const numberCovered4 = tilesWith(goalpb2, box2).length;
  const targetNumber4 = tilesWith(goalpb2).length;
  if (numberCovered2 === targetNumber2
     && numberCovered4 === targetNumber4) {
    addText("Player 2 Wins", { 
  x: 2,
  y: 12,
  color: color`2`
})
  
  }
});
